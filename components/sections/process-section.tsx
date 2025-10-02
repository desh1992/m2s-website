"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Users, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  Award,
  Building2
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We start by understanding your specific needs, company culture, and technical requirements to create a tailored approach.",
    icon: Search,
    details: [
      "Requirements gathering",
      "Technical assessment",
      "Cultural fit analysis",
      "Timeline planning"
    ],
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    step: "02",
    title: "Talent Sourcing",
    description: "Our extensive network and advanced screening process ensure we find the perfect match for your needs.",
    icon: Users,
    details: [
      "Network activation",
      "Advanced screening",
      "Technical evaluation",
      "Reference checks"
    ],
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    step: "03",
    title: "Interview & Selection",
    description: "We facilitate the interview process and provide detailed feedback to help you make the best decision.",
    icon: MessageSquare,
    details: [
      "Interview coordination",
      "Technical assessments",
      "Cultural fit evaluation",
      "Detailed feedback"
    ],
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    step: "04",
    title: "Onboarding & Success",
    description: "We ensure smooth integration and provide ongoing support to guarantee long-term success.",
    icon: CheckCircle,
    details: [
      "Seamless onboarding",
      "Integration support",
      "Performance monitoring",
      "Ongoing relationship"
    ],
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Average 2-week placement time",
    stat: "2 Weeks"
  },
  {
    icon: Target,
    title: "High Success Rate",
    description: "98% client satisfaction rate",
    stat: "98%"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "90-day replacement guarantee",
    stat: "90 Days"
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-bg-brand-primary text-text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-display-lg font-display font-bold text-text-primary mb-6">
            How We{" "}
            <span className="text-brand-600 dark:text-brand-400">
              Deliver Results
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our proven 4-step process ensures we find the right talent for your team and provide ongoing support for long-term success.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${step.bgColor} rounded-2xl p-8 h-full border border-border-primary hover:border-border-brand transition-all duration-300 hover:shadow-lg`}>
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-text-primary opacity-20">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-text-tertiary">
                      <CheckCircle className="w-4 h-4 text-brand-600 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-bg-primary rounded-2xl p-8 md:p-12 border border-border-primary"
        >
          <div className="text-center mb-12">
            <h3 className="text-display-md font-display font-bold text-text-primary mb-4">
              Why Choose Our Process?
            </h3>
            <p className="text-text-secondary text-lg">
              Our methodology delivers consistent, high-quality results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-text-brand-primary" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-2">
                  {benefit.stat}
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h4>
                <p className="text-text-secondary">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-display-md font-display font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you find the perfect talent or advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <Building2 className="w-5 h-5 mr-2" />
                Hire Talent
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Find Jobs
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
