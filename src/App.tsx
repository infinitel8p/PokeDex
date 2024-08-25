import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import CollapsibleSection from "./components/CollapsibleSection";

function App() {
    const [pokemonData, setPokemonData] = useState<any>(null);
    const [error, setError] = useState("");
    const [name, setName] = useState("");

    async function searchPokemon() {
        try {
            const result = await invoke("search_pokemon", { name });
            const data = JSON.parse(result as string) as any;
            setPokemonData(data);
            setError("");
        } catch (err) {
            setError("Pokémon not found or an error occurred!");
            setPokemonData(null);
        }
    }

    function capitalize(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className="text-center">
            <p className="text-xs my-2"><span className="font-bold italic">Note:</span> Type effectiveness multipliers may vary in other games outside the core series.</p>

            <form
                className="flex flex-col justify-center mb-10"
                onSubmit={(e) => {
                    e.preventDefault();
                    searchPokemon();
                }}
            >

                <div className="flex justify-center gap-3">
                    <input
                        id="pokemon-input"
                        onChange={(e) => setName(e.currentTarget.value.toLowerCase())}
                        placeholder="Enter a Pokémon name..."
                        className="cursor-pointer text-lg border-1 rounded-lg py-2 px-4 bg-[#0f0f0f98] focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <button type="submit" className="cursor-pointer text-lg border-1 rounded-lg py-2 px-4 bg-[#0f0f0f98] hover:ring-1 hover:ring-red-500">Find</button>
                </div>
            </form>
            <div>
                {pokemonData ? (
                    <div>
                        <h1 className="text-3xl font-bold capitalize">{capitalize(pokemonData?.name)}</h1>
                        <img
                            src={pokemonData?.sprites?.other?.['official-artwork']?.front_default}
                            alt={pokemonData?.name}
                            className="h-64 mx-auto"
                        />
                        <p className="mt-2">
                            <strong>Type:</strong> {pokemonData?.types?.map((type: any) => capitalize(type.type.name)).join(", ")}
                        </p>
                        <div>
                            {pokemonData?.weaknesses ? (
                                ['2x', '0.5x', '0x'].map((multiplier) => (
                                    <CollapsibleSection key={multiplier} title={`${multiplier} ${multiplier === '2x' ? 'Weaknesses' : multiplier === '0.5x' ? 'Resistances' : 'Immunities'}`}>
                                        {pokemonData.weaknesses[multiplier]?.map((entry: any) => (
                                            <div key={entry.type} className="inline-block m-2">
                                                <img src={entry.icon} alt={entry.type} className="h-6 inline-block" />
                                            </div>
                                        )) || "None"}
                                    </CollapsibleSection>
                                ))
                            ) : (
                                "No weaknesses found"
                            )}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-3xl font-bold capitalize">Welcome to PokeDex!</h1>
                        <img
                            src="/image.png"
                            alt="Default Pokémon"
                            className="h-64 mx-auto"
                        />
                    </div>
                )}
            </div>

            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default App;