"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { HealthcareMarqueeDemo } from "@/components/ui/healthcare-marquee-demo";
import { HealthcareFeature } from "@/components/ui/healthcare-bento-grid";
import {
  CheckCircle
} from "lucide-react";


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
          <h2 className="text-4xl md:text-5xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Transforming Healthcare with Advanced Technology"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that improve patient care, streamline operations, and ensure regulatory compliance across healthcare organizations.
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
                src="/hc-sol.jpg" 
                alt="AI-Enhanced Healthcare Solutions"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6 text-center">
                AI-Enhanced Healthcare Solutions
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
                Traditional Healthcare IT
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
                src="/trad-it.jpg" 
                alt="Traditional Healthcare IT Systems"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Features */}
        <HealthcareFeature />

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
              Healthcare Technologies We Work With
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Cutting-edge technologies powering modern healthcare solutions
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Full-width Marquee outside container */}
      <div className="w-full overflow-visible">
        <HealthcareMarqueeDemo />
      </div>
    </section>
  );
}

