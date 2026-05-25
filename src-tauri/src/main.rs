// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod api;

use serde::Serialize;
use std::collections::HashMap;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::sync::OnceLock;
use tauri::{AppHandle, Manager, WebviewWindow};

use api::{
    calculate_weaknesses, flatten_chain, get_evolution_chain, get_pokemon, get_species, Cries,
    EvolutionEntry, Pokemon, Sprites, StatEntry, TypeSlot, WeaknessEntry,
};

static TRANSLATIONS: OnceLock<HashMap<String, String>> = OnceLock::new();

fn load_translations(app: &AppHandle) -> HashMap<String, String> {
    let resource_dir = app
        .path()
        .resource_dir()
        .expect("Could not access resource directory");
    let file_path = resource_dir.join("assets/translations.csv");

    let file = match File::open(&file_path) {
        Ok(f) => f,
        Err(_) => return HashMap::new(),
    };
    let reader = BufReader::new(file);
    let mut translations = HashMap::new();

    for line in reader.lines().flatten() {
        let fields: Vec<&str> = line.split(',').collect();
        if fields.is_empty() {
            continue;
        }
        let key = fields[0].to_string();
        for name in &fields[1..] {
            translations.insert(name.trim().to_lowercase(), key.clone());
        }
    }

    translations
}

fn get_translations(app: &AppHandle) -> &'static HashMap<String, String> {
    TRANSLATIONS.get_or_init(|| load_translations(app))
}

fn translate_to_key(name: &str, translations: &HashMap<String, String>) -> String {
    let lower = name.to_lowercase();
    translations.get(&lower).cloned().unwrap_or(name.to_string())
}

#[derive(Serialize)]
struct SearchResponse<'a> {
    id: u32,
    name: &'a str,
    types: &'a [TypeSlot],
    stats: &'a [StatEntry],
    sprites: &'a Sprites,
    cries: &'a Cries,
    weaknesses: HashMap<String, Vec<WeaknessEntry>>,
    evolution: Vec<EvolutionEntry>,
}

#[tauri::command]
async fn search_pokemon(name: &str, app: AppHandle) -> Result<String, String> {
    let translations = get_translations(&app);
    let key = translate_to_key(name, translations);

    let pokemon: Pokemon = get_pokemon(&app, &key).await.map_err(|e| {
        if e.starts_with("not_found") {
            format!("Error: Pokémon with key {} not found!", key)
        } else if e.starts_with("network") {
            "Failed to connect to PokéAPI".to_string()
        } else {
            e
        }
    })?;

    let defender_types: Vec<String> = pokemon
        .types
        .iter()
        .map(|t| t.type_.name.clone())
        .collect();
    let weaknesses = calculate_weaknesses(&app, &defender_types).await?;

    // Evolution chain — best-effort, failures are non-fatal so a result still renders.
    let evolution = match get_species(&app, &pokemon.species.url).await {
        Ok(species) => match get_evolution_chain(&app, &species.evolution_chain.url).await {
            Ok(chain) => flatten_chain(&chain, &pokemon.name),
            Err(e) => {
                eprintln!("evolution chain fetch failed: {}", e);
                Vec::new()
            }
        },
        Err(e) => {
            eprintln!("species fetch failed: {}", e);
            Vec::new()
        }
    };

    let response = SearchResponse {
        id: pokemon.id,
        name: &pokemon.name,
        types: &pokemon.types,
        stats: &pokemon.stats,
        sprites: &pokemon.sprites,
        cries: &pokemon.cries,
        weaknesses,
        evolution,
    };

    serde_json::to_string(&response).map_err(|e| format!("serialize: {}", e))
}

#[tauri::command]
async fn close_splashscreen(window: WebviewWindow) {
    if let Some(splash) = window.get_webview_window("splashscreen") {
        let _ = splash.close();
    }
    if let Some(main) = window.get_webview_window("main") {
        let _ = main.show();
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_splashscreen, search_pokemon])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
