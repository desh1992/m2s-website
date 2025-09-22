"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Building2, 
  Target, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Clock,
  Award
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Staff Augmentation",
    description: "Scale your development team quickly with pre-vetted, experienced professionals who integrate seamlessly into your existing workflows.",
    features: ["Pre-vetted talent", "Quick onboarding", "Flexible contracts", "24/7 support"],
    cta: "Hire Developers",
    href: "/services/staff-augmentation",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    icon: Target,
    title: "Direct Hire Recruitment",
    description: "Find the perfect permanent team members through our comprehensive recruitment process and extensive network of top-tier candidates.",
    features: ["Extensive network", "Thorough screening", "Cultural fit assessment", "90-day guarantee"],
    cta: "Start Hiring",
    href: "/services/direct-hire",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    icon: Users,
    title: "Career Coaching",
    description: "Accelerate your career growth with personalized coaching, resume optimization, and interview preparation from industry experts.",
    features: ["1-on-1 coaching", "Resume optimization", "Interview prep", "Career planning"],
    cta: "Get Coaching",
    href: "/services/career-coaching",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    icon: Zap,
    title: "RPO Services",
    description: "Outsource your entire recruitment process to our experts, reducing time-to-hire and improving candidate quality.",
    features: ["End-to-end process", "Dedicated team", "Advanced analytics", "Cost reduction"],
    cta: "Learn More",
    href: "/services/rpo",
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  }
];

const stats = [
  { icon: Users, value: "200+", label: "Developers Placed" },
  { icon: Clock, value: "2 Weeks", label: "Average Fill Time" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
  { icon: CheckCircle, value: "50+", label: "Happy Clients" }
];

export function ServicesSection() {
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
            Our Services
          </div>
          <h2 className="text-display-lg font-display font-bold text-text-primary mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-800">
              Every Need
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From staff augmentation to career coaching, we provide end-to-end solutions that help companies grow and professionals advance their careers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${service.bgColor} rounded-2xl p-8 h-full border border-border-primary hover:border-border-brand transition-all duration-300 hover:shadow-lg`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-tertiary">
                      <CheckCircle className="w-4 h-4 text-brand-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-border-brand text-text-brand-primary hover:bg-bg-brand-primary group-hover:border-brand-600 transition-all duration-300"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-bg-primary rounded-2xl p-8 md:p-12 border border-border-primary"
        >
          <div className="text-center mb-12">
            <h3 className="text-display-md font-display font-bold text-text-primary mb-4">
              Proven Results
            </h3>
            <p className="text-text-secondary text-lg">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-text-brand-primary" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
