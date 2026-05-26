import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../lib/i18n";
import { isTouchPrimary } from "../lib/platform";
import type { TranslationKey } from "../data/translations";

const SHORTCUTS: ReadonlyArray<{ keys: TranslationKey[]; descKey: TranslationKey }> = [
    { keys: ["shortcuts.anyLetter"], descKey: "shortcuts.focusSearch" },
    { keys: ["shortcuts.enter"], descKey: "shortcuts.submitSearch" },
    { keys: ["shortcuts.question"], descKey: "shortcuts.showHelp" },
    { keys: ["shortcuts.esc"], descKey: "shortcuts.closeOverlay" },
    { keys: ["shortcuts.clickSprite"], descKey: "shortcuts.enlargeArt" },
    { keys: ["shortcuts.clickType", "shortcuts.typeChip"], descKey: "shortcuts.filterByType" },
];

const ShortcutsModal = () => {
    const [open, setOpen] = useState(false);
    const { t } = useLanguage();
    const touchOnly = isTouchPrimary();

    useEffect(() => {
        if (touchOnly) return;
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
    }, [open, touchOnly]);

    if (touchOnly) return null;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-70 flex items-center justify-center bg-black/75 backdrop-blur-sm px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    onClick={() => setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={t("shortcuts.dialogAria")}
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
                            {t("shortcuts.reference")}
                        </p>
                        <h2 className="mt-1 font-display text-2xl font-bold tracking-tight">
                            {t("shortcuts.title")}
                        </h2>
                        <ul className="mt-4 space-y-2">
                            {SHORTCUTS.map(({ keys, descKey }) => (
                                <li key={descKey} className="flex items-baseline justify-between gap-3 text-sm">
                                    <span className="text-muted">{t(descKey)}</span>
                                    <span className="flex gap-1 shrink-0">
                                        {keys.map((k) => (
                                            <kbd
                                                key={k}
                                                className="font-display text-[0.625rem] tabular-nums tracking-[0.18em] uppercase px-1.5 py-0.5 border border-divider/60 bg-surface/40 text-fg"
                                            >
                                                {t(k)}
                                            </kbd>
                                        ))}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-xs text-faint italic text-center">
                            {t("shortcuts.escToClose").split("{esc}").map((part, i, arr) => (
                                <span key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <kbd className="font-display tracking-[0.18em] px-1">{t("shortcuts.esc")}</kbd>
                                    )}
                                </span>
                            ))}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ShortcutsModal;
