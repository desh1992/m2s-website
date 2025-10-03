"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { StrategicMarqueeDemo } from "@/components/ui/strategic-marquee-demo";
import { StrategicFeature } from "@/components/ui/strategic-bento-grid";


const solutions = [
  {
    title: "AI-Enhanced Strategic Services",
    features: [
      "RAG-based competitive intelligence",
      "Predictive market analysis",
      "Automated strategic reporting",
      "AI-powered decision support"
    ],
    cta: "Get Strategic Advantage"
  },
  {
    title: "Traditional Strategic Consulting",
    features: [
      "Comprehensive market research",
      "Competitive analysis and benchmarking",
      "Strategic planning workshops",
      "Implementation support and monitoring"
    ],
    cta: "Start Strategic Planning"
  }
];

export function StrategicBusinessServicesShowcaseSection() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Strategic Business Services with RAG-Based AI"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl mx-auto">
            Harness the power of Retrieval-Augmented Generation AI combined with net assessment methodology for unparalleled competitive advantage and strategic insights.
          </p>
        </motion.div>

        {/* Solutions Section */}
        <div className="space-y-20">
          {/* First Row: Image Left, Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <img 
                src="/ai-en.jpg" 
                alt="AI-Enhanced Strategic Services"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6 text-center">
                AI-Enhanced Strategic Services
              </h3>
              <ul className="space-y-4">
                {solutions[0].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Second Row: Text Left, Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6 text-center">
                Traditional Strategic Consulting
              </h3>
              <ul className="space-y-4">
                {solutions[1].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2">
              <img 
                src="/consult.jpg" 
                alt="Traditional Strategic Consulting"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Features */}
        <StrategicFeature />

        {/* Marquee Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-4">
              Strategic Business Technologies We Work With
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Advanced analytics and intelligence platforms powering strategic decision-making
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Full-width Marquee outside container */}
      <div className="w-full overflow-visible">
        <StrategicMarqueeDemo />
      </div>
    </section>
  );
}
