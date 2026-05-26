import { useApiStatus, ApiStatusKind } from "../hooks/useApiStatus";
import { useLanguage } from "../lib/i18n";
import type { TranslationKey } from "../data/translations";

const STATUS_LABEL_KEY: Record<ApiStatusKind, TranslationKey> = {
    checking: "status.connecting",
    online: "status.online",
    offline: "status.offline",
};

const APP_VERSION = __APP_VERSION__;

const StatusBar = () => {
    const status = useApiStatus();
    const { t } = useLanguage();
    const showLatency = status.kind === "online" && status.latencyMs !== undefined;

    return (
        <div className="flex items-center justify-between border-2 border-divider/60 px-3 py-1.5">
            <div className="flex items-center gap-2 min-w-0">
                <span className="flex gap-1 shrink-0" aria-hidden="true">
                    <span
                        className={`h-2 w-2 transition-colors duration-300 ${
                            status.kind === "offline"
                                ? "bg-red-500 animate-pulse"
                                : "bg-red-500/20"
                        }`}
                        style={status.kind === "offline" ? { animationDuration: "1.2s" } : undefined}
                    />
                    <span
                        className={`h-2 w-2 transition-colors duration-300 ${
                            status.kind === "checking"
                                ? "bg-amber-400 animate-pulse"
                                : "bg-amber-400/20"
                        }`}
                        style={status.kind === "checking" ? { animationDuration: "0.8s" } : undefined}
                    />
                    <span
                        className={`h-2 w-2 transition-colors duration-300 ${
                            status.kind === "online"
                                ? "bg-emerald-500"
                                : "bg-emerald-500/20"
                        }`}
                    />
                </span>
                <span
                    role="status"
                    aria-live="polite"
                    className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase text-fg truncate"
                >
                    {t(STATUS_LABEL_KEY[status.kind])}
                    {showLatency && (
                        <span className="text-faint ml-1.5">· {status.latencyMs}ms</span>
                    )}
                </span>
            </div>
            <span className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase text-faint shrink-0">
                v {APP_VERSION}
            </span>
        </div>
    );
};

export default StatusBar;
