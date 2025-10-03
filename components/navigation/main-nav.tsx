"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  Menu, 
  X, 
  Building2, 
  Users, 
  ChevronDown,
  UserCheck,
  Briefcase,
  Phone,
  Home
} from "lucide-react";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "Home",
      href: "/#hero",
      icon: Home,
      description: "Back to Homepage",
    },
    {
      name: "Services",
      href: "/services",
      icon: Briefcase,
      description: "Our Complete Service Portfolio",
      items: [
        { name: "Healthcare IT Services", href: "/services/healthcare" },
        { name: "County & Government Services", href: "/services/government" },
        { name: "ML & AI Services", href: "/services/ai-ml" },
        { name: "Cybersecurity Services", href: "/services/cybersecurity" },
        { name: "Strategic Business Services", href: "/services/strategic" },
        { name: "Custom Development & Innovation", href: "/services/custom-development" },
      ]
    },
    {
      name: "About",
      href: "/about",
      icon: UserCheck,
      description: "Our Story & Team",
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
                {item.items ? (
                  <button
                    className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
                    onClick={() => setActiveDropdown(
                      activeDropdown === item.name ? null : item.name
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl z-50"
                    >
                      <div className="p-4">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          {item.description}
                        </div>
                        <div className="space-y-2">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <GradientButton
              className="text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </GradientButton>
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
                
                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-border-primary">
                  <GradientButton
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </GradientButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
