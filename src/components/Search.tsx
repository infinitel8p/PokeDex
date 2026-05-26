import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../lib/i18n";
import { isTouchPrimary } from "../lib/platform";

type AccentVariant = "red" | "lime";

interface SearchProps {
    onSearch: (name: string) => void;
    autoFocus?: boolean;
    transform?: (input: string) => string;
    placeholder?: string;
    accent?: AccentVariant;
}

const defaultTransform = (s: string): string =>
    s
        .toLowerCase()
        .replace(/^0+(\d)/, "$1")
        .replace(/[.'’]/g, "")
        .replace(/\s+/g, "-");

const ACCENT_CLASSES: Record<AccentVariant, { input: string; button: string }> = {
    red: {
        input: "focus:border-red-500",
        button: "focus-visible:ring-red-500",
    },
    lime: {
        input: "focus:border-lime-500",
        button: "focus-visible:ring-lime-500",
    },
};

const Search: React.FC<SearchProps> = ({
    onSearch,
    autoFocus = false,
    transform = defaultTransform,
    placeholder,
    accent = "red",
}) => {
    const [name, setName] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const { t } = useLanguage();
    const resolvedPlaceholder = placeholder ?? t("search.placeholder");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = name.trim();
        if (!trimmed) return;
        const submitName = transform(trimmed);
        if (!submitName) return;
        onSearch(submitName);
    };

    useEffect(() => {
        if (isTouchPrimary()) return;

        const handleKeydown = (event: KeyboardEvent) => {
            if (!inputRef.current) return;
            if (event.ctrlKey || event.metaKey || event.altKey) return;
            if (event.key.length !== 1 || event.key === " ") return;

            const active = document.activeElement;
            if (
                active &&
                active !== document.body &&
                active !== document.documentElement
            ) {
                return;
            }

            inputRef.current.focus();
        };

        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <label htmlFor="pokemon-input" className="sr-only">{resolvedPlaceholder}</label>
            <input
                ref={inputRef}
                id="pokemon-input"
                autoFocus={autoFocus && !isTouchPrimary()}
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder={resolvedPlaceholder}
                autoComplete="off"
                spellCheck={false}
                inputMode="search"
                enterKeyHint="search"
                maxLength={48}
                className={`w-full rounded-none py-3 pl-4 pr-12 text-base font-display tracking-wide bg-canvas text-fg placeholder:text-faint border-2 border-divider/70 focus:outline-none transition-colors ${ACCENT_CLASSES[accent].input}`}
            />
            <span className="absolute inset-y-0 right-0 grid w-10 pointer-coarse:w-11 place-content-center">
                <button
                    type="submit"
                    className={`text-muted hover:text-fg transition-all duration-150 active:scale-90 rounded-sm focus-visible:outline-none focus-visible:ring-2 ${ACCENT_CLASSES[accent].button} focus-visible:ring-offset-2 focus-visible:ring-offset-canvas`}
                >
                    <span className="sr-only">{t("search.submit")}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                        aria-hidden="true"
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
    );
};

export default Search;
