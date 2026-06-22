"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Send, MapPin, CheckCircle2, Phone, Facebook } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { email, github, linkedin, facebook, medium, phone, resumeUrl, location } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Contact</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Get In Touch
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
          <p className="text-text-secondary text-sm font-light mt-4 max-w-xl">
            I am currently seeking software engineering internship opportunities. Let&apos;s discuss how my skills can align with your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel: Info & Socials (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h4 className="text-xl font-display font-bold text-white">Direct Connections</h4>
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                Feel free to reach out via email, phone, or connect with me on professional networks.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 glass-panel p-4 border border-white/[0.05] rounded-xl hover:border-primary/20 hover:bg-white/[0.02] transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/15 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-secondary uppercase font-semibold">Email Me</div>
                    <div className="text-sm font-medium text-white">{email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-4 glass-panel p-4 border border-white/[0.05] rounded-xl hover:border-primary/20 hover:bg-white/[0.02] transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/15 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-secondary uppercase font-semibold">Call Me</div>
                    <div className="text-sm font-medium text-white">{phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 glass-panel p-4 border border-white/[0.05] rounded-xl">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/15">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-secondary uppercase font-semibold">Location</div>
                    <div className="text-sm font-medium text-white">{location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Resume Buttons */}
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-wider text-text-secondary font-semibold">Downloads & Profiles</h5>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-xs font-semibold text-white py-3.5 rounded-xl transition-all shadow-md shadow-primary/15"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface hover:bg-[#1f293d] border border-border p-3.5 rounded-xl text-text-secondary hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface hover:bg-[#1f293d] border border-border p-3.5 rounded-xl text-text-secondary hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                   <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface hover:bg-[#1f293d] border border-border p-3.5 rounded-xl text-text-secondary hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  {medium && (
                    <a
                      href={medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-surface hover:bg-[#1f293d] border border-border p-3.5 rounded-xl text-text-secondary hover:text-white transition-all flex items-center justify-center"
                      aria-label="Medium"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0a3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4 3.4 3.4 0 0 1 3.4 3.4zm3.04 0a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right panel: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 border border-white/[0.06] rounded-2xl h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs text-text-secondary font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="Mahesh Perera"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs text-text-secondary font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="maheshperera@example.com"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs text-text-secondary font-medium">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        placeholder="Hi Mahesh, I'd like to schedule an interview..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-blue-600 disabled:bg-primary/50 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/10"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="inline-flex p-4 bg-success/10 rounded-full text-success border border-success/20 mb-2">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-display font-bold text-white">Message Sent!</h4>
                    <p className="text-sm text-text-secondary font-light max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Mahesh will review your message and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="text-xs text-primary font-semibold hover:underline pt-2 block mx-auto"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
