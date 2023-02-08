import requests
import json
import os


def sprite_downloader(json_response):
    """
    This function downloads sprites and official artwork from PokeAPI.

    Args:
        json_response (dict): The JSON response from PokeAPI

    Returns:
        None: This function only outputs the URLs to the console and does not return anything.
    """
    # Define the download directory
    download_dir = os.path.join("images", "download")

    # Iterate over the sprites in the JSON response
    for key, value in json_response["sprites"].items():
        try:
            # If the key is "other" and it contains "official-artwork"
            if key == "other" and "official-artwork" in value:
                # Iterate over the official artwork
                for artwork_key, artwork_value in value["official-artwork"].items():
                    # If the value is a URL
                    if isinstance(artwork_value, str) and artwork_value.startswith("https"):
                        # Define the file path
                        file_path = os.path.join(
                            download_dir, f"original_{artwork_key}.png")
                        # Check if the file already exists
                        if os.path.exists(file_path):
                            # If the file exists, skip it
                            print(
                                f"File {file_path} already exists. Skipping...")
                            continue
                        # Download the image from the URL
                        response = requests.get(artwork_value)
                        # Write the image to the file
                        with open(file_path, "wb") as f:
                            f.write(response.content)
            # If the value is a URL
            elif isinstance(value, str) and value.startswith("https"):
                # Define the file path
                file_path = os.path.join(download_dir, f"{key}.png")
                # Check if the file already exists
                if os.path.exists(file_path):
                    # If the file exists, skip it
                    print(f"File {file_path} already exists. Skipping...")
                    continue
                # Download the image from the URL
                response = requests.get(value)
                # Write the image to the file
                with open(file_path, "wb") as f:
                    f.write(response.content)
        except Exception as e:
            # Print an error message if there is an exception
            print("Error:", e)


# Make a GET request to the API and save the response
api_response = requests.get("https://pokeapi.co/api/v2/pokemon/ditto").text
# Check if the pokemon was found
if api_response != "Not Found":
    # Convert the JSON response to a Python dictionary and save it to a variable
    json_response = json.loads(api_response)
    # Call the sprite_downloader function and pass the json_response as an argument
    sprite_downloader(json_response)
# If the pokemon was not found, print an error message
else:
    print("Pokemon not found. You may have misspelled the name.")
