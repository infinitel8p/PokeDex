export type Theme = "light" | "dark";

const STORAGE_KEY = "pokedex-theme";

export function getStoredTheme(): Theme | null {
    if (typeof window === "undefined") return null;
    try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        return value === "light" || value === "dark" ? value : null;
    } catch {
        return null;
    }
}

export function getInitialTheme(): Theme {
    return getStoredTheme() ?? "dark";
}

export function applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
}

export function setTheme(theme: Theme) {
    try {
        window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        // Storage unavailable
    }
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    applyTheme(theme);
    window.setTimeout(() => {
        root.classList.remove("theme-transitioning");
    }, 320);
}
