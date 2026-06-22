"use client";

import { motion } from "framer-motion";
import { 
  Code, FileCode, Terminal, Cpu, Layout, Globe, 
  Layers, Palette, Activity, Wind, Server, Network, 
  Zap, Database, Smartphone, Cloud, Box, GitBranch,
  Code2, Shield, LineChart
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code, FileCode, Terminal, Cpu, Layout, Globe, 
  Layers, Palette, Activity, Wind, Server, Network, 
  Zap, Database, Smartphone, Cloud, Box, GitBranch,
  Code2, Shield, LineChart
};

export default function Skills() {
  const skillCategories = portfolioData.skills;

  return (
    <section id="skills" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Skills</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Technical Expertise & Tooling
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
          <p className="text-text-secondary text-sm font-light mt-4 max-w-xl">
            A comprehensive breakdown of languages, frameworks, libraries, and cloud services that I have utilized in engineering projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.06] hover:border-primary/10 transition-colors"
            >
              <h4 className="text-lg font-display font-semibold text-white mb-6 pb-2 border-b border-white/[0.05] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {category.category}
              </h4>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => {
                  const IconComponent = iconMap[skill.iconName] || Code;
                  return (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <div className="flex items-center gap-2 text-text-secondary group-hover:text-white transition-colors">
                          <div className="p-1 rounded-md bg-white/[0.03] group-hover:bg-primary/10 group-hover:text-primary transition-all border border-white/[0.02]">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-xs text-text-secondary font-light">{skill.level}%</span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="h-1.5 bg-background rounded-full overflow-hidden border border-white/[0.02]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
