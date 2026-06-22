"use client";

import { Github, GitBranch, Star, GitCommit, GitPullRequest, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function GithubStats() {
  const { github } = portfolioData.personalInfo;

  // Mock languages for stats
  const topLanguages = [
    { name: "TypeScript", percentage: 45, color: "#3178c6" },
    { name: "JavaScript", percentage: 35, color: "#f1e05a" },
    { name: "Python", percentage: 15, color: "#3572A5" },
    { name: "Other (Java, C++)", percentage: 5, color: "#b07219" }
  ];

  const stats = [
    { label: "Total Commits", value: "824", icon: <GitCommit className="w-4 h-4 text-primary" /> },
    { label: "Stars Earned", value: "42", icon: <Star className="w-4 h-4 text-yellow-500" /> },
    { label: "Pull Requests", value: "41", icon: <GitPullRequest className="w-4 h-4 text-secondary" /> },
    { label: "Repositories", value: "15", icon: <GitBranch className="w-4 h-4 text-success" /> }
  ];

  return (
    <section id="github" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Open Source</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
            GitHub Contributions & Activity
          </h3>
          <div className="w-12 h-1 bg-primary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: GitHub Profile Stat Cards (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* Quick Profile Summary */}
            <div className="glass-panel p-6 border border-white/[0.06] rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-white/[0.03] border border-white/[0.05] rounded-full text-white text-lg">
                <Github className="w-7 h-7 text-text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">@Perera0000</h4>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1 mt-0.5"
                >
                  View GitHub Profile →
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel p-5 border border-white/[0.05] rounded-2xl flex flex-col justify-between"
                >
                  <div className="p-2 w-fit bg-white/[0.03] border border-white/[0.05] rounded-lg">
                    {stat.icon}
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-display font-bold text-white leading-none">{stat.value}</div>
                    <div className="text-[10px] text-text-secondary font-medium tracking-wide mt-1 uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right panel: Contribution Graph & Languages (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Contribution Graph Box */}
            <div className="glass-panel p-6 border border-white/[0.06] rounded-2xl space-y-6 flex-grow flex flex-col justify-between">
              
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">GitHub Contribution Graph</h4>
                  <p className="text-xs text-text-secondary font-light">547 contributions in the past year</p>
                </div>
                {/* Legend */}
                <div className="flex items-center gap-1.5 text-[10px] text-text-secondary">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.04]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#0e4429]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#006d32]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#26a641]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#39d353]" />
                  <span>More</span>
                </div>
              </div>

              {/* Grid Scroll Wrapper */}
              <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin">
                <div className="min-w-[650px] w-full p-3 bg-white/[0.01] border border-white/[0.04] rounded-xl flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ghchart.rshah.org/3b82f6/Perera0000"
                    alt="Mahesh Perera's GitHub Contributions"
                    className="w-full h-auto object-contain max-h-[115px] filter opacity-90 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="text-[10px] text-text-secondary/70 font-light border-t border-white/[0.04] pt-4">
                Note: Graph reflects push frequency, project completions, and hackathon repository commits compiled across active organizations.
              </div>
            </div>

            {/* Top Languages Breakdown */}
            <div className="glass-panel p-6 border border-white/[0.06] rounded-2xl space-y-4">
              <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-primary" />
                Top Languages Usage
              </h4>

              {/* Bar breakdown */}
              <div className="h-2 rounded-full overflow-hidden flex">
                {topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    className="h-full first:rounded-l-full last:rounded-r-full"
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend with percentages */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                {topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="text-xs text-text-secondary font-medium">{lang.name}</span>
                    <span className="text-[10px] text-text-secondary/60 font-light">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
