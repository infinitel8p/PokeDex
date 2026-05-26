import { useEffect, useState } from "react";

export type ApiStatusKind = "checking" | "online" | "offline";

export interface ApiStatus {
    kind: ApiStatusKind;
    latencyMs?: number;
}

const POKEAPI_HEALTH_URL = "https://pokeapi.co/api/v2/";
const TIMEOUT_MS = 5000;

export function useApiStatus(): ApiStatus {
    const [status, setStatus] = useState<ApiStatus>({ kind: "checking" });

    useEffect(() => {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
        let cancelled = false;
        const start = performance.now();

        fetch(POKEAPI_HEALTH_URL, { signal: controller.signal })
            .then((response) => {
                if (cancelled) return;
                const latencyMs = Math.round(performance.now() - start);
                setStatus({
                    kind: response.ok ? "online" : "offline",
                    latencyMs,
                });
            })
            .catch((err) => {
                if (cancelled) return;
                if (err instanceof Error && err.name === "AbortError") {
                    setStatus({ kind: "offline" });
                } else {
                    setStatus({ kind: "offline" });
                }
            })
            .finally(() => {
                window.clearTimeout(timeoutId);
            });

        return () => {
            cancelled = true;
            window.clearTimeout(timeoutId);
            controller.abort();
        };
    }, []);

    return status;
}
