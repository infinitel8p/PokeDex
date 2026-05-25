// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[macro_use]
extern crate maplit;

mod weakness_helpers;
use tauri::{AppHandle, Manager, WebviewWindow};
use reqwest::get;
use serde_json::{Value, json};
use weakness_helpers::calculate_weaknesses;
use std::collections::HashMap;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::sync::OnceLock;

static TRANSLATIONS: OnceLock<HashMap<String, String>> = OnceLock::new();

fn load_translations(app: &AppHandle) -> HashMap<String, String> {
    let resource_dir = app
        .path()
        .resource_dir()
        .expect("Could not access resource directory");
    let file_path = resource_dir.join("assets/translations.csv");

    let file = File::open(file_path).expect("Cannot open CSV file");
    let reader = BufReader::new(file);
    let mut translations = HashMap::new();

    for line in reader.lines() {
        if let Ok(entry) = line {
            let fields: Vec<&str> = entry.split(',').collect();
            let key = fields[0].to_string();

            for name in &fields[1..] {
                translations.insert(name.trim().to_lowercase(), key.clone());
            }
        }
    }

    translations
}

fn get_translations(app: &AppHandle) -> &'static HashMap<String, String> {
    TRANSLATIONS.get_or_init(|| load_translations(app))
}

fn translate_to_key(name: &str, translations: &HashMap<String, String>) -> String {
    let lowercase_name = name.to_lowercase();
    if let Some(key) = translations.get(&lowercase_name) {
        key.clone()
    } else {
        name.to_string()
    }
}

#[tauri::command]
async fn search_pokemon(name: &str, app: AppHandle) -> Result<String, String> {
    let translations = get_translations(&app);
    let key = translate_to_key(name, translations);

    let url = format!("https://pokeapi.co/api/v2/pokemon/{}", key);

    match get(&url).await {
        Ok(response) => {
            if response.status().is_success() {
                let json: Value = response.json().await.unwrap();
                let types = json["types"].as_array().unwrap();

                let weaknesses = calculate_weaknesses(types).await?;

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
