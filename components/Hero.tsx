"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Award, Briefcase, GraduationCap, Star } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import TerminalConsole from "./TerminalConsole";

const floatingBadges: { text: string; top?: string; left?: string; right?: string; bottom?: string; delay: number }[] = [
  { text: "React", top: "12%", left: "5%", delay: 0 },
  { text: "TypeScript", top: "25%", right: "3%", delay: 0.4 },
  { text: "AWS", top: "60%", left: "2%", delay: 0.8 },
  { text: "Next.js", bottom: "20%", right: "5%", delay: 1.2 },
  { text: "Docker", top: "80%", left: "8%", delay: 0.6 },
  { text: "FastAPI", top: "45%", right: "1%", delay: 1.0 },
];

const roles = [
  "Cloud & DevOps Practitioner",
  "Full-Stack Web Developer",
  "Information Systems Student",
  "AI Integration Specialist"
];

export default function Hero() {
  const { name, title, bio, github, linkedin, resumeUrl, metrics } = portfolioData.personalInfo;

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      
      const speed = isDeleting ? 30 : 60;
      timer = setTimeout(tick, speed);
    };
    
    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        stiffness: 100,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Icon mapper for metrics
  const getMetricIcon = (label: string) => {
    switch (label) {
      case "Projects Completed":
        return <Briefcase className="w-5 h-5 text-primary" />;
      case "Certifications":
        return <Award className="w-5 h-5 text-secondary" />;
      case "Hackathon Finishes":
        return <Star className="w-5 h-5 text-yellow-500" />;
      default:
        return <GraduationCap className="w-5 h-5 text-success" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background"
    >
      {/* Richer Decorative Glow Blobs */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/15 blur-[110px] animate-pulse-glow" />
        <div className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-secondary/12 blur-[130px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-blue-500/8 blur-[90px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </motion.div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Tech Badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ delay: badge.delay, duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden xl:flex items-center gap-1.5 bg-surface/60 border border-primary/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold text-primary/80 shadow-lg"
          style={{ top: badge.top, left: badge.left, right: badge.right, bottom: badge.bottom }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          {badge.text}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Intro Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex self-center lg:self-start items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Available for Internships
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-text-primary leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              {name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
          >
            {title}
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className="text-base sm:text-lg font-sans font-medium text-text-secondary flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1.5"
          >
            <span>Undergraduate @ Rajarata University of Sri Lanka</span>
            <span className="text-primary hidden sm:inline">|</span>
            <span className="text-white/90 font-mono text-sm sm:text-base font-semibold bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md flex items-center min-h-[28px] shrink-0">
              {currentText}
              <span className="w-1.5 h-3.5 bg-primary ml-1 animate-pulse" />
            </span>
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-base text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            {bio}
          </motion.p>

          {/* Socials & CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-2"
          >
            <a
              href="#projects"
              className="group bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/45 w-full sm:w-auto justify-center"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface hover:bg-[#1f293d] border border-border text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FileText className="w-4 h-4 text-primary" />
              Download Resume
            </a>

            <div className="flex gap-3 mt-4 sm:mt-0">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface hover:bg-[#1f293d] border border-border hover:border-text-secondary text-text-secondary hover:text-white p-3.5 rounded-xl transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface hover:bg-[#1f293d] border border-border hover:border-text-secondary text-text-secondary hover:text-white p-3.5 rounded-xl transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto w-full">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-[135px] border border-border/80 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors border border-white/[0.04]">
                    {getMetricIcon(metric.label)}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-text-secondary font-medium tracking-wide">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center mt-2 mb-2">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/20 ring-4 ring-primary/10">
              <Image
                src="/Images/Mahesh.png"
                alt="Mahesh Perera"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>

          {/* Interactive Dev Terminal */}
          <TerminalConsole />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-xs text-text-secondary hover:text-white"
        >
          Scroll Down
          <span className="w-1.5 h-3 bg-text-secondary/40 rounded-full flex justify-center p-0.5">
            <span className="w-1 h-1 bg-white rounded-full" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
