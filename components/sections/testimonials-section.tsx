"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2, User } from "lucide-react";

const testimonials = [
  {
    content: "M2S Tech Solutions transformed our development team. The quality of developers they provided exceeded our expectations, and the seamless integration process made scaling effortless.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    rating: 5,
    type: "client"
  },
  {
    content: "The career coaching I received was invaluable. They helped me optimize my resume, prepare for interviews, and land my dream job at a top tech company. Highly recommend!",
    author: "Michael Rodriguez",
    role: "Senior Developer",
    company: "CloudScale",
    rating: 5,
    type: "candidate"
  },
  {
    content: "Their RPO services streamlined our entire hiring process. We reduced time-to-hire by 60% while improving candidate quality. The dedicated team truly understands our needs.",
    author: "Jennifer Park",
    role: "VP of Engineering",
    company: "DataVault",
    rating: 5,
    type: "client"
  },
  {
    content: "M2S helped me transition from a traditional role to a remote tech position. Their guidance on remote work best practices and technical skills was exactly what I needed.",
    author: "David Kim",
    role: "Full Stack Developer",
    company: "RemoteFirst",
    rating: 5,
    type: "candidate"
  },
  {
    content: "The staff augmentation service is outstanding. We got experienced developers who integrated perfectly with our team culture and delivered high-quality work from day one.",
    author: "Lisa Thompson",
    role: "Engineering Manager",
    company: "InnovateLab",
    rating: 5,
    type: "client"
  },
  {
    content: "Their interview preparation coaching was game-changing. I went from struggling with technical interviews to confidently landing multiple offers. The personalized approach made all the difference.",
    author: "Alex Johnson",
    role: "Software Engineer",
    company: "StartupXYZ",
    rating: 5,
    type: "candidate"
  }
];

const clientLogos = [
  "TechFlow Inc.",
  "CloudScale",
  "DataVault",
  "RemoteFirst",
  "InnovateLab",
  "StartupXYZ",
  "NextGen Solutions",
  "FutureTech"
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our{" "}
            <span className="text-brand-600 dark:text-brand-400">
              Clients & Candidates
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real people have to say about working with M2S Tech Solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-800 hover:border-brand-500 transition-all duration-300 hover:shadow-lg relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    testimonial.type === 'client' 
                      ? 'bg-brand-50 dark:bg-brand-900/30' 
                      : 'bg-green-50 dark:bg-green-900/30'
                  }`}>
                    {testimonial.type === 'client' ? (
                      <Building2 className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    ) : (
                      <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
