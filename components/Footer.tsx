"use client";

import { Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/[0.05] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 font-display text-base font-bold text-text-primary">
          <div className="bg-primary/10 text-primary p-1.5 rounded-md">
            <Code className="w-4 h-4" />
          </div>
          <span>mahesh<span className="text-primary">.dev</span></span>
        </div>

        {/* Text Details */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-xs text-text-secondary font-light">
            &copy; {currentYear} Mahesh Perera. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
