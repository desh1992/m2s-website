"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  Heart,
  Building2,
  Brain,
  Shield,
  TrendingUp,
  Code,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Activity,
  Lock,
  FileText,
  Target
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Healthcare IT Services",
    description: "AI-powered and traditional healthcare solutions including EHR optimization, predictive care analytics, and HIPAA-compliant data management.",
    features: ["AI-Powered Analytics", "EHR Integration", "HIPAA Compliance", "Predictive Care"],
    cta: "Learn More",
    href: "/services/healthcare",
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50 dark:bg-red-950/20"
  },
  {
    icon: Building2,
    title: "County & Government Services",
    description: "Custom software development for government agencies with advanced AI capabilities, compliance tools, and secure data systems.",
    features: ["Custom Software", "AI Integration", "Compliance Tools", "Secure Systems"],
    cta: "Discover More",
    href: "/services/government",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    icon: Brain,
    title: "ML & AI Services",
    description: "Custom AI-based research, machine learning models, and RAG-powered business intelligence for data-driven decision making.",
    features: ["Machine Learning", "RAG-Based AI", "Custom Research", "Predictive Analytics"],
    cta: "Explore AI",
    href: "/services/ai-ml",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions protecting healthcare and government data with advanced threat detection and compliance monitoring.",
    features: ["Threat Detection", "HIPAA Security", "Compliance Monitoring", "Risk Assessment"],
    cta: "Secure Now",
    href: "/services/cybersecurity",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    icon: TrendingUp,
    title: "Strategic Business Services",
    description: "Net assessment approach powered by RAG-based AI for competitive advantage, market intelligence, and strategic decision-making.",
    features: ["Net Assessment", "RAG-Based Intelligence", "Market Analysis", "Strategic Planning"],
    cta: "Get Started",
    href: "/services/strategic",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    icon: Code,
    title: "Custom Development & Innovation",
    description: "Tailored software solutions and innovative research for healthcare and government, with or without AI integration.",
    features: ["Custom Development", "AI & Non-AI Products", "Research Services", "Innovation Lab", "Rapid Prototyping", "Full Support"],
    cta: "Explore Services",
    href: "/services/custom-development",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20"
  },
  {
    icon: Users,
    title: "Career Consultation",
    description: "Professional career guidance and strategic planning for healthcare IT and government technology professionals.",
    features: ["1-on-1 Consultation", "Career Strategy", "Industry Insights", "Professional Development"],
    cta: "Get Consultation",
    href: "/services/career-consultation",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  },
  {
    icon: FileText,
    title: "Professional Resume Review",
    description: "Expert resume optimization and review services to help you stand out in healthcare IT and government roles.",
    features: ["Resume Analysis", "ATS Optimization", "Industry-Specific Formatting", "Professional Feedback"],
    cta: "Review Resume",
    href: "/services/resume-review",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
  },
  {
    icon: Target,
    title: "Career Coaching",
    description: "Comprehensive career coaching and development programs for technology professionals in healthcare and government sectors.",
    features: ["Career Planning", "Skill Development", "Interview Preparation", "Leadership Coaching"],
    cta: "Start Coaching",
    href: "/services/career-coaching",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20"
  }
];

const stats = [
  { icon: Heart, value: "500+", label: "Healthcare Projects" },
  { icon: Building2, value: "100+", label: "Government Clients" },
  { icon: Shield, value: "99.9%", label: "Security Compliance" },
  { icon: Activity, value: "24/7", label: "Support Available" }
];

export function ServicesSection() {
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
          <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive IT Solutions for{" "}
            <span className="text-brand-600 dark:text-brand-400">
              Healthcare & Government
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From AI-powered healthcare analytics to secure government software, we deliver innovative solutions that transform organizations and improve outcomes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${service.bgColor} rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-800 hover:border-brand-500 transition-all duration-300 hover:shadow-lg`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <CheckCircle className="w-4 h-4 text-brand-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <GradientButton
                  variant="variant"
                  className="w-full group-hover:border-brand-600 text-gray-900 hover:text-white transition-colors duration-300"
                  onClick={() => window.location.href = service.href}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
