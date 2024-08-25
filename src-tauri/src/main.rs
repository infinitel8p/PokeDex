// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[macro_use]
extern crate maplit;

mod weakness_helpers;

use reqwest::get;
use serde_json::{Value, json};
use weakness_helpers::calculate_weaknesses;

// Fetch input from PokéAPI and include weaknesses
#[tauri::command]
async fn search_pokemon(name: &str) -> Result<String, String> {
    let url = format!("https://pokeapi.co/api/v2/pokemon/{}", name.to_lowercase());

    match get(&url).await {
        Ok(response) => {
            if response.status().is_success() {
                let json: Value = response.json().await.unwrap();
                let types = json["types"].as_array().unwrap();

                // Calculate weaknesses
                let weaknesses = calculate_weaknesses(types).await?;

                // Add weaknesses to the Pokémon data
                let mut result = json.clone();
                result["weaknesses"] = json!(weaknesses);

                Ok(result.to_string())
            } else {
                Err(format!("Error: Pokémon {} not found!", name))
            }
        }
        Err(_) => Err("Failed to connect to PokéAPI".to_string()),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![search_pokemon])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
