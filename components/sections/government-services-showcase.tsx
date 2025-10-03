"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { GovernmentMarqueeDemo } from "@/components/ui/government-marquee-demo";
import { GovernmentFeature } from "@/components/ui/government-bento-grid";


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
          <h2 className="text-4xl md:text-5xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Empowering Government with Modern Services"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl mx-auto">
            Secure, compliant, and efficient IT services designed specifically for county governments and public sector organizations.
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
                src="/gov-ai.jpg" 
                alt="AI-Integrated Government Software"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl tracking-tighter font-regular text-neutral-900 dark:text-white mb-6 text-center">
                AI-Integrated Government Software
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
                Traditional Government IT
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
                src="/trad-gov.jpg" 
                alt="Traditional Government IT Systems"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Features */}
        <GovernmentFeature />

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
              Government Technologies We Work With
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Secure and compliant technologies powering modern government operations
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Full-width Marquee outside container */}
      <div className="w-full overflow-visible">
        <GovernmentMarqueeDemo />
      </div>
    </section>
  );
}
