import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  async function searchPokemon() {
    try {
      // Invoke the Tauri command to search for the Pokémon
      const result = await invoke("search_pokemon", { name });
      const data = JSON.parse(result);
      setPokemonData(data);
      setError("");
    } catch (err) {
      setError("Pokémon not found or an error occurred!");
      setPokemonData(null);
    }
  }

  return (
    <div className="m-0	pt-[10vh] flex flex-col justify-center text-center">
      <h1 className="text-3xl font-bold">
        Welcome to PokeDex!
      </h1>

      <div className="flex justify-center">
        <img src="/image.png" className="h-64" alt="Pokedex logo" />
      </div>

      <form
        className="flex	justify-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          searchPokemon();
        }}
      >
        <input
          id="pokemon-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a Pokémon name..."
        />
        <button type="submit" className="cursor-pointer">Find</button>
      </form>

      {error && <p className="mt-2 text-red-500">{error}</p>}

      {pokemonData && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold capitalize">{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="mx-auto"
          />
          <p className="mt-2">
            Type: {pokemonData.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
