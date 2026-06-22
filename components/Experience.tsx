"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Star, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const experiences = portfolioData.experience;
  const leadership = portfolioData.leadership;
  const achievements = portfolioData.achievements;

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Timeline</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Experience & Key Milestones
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Roles & Leadership (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Professional & Leadership Roles
            </h4>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-12">
              
              {/* Professional Experience */}
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-120 transition-transform" />

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h5>
                      <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary font-medium">{exp.company}</p>
                    
                    <ul className="space-y-2 pt-1">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-text-secondary leading-relaxed font-light">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {leadership.map((lead, i) => (
                <motion.div
                  key={`${lead.role}-${lead.organization}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (experiences.length + i) * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-background group-hover:scale-120 transition-transform" />

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h5 className="text-lg font-display font-bold text-white group-hover:text-secondary transition-colors">
                          {lead.role}
                        </h5>
                        {lead.badge && (
                          <span className="text-[10px] bg-secondary/15 text-secondary border border-secondary/25 px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                            {lead.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs bg-surface border border-white/10 text-text-secondary px-2.5 py-1 rounded-full font-medium">
                        {lead.duration}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary font-medium">{lead.organization}</p>
                    
                    <ul className="space-y-2 pt-1">
                      {lead.description.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-text-secondary leading-relaxed font-light">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* Column 2: Hackathons & Achievements (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-6 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              Hackathons & Achievements
            </h4>

            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-panel p-5 border border-white/[0.06] hover:border-yellow-500/20 transition-all rounded-xl relative group overflow-hidden"
                >
                  {/* Subtle Yellow Glow on Top-Right */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-yellow-500/10 transition-colors" />

                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <span className="text-[10px] text-yellow-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          {ach.event}
                        </span>
                        <h5 className="text-base font-display font-semibold text-white group-hover:text-yellow-500/90 transition-colors">
                          {ach.title}
                        </h5>
                      </div>
                      <span className="text-[10px] text-text-secondary shrink-0 bg-white/[0.03] border border-white/[0.04] px-2 py-0.5 rounded">
                        {ach.date}
                      </span>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed font-light">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
