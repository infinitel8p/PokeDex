// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use reqwest::get;
use serde_json::Value; 

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("{} does not exist yet!", name)
}

// fetch input from pokeapi
#[tauri::command]
async fn search_pokemon(name: &str) -> Result<String, String> {
    let url = format!("https://pokeapi.co/api/v2/pokemon/{}", name.to_lowercase());

    match get(&url).await {
        Ok(response) => {
            if response.status().is_success() {
                let json: Value = response.json().await.unwrap();
                Ok(json.to_string())
            } else {
                Err(format!("Error: Pokémon {} not found!", name))
            }
        }
        Err(_) => Err("Failed to connect to PokéAPI".to_string()),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, search_pokemon])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
