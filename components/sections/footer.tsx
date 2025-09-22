"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Building2,
  Users,
  Briefcase,
  BookOpen,
  UserCheck,
  Phone as PhoneIcon
} from "lucide-react";

const footerLinks = {
  "For Employers": [
    { name: "Staff Augmentation", href: "/services/staff-augmentation" },
    { name: "Direct Hire", href: "/services/direct-hire" },
    { name: "Contract Staffing", href: "/services/contract-staffing" },
    { name: "RPO Services", href: "/services/rpo" },
    { name: "Technology Focus", href: "/services/technology" },
    { name: "Industry Expertise", href: "/services/industries" }
  ],
  "For Candidates": [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Career Coaching", href: "/services/career-coaching" },
    { name: "Resume Review", href: "/services/resume-review" },
    { name: "Interview Prep", href: "/services/interview-prep" },
    { name: "Career Tips", href: "/resources/career-tips" },
    { name: "Success Stories", href: "/resources/success-stories" }
  ],
  "Company": [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about/team" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Success Stories", href: "/resources/success-stories" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ],
  "Resources": [
    { name: "Blog", href: "/blog" },
    { name: "Market Insights", href: "/resources/market-insights" },
    { name: "Career Tips", href: "/resources/career-tips" },
    { name: "Interview Guide", href: "/resources/interview-guide" },
    { name: "Resume Templates", href: "/resources/resume-templates" },
    { name: "FAQ", href: "/faq" }
  ]
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/m2stechs" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/m2stechs" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/m2stechs" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/m2stechs" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/m2stechs" }
];

const quickActions = [
  {
    icon: Building2,
    title: "Hire Talent",
    description: "Find the perfect team members",
    href: "/employers",
    color: "bg-bg-brand-solid hover:bg-bg-brand-solid_hover text-text-primary_on-brand"
  },
  {
    icon: Users,
    title: "Find Jobs",
    description: "Discover your next opportunity",
    href: "/candidates",
    color: "border-border-brand text-text-brand-primary hover:bg-bg-brand-primary"
  },
  {
    icon: PhoneIcon,
    title: "Get in Touch",
    description: "Speak with our team",
    href: "/contact",
    color: "border-border-primary text-text-primary hover:bg-bg-secondary"
  }
];

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-primary">
      {/* Newsletter Section */}
      <div className="border-b border-border-primary">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-display-sm font-display font-bold text-text-primary mb-4">
              Stay Updated
            </h3>
            <p className="text-text-secondary mb-8">
              Get the latest job opportunities, career tips, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border-primary rounded-lg bg-bg-primary text-text-primary placeholder-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-brand-500/20 transition-colors duration-300"
              />
              <button className="bg-bg-brand-solid hover:bg-bg-brand-solid_hover text-text-primary_on-brand px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M2S</span>
              </div>
              <span className="text-xl font-bold text-text-primary">M2S Tech Solutions</span>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Connecting top tech talent with leading companies through professional recruitment services and staff augmentation solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@m2stechs.com" className="hover:text-text-primary transition-colors">
                  contact@m2stechs.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Phone className="w-4 h-4" />
                <a href="tel:+15551234567" className="hover:text-text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin className="w-4 h-4" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-bg-secondary rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-brand-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-text-primary mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border-primary"
        >
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-text-primary mb-2">
              Ready to Get Started?
            </h4>
            <p className="text-text-secondary">
              Choose your path and let's make it happen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.title}
                href={action.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${action.color}`}
              >
                <div className="flex items-center gap-3">
                  <action.icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-sm opacity-80">{action.description}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-primary bg-bg-secondary">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-text-secondary text-sm">
              © 2024 M2S Tech Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-text-secondary hover:text-text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-text-secondary hover:text-text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
