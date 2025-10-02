"use client";

import { motion } from "framer-motion";
import { Users, FileText, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const features = [
  {
    icon: Users,
    title: "Career Consultation",
    description: "Professional career guidance and strategic planning for healthcare IT and government technology professionals."
  },
  {
    icon: FileText,
    title: "Resume Review",
    description: "Expert resume optimization and review services to help you stand out in healthcare IT and government roles."
  },
  {
    icon: Target,
    title: "Career Coaching",
    description: "Comprehensive career coaching and development programs for technology professionals in healthcare and government sectors."
  }
];

const solutions = [
  {
    title: "Individual Career Services",
    features: [
      "1-on-1 career consultation sessions",
      "Professional resume analysis and optimization",
      "Personalized career coaching programs",
      "Interview preparation and skill development"
    ],
    cta: "Start Your Career Journey"
  },
  {
    title: "Professional Development",
    features: [
      "Industry-specific career guidance",
      "Leadership development programs",
      "Technical skill enhancement",
      "Networking and mentorship opportunities"
    ],
    cta: "Enhance Your Skills"
  }
];

export function CareerServicesShowcaseSection() {
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
          <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Career Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            <AnimatedText 
              text="Professional Career Development Services"
              className="text-neutral-900 dark:text-white"
            />
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Comprehensive career services designed to help healthcare IT and government technology professionals advance their careers and achieve their professional goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-pink-50 dark:bg-pink-900/30 rounded-2xl p-6 text-center border border-pink-100 dark:border-pink-900 hover:border-pink-300 dark:hover:border-pink-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-pink-200 dark:bg-pink-800/50 text-pink-700 dark:text-pink-300 rounded-full flex items-center justify-center mx-auto mb-4">
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
