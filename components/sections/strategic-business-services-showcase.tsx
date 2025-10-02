"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const features = [
  {
    icon: TrendingUp,
    title: "Net Assessment Strategy",
    description: "Comprehensive competitive analysis and strategic positioning using proven net assessment methodology."
  },
  {
    icon: Target,
    title: "RAG-Based Intelligence",
    description: "Advanced AI-powered business intelligence that combines real-time data with historical insights."
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Deep market research and competitive intelligence to inform strategic decision-making."
  },
  {
    icon: Users,
    title: "Strategic Planning",
    description: "End-to-end strategic planning services to help organizations achieve their long-term goals."
  }
];

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
          <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Strategic Business Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Strategic Business Services with RAG-Based AI"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Harness the power of Retrieval-Augmented Generation AI combined with net assessment methodology for unparalleled competitive advantage and strategic insights.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-orange-50 dark:bg-orange-900/30 rounded-2xl p-6 text-center border border-orange-100 dark:border-orange-900 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-200 dark:bg-orange-800/50 text-orange-700 dark:text-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                {solution.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
