"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, Users, Building2, Target } from "lucide-react";

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

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Animated Background Paths */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        {/* Liquid Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Glass Background - Progressive Blur */}
          <div className="relative bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-lg overflow-hidden">
            {/* Progressive Blur Layers - Top to Bottom */}
            <div className="absolute inset-0 backdrop-blur-none" />
            <div 
              className="absolute inset-0 backdrop-blur-sm"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, black 50%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, black 50%, black 100%)'
              }}
            />
            <div 
              className="absolute inset-0 backdrop-blur-md"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 40%, black 70%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 40%, black 70%, black 100%)'
              }}
            />
            <div 
              className="absolute inset-0 backdrop-blur-lg"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%)'
              }}
            />
            
            {/* Glass Inner Glow - Subtle */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent rounded-3xl pointer-events-none" />
            
            {/* Content Container */}
            <div className="relative z-10">
              {/* Main Headline with Letter Animation */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
              >
                {["M2S", "TECH", "SOLUTIONS"].map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="inline-block mr-3 sm:mr-4 last:mr-0"
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
                        className="inline-block text-gray-900 dark:text-white"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-5xl mx-auto leading-relaxed"
              >
                Innovative IT Solutions for Healthcare & Government. Transform your organization with AI-powered healthcare solutions, advanced cybersecurity, and strategic business intelligence.
              </motion.p>
            </div>
          </div>

          {/* CTA Button - Outside Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center mt-12"
          >
            <div
              className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
              dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
              overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <GradientButton className="text-lg font-semibold group-hover:-translate-y-0.5">
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Explore Services
                </span>
                <span
                  className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                  transition-all duration-300"
                >
                  →
                </span>
              </GradientButton>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-tertiary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-text-tertiary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
