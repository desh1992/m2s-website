"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built specifically for your unique business requirements and workflows."
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    description: "Cutting-edge research and development services to explore new technologies and methodologies."
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Fast-track development of proof-of-concepts and minimum viable products to validate ideas quickly."
  },
  {
    icon: Wrench,
    title: "Full Support",
    description: "Comprehensive maintenance, updates, and technical support for all custom solutions we develop."
  }
];

const solutions = [
  {
    title: "AI-Integrated Development",
    features: [
      "Custom AI-powered applications",
      "Machine learning model integration",
      "Intelligent automation solutions",
      "AI-enhanced user experiences"
    ],
    cta: "Build AI Solutions"
  },
  {
    title: "Traditional Development",
    features: [
      "Custom web applications",
      "Mobile app development",
      "Database design and optimization",
      "Legacy system modernization"
    ],
    cta: "Start Development"
  }
];

export function CustomDevelopmentServicesShowcaseSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            Custom Development & Innovation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Custom Development & Innovation Services"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Tailored software solutions and innovative research for healthcare and government, with or without AI integration to meet your specific needs.
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
              className="bg-cyan-50 dark:bg-cyan-900/30 rounded-2xl p-6 text-center border border-cyan-100 dark:border-cyan-900 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-200 dark:bg-cyan-800/50 text-cyan-700 dark:text-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4">
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
