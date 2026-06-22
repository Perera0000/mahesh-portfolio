"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Terminal, Sparkles, Cloud, Chrome } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const renderProjectImage = (imagePath: string, title: string) => {
  const isPlaceholder = imagePath.includes("ai_photoshoot") || imagePath.includes("browser_extensions");

  if (isPlaceholder) {
    let gradient = "from-blue-600/10 to-indigo-600/10 border-blue-500/10";
    let Icon = Terminal;
    
    if (title.toLowerCase().includes("photoshoot")) {
      gradient = "from-emerald-600/10 to-teal-600/10 border-emerald-500/10";
      Icon = Sparkles;
    } else if (title.toLowerCase().includes("weather")) {
      gradient = "from-sky-600/10 to-blue-600/10 border-sky-500/10";
      Icon = Cloud;
    } else if (title.toLowerCase().includes("browser") || title.toLowerCase().includes("extension")) {
      gradient = "from-purple-600/10 to-pink-600/10 border-purple-500/10";
      Icon = Chrome;
    }

    return (
      <div className={`w-full h-full bg-gradient-to-br ${gradient} border flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-lg relative z-10 backdrop-blur-sm">
          <Icon className="w-10 h-10 text-white/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
        </div>
        
        <div className="absolute bottom-3 text-[10px] text-text-secondary/40 font-mono tracking-widest uppercase z-10">
          Source Sandbox
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imagePath}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-w-md) 100vw, (max-w-lg) 50vw, 33vw"
    />
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"featured" | "additional">("featured");
  const projects = portfolioData.projects;

  const featuredProjects = projects.filter((p) => p.featured);
  const additionalProjects = projects.filter((p) => !p.featured);
  const activeProjects = activeTab === "featured" ? featuredProjects : additionalProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Engineering Projects & Built Systems
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
          <p className="text-text-secondary text-sm font-light mt-4 max-w-xl">
            A detailed catalog of full-stack web platforms, cross-platform mobile apps, and developer browser extensions.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-surface/50 border border-white/10 p-1.5 rounded-2xl flex gap-1 backdrop-blur-md relative z-20">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "featured"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              Featured Systems
            </button>
            <button
              onClick={() => setActiveTab("additional")}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "additional"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              Additional & Extensions
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="glass-panel glass-panel-hover flex flex-col h-full rounded-2xl overflow-hidden group border border-white/[0.06] bg-surface/20"
              >
                {/* Card Media Header */}
                <div className="relative aspect-video w-full overflow-hidden bg-surface">
                  {/* Overlay Badge */}
                  {project.badge && (
                    <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-primary uppercase tracking-wider">
                      {project.badge}
                    </div>
                  )}
                  
                  {renderProjectImage(project.image, project.title)}
                  
                  {/* Tech Count overlay on hover */}
                  <div className="absolute inset-0 bg-background/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10 px-6">
                    <div className="text-center space-y-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-widest">Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bg-white/10 text-white text-[10px] px-2.5 py-0.5 rounded border border-white/5 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-display font-semibold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Buttons & Tags */}
                  <div className="space-y-4 pt-2">
                    {/* Inline list of main tags (first 3) */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-white/[0.03] text-text-secondary text-[10px] px-2 py-0.5 rounded border border-white/[0.04]">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] text-primary self-center font-medium pl-1">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4 border-t border-white/[0.06] pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-surface hover:bg-white/[0.04] text-xs font-semibold text-white py-2.5 rounded-lg border border-white/10 transition-colors"
                        >
                          <Github className="w-4 h-4 text-text-secondary" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-xs font-semibold text-white py-2.5 rounded-lg transition-colors shadow-md shadow-primary/10"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
