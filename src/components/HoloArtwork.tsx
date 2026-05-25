import { useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

interface HoloArtworkProps {
    src: string;
    alt: string;
}

const EASE_OUT_QUINT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HoloArtwork: React.FC<HoloArtworkProps> = ({ src, alt }) => {
    const containerRef = useRef<HTMLButtonElement>(null);
    const [enlarged, setEnlarged] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 200, damping: 22, mass: 0.6 });
    const smoothY = useSpring(mouseY, { stiffness: 200, damping: 22, mass: 0.6 });

    const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
    const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

    const shineX = useTransform(smoothX, [-0.5, 0.5], [0, 100]);
    const shineY = useTransform(smoothY, [-0.5, 0.5], [0, 100]);
    
    const shineBackground = useTransform(
        [shineX, shineY] as never,
        ([x, y]: number[]) =>
            `radial-gradient(circle at ${x}% ${y}%, rgba(255, 240, 220, 0.32) 0%, rgba(255, 240, 220, 0) 50%)`
    );

    const shineRgb = useTransform(
        [smoothX, smoothY] as never,
        ([x, y]: number[]) => {
            const mag = Math.min(1, Math.hypot(x, y) * 2);
            return `linear-gradient(${135 + x * 60}deg, rgba(96,165,250,${0.0 + mag * 0.22}) 0%, transparent 30%, transparent 70%, rgba(248,113,113,${0.0 + mag * 0.22}) 100%)`;
        }
    );

    const spriteMaskStyle = {
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
    } as const;

    const handleMouseMove = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Esc closes the enlarged view
    useEffect(() => {
        if (!enlarged) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setEnlarged(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [enlarged]);

    return (
        <>
            <motion.button
                ref={containerRef}
                type="button"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setEnlarged(true)}
                aria-label={`Enlarge ${alt}`}
                className="h-full w-full relative cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 600,
                    transformStyle: "preserve-3d",
                }}
            >
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-contain pointer-events-none"
                    draggable={false}
                />
                <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: shineBackground,
                        mixBlendMode: "soft-light",
                        ...spriteMaskStyle,
                    }}
                />
                <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: shineRgb,
                        mixBlendMode: "screen",
                        ...spriteMaskStyle,
                    }}
                />
            </motion.button>

            <AnimatePresence>
                {enlarged && (
                    <motion.div
                        key="enlarged"
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 backdrop-blur-sm cursor-zoom-out"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        onClick={() => setEnlarged(false)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={alt}
                    >
                        <motion.img
                            src={src}
                            alt={alt}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.22, ease: EASE_OUT_QUINT }}
                            className="max-h-[80vh] max-w-[80vw] object-contain pointer-events-none drop-shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                            draggable={false}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HoloArtwork;
