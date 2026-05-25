import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SHORTCUTS = [
    { keys: ["Any letter"], desc: "Focus the search input" },
    { keys: ["Enter"], desc: "Submit the search" },
    { keys: ["?"], desc: "Show this help overlay" },
    { keys: ["Esc"], desc: "Close any overlay or modal" },
    { keys: ["Click sprite"], desc: "Enlarge the Pokémon artwork" },
    { keys: ["Click", "type chip"], desc: "(Coming soon) filter by type" },
] as const;

const ShortcutsModal = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
                e.preventDefault();
                setOpen((o) => !o);
                return;
            }
            if (e.key === "Escape" && open) {
                setOpen(false);
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 backdrop-blur-sm px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    onClick={() => setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Keyboard shortcuts"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 8 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 4 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-canvas border-2 border-red-500 w-full max-w-sm p-5"
                    >
                        <p className="font-display text-[0.625rem] text-red-500 tabular-nums tracking-[0.28em] uppercase">
                            Reference
                        </p>
                        <h2 className="mt-1 font-display text-2xl font-bold tracking-tight">
                            Keyboard shortcuts
                        </h2>
                        <ul className="mt-4 space-y-2">
                            {SHORTCUTS.map(({ keys, desc }) => (
                                <li key={desc} className="flex items-baseline justify-between gap-3 text-sm">
                                    <span className="text-muted">{desc}</span>
                                    <span className="flex gap-1 shrink-0">
                                        {keys.map((k) => (
                                            <kbd
                                                key={k}
                                                className="font-display text-[0.625rem] tabular-nums tracking-[0.18em] uppercase px-1.5 py-0.5 border border-divider/60 bg-surface/40 text-fg"
                                            >
                                                {k}
                                            </kbd>
                                        ))}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-xs text-faint italic text-center">
                            Press <kbd className="font-display tracking-[0.18em] px-1">Esc</kbd> or click outside to close.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ShortcutsModal;
