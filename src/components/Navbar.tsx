import { MouseEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../lib/i18n";
import type { TranslationKey } from "../data/translations";

const ROUTES: ReadonlyArray<{ to: string; labelKey: TranslationKey; end: boolean }> = [
    { to: "/", labelKey: "nav.home", end: true },
    { to: "/uranium", labelKey: "nav.uranium", end: false },
    { to: "/insurgence", labelKey: "nav.insurgence", end: false },
];

const Navbar = () => {
    const location = useLocation();
    const { t } = useLanguage();

    const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent("pokedex:reset"));
        }
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-10 bg-red-600 border-b-2 border-red-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] pt-[env(safe-area-inset-top)]"
            style={{
                backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.12) 100%)",
            }}
        >
            <nav aria-label={t("nav.primary")} className="flex items-center justify-between px-2 py-1">
                {/* Route tabs */}
                <ul className="flex items-stretch gap-0.5">
                    {ROUTES.map(({ to, labelKey, end }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={end}
                                onClick={to === "/" ? handleHomeClick : undefined}
                                className={({ isActive }) =>
                                    `group inline-flex items-center gap-1 px-2 py-0.5 font-display text-[0.6875rem] font-bold uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0 ${
                                        isActive
                                            ? "bg-red-900 text-white"
                                            : "text-white/85 hover:text-white hover:bg-red-700/60"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            aria-hidden="true"
                                            className={
                                                isActive
                                                    ? "text-white"
                                                    : "opacity-0 group-hover:opacity-60 transition-opacity"
                                            }
                                        >
                                            ▸
                                        </span>
                                        {t(labelKey)}
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Right: settings gear */}
                <NavLink
                    to="/settings"
                    aria-label={t("nav.settings")}
                    className={({ isActive }) =>
                        `inline-flex items-center justify-center h-6 w-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0 ${
                            isActive
                                ? "bg-red-900 text-white"
                                : "text-white/85 hover:text-white hover:bg-red-700/60"
                        }`
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
