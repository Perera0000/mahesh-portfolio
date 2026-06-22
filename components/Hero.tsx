"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Award, Briefcase, GraduationCap, Star } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import TerminalConsole from "./TerminalConsole";

// ─── Floating Tech Badges (Layer 5) ──────────────────────────────────────────
const floatingBadges: {
  text: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
  icon: string;
}[] = [
  { text: "React",      top: "12%",  left: "5%",  delay: 0,   icon: "⚛️" },
  { text: "TypeScript", top: "25%",  right: "3%", delay: 0.4, icon: "𝑻𝑺" },
  { text: "AWS",        top: "60%",  left: "2%",  delay: 0.8, icon: "☁️" },
  { text: "Next.js",    bottom: "20%", right: "5%", delay: 1.2, icon: "▲" },
  { text: "Docker",     top: "80%",  left: "8%",  delay: 0.6, icon: "🐳" },
  { text: "FastAPI",    top: "45%",  right: "1%", delay: 1.0, icon: "⚡" },
];

// ─── Typewriter Roles ─────────────────────────────────────────────────────────
const roles = [
  "Cloud & DevOps Practitioner",
  "Full-Stack Web Developer",
  "Information Systems Student",
  "AI Integration Specialist",
];

// ─── Pre-defined Particles (Layer 4) — fixed values to avoid hydration error ──
const PARTICLES = [
  { id: 0,  x: 15,  y: 20,  size: 2, duration: 12, delay: 0   },
  { id: 1,  x: 78,  y: 35,  size: 1, duration: 18, delay: 2   },
  { id: 2,  x: 42,  y: 70,  size: 2, duration: 14, delay: 1   },
  { id: 3,  x: 88,  y: 60,  size: 1, duration: 20, delay: 3   },
  { id: 4,  x: 25,  y: 85,  size: 2, duration: 16, delay: 1.5 },
  { id: 5,  x: 60,  y: 15,  size: 1, duration: 22, delay: 0.5 },
  { id: 6,  x: 5,   y: 50,  size: 2, duration: 10, delay: 4   },
  { id: 7,  x: 92,  y: 80,  size: 1, duration: 15, delay: 2.5 },
  { id: 8,  x: 35,  y: 42,  size: 2, duration: 19, delay: 3.5 },
  { id: 9,  x: 68,  y: 90,  size: 1, duration: 13, delay: 1   },
  { id: 10, x: 50,  y: 5,   size: 2, duration: 17, delay: 0   },
  { id: 11, x: 12,  y: 65,  size: 1, duration: 21, delay: 2   },
  { id: 12, x: 80,  y: 10,  size: 2, duration: 11, delay: 4.5 },
  { id: 13, x: 22,  y: 95,  size: 1, duration: 16, delay: 1.5 },
  { id: 14, x: 95,  y: 45,  size: 2, duration: 14, delay: 3   },
  { id: 15, x: 47,  y: 55,  size: 1, duration: 20, delay: 0.5 },
  { id: 16, x: 70,  y: 75,  size: 2, duration: 18, delay: 2   },
  { id: 17, x: 8,   y: 30,  size: 1, duration: 12, delay: 5   },
  { id: 18, x: 55,  y: 38,  size: 2, duration: 23, delay: 1   },
  { id: 19, x: 33,  y: 18,  size: 1, duration: 15, delay: 3.5 },
];

