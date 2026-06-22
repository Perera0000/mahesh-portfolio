"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Publications() {
  const publications = portfolioData.publications;

  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Research</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Publications & Academic Writing
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
        </div>

        {/* Publications Layout */}
        <div className="max-w-4xl mx-auto">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 sm:p-8 border border-white/[0.06] hover:border-primary/20 transition-all rounded-2xl flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Publication Icon Box */}
              <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20 shrink-0">
                <BookOpen className="w-8 h-8" />
              </div>

              {/* Publication Details */}
              <div className="space-y-4 flex-grow">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-secondary">
                    <span className="font-semibold text-primary">{pub.journal}</span>
                    <span className="w-1 h-1 rounded-full bg-text-secondary/30" />
                    <span className="flex items-center gap-1 font-light">
                      <Calendar className="w-3.5 h-3.5" />
                      {pub.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-white leading-snug">
                    {pub.title}
                  </h4>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {pub.description}
                </p>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-400 hover:underline transition-colors pt-1"
                  >
                    Read Full Publication
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
