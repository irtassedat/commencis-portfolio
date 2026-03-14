"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const nodes: { x: number; y: number; vx: number; vy: number; r: number; c: string; p: number }[] = [];
    const colors = ["#6366f1", "#0ea5e9", "#8b5cf6"];
    for (let i = 0; i < 45; i++) {
      nodes.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.5 + 0.5, c: colors[Math.floor(Math.random() * colors.length)], p: Math.random() * Math.PI * 2 });
    }
    let frame: number; let t = 0;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h); t += 0.008;
      nodes.forEach((n, i) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.c; ctx.globalAlpha = 0.25 + Math.sin(t + n.p) * 0.15; ctx.fill();
        nodes.slice(i + 1).forEach((n2) => {
          const d = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (d < 160) { ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(n2.x, n2.y); ctx.strokeStyle = n.c; ctx.globalAlpha = (1 - d / 160) * 0.06; ctx.lineWidth = 0.5; ctx.stroke(); }
        });
      });
      ctx.globalAlpha = 1; frame = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

const metricColors = ["#6366f1", "#0ea5e9", "#8b5cf6", "#10b981"];

export default function Hero() {
  const { t, lang } = useLang();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-accent/4 rounded-full blur-[150px]" />
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/15 bg-primary/5 mb-6">
              <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" /></span>
              <span className="text-xs text-primary/80">{t.hero.badge}</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">Sİ</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground/80">Sedat İrtaş</div>
                <div className="text-[10px] text-foreground/35 font-mono">{lang === "tr" ? "Endüstri Mühendisi × Full-Stack AI Developer" : "Industrial Engineer × Full-Stack AI Developer"}</div>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5">
              <span className="text-foreground/90">{t.hero.titleA}</span><br /><span className="text-gradient">{t.hero.titleB}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-sm text-foreground/45 leading-relaxed mb-8 max-w-lg">{t.hero.desc}</motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap gap-3">
              <a href="#turkerler" className="group px-6 py-3 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <span className="flex items-center gap-2">{t.hero.cta1}<svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </a>
              <a href="#demo" className="px-6 py-3 border border-border/40 bg-surface/20 backdrop-blur-sm text-sm font-medium rounded-lg hover:border-primary/20 transition-colors">{t.hero.cta2}</a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto lg:scrollbar-thin">
            <div className="p-5 rounded-xl bg-surface/40 backdrop-blur-sm border border-border/30">
              <div className="text-[10px] font-mono text-foreground/25 mb-4 tracking-wider">{t.hero.data.header}</div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {t.hero.data.metrics.map((m, i) => (
                  <div key={m.label} className="p-2.5 rounded-lg bg-background/40 border border-border/20">
                    <div className="text-[8px] text-foreground/20 uppercase tracking-wider">{m.label}</div>
                    <div className="text-base font-bold mt-0.5" style={{ color: metricColors[i] }}>{m.value}</div>
                    <div className="text-[8px] text-foreground/15 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {t.hero.data.sub.map((m) => (
                  <div key={m.label} className="p-2 rounded-lg bg-background/30 border border-border/15 text-center">
                    <div className="text-[8px] text-foreground/15 uppercase">{m.label}</div>
                    <div className="text-xs font-bold text-foreground/60 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <div className="text-[9px] text-primary/50 uppercase tracking-wider mb-1">{t.hero.data.ipo.title}</div>
                <div className="text-xs text-foreground/50">{t.hero.data.ipo.desc}</div>
              </div>
              <div className="mt-3 p-3 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                <div className="text-[9px] text-accent uppercase tracking-wider mb-1.5 font-bold">{lang === "tr" ? "BENİM KATKIM" : "MY CONTRIBUTION"}</div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-1.5 rounded-md bg-background/30 text-center">
                    <div className="text-sm font-bold text-accent">130K+</div>
                    <div className="text-[7px] text-foreground/40 uppercase">{lang === "tr" ? "Satır" : "Lines"}</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-background/30 text-center">
                    <div className="text-sm font-bold text-primary">400+</div>
                    <div className="text-[7px] text-foreground/40 uppercase">API</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-background/30 text-center">
                    <div className="text-sm font-bold text-purple-400">100+</div>
                    <div className="text-[7px] text-foreground/40 uppercase">DB</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-background/30 text-center">
                    <div className="text-sm font-bold text-emerald-400">8</div>
                    <div className="text-[7px] text-foreground/40 uppercase">Docker</div>
                  </div>
                </div>
              </div>

              {/* Sektör Sorunları — compact, clickable */}
              <Link href="/deep-analysis" className="group block mt-3">
                <div className="p-4 rounded-lg bg-gradient-to-br from-red-500/5 via-surface/60 to-indigo-500/5 border border-border/30 hover:border-primary/30 transition-all">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="text-[9px] text-red-400/70 uppercase tracking-wider font-bold">
                      {lang === "tr" ? "SEKTÖR SORUNLARI & ÇÖZÜMLERİM" : "INDUSTRY PROBLEMS & MY SOLUTIONS"}
                    </div>
                    <motion.svg
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </div>
                  <div className="space-y-2">
                    {(lang === "tr"
                      ? [
                          { icon: "\uD83C\uDFE6", area: "Legacy Bankacılık", severity: "Kritik", solution: "API Gateway ile modernizasyon", color: "#ef4444" },
                          { icon: "\uD83E\uDDE0", area: "Türkçe NLP Boşluğu", severity: "Kritik", solution: "Commencis LLM → Agentic AI", color: "#6366f1" },
                          { icon: "\u2601\uFE0F", area: "Cloud Göçü", severity: "Yüksek", solution: "AWS altyapı & DevOps", color: "#0ea5e9" },
                        ]
                      : [
                          { icon: "\uD83C\uDFE6", area: "Legacy Banking", severity: "Critical", solution: "API Gateway modernization", color: "#ef4444" },
                          { icon: "\uD83E\uDDE0", area: "Turkish NLP Gap", severity: "Critical", solution: "Commencis LLM → Agentic AI", color: "#6366f1" },
                          { icon: "\u2601\uFE0F", area: "Cloud Migration", severity: "High", solution: "AWS infra & DevOps", color: "#0ea5e9" },
                        ]
                    ).map((item) => (
                      <div key={item.area} className="flex items-center gap-2 p-2 rounded-md bg-background/40 border border-border/20 group-hover:border-border/40 transition-colors">
                        <span className="text-sm shrink-0">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-semibold text-foreground/70 truncate">{item.area}</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded-full shrink-0" style={{ backgroundColor: item.color + "15", color: item.color }}>
                              {item.severity}
                            </span>
                          </div>
                          <div className="text-[9px] text-foreground/35 truncate">{item.solution}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2.5 flex items-center justify-center gap-1 text-[10px] text-primary/60 group-hover:text-primary transition-colors font-medium">
                    {lang === "tr" ? "Detaylı analiz & çözüm önerilerim" : "Detailed analysis & my solution proposals"}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-3 flex items-center justify-end gap-2 text-[9px] text-foreground/15"><span>{t.hero.data.source}</span></div>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-7 rounded-full border border-foreground/10 flex justify-center pt-1.5"><div className="w-0.5 h-1.5 bg-primary/40 rounded-full" /></motion.div>
      </motion.div>
    </section>
  );
}
