"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { CybersecurityMarqueeDemo } from "@/components/ui/cybersecurity-marquee-demo";
import { CybersecurityFeature } from "@/components/ui/cybersecurity-bento-grid";


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
          <h2 className="text-4xl md:text-5xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Protecting Your Data with Advanced Security"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect healthcare and government organizations from evolving threats and ensure regulatory compliance.
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
                src="/ad-cybersecurity.jpg" 
                alt="Advanced Cybersecurity Services"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6 text-center">
                Advanced Cybersecurity Services
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
                Compliance & Governance
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
                src="/comp.jpg" 
                alt="Compliance & Governance Systems"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Features */}
        <CybersecurityFeature />

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
              Cybersecurity Technologies We Work With
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Advanced security tools and platforms protecting modern organizations
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Full-width Marquee outside container */}
      <div className="w-full overflow-visible">
        <CybersecurityMarqueeDemo />
      </div>
    </section>
  );
}
