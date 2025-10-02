"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Lightbulb, Database, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const features = [
  {
    icon: Brain,
    title: "Custom AI Models",
    description: "Bespoke AI models tailored to your specific business challenges and data requirements."
  },
  {
    icon: Sparkles,
    title: "RAG-Based Intelligence",
    description: "Retrieval-Augmented Generation AI for accurate, context-aware business insights."
  },
  {
    icon: Lightbulb,
    title: "Machine Learning Solutions",
    description: "Advanced ML algorithms for predictive analytics and automated decision-making."
  },
  {
    icon: Database,
    title: "Data Science Services",
    description: "Comprehensive data analysis and modeling for actionable business intelligence."
  }
];

const solutions = [
  {
    title: "AI-Powered Business Intelligence",
    features: [
      "Custom RAG-based AI systems",
      "Predictive analytics and forecasting",
      "Natural language processing",
      "Automated decision support systems"
    ],
    cta: "Explore AI Services"
  },
  {
    title: "Machine Learning Development",
    features: [
      "Custom ML model development",
      "Data preprocessing and feature engineering",
      "Model training and optimization",
      "MLOps and deployment support"
    ],
    cta: "View ML Services"
  }
];

export function AiMlServicesShowcaseSection() {
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
          <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            AI & ML Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Advanced AI & Machine Learning Services"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Harness the power of artificial intelligence and machine learning to transform your business operations and gain competitive advantage.
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
              className="bg-purple-50 dark:bg-purple-900/30 rounded-2xl p-6 text-center border border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800/50 text-purple-700 dark:text-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
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
