"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Building2, 
  Users, 
  ChevronDown,
  UserCheck,
  Briefcase,
  BookOpen,
  Phone
} from "lucide-react";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "For Employers",
      href: "/employers",
      icon: Building2,
      description: "Staffing & Recruitment Solutions",
      items: [
        { name: "Staff Augmentation", href: "/services/staff-augmentation" },
        { name: "Direct Hire", href: "/services/direct-hire" },
        { name: "Contract Staffing", href: "/services/contract-staffing" },
        { name: "RPO Services", href: "/services/rpo" },
      ]
    },
    {
      name: "For Candidates",
      href: "/candidates",
      icon: Users,
      description: "Career Opportunities & Services",
      items: [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Career Coaching", href: "/services/career-coaching" },
        { name: "Resume Review", href: "/services/resume-review" },
        { name: "Interview Prep", href: "/services/interview-prep" },
      ]
    },
    {
      name: "Services",
      href: "/services",
      icon: Briefcase,
      description: "Our Complete Service Portfolio",
      items: [
        { name: "All Services", href: "/services" },
        { name: "Technology Focus", href: "/services/technology" },
        { name: "Industry Expertise", href: "/services/industries" },
        { name: "Process Overview", href: "/how-we-work" },
      ]
    },
    {
      name: "Resources",
      href: "/resources",
      icon: BookOpen,
      description: "Insights & Career Guidance",
      items: [
        { name: "Blog", href: "/blog" },
        { name: "Career Tips", href: "/resources/career-tips" },
        { name: "Market Insights", href: "/resources/market-insights" },
        { name: "Success Stories", href: "/resources/success-stories" },
      ]
    },
    {
      name: "About",
      href: "/about",
      icon: UserCheck,
      description: "Our Story & Team",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
      description: "Get In Touch",
    },
  ];

  return (
    <nav className="bg-bg-primary/95 backdrop-blur-md border-b border-border-primary sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M2S</span>
            </div>
            <span className="text-xl font-bold text-text-primary">M2S Tech Solutions</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
                  onClick={() => item.items && setActiveDropdown(
                    activeDropdown === item.name ? null : item.name
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.items && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-bg-primary border border-border-primary rounded-lg shadow-xl z-50"
                    >
                      <div className="p-4">
                        <div className="text-sm font-semibold text-text-primary mb-3">
                          {item.description}
                        </div>
                        <div className="space-y-2">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-md transition-colors duration-200"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-border-brand text-text-brand-primary hover:bg-bg-brand-primary"
            >
              <Users className="w-4 h-4 mr-2" />
              Find Jobs
            </Button>
            <Button
              size="sm"
              className="bg-bg-brand-solid hover:bg-bg-brand-solid_hover text-text-primary_on-brand"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Hire Talent
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border-primary"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                    {item.items && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-text-tertiary hover:text-text-secondary transition-colors duration-200 py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-border-primary space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-border-brand text-text-brand-primary hover:bg-bg-brand-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Find Jobs
                  </Button>
                  <Button
                    className="w-full bg-bg-brand-solid hover:bg-bg-brand-solid_hover text-text-primary_on-brand"
                    onClick={() => setIsOpen(false)}
                  >
                    <Building2 className="w-4 h-4 mr-2" />
                    Hire Talent
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
