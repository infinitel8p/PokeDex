use std::fs::{self, OpenOptions};
use std::io::Write;
use std::sync::Mutex;
use serde::{Serialize, Deserialize};

#[derive(Default, Serialize, Deserialize)]
struct Pokedex {
    searched_pokemon: Vec<PokemonEntry>,
}

#[derive(Serialize, Deserialize, Clone)]
struct PokemonEntry {
    name: String,
    index: u32,
}

fn save_pokedex(pokedex: &Pokedex) -> Result<(), String> {
    let serialized_data = serde_json::to_string(&pokedex).map_err(|e| e.to_string())?;
    let mut file = OpenOptions::new()
        .write(true)
        .create(true)
        .truncate(true)
        .open("pokedex.json")
        .map_err(|e| e.to_string())?;
    
    file.write_all(serialized_data.as_bytes()).map_err(|e| e.to_string())
}

#[tauri::command]
async fn search_pokemon(name: &str, pokedex: tauri::State<'_, Mutex<Pokedex>>) -> Result<String, String> {
    let translations = load_translations();
    let key = translate_to_key(name, &translations);
    
    let url = format!("https://pokeapi.co/api/v2/pokemon/{}", key);

    match get(&url).await {
        Ok(response) => {
            if response.status().is_success() {
                let json: Value = response.json().await.unwrap();
                let index = json["id"].as_u64().unwrap() as u32;

                let pokemon_entry = PokemonEntry {
                    name: key.clone(),
                    index,
                };

                // Lock the state to modify the Pokedex
                let mut pokedex = pokedex.lock().unwrap();
                pokedex.searched_pokemon.push(pokemon_entry);

                // Save the Pokedex to a file
                if let Err(err) = save_pokedex(&pokedex) {
                    return Err(format!("Failed to save Pokedex: {}", err));
                }

                Ok(json.to_string())
            } else {
                Err(format!("Error: Pokémon with key {} not found!", key))
            }
        }
        Err(_) => Err("Failed to connect to PokéAPI".to_string()),
    }
}
fn load_pokedex() -> Pokedex {
    if let Ok(data) = fs::read_to_string("pokedex.json") {
        if let Ok(pokedex) = serde_json::from_str(&data) {
            return pokedex;
        }
    }
    Pokedex::default()
}

#[tauri::command]
fn get_pokedex(pokedex: tauri::State<'_, Mutex<Pokedex>>) -> Result<String, String> {
    let pokedex = pokedex.lock().unwrap();
    serde_json::to_string(&*pokedex).map_err(|e| e.to_string())
}


fn main() {
    let initial_pokedex = load_pokedex();

    tauri::Builder::default()
        .manage(Mutex::new(initial_pokedex))  // Load the Pokedex state from the JSON file
        .invoke_handler(tauri::generate_handler![close_splashscreen, search_pokemon, get_pokedex])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
