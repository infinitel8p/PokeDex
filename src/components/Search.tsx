import React, { useState, useRef, useEffect } from "react";

interface SearchProps {
    onSearch: (name: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [name, setName] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            return;
        }
        onSearch(name);
    };

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            // Check if the input is not focused and if a key is alphanumeric
            if (
                inputRef.current &&
                document.activeElement !== inputRef.current &&
                event.key.length === 1 // This ensures only single characters like letters and numbers trigger the focus
            ) {
                inputRef.current.focus();
            }
        };

        document.addEventListener("keydown", handleKeydown);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <div>
            <hr className="m-10 border-red-900" />
            <form
                className="flex flex-col justify-center"
                onSubmit={handleSubmit}
            >
                <div className="flex justify-center gap-3">
                    <input
                        ref={inputRef} // Attach the ref to the input
                        id="pokemon-input"
                        onChange={(e) => setName(e.currentTarget.value.toLowerCase())}
                        placeholder="Enter a Pokémon name..."
                        autoComplete="off"
                        className="cursor-pointer text-lg border-1 rounded-lg px-3 bg-[#0f0f0f98] focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <button type="submit" className="cursor-pointer text-lg border-1 rounded-lg px-3 bg-[#0f0f0f98] hover:ring-1 hover:ring-red-500">Find</button>
                </div>
            </form>
            <p className="text-xs mt-1 italic">Type effectiveness multipliers may vary in other games outside the core series.</p>
            <hr className="m-10 border-red-900" />
        </div>
    );
};

export default Search;
