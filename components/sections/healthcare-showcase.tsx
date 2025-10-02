"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import {
  Heart,
  Brain,
  Activity,
  FileText,
  TrendingUp,
  Shield,
  ArrowRight,
  Check
} from "lucide-react";

const healthcareFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Diagnostics",
    description: "Machine learning models for predictive care and early disease detection"
  },
  {
    icon: Activity,
    title: "Patient Monitoring",
    description: "Real-time health monitoring with intelligent alert systems"
  },
  {
    icon: FileText,
    title: "EHR Integration",
    description: "Seamless electronic health record management and optimization"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Data-driven insights for improved patient outcomes"
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Enterprise-grade security and regulatory compliance"
  }
];

const solutions = [
  {
    title: "AI-Enhanced Healthcare",
    features: [
      "Predictive patient risk assessment",
      "Automated diagnosis support systems",
      "Natural language processing for medical records",
      "Machine learning for treatment optimization"
    ],
    highlight: true
  },
  {
    title: "Traditional Healthcare IT",
    features: [
      "Electronic health record systems",
      "Practice management software",
      "Medical billing and coding solutions",
      "Healthcare data analytics platforms"
    ],
    highlight: false
  }
];

export function HealthcareShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Healthcare IT Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Transforming Healthcare with Advanced Technology"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Innovative solutions that improve patient care, streamline operations, and ensure regulatory compliance across healthcare organizations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {healthcareFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solutions Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                solution.highlight
                  ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white'
                  : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {solution.highlight && (
                <div className="absolute -top-4 left-8 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-6 ${
                solution.highlight ? 'text-white' : 'text-neutral-900 dark:text-white'
              }`}>
                {solution.title}
              </h3>
              
              <ul className="space-y-4 mb-8">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      solution.highlight ? 'text-white' : 'text-red-600 dark:text-red-400'
                    }`} />
                    <span className={solution.highlight ? 'text-red-50' : 'text-neutral-600 dark:text-neutral-400'}>
                      {feature}
                    </span>
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

