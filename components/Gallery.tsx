"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Calendar, Tag } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  category: "hackathons" | "leadership" | "academic";
  description: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/Images/Bitcode Organizing.jpg",
    title: "BITCODE V6.0 Organizing Committee",
    category: "leadership",
    description: "Behind the scenes of organizing Sri Lanka's premier national coding competition — logistics, coordination, and stage management.",
    date: "2025"
  },
  {
    src: "/Images/BITCODE competion.jpg",
    title: "BITCODE Competition",
    category: "hackathons",
    description: "On-site at the BITCODE V6.0 national coding competition, supporting participants and maintaining the competitive environment.",
    date: "2025"
  },
  {
    src: "/Images/BITCODE competion.png",
    title: "BITCODE Competition Highlights",
    category: "hackathons",
    description: "Moments from the BITCODE V6.0 national stage — showcasing the energy and competitive spirit of Sri Lanka's top developers.",
    date: "2025"
  },
  {
    src: "/Images/Bitcode Hackathon.jpeg",
    title: "Bitcode Hackathon",
    category: "hackathons",
    description: "Participating in the fast-paced Bitcode hackathon, collaborating with cross-functional teams to build innovative solutions under pressure.",
    date: "2025"
  },
  {
    src: "/Images/D'Hack 2025 National Finalist Pitch 1.jpg",
    title: "D'Hack 2025 — Finalist Pitch",
    category: "hackathons",
    description: "Presenting the HelaWild elephant-human conflict early-warning platform to expert judges at the D'Hack 2025 national finals.",
    date: "2025"
  },
  {
    src: "/Images/D'Hack 2025 National Finalist Pitch 2.jpg",
    title: "D'Hack 2025 — Architecture Walkthrough",
    category: "hackathons",
    description: "Explaining the real-time geolocation microservices and alert dispatch system architecture to the judging panel.",
    date: "2025"
  },
  {
    src: "/Images/D'Hack 2025 National Finalist Pitch 3.jpg",
    title: "D'Hack 2025 — Live Demo",
    category: "hackathons",
    description: "Live demonstration of the HelaWild dashboard, showcasing dynamic mapping and ranger alert dispatch workflows.",
    date: "2025"
  },
  {
    src: "/Images/D'Hack 2025 National Finalist Pitch 4.jpg",
    title: "D'Hack 2025 — Q&A Round",
    category: "hackathons",
    description: "Addressing technical questions from judges on scalability, data pipelines, and conservation impact projections.",
    date: "2025"
  },
  {
    src: "/Images/D'Hack 2025 National Finalist Pitch 5.jpg",
    title: "D'Hack 2025 — Stage Presentation",
    category: "hackathons",
    description: "Final pitch moment on the national stage, presenting HelaWild's vision for AI-driven elephant conservation.",
    date: "2025"
  },
  {
    src: "/Images/D'Hack 2025 National Finalist Pitch 6.jpg",
    title: "D'Hack 2025 — Technical Showcase",
    category: "hackathons",
    description: "Showcasing the full-stack implementation and real-time data visualization capabilities of the HelaWild platform.",
    date: "2025"
  },
  {
    src: "/Images/D'Hack 2025 National Finalist Pitch our team.jpg",
    title: "D'Hack 2025 — Our Team",
    category: "hackathons",
    description: "The HelaWild team — united by passion for technology and conservation, representing Rajarata University at the D'Hack 2025 national finals.",
    date: "2025"
  },
  {
    src: "/Images/D'Hack 2025 National Finalist Pitch 27.jpg",
    title: "D'Hack 2025 — Full Team Photo",
    category: "hackathons",
    description: "Group photo of all D'Hack 2025 national finalists, celebrating a milestone achievement in competitive software engineering.",
    date: "2025"
  },
  {
    src: "/Images/Virtusa workshop.jpg",
    title: "Virtusa Industry Workshop",
    category: "academic",
    description: "Attending Virtusa's industry-led technical workshop on modern enterprise software engineering practices and cloud-native architecture.",
    date: "2025"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "hackathons" | "leadership" | "academic">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Portfolio Highlights</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Gallery & Event Highlights
          </h3>
          <p className="text-sm text-text-secondary max-w-lg mt-3 font-light">
            A visual documentation of hackathons, student leadership drives, and technical achievements.
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
        </div>

        {/* Filters Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["all", "hackathons", "leadership", "academic"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                filter === tab
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface/50 border-white/[0.06] text-text-secondary hover:text-white hover:bg-surface"
              }`}
            >
              {tab === "academic" ? "Academic & Dev" : tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              // Find the original index in global list to keep lightbox consistent if clicked
              const globalIndex = galleryItems.findIndex(g => g.src === item.src);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.src}
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.05] overflow-hidden group cursor-pointer flex flex-col h-full bg-surface/10"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-background">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-md) 100vw, 320px"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="p-3 bg-primary/20 rounded-full border border-primary/30 backdrop-blur-sm text-white">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] text-primary font-bold uppercase tracking-wider">
                        <Tag className="w-3 h-3" />
                        <span>{item.category === "academic" ? "Academic & Dev" : item.category}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-text-secondary font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-text-secondary/50 font-light border-t border-white/[0.04] pt-2.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Year {item.date}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 bg-surface border border-white/10 rounded-full text-text-secondary hover:text-white transition-colors z-50"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Slider Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 bg-surface/50 border border-white/5 hover:border-white/10 rounded-full text-text-secondary hover:text-white transition-colors z-50"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 p-3 bg-surface/50 border border-white/5 hover:border-white/10 rounded-full text-text-secondary hover:text-white transition-colors z-50"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Inner Modal Content */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full flex flex-col items-center gap-6 z-40"
              >
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={galleryItems[lightboxIndex].src}
                    alt={galleryItems[lightboxIndex].title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>

                <div className="text-center space-y-2 max-w-xl">
                  <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    {galleryItems[lightboxIndex].category === "academic" ? "Academic & Dev" : galleryItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                  <p className="text-sm text-text-secondary font-light">
                    {galleryItems[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
