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
      y: seededValue(i, 2) * 90 + 2,
      size: seededValue(i, 3) * 0.6 + 0.6, // 0.6–1.2rem
      opacity: seededValue(i, 4) * 0.06 + 0.06, // 6–12%
      duration: seededValue(i, 5) * 14 + 16, // 16–30s
      delay: seededValue(i, 6) * -24,
      driftX: (seededValue(i, 7) - 0.5) * 36, // -18 to +18px
      driftY: (seededValue(i, 8) - 0.5) * 28, // -14 to +14px
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
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
  );
}
