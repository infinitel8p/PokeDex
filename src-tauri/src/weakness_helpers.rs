use reqwest::get;
use serde_json::Value;
use std::collections::HashMap;

// Function to fetch type effectiveness
pub async fn fetch_type_data(url: &str) -> Result<Value, String> {
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

// Helper function to generate icon URL based on type ID
pub fn generate_icon_url(type_id: &str) -> String {
    format!("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/{}.png", type_id)
}

// Function to calculate weaknesses based on Pokémon types
pub async fn calculate_weaknesses(types: &Vec<Value>) -> Result<HashMap<String, Vec<HashMap<String, String>>>, String> {
    let mut weaknesses: HashMap<String, Vec<HashMap<String, String>>> = HashMap::new();

    for pokemon_type in types {
        //let type_name = pokemon_type["type"]["name"].as_str().unwrap();
        //let type_id = type_url.split('/').filter(|&s| !s.is_empty()).last().unwrap(); // Extract the type ID
        let type_url = pokemon_type["type"]["url"].as_str().unwrap();

        if let Ok(type_data) = fetch_type_data(type_url).await {
            let damage_relations = &type_data["damage_relations"];

            for (key, effectiveness) in &[
                ("2x", "double_damage_from"),
                ("0.5x", "half_damage_from"),
                ("0x", "no_damage_from"),
            ] {
                if let Some(damage_types) = damage_relations[effectiveness].as_array() {
                    for damage_type in damage_types {
                        let type_name = damage_type["name"].as_str().unwrap().to_string();
                        let type_id = damage_type["url"]
                            .as_str()
                            .unwrap()
                            .split('/')
                            .filter(|&s| !s.is_empty())
                            .last()
                            .unwrap();
                        let icon_url = generate_icon_url(type_id);
                        weaknesses.entry(key.to_string()).or_default().push(
                            hashmap!{
                                "type".to_string() => type_name,
                                "icon".to_string() => icon_url
                            }
                        );
                    }
                }
            }
        } else {
            return Err("Failed to fetch type data".to_string());
        }
    }

    Ok(weaknesses)
}