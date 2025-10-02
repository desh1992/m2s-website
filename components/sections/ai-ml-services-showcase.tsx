"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Lightbulb, Database, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { MarqueeDemo } from "@/components/ui/marquee-demo";
import { Feature } from "@/components/ui/feature-section-with-bento-grid";

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
          {/* <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            AI & ML Services
          </div> */}
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-4xl mx-auto font-regular text-neutral-900 dark:text-white mb-6 text-center">
            <AnimatedText 
              text="Advanced AI & Machine Learning Services"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed tracking-tight text-muted-foreground text-center">
            Harness the power of artificial intelligence and machine learning to transform your business operations and gain competitive advantage.
          </p>
        </motion.div>

        {/* Solution Rows with Images */}
        <div className="space-y-20 mb-20">
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
                src="/ai.jpg" 
                alt="AI-Powered Business Intelligence"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6 text-center">
                AI-Powered Business Intelligence
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6 text-center">
                Machine Learning Development
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
                src="/ml.jpg" 
                alt="Machine Learning Development"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Features */}
        <Feature />

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
              Technologies We Work With
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Cutting-edge technologies and frameworks for modern AI/ML solutions
            </p>
          </motion.div>
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
}
