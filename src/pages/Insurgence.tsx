import StatusBar from "../components/StatusBar";

const INSURGENCE_FEATURES = [
    "Delta Pokémon variants",
    "Mega Evolution matchups",
    "Insurgence-only types",
];

const Insurgence = () => {
    return (
        <main className="h-screen flex flex-col pt-9 px-4 pb-4">
            <div className="pt-3">
                <StatusBar />
            </div>

            <div className="flex-1 min-h-0 flex flex-col justify-center text-center">
                <img
                    src="/Insurgence.png"
                    alt=""
                    className="h-28 mx-auto object-contain"
                />

                <div className="mt-6 mx-auto inline-block border-2 border-fg px-3 py-1">
                    <span className="font-display text-[0.625rem] text-fg tabular-nums tracking-[0.28em] uppercase">
                        In Development
                    </span>
                </div>

                <h1 className="mt-5 font-display text-3xl font-bold tracking-tight">
                    Pokémon Insurgence
                </h1>

                <p className="mt-3 mx-auto max-w-[18rem] text-sm text-muted leading-relaxed">
                    Delta Pokémon and Insurgence-specific type matchups will appear here.
                </p>

                <ul className="mt-8 mx-auto max-w-[18rem] space-y-1.5 text-left">
                    {INSURGENCE_FEATURES.map((feature) => (
                        <li
                            key={feature}
                            className="border-2 border-divider/40 px-3 py-2 inline-flex items-center gap-2 w-full font-display text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-muted"
                        >
                            <span aria-hidden="true" className="text-fg">Δ</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Insurgence;
