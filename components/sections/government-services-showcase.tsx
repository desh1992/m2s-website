"use client";

import { motion } from "framer-motion";
import { Building2, Shield, Database, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const features = [
  {
    icon: Building2,
    title: "Custom Government Software",
    description: "Tailored applications for public sector needs, enhancing efficiency and service delivery."
  },
  {
    icon: Database,
    title: "Data Management & Analytics",
    description: "Secure and insightful management of public data for informed decision-making."
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Robust protection and adherence to government standards like NIST and FedRAMP."
  },
  {
    icon: Users,
    title: "Citizen Engagement Platforms",
    description: "Developing user-friendly portals to improve interaction between government and citizens."
  }
];

const solutions = [
  {
    title: "AI-Integrated Government Software",
    features: [
      "Automated workflow processing",
      "Predictive resource allocation",
      "Intelligent data analysis for policy making",
      "Enhanced public service delivery with AI"
    ],
    cta: "Explore AI Services"
  },
  {
    title: "Traditional Government IT",
    features: [
      "Legacy system modernization",
      "Secure network infrastructure",
      "Custom portal development",
      "Ongoing IT support & maintenance"
    ],
    cta: "View Traditional Services"
  }
];

export function GovernmentServicesShowcaseSection() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Government & County Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Empowering Government with Modern Services"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Secure, compliant, and efficient IT services designed specifically for county governments and public sector organizations.
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
              className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-200 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
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
