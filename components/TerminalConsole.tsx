"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, CornerDownLeft } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function TerminalConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "system-init",
      output: (
        <div className="space-y-1">
          <div className="text-primary font-bold">Mahesh Perera OS v1.0.0 initialized.</div>
          <div className="text-text-secondary/70">Type <span className="text-indigo-400 font-semibold">help</span> or click command shortcuts below:</div>
        </div>
      )
    }
  ]);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode;

    switch (trimmed) {
      case "help":
        response = (
          <div className="grid grid-cols-2 gap-2 text-text-secondary/80">
            <div><span className="text-green-400">about</span> - Who is Mahesh?</div>
            <div><span className="text-green-400">skills</span> - Core technologies</div>
            <div><span className="text-green-400">interests</span> - Desired career paths</div>
            <div><span className="text-green-400">contact</span> - Fetch profile links</div>
            <div><span className="text-green-400">clear</span> - Clear output log</div>
          </div>
        );
        break;
      case "about":
        response = (
          <p className="text-text-secondary leading-relaxed">
            Highly analytical Information Systems Undergraduate @ Rajarata University of Sri Lanka. 
            Hands-on experience in full-stack web development, cloud architectures (AWS/GCP), 
            DevOps pipelines, and AI systems.
          </p>
        );
        break;
      case "skills":
        response = (
          <div className="space-y-1">
            <div><span className="text-indigo-400">Languages:</span> Java, Python, TypeScript, JavaScript, SQL, PHP</div>
            <div><span className="text-indigo-400">Frameworks:</span> Next.js 15, React Native, FastAPI, Express.js</div>
            <div><span className="text-indigo-400">Cloud/DevOps:</span> AWS (CCP Certified), Docker, Git, CI/CD</div>
          </div>
        );
        break;
      case "interests":
        response = (
          <div className="text-emerald-400 font-medium">
            🎯 Seeking Software Engineer Intern & Full-Stack Developer opportunities.
          </div>
        );
        break;
      case "contact":
        response = (
          <div className="space-y-1">
            <div>📧 Email: <a href="mailto:maheshperera.ofcl@gmail.com" className="text-primary hover:underline">maheshperera.ofcl@gmail.com</a></div>
            <div>💼 LinkedIn: <a href="https://linkedin.com/in/maheshperera" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">maheshperera</a></div>
            <div>💻 GitHub: <a href="https://github.com/Perera0000" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Perera0000</a></div>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "":
        response = "";
        break;
      default:
        response = (
          <div className="text-red-400">
            command not found: &quot;{cmd}&quot;. Type <span className="underline">help</span> for suggestions.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="glass-panel p-4 rounded-2xl max-w-md mx-auto w-full border border-border/80 font-mono text-xs text-left shadow-2xl relative overflow-hidden bg-black/50 backdrop-blur-md flex flex-col justify-between h-[230px]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] mb-2 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[10px] text-text-secondary/50 flex items-center gap-1">
          <Terminal className="w-3 h-3 text-primary" />
          mahesh@perera-dev: ~
        </span>
        <span className="w-4" />
      </div>

      {/* Terminal Output Log */}
      <div className="flex-grow overflow-y-auto scrollbar-thin pr-1 space-y-3 mb-2 text-[11px] leading-relaxed">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "system-init" && (
              <div className="flex items-center gap-1.5 text-text-secondary/70">
                <span className="text-primary font-bold">guest@perera-dev:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className="pl-2 border-l border-white/[0.04]">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Footer & Clickable Command Shortcuts */}
      <div className="shrink-0 space-y-2 border-t border-white/[0.05] pt-2">
        {/* Shortcuts */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[10px]">
          {["help", "about", "skills", "interests", "contact"].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => executeCommand(cmd)}
              className="bg-white/5 hover:bg-primary/10 border border-white/[0.06] hover:border-primary/30 text-text-secondary hover:text-white px-2 py-0.5 rounded transition-all active:scale-95 shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="flex items-center gap-1.5">
          <span className="text-primary font-bold">guest@perera-dev:~$</span>
          <div className="flex-grow flex items-center relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent text-white border-none focus:outline-none focus:ring-0 p-0 text-[11px] selection:bg-primary/30"
              placeholder='Type a command...'
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="absolute right-0 text-text-secondary/50 hover:text-white p-0.5 rounded transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
