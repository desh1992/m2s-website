"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Shield,
  Users,
  FileText,
  Database,
  Lock,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const governmentServices = [
  {
    icon: Building2,
    title: "Custom Government Software",
    description: "Tailored solutions for county and government agencies with AI integration",
    features: [
      "AI-powered workflow automation",
      "Citizen service portals",
      "Document management systems",
      "Custom reporting dashboards"
    ]
  },
  {
    icon: Database,
    title: "Data Management & Analytics",
    description: "Secure data systems with advanced analytics for better decision-making",
    features: [
      "Centralized data repositories",
      "Real-time analytics",
      "Data visualization tools",
      "Compliance reporting"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Enterprise-grade security meeting government standards and regulations",
    features: [
      "NIST framework compliance",
      "Threat detection systems",
      "Security audits",
      "Incident response planning"
    ]
  },
  {
    icon: Users,
    title: "Citizen Engagement Platforms",
    description: "Modern platforms connecting government with citizens efficiently",
    features: [
      "Online service portals",
      "Mobile applications",
      "Feedback systems",
      "Communication tools"
    ]
  }
];

const benefits = [
  "FedRAMP compliant solutions",
  "ADA accessibility standards",
  "Open data initiatives support",
  "Scalable cloud architecture",
  "24/7 technical support",
  "Regular security updates"
];

export function GovernmentSolutions() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Government & County Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Empowering Government with{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Modern Technology
            </span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Secure, compliant, and efficient IT solutions designed specifically for county governments and public sector organizations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {governmentServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why Government Agencies Choose Us
              </h3>
              <p className="text-blue-100 mb-6">
                We understand the unique challenges of government IT and deliver solutions that meet the highest standards of security, compliance, and efficiency.
              </p>
              <Button
                variant="ghost"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-blue-50">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

