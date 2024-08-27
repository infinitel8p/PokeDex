import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Tabs from "./components/Tabs";

function App() {
    const [pokemonData, setPokemonData] = useState<any>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function searchPokemon(name: string) {
        setLoading(true);
        setError("");
        try {
            const result = await invoke("search_pokemon", { name });
            const data = JSON.parse(result as string) as any;
            setPokemonData(data);
        } catch (err) {
            setError("Pokémon not found or an error occurred!");
            setPokemonData(null);
        } finally {
            setLoading(false);
        }
    }

    function capitalize(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    useEffect(() => {
        setTimeout(() => {
            invoke('close_splashscreen');
        }, 2000);
    }, []);

    const accordionSections = pokemonData?.weaknesses
        ? ['2x', '0.5x', '0x'].map((multiplier) => ({
            title: `${multiplier} ${multiplier === '2x' ? 'Weaknesses' : multiplier === '0.5x' ? 'Resistances' : 'Immunities'}`,
            content: (
                <div>
                    {pokemonData.weaknesses[multiplier]?.sort((a: any, b: any) => a.type.localeCompare(b.type)).map((entry: any) => (
                        <div key={entry.type} className="inline-block m-2">
                            <img src={entry.icon} alt={entry.type} className="h-6 inline-block" />
                        </div>
                    )) || "None"}
                </div>

            ),
        }))
        : [];

    return (
        <div className="text-center mt-10">
            <div>
                {loading ? (
                    <img src="/loading.png" alt="Loading" className="h-64 mx-auto pt-16" />
                ) : pokemonData ? (
                    <div>
                        <h1 className="text-3xl font-bold capitalize pt-5 flex justify-center items-baseline gap-2">
                            {capitalize(pokemonData?.name)}
                            <span className="text-2xl text-gray-400">Nr. {pokemonData?.id?.toString().padStart(4, '0')}</span>
                        </h1>
                        <img
                            src={pokemonData?.sprites?.other?.['official-artwork']?.front_default}
                            alt={pokemonData?.name}
                            className="h-64 mx-auto"
                        />
                        <Search onSearch={searchPokemon} />
                        <Tabs
                            tabsContent={[
                                <div>
                                    <div className="flex justify-center gap-2">
                                        <p>
                                            <strong>Type:</strong>{" "}
                                            {pokemonData?.types?.map((type: any) => capitalize(type.type.name)).join(", ")}
                                        </p>
                                    </div>
                                    <div>
                                        {accordionSections.length > 0 ? (
                                            <Accordion sections={accordionSections} />
                                        ) : (
                                            "No weaknesses found"
                                        )}
                                    </div>
                                </div>,
                                <div>Coming Soon...</div>,
                            ]}
                        />
                    </div>
                ) : error ? (
                    <div>
                        <img src="/error_404.png" alt="Error" className="h-64 mx-auto pt-16" />
                        <Search onSearch={searchPokemon} />
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : (
                    <div>
                        <img src="/PokeDex.png" alt="Default Pokémon" className="h-64 mx-auto pt-16" />
                        <Search onSearch={searchPokemon} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
