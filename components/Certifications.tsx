"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
  const certifications = portfolioData.certifications;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
      },
    },
  };

  return (
    <section id="certifications" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Credentials</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Professional Certifications
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.06] overflow-hidden flex flex-col justify-between h-full group"
            >
              {/* Media Header (Certification Badge Placeholder Grid) */}
              <div className="relative aspect-video w-full bg-gradient-to-br from-surface to-background border-b border-white/[0.05] overflow-hidden flex items-center justify-center">
                <div className="p-4 bg-primary/5 rounded-full border border-primary/10">
                  <Award className="w-10 h-10 text-primary/40 group-hover:text-primary/70 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Overlay Badge */}
                {cert.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-[9px] font-semibold text-secondary uppercase tracking-wider">
                    {cert.badge}
                  </div>
                )}
              </div>

              {/* Certification Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                    <Award className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <h4 className="text-base font-display font-semibold text-white group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="flex justify-between items-center border-t border-white/[0.05] pt-4 text-xs text-text-secondary">
                  <div className="flex items-center gap-1 font-light">
                    <Calendar className="w-3.5 h-3.5 text-text-secondary/60" />
                    <span>Issued {cert.date}</span>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-400 font-semibold flex items-center gap-1 transition-colors"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