export default function Hero() {
  const { name, title, bio, github, linkedin, resumeUrl, metrics } =
    portfolioData.personalInfo;

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
      timer = setTimeout(tick, isDeleting ? 30 : 60);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  // ── Animation Variants ────────────────────────────────────────────────────
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
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

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 1 — Fine 40×40px graph-paper grid
      ════════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.065) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.065) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 90% 85% at 50% 40%, #000 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 85% at 50% 40%, #000 50%, transparent 100%)",
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 2 — Structural 200×200px grid (stronger opacity)
      ════════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "200px 200px",
          maskImage:
            "radial-gradient(ellipse 80% 75% at 50% 40%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 75% at 50% 40%, #000 40%, transparent 100%)",
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 3 — Ambient glow blobs (blue + purple)
      ════════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        {/* Primary blue glow — top left */}
        <div
          className="absolute animate-pulse-glow"
          style={{
            top: "10%", left: "3%",
            width: 420, height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Purple glow — bottom right */}
        <div
          className="absolute animate-pulse-glow"
          style={{
            bottom: "10%", right: "3%",
            width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            filter: "blur(70px)",
            animationDelay: "2s",
          }}
        />
        {/* Soft center glow — behind profile */}
        <div
          className="absolute animate-pulse-glow"
          style={{
            top: "30%", right: "18%",
            width: 280, height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.20) 0%, rgba(139,92,246,0.12) 50%, transparent 80%)",
            filter: "blur(45px)",
            animationDelay: "1s",
          }}
        />
        {/* Accent mid-left */}
        <div
          className="absolute animate-pulse-glow"
          style={{
            top: "50%", left: "35%",
            width: 240, height: 240,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
            filter: "blur(50px)",
            animationDelay: "3.5s",
          }}
        />
      </motion.div>

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 4 — Animated floating particles
      ════════════════════════════════════════════════════════════════════ */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background:
                p.id % 3 === 0
                  ? "rgba(59,130,246,0.55)"
                  : p.id % 3 === 1
                  ? "rgba(139,92,246,0.45)"
                  : "rgba(255,255,255,0.25)",
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, p.id % 2 === 0 ? 6 : -6, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 5 — Floating tech badges
      ════════════════════════════════════════════════════════════════════ */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.7, 1, 0.7],
            y: [0, -10, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            delay: badge.delay,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute hidden xl:flex items-center gap-2 backdrop-blur-md px-3.5 py-2 rounded-xl text-[11px] font-mono font-semibold shadow-lg border pointer-events-none"
          style={{
            top: badge.top,
            left: badge.left,
            right: badge.right,
            bottom: badge.bottom,
            background: "rgba(11,17,32,0.75)",
            borderColor: "rgba(59,130,246,0.25)",
            color: "rgba(147,197,253,0.90)",
            boxShadow: "0 0 20px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Grid corner marks — blueprint aesthetic */}
          <span
            className="absolute -top-px -left-px w-2 h-2 border-t border-l"
            style={{ borderColor: "rgba(59,130,246,0.5)" }}
          />
          <span
            className="absolute -bottom-px -right-px w-2 h-2 border-b border-r"
            style={{ borderColor: "rgba(59,130,246,0.5)" }}
          />
          <span className="text-[10px]">{badge.icon}</span>
          {badge.text}
        </motion.div>
      ))}

      {/* ════════════════════════════════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── Left: Intro Text ─────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left"
        >
          {/* Status pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex self-center lg:self-start items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Available for Internships
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-text-primary leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              {name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
          >
            {title}
          </motion.h2>

          {/* Typewriter */}
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

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            {bio}
          </motion.p>

          {/* CTA Buttons */}
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

        {/* ── Right: Stats + Profile + Terminal ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          {/* Metric Cards */}
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

          {/* Profile Photo with dual-color radial glow ring (Layer 3 focal) */}
          <div className="flex justify-center mt-2 mb-2">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(139,92,246,0.20) 50%, transparent 75%)",
                  transform: "scale(1.6)",
                  filter: "blur(12px)",
                }}
              />
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/40 shadow-xl ring-4 ring-primary/15"
                style={{ boxShadow: "0 0 30px rgba(59,130,246,0.30), 0 0 60px rgba(139,92,246,0.15)" }}
              >
                <Image
                  src="/Images/Mahesh.png"
                  alt="Mahesh Perera"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            </div>
          </div>

          {/* Interactive Dev Terminal */}
          <TerminalConsole />
        </motion.div>
      </div>

      {/* ── Scroll Indicator ──────────────────────────────────────────────── */}
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
