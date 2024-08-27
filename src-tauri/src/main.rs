// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[macro_use]
extern crate maplit;

mod weakness_helpers;
use tauri::{Manager, Window};
use reqwest::get;
use serde_json::{Value, json};
use weakness_helpers::calculate_weaknesses;
use std::collections::HashMap;
use std::fs::File;
use std::io::{BufRead, BufReader};

use tauri::{api::path::resource_dir, Env};

fn load_translations() -> HashMap<String, String> {
    let context = tauri::generate_context!();
    let package_info = context.package_info();
    let env = Env::default();

    let mut file_path = resource_dir(package_info, &env).expect("Could not access resource directory");
    file_path.push("assets/translations.csv");

    let file = File::open(file_path).expect("Cannot open CSV file");
    let reader = BufReader::new(file);
    let mut translations = HashMap::new();

    for line in reader.lines() {
        if let Ok(entry) = line {
            let fields: Vec<&str> = entry.split(',').collect();
            let key = fields[0].to_string();
            // let english_name = fields[1].to_string();
            
            // Add translations for all languages to the HashMap, mapping them to the key
            for name in &fields[1..] {
                translations.insert(name.trim().to_lowercase(), key.clone());
            }
        }
    }

    translations
}


fn translate_to_key(name: &str, translations: &HashMap<String, String>) -> String {
    let lowercase_name = name.to_lowercase();
    if let Some(key) = translations.get(&lowercase_name) {
        key.clone()
    } else {
        name.to_string()  // If the name is already in English or not found, return it as is
    }
}

#[tauri::command]
async fn search_pokemon(name: &str) -> Result<String, String> {
    let translations = load_translations();
    let key = translate_to_key(name, &translations);
    
    let url = format!("https://pokeapi.co/api/v2/pokemon/{}", key);

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
                Err(format!("Error: Pokémon with key {} not found!", key))
            }
        }
        Err(_) => Err("Failed to connect to PokéAPI".to_string()),
    }
}

#[tauri::command]
async fn close_splashscreen(window: Window) {
    // Close splashscreen & show main window
    window.get_window("splashscreen").expect("no window labeled 'splashscreen' found").close().unwrap();
    window.get_window("main").expect("no window labeled 'main' found").show().unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_splashscreen, search_pokemon])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}