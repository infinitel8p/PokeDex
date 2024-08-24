// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use reqwest::get;
use serde_json::{Value, json};
use std::collections::HashMap;

#[macro_use]
extern crate maplit;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("{} does not exist yet!", name)
}

// Function to fetch type effectiveness
async fn fetch_type_data(url: &str) -> Result<Value, String> {
    match get(url).await {
        Ok(response) => {
            if response.status().is_success() {
                let json: Value = response.json().await.unwrap();
                Ok(json)
            } else {
                Err("Failed to fetch type data".to_string())
            }
        }
        Err(_) => Err("Failed to connect to PokéAPI".to_string()),
    }
}

// Function to calculate weaknesses based on Pokémon types
async fn calculate_weaknesses(types: &Vec<Value>) -> Result<HashMap<String, Vec<HashMap<String, String>>>, String> {
    let mut weaknesses: HashMap<String, Vec<HashMap<String, String>>> = HashMap::new();

    for pokemon_type in types {
        let type_name = pokemon_type["type"]["name"].as_str().unwrap();
        let type_url = pokemon_type["type"]["url"].as_str().unwrap();
        let type_id = type_url.split('/').filter(|&s| !s.is_empty()).last().unwrap(); // Extract the type ID

        let icon_url = format!("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/{}.png", type_id);

        if let Ok(type_data) = fetch_type_data(type_url).await {
            let damage_relations = &type_data["damage_relations"];

            // Group by 2x effectiveness
            if let Some(double_damage_from) = damage_relations["double_damage_from"].as_array() {
                for damage_type in double_damage_from {
                    let type_name = damage_type["name"].as_str().unwrap().to_string();
                    let type_id = damage_type["url"].as_str().unwrap().split('/').filter(|&s| !s.is_empty()).last().unwrap();
                    let icon_url = format!("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/{}.png", type_id);
                    weaknesses.entry("2x".to_string()).or_default().push(
                        hashmap!{
                            "type".to_string() => type_name,
                            "icon".to_string() => icon_url
                        }
                    );
                }
            }

            // Group by 0.5x effectiveness
            if let Some(half_damage_from) = damage_relations["half_damage_from"].as_array() {
                for damage_type in half_damage_from {
                    let type_name = damage_type["name"].as_str().unwrap().to_string();
                    let type_id = damage_type["url"].as_str().unwrap().split('/').filter(|&s| !s.is_empty()).last().unwrap();
                    let icon_url = format!("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/{}.png", type_id);
                    weaknesses.entry("0.5x".to_string()).or_default().push(
                        hashmap!{
                            "type".to_string() => type_name,
                            "icon".to_string() => icon_url
                        }
                    );
                }
            }

            // Group by 0x effectiveness
            if let Some(no_damage_from) = damage_relations["no_damage_from"].as_array() {
                for damage_type in no_damage_from {
                    let type_name = damage_type["name"].as_str().unwrap().to_string();
                    let type_id = damage_type["url"].as_str().unwrap().split('/').filter(|&s| !s.is_empty()).last().unwrap();
                    let icon_url = format!("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/{}.png", type_id);
                    weaknesses.entry("0x".to_string()).or_default().push(
                        hashmap!{
                            "type".to_string() => type_name,
                            "icon".to_string() => icon_url
                        }
                    );
                }
            }
        } else {
            return Err("Failed to fetch type data".to_string());
        }
    }

    Ok(weaknesses)
}

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
        .invoke_handler(tauri::generate_handler![greet, search_pokemon])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
