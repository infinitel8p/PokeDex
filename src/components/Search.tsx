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
        let submitName = name.replace(/^0+/, "").toLowerCase().trim();
        onSearch(submitName);
    };

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            // Check if the input is not focused and if a key is alphanumeric
            if (
                inputRef.current &&
                document.activeElement !== inputRef.current &&
                event.key.length === 1 // ensure only single characters trigger the focus
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
            <form onSubmit={handleSubmit} className="relative w-[calc(100%-5rem)] mx-auto">
                <label htmlFor="pokemon-input" className="sr-only">Search for...</label>
                <input
                    ref={inputRef}
                    id="pokemon-input"
                    onChange={(e) => setName(e.currentTarget.value.toLowerCase())}
                    placeholder="Type a Pokémon name and press Enter"
                    autoComplete="off"
                    className="w-full rounded-md py-1 shadow-sm text-center cursor-pointer bg-[#0f0f0f98] focus:outline-none focus:ring-1 focus:ring-red-900"
                />
                <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                        <span className="sr-only">Search</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </span>
            </form>
            <p className="text-xs mt-1 italic text-gray-400">Type effectiveness multipliers may vary in other games outside the core series.</p>
        </div>
    );
};

export default Search;
