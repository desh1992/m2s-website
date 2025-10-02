"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const features = [
  {
    icon: Shield,
    title: "Threat Detection & Response",
    description: "Advanced monitoring and rapid response to cybersecurity threats and incidents."
  },
  {
    icon: Lock,
    title: "HIPAA Compliance",
    description: "Comprehensive compliance solutions for healthcare data protection and regulatory requirements."
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 monitoring and analysis of your security infrastructure and data access patterns."
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Comprehensive security audits and risk assessments to identify vulnerabilities."
  }
];

const solutions = [
  {
    title: "Advanced Cybersecurity Services",
    features: [
      "AI-powered threat detection",
      "Real-time security monitoring",
      "Automated incident response",
      "Advanced persistent threat protection"
    ],
    cta: "Secure Your Systems"
  },
  {
    title: "Compliance & Governance",
    features: [
      "HIPAA compliance consulting",
      "NIST framework implementation",
      "Security policy development",
      "Regular compliance audits"
    ],
    cta: "Ensure Compliance"
  }
];

export function CybersecurityServicesShowcaseSection() {
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
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Cybersecurity Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Protecting Your Data with Advanced Security"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect healthcare and government organizations from evolving threats and ensure regulatory compliance.
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
              className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-6 text-center border border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-200 dark:bg-green-800/50 text-green-700 dark:text-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
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
