"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, BookOpen, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { name, university, degree, coursework, additionalEdu } = portfolioData.personalInfo;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const focusAreas = [
    { title: "Full-Stack Web Development", desc: "Building scalable web portals using Next.js, Node.js, and modern DBs." },
    { title: "Cloud Engineering", desc: "Leveraging AWS, Docker, and CI/CD pipelines to deploy robust architectures." },
    { title: "Mobile Apps", desc: "Creating performant cross-platform mobile apps with React Native." },
    { title: "AI/ML Integration", desc: "Integrating LLMs, computer vision, and predictive analytics into software." }
  ];

  return (
    <section id="about" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Academic Foundation & Technical Focus
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Avatar/Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group max-w-[320px] w-full">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-40 blur-md group-hover:opacity-70 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-surface border border-white/10 aspect-square">
                <Image
                  src="/Images/Mahesh.png"
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-md) 100vw, 320px"
                  priority
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 -right-4 bg-background border border-border px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="text-[10px] text-text-secondary uppercase font-semibold">Academic Status</div>
                  <div className="text-xs font-bold text-white">Honors Student</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Education & Focus */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio text */}
            <div className="space-y-4">
              <p className="text-lg font-light text-text-secondary leading-relaxed">
                I am currently pursuing my undergraduate degree at <strong className="text-white font-medium">{university}</strong>. My academic coursework combined with independent development has enabled me to build solid fundamentals in software architecture, algorithms, database management, and cloud operations.
              </p>
              <p className="text-text-secondary font-light leading-relaxed">
                With a focus on building systems that solve practical challenges, I enjoy diving deep into full-stack and mobile developer workflows. I thrive in collaborative environments where performance, accessibility, and high-quality engineering are prioritized.
              </p>
            </div>

            {/* Academic & Professional Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* University Details Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-panel p-6 border border-border/80 flex gap-4 items-start"
              >
                <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h4 className="text-sm font-display font-semibold text-white">{university}</h4>
                    <span className="text-[10px] bg-white/[0.05] border border-white/[0.05] px-2 py-0.5 rounded text-text-secondary font-medium">Feb 2023 - Present</span>
                  </div>
                  <p className="text-xs text-text-secondary font-medium">{degree}</p>
                  <p className="text-[11px] text-text-secondary/80 leading-relaxed font-light">
                    <strong>Coursework:</strong> {coursework}
                  </p>
                </div>
              </motion.div>

              {/* SLIIT AI/ML Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-panel p-6 border border-border/80 flex gap-4 items-start"
              >
                <div className="p-3 bg-secondary/10 rounded-2xl text-secondary border border-secondary/20 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h4 className="text-sm font-display font-semibold text-white">{additionalEdu.program}</h4>
                    <span className="text-[10px] bg-white/[0.05] border border-white/[0.05] px-2 py-0.5 rounded text-text-secondary font-medium">{additionalEdu.date}</span>
                  </div>
                  <p className="text-xs text-text-secondary font-medium">{additionalEdu.issuer}</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-text-secondary/80 font-light">
                    {additionalEdu.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Focus Areas Grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Engineering Focus Areas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, i) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-white">{area.title}</h5>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5 font-light">{area.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
