import { useState } from "react";
import type { TranslationKey } from "../data/translations";
import { useLanguage } from "../lib/i18n";

export interface PreferenceOption<T extends string> {
    value: T;
    label?: string;
    labelKey?: TranslationKey;
    lang?: string;
}

export interface PreferenceToggleProps<T extends string> {
    initialValue: T;
    onSelect: (next: T) => void;
    options: ReadonlyArray<PreferenceOption<T>>;
    ariaLabelKey: TranslationKey;
    layout?: "inline" | "grid";
    spacedCaps?: boolean;
}

const BUTTON_BASE =
    "font-display text-[0.625rem] tabular-nums transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export function PreferenceToggle<T extends string>({
    initialValue,
    onSelect,
    options,
    ariaLabelKey,
    layout = "inline",
    spacedCaps = true,
}: PreferenceToggleProps<T>) {
    const { t } = useLanguage();
    const [current, setCurrent] = useState<T>(initialValue);

    const select = (value: T) => {
        onSelect(value);
        setCurrent(value);
    };

    const containerClass =
        layout === "grid"
            ? "grid grid-cols-3 gap-1.5 w-full"
            : "shrink-0 inline-flex border-2 border-divider/60";

    const trackingClass = spacedCaps
        ? "tracking-[0.28em] uppercase"
        : "tracking-[0.18em]";

    const sizingClass =
        layout === "grid" ? "px-2 py-1.5 border-2" : "px-3 py-1.5";

    const stateClass = (active: boolean) => {
        if (layout === "grid") {
            return active
                ? "bg-red-500 text-white border-red-500"
                : "text-muted hover:text-fg border-divider/60";
        }
        return active ? "bg-red-500 text-white" : "text-muted hover:text-fg";
    };

    return (
        <div
            role="radiogroup"
            aria-label={t(ariaLabelKey)}
            className={containerClass}
        >
            {options.map(({ value, label, labelKey, lang }) => {
                const active = current === value;
                const text = label ?? (labelKey ? t(labelKey) : value);
                return (
                    <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        lang={lang}
                        onClick={() => select(value)}
                        className={`${BUTTON_BASE} ${sizingClass} ${trackingClass} ${stateClass(active)}`}
                    >
                        {text}
                    </button>
                );
            })}
        </div>
    );
}
