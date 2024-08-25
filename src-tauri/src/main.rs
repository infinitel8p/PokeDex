// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[macro_use]
extern crate maplit;

mod weakness_helpers;

use reqwest::get;
use serde_json::{Value, json};
use weakness_helpers::calculate_weaknesses;
use std::collections::HashMap;
use std::fs::File;
use std::io::{BufRead, BufReader};

fn load_translations() -> HashMap<String, String> {
    let file = File::open("assets/translations.csv").expect("Cannot open CSV file");
    let reader = BufReader::new(file);
    let mut translations = HashMap::new();

    for line in reader.lines() {
        if let Ok(entry) = line {
            let fields: Vec<&str> = entry.split(',').collect();
            let english_name = fields[1].to_string();
            
            // Add translations for all languages to the HashMap
            for name in &fields[1..] {
                translations.insert(name.trim().to_lowercase(), english_name.clone());
            }
        }
    }

    translations
}

fn translate_to_english(name: &str, translations: &HashMap<String, String>) -> String {
    let lowercase_name = name.to_lowercase();
    if let Some(english_name) = translations.get(&lowercase_name) {
        english_name.clone()
    } else {
        name.to_string()  // If the name is already in English or not found, return it as is
    }
}

// Fetch input from PokéAPI and include weaknesses
#[tauri::command]
async fn search_pokemon(name: &str) -> Result<String, String> {
    let translations = load_translations();
    let english_name = translate_to_english(name, &translations);
    
    let url = format!("https://pokeapi.co/api/v2/pokemon/{}", english_name.to_lowercase());

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
                Err(format!("Error: Pokémon {} not found!", english_name))
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