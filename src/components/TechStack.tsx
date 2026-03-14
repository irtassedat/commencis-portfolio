"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const techWords = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Vue.js",
  "Framer Motion",
  "Node.js",
  "Java",
  "Spring Boot",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST API",
  "Claude API",
  "MCP Servers",
  "RAG",
  "Agentic AI",
  "Telegram Bot",
  "Workflow",
  "Docker",
  "AWS",
  "Vercel",
  "CI/CD",
  "Git",
  "Linux",
  "Redis",
  "Nginx",
  "Fastify",
  "Prisma",
  "Gemini AI",
  "FastAPI",
  "Kubernetes",
  "Cloudflare",
];

// Deterministic pseudo-random based on index — no hydration mismatch
function seededValue(seed: number, offset: number): number {
  const x = Math.sin(seed * 9301 + offset * 49297 + 233) * 10000;
  return x - Math.floor(x);
}

interface WordItem {
  text: string;
  x: number; // percent
  y: number; // percent
  size: number; // rem
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

export default function TechStack() {
  const words: WordItem[] = useMemo(() => {
    return techWords.map((text, i) => ({
      text,
      x: seededValue(i, 1) * 90 + 5,
      y: seededValue(i, 2) * 85 + 5,
      size: seededValue(i, 3) * 0.8 + 0.7, // 0.7–1.5rem
      opacity: seededValue(i, 4) * 0.08 + 0.06, // 6–14%
      duration: seededValue(i, 5) * 12 + 14, // 14–26s
      delay: seededValue(i, 6) * -20,
      driftX: (seededValue(i, 7) - 0.5) * 40, // -20 to +20px
      driftY: (seededValue(i, 8) - 0.5) * 30, // -15 to +15px
    }));
  }, []);

  return (
    <section id="tech" className="relative py-16 overflow-hidden" style={{ minHeight: "260px" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Floating tech word cloud */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {words.map((w) => (
          <motion.span
            key={w.text}
            className="absolute font-mono font-medium text-foreground whitespace-nowrap"
            style={{
              left: `${w.x}%`,
              top: `${w.y}%`,
              fontSize: `${w.size}rem`,
              opacity: w.opacity,
            }}
            animate={{
              x: [0, w.driftX, 0, -w.driftX * 0.5, 0],
              y: [0, w.driftY, -w.driftY * 0.6, w.driftY * 0.3, 0],
            }}
            transition={{
              duration: w.duration,
              delay: w.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {w.text}
          </motion.span>
        ))}
      </div>

      {/* Centered label — minimal, tasteful */}
      <div className="relative z-10 flex items-center justify-center h-full py-10">
        <div className="text-center">
          <span className="text-xs font-mono text-foreground/25 tracking-[0.3em] uppercase">
            // tech stack
          </span>
        </div>
      </div>
    </section>
  );
}
