// PokéAPI client with disk-persistent caching

use reqwest::Client;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::PathBuf;
use std::sync::OnceLock;
use tauri::{AppHandle, Manager};
use tokio::sync::Mutex;

const POKEAPI_BASE: &str = "https://pokeapi.co/api/v2";
const SPRITE_BASE: &str =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield";
const CACHE_FILE: &str = "pokeapi-cache.json";
const HTTP_TIMEOUT_SECS: u64 = 10;
const CACHE_SCHEMA_VERSION: u32 = 3;

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct NamedRef {
    pub name: String,
    pub url: String,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct UrlRef {
    pub url: String,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct TypeSlot {
    pub slot: u32,
    #[serde(rename = "type")]
    pub type_: NamedRef,
}

#[derive(Serialize, Deserialize, Clone, Debug, Default)]
pub struct Cries {
    pub latest: Option<String>,
    pub legacy: Option<String>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct StatEntry {
    pub base_stat: u32,
    pub stat: NamedRef,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Pokemon {
    pub id: u32,
    pub name: String,
    pub types: Vec<TypeSlot>,
    #[serde(default)]
    pub stats: Vec<StatEntry>,
    pub species: NamedRef,
    #[serde(default)]
    pub sprites: serde_json::Value,
    #[serde(default)]
    pub cries: Cries,
}

// ── Evolution chain types ─────────────────────────────────────────────────

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct LocalizedName {
    pub name: String,
    pub language: NamedRef,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Species {
    pub evolution_chain: UrlRef,
    #[serde(default)]
    pub names: Vec<LocalizedName>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct EvolutionNode {
    pub species: NamedRef,
    #[serde(default)]
    pub evolves_to: Vec<EvolutionNode>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct EvolutionChain {
    pub chain: EvolutionNode,
}

#[derive(Serialize, Clone, Debug)]
pub struct EvolutionEntry {
    pub name: String,
    pub sprite: String,
    pub is_current: bool,
    pub names: Vec<LocalizedName>,
}

#[derive(Serialize, Deserialize, Clone, Debug, Default)]
pub struct DamageRelations {
    pub double_damage_from: Vec<NamedRef>,
    pub half_damage_from: Vec<NamedRef>,
    pub no_damage_from: Vec<NamedRef>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct PokeType {
    pub damage_relations: DamageRelations,
}

#[derive(Serialize)]
pub struct WeaknessEntry {
    #[serde(rename = "type")]
    pub type_: String,
    pub icon: String,
}

// ── Cache layer ──────────────────────────────────────────────────────────────

#[derive(Serialize, Deserialize, Clone)]
struct ApiCache {
    #[serde(default)]
    version: u32,
    #[serde(default)]
    pokemon: HashMap<String, Pokemon>,
    #[serde(default)]
    types: HashMap<String, PokeType>,
    #[serde(default)]
    species: HashMap<String, Species>,
    #[serde(default)]
    evolution_chains: HashMap<String, EvolutionChain>,
}

impl Default for ApiCache {
    fn default() -> Self {
        Self {
            version: CACHE_SCHEMA_VERSION,
            pokemon: HashMap::new(),
            types: HashMap::new(),
            species: HashMap::new(),
            evolution_chains: HashMap::new(),
        }
    }
}

static CACHE: OnceLock<Mutex<ApiCache>> = OnceLock::new();
static CLIENT: OnceLock<Client> = OnceLock::new();
static CACHE_DIR: OnceLock<Option<PathBuf>> = OnceLock::new();

fn http_client() -> &'static Client {
    CLIENT.get_or_init(|| {
        Client::builder()
            .timeout(std::time::Duration::from_secs(HTTP_TIMEOUT_SECS))
            .user_agent("PokeDex/0.2.0 (https://github.com/infinitel8p/PokeDex)")
            .build()
            .expect("Failed to build HTTP client")
    })
}

fn cache_path(app: &AppHandle) -> Option<PathBuf> {
    CACHE_DIR
        .get_or_init(|| {
            let dir = app.path().app_cache_dir().ok()?;
            fs::create_dir_all(&dir).ok()?;
            Some(dir)
        })
        .as_ref()
        .map(|d| d.join(CACHE_FILE))
}

fn load_cache_from_disk(app: &AppHandle) -> ApiCache {
    let loaded: ApiCache = cache_path(app)
        .and_then(|p| fs::read_to_string(p).ok())
        .and_then(|s| serde_json::from_str(&s).ok())
        .unwrap_or_default();
    if loaded.version != CACHE_SCHEMA_VERSION {
        eprintln!(
            "cache schema mismatch (got v{}, want v{}); discarding old entries",
            loaded.version, CACHE_SCHEMA_VERSION
        );
        return ApiCache::default();
    }
    loaded
}

fn save_cache_to_disk(app: &AppHandle, cache: &ApiCache) {
    if let Some(path) = cache_path(app) {
        if let Ok(json) = serde_json::to_string(cache) {
            let _ = fs::write(path, json);
        }
    }
}

async fn cache(app: &AppHandle) -> &'static Mutex<ApiCache> {
    // OnceLock initialization is sync; we do the disk read inside it once.
    CACHE.get_or_init(|| Mutex::new(load_cache_from_disk(app)))
}

pub async fn clear_cache(app: &AppHandle) {
    let lock = cache(app).await;
    let mut c = lock.lock().await;
    c.pokemon.clear();
    c.types.clear();
    c.species.clear();
    c.evolution_chains.clear();
    c.version = CACHE_SCHEMA_VERSION;
    save_cache_to_disk(app, &c);
}

// ── Fetchers ─────────────────────────────────────────────────────────────────

pub async fn get_pokemon(app: &AppHandle, name_or_id: &str) -> Result<Pokemon, String> {
    let key = name_or_id.to_lowercase();
    let lock = cache(app).await;

    // Fast path: cache hit
    {
        let c = lock.lock().await;
        if let Some(p) = c.pokemon.get(&key) {
            return Ok(p.clone());
        }
    }

    // Miss: network fetch
    let url = format!("{}/pokemon/{}", POKEAPI_BASE, key);
    let resp = http_client()
        .get(&url)
        .send()
        .await
        .map_err(|e| format!("network: {}", e))?;
    if !resp.status().is_success() {
        return Err(format!("not_found: {}", key));
    }
    let pokemon: Pokemon = resp
        .json()
        .await
        .map_err(|e| format!("parse: {}", e))?;

    // Write through to cache
    {
        let mut c = lock.lock().await;
        c.pokemon.insert(key, pokemon.clone());
        save_cache_to_disk(app, &c);
    }

    Ok(pokemon)
}

pub async fn get_type(app: &AppHandle, name_or_url: &str) -> Result<PokeType, String> {
    // Accept either bare names ("fire") or full URLs (https://.../type/10/)
    let key = extract_type_key(name_or_url);
    let lock = cache(app).await;

    {
        let c = lock.lock().await;
        if let Some(t) = c.types.get(&key) {
            return Ok(t.clone());
        }
    }

    let url = if name_or_url.starts_with("http") {
        name_or_url.to_string()
    } else {
        format!("{}/type/{}", POKEAPI_BASE, key)
    };
    let resp = http_client()
        .get(&url)
        .send()
        .await
        .map_err(|e| format!("network: {}", e))?;
    if !resp.status().is_success() {
        return Err(format!("type_not_found: {}", key));
    }
    let type_data: PokeType = resp
        .json()
        .await
        .map_err(|e| format!("parse: {}", e))?;

    {
        let mut c = lock.lock().await;
        c.types.insert(key, type_data.clone());
        save_cache_to_disk(app, &c);
    }

    Ok(type_data)
}

fn extract_type_key(name_or_url: &str) -> String {
    if name_or_url.starts_with("http") {
        name_or_url
            .trim_end_matches('/')
            .rsplit('/')
            .next()
            .unwrap_or(name_or_url)
            .to_lowercase()
    } else {
        name_or_url.to_lowercase()
    }
}

fn extract_id_from_url(url: &str) -> Option<String> {
    url.trim_end_matches('/')
        .rsplit('/')
        .next()
        .map(|s| s.to_string())
}

pub async fn get_species(app: &AppHandle, url: &str) -> Result<Species, String> {
    let key = extract_id_from_url(url).unwrap_or_else(|| url.to_string());
    let lock = cache(app).await;

    {
        let c = lock.lock().await;
        if let Some(s) = c.species.get(&key) {
            return Ok(s.clone());
        }
    }

    let resp = http_client()
        .get(url)
        .send()
        .await
        .map_err(|e| format!("network: {}", e))?;
    if !resp.status().is_success() {
        return Err(format!("species_not_found: {}", key));
    }
    let species: Species = resp.json().await.map_err(|e| format!("parse: {}", e))?;

    {
        let mut c = lock.lock().await;
        c.species.insert(key, species.clone());
        save_cache_to_disk(app, &c);
    }

    Ok(species)
}

pub async fn get_evolution_chain(app: &AppHandle, url: &str) -> Result<EvolutionChain, String> {
    let key = extract_id_from_url(url).unwrap_or_else(|| url.to_string());
    let lock = cache(app).await;

    {
        let c = lock.lock().await;
        if let Some(e) = c.evolution_chains.get(&key) {
            return Ok(e.clone());
        }
    }

    let resp = http_client()
        .get(url)
        .send()
        .await
        .map_err(|e| format!("network: {}", e))?;
    if !resp.status().is_success() {
        return Err(format!("chain_not_found: {}", key));
    }
    let chain: EvolutionChain = resp.json().await.map_err(|e| format!("parse: {}", e))?;

    {
        let mut c = lock.lock().await;
        c.evolution_chains.insert(key, chain.clone());
        save_cache_to_disk(app, &c);
    }

    Ok(chain)
}

const POKEMON_SPRITE_BASE: &str =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

pub async fn flatten_chain(
    app: &AppHandle,
    chain: &EvolutionChain,
    current_name: &str,
) -> Vec<EvolutionEntry> {
    let mut out = Vec::new();
    let mut stack: Vec<&EvolutionNode> = vec![&chain.chain];
    let current_lower = current_name.to_lowercase();
    while let Some(node) = stack.pop() {
        for child in node.evolves_to.iter().rev() {
            stack.push(child);
        }
        let id = extract_id_from_url(&node.species.url).unwrap_or_default();
        let names = match get_species(app, &node.species.url).await {
            Ok(species) => species.names,
            Err(e) => {
                eprintln!(
                    "evolution species fetch failed for {}: {}",
                    node.species.name, e
                );
                Vec::new()
            }
        };
        out.push(EvolutionEntry {
            name: node.species.name.clone(),
            sprite: format!("{}/{}.png", POKEMON_SPRITE_BASE, id),
            is_current: node.species.name.to_lowercase() == current_lower,
            names,
        });
    }
    out
}

// ── Weakness computation ─────────────────────────────────────────────────────
// Standard generation-VIII type list with their PokéAPI ids (drives sprite URLs).

const STANDARD_TYPES: &[(&str, u32)] = &[
    ("normal", 1), ("fighting", 2), ("flying", 3), ("poison", 4),
    ("ground", 5), ("rock", 6), ("bug", 7), ("ghost", 8),
    ("steel", 9), ("fire", 10), ("water", 11), ("grass", 12),
    ("electric", 13), ("psychic", 14), ("ice", 15), ("dragon", 16),
    ("dark", 17), ("fairy", 18),
];

/// Combined multiplicative dual-type effectiveness — for each attacker type,
/// multiply the per-defender factor across the defender's types and bucket
/// the result. This fixes the v0.1 bug where Rock would appear in 2× twice
/// for a Fire/Flying Pokémon (should be once, since the *combined* effect is 4×
/// which still buckets as 2×).
pub async fn calculate_weaknesses(
    app: &AppHandle,
    defender_types: &[String],
) -> Result<HashMap<String, Vec<WeaknessEntry>>, String> {
    let mut relations: Vec<DamageRelations> = Vec::with_capacity(defender_types.len());
    for t in defender_types {
        relations.push(get_type(app, t).await?.damage_relations);
    }

    let mut buckets: HashMap<String, Vec<WeaknessEntry>> = HashMap::new();
    buckets.insert("2x".into(), Vec::new());
    buckets.insert("0.5x".into(), Vec::new());
    buckets.insert("0x".into(), Vec::new());

    for (attacker, id) in STANDARD_TYPES {
        let mut factor: f32 = 1.0;
        for rel in &relations {
            if rel.double_damage_from.iter().any(|r| r.name == *attacker) {
                factor *= 2.0;
            } else if rel.half_damage_from.iter().any(|r| r.name == *attacker) {
                factor *= 0.5;
            } else if rel.no_damage_from.iter().any(|r| r.name == *attacker) {
                factor = 0.0;
                break;
            }
        }

        let bucket = if factor == 0.0 {
            "0x"
        } else if factor >= 2.0 {
            "2x"
        } else if factor <= 0.5 {
            "0.5x"
        } else {
            continue;
        };

        let entry = WeaknessEntry {
            type_: (*attacker).to_string(),
            icon: format!("{}/{}.png", SPRITE_BASE, id),
        };
        buckets.get_mut(bucket).expect("bucket exists").push(entry);
    }

    Ok(buckets)
}
