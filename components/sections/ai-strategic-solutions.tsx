"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Brain,
  TrendingUp,
  Zap,
  Target,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles
} from "lucide-react";

const aiCapabilities = [
  {
    icon: Brain,
    title: "RAG-Based AI",
    description: "Retrieval-Augmented Generation for accurate, context-aware business intelligence",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Zap,
    title: "Machine Learning",
    description: "Custom ML models for predictive analytics and automated decision-making",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Advanced analytics transforming data into actionable business insights",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Target,
    title: "Net Assessment",
    description: "Competitive intelligence and strategic positioning analysis",
    color: "from-orange-500 to-amber-600"
  }
];

const strategicAreas = [
  {
    area: "Customers",
    description: "360-degree view of customer needs and behaviors with AI-driven engagement",
    icon: Users
  },
  {
    area: "Organization",
    description: "Workplace optimization and feedback loops powered by AI insights",
    icon: Building2
  },
  {
    area: "Industry & Competition",
    description: "Real-time monitoring of market trends and competitive intelligence",
    icon: TrendingUp
  },
  {
    area: "Operations",
    description: "Process benchmarking and supply chain optimization with analytics",
    icon: BarChart3
  },
  {
    area: "Technology",
    description: "Digital transformation and AI-driven technology optimization",
    icon: Zap
  },
  {
    area: "People",
    description: "AI-driven training, development, and knowledge sharing systems",
    icon: Users
  }
];

function Building2(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>
  );
}

export function AIStrategicSolutions() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI & Strategic Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Strategic Business Solutions with{" "}
            <span className="text-purple-600 dark:text-purple-400">
              RAG-Based AI
            </span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Harness the power of Retrieval-Augmented Generation AI combined with net assessment methodology for unparalleled competitive advantage and strategic insights.
          </p>
        </motion.div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${capability.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                {capability.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Net Assessment Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Net Assessment Framework
            </h3>
            <p className="text-purple-100 max-w-3xl mx-auto text-lg">
              Our proprietary methodology delivers rigorous comparative analysis of your organization's strengths and weaknesses, enabling executives to pinpoint capability gaps and align resources for growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {strategicAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <area.icon className="w-8 h-8 text-white mb-3" />
                <h4 className="font-bold text-white mb-2">{area.area}</h4>
                <p className="text-sm text-purple-100">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RAG Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Enhanced Decision-Making",
              description: "Get answers grounded in your own evolving data, ensuring recommendations are always relevant and accurate.",
              icon: Target
            },
            {
              title: "Operational Efficiency",
              description: "Streamline reporting, customer support, and knowledge management with AI-powered information retrieval.",
              icon: Zap
            },
            {
              title: "Competitive Edge",
              description: "Monitor market shifts, regulatory changes, and competitor activities in real-time for agile strategy.",
              icon: TrendingUp
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {benefit.title}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            Explore AI Solutions
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

