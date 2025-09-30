"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    // Define aurora gradient colors with vibrant, saturated colors
    const auroraGradients = [
        // Aurora 1: Vibrant Blue-Purple-Pink with bright Green-Orange-Yellow
        {
            primary: ['#2563eb', '#a855f7', '#ec4899'],
            aurora: ['#10b981', '#f97316', '#eab308']
        },
        // Aurora 2: Bright Green-Blue-Purple with vivid Red-Orange-Pink
        {
            primary: ['#10b981', '#2563eb', '#a855f7'],
            aurora: ['#ef4444', '#f97316', '#ec4899']
        },
        // Aurora 3: Vivid Orange-Red-Pink with bright Cyan-Green-Blue
        {
            primary: ['#f97316', '#ef4444', '#ec4899'],
            aurora: ['#06b6d4', '#10b981', '#2563eb']
        },
        // Aurora 4: Bright Purple-Pink-Orange with vivid Green-Cyan-Blue
        {
            primary: ['#a855f7', '#ec4899', '#f97316'],
            aurora: ['#10b981', '#06b6d4', '#2563eb']
        },
        // Aurora 5: Vivid Cyan-Green-Blue with bright Red-Pink-Orange
        {
            primary: ['#06b6d4', '#10b981', '#2563eb'],
            aurora: ['#ef4444', '#ec4899', '#f97316']
        },
        // Aurora 6: Bright Red-Orange-Green with vivid Blue-Purple-Pink
        {
            primary: ['#ef4444', '#f97316', '#10b981'],
            aurora: ['#2563eb', '#a855f7', '#ec4899']
        }
    ];

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                <defs>
                    {paths.map((path) => {
                        const gradientGroup = Math.floor(path.id / 6) % auroraGradients.length;
                        const { primary, aurora } = auroraGradients[gradientGroup];
                        return (
                            <linearGradient
                                key={`aurora-gradient-${path.id}`}
                                id={`aurora-gradient-${path.id}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop offset="0%" stopColor={primary[0]} stopOpacity="0.9">
                                    <animate attributeName="stop-color" 
                                        values={`${primary[0]};${aurora[0]};${primary[0]}`}
                                        dur="4s" repeatCount="indefinite" />
                                </stop>
                                <stop offset="50%" stopColor={primary[1]} stopOpacity="1.0">
                                    <animate attributeName="stop-color" 
                                        values={`${primary[1]};${aurora[1]};${primary[1]}`}
                                        dur="4s" repeatCount="indefinite" begin="1s" />
                                </stop>
                                <stop offset="100%" stopColor={primary[2]} stopOpacity="0.9">
                                    <animate attributeName="stop-color" 
                                        values={`${primary[2]};${aurora[2]};${primary[2]}`}
                                        dur="4s" repeatCount="indefinite" begin="2s" />
                                </stop>
                            </linearGradient>
                        );
                    })}
                </defs>
                {paths.map((path) => {
                    return (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke={`url(#aurora-gradient-${path.id})`}
                            strokeWidth={path.width}
                            strokeOpacity={0.5 + path.id * 0.05}
                            initial={{ pathLength: 0.3, opacity: 0.8 }}
                            animate={{
                                pathLength: 1,
                                opacity: [0.6, 1.0, 0.6],
                                pathOffset: [0, 1, 0],
                            }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <div
                        className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Discover Excellence
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                            >
                                →
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
