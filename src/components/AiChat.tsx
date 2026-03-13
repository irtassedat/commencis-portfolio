"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

interface QA {
  question: string;
  answer: string;
}

const qaTr: QA[] = [
  {
    question: "Ben Kimim?",
    answer: "Sedat İrtaş — Full-Stack Developer & AI Systems Engineer. React/Next.js, Node.js, TypeScript, PostgreSQL ile 13+ üretim projesi geliştirdim. 60+ AI ajan orkestrasyonu, Telegram otomasyon botları, gerçek zamanlı veri işleme platformları ve fraud analitik sistemleri kurdum. Workintech Full-Stack Bootcamp mezunuyum. Commencis'in agentic AI vizyonuna tam uyumlu bir mühendislik profili sunuyorum."
  },
  {
    question: "Commencis'e Ne Katabilirim?",
    answer: "1) Agentic AI & Multi-Agent Sistemler — 60+ AI ajan orkestrasyonu deneyimim var, Commencis'in LLM vizyonunu otonom iş süreçlerine taşıyabilirim. 2) Full-Stack Platform — Multi-tenant SaaS (176+ endpoint) ve enterprise API deneyimim İşBank IsCep gibi projelere katkı sağlar. 3) Veri Mühendisliği — 20+ kaynaktan gerçek zamanlı veri toplama, Dataroid analitiğiyle entegre çalışabilecek pipeline'lar. 4) Cloud & DevOps — Docker, AWS, CI/CD deneyimim AWS Premier Tier ekosistemine uyumlu."
  },
  {
    question: "Öne Çıkan Projelerim?",
    answer: "• VPS Yönetim Platformu — 12+ sunucu üzerinde tam otomasyon, deployment, monitoring\n• Telegram Bot Ekosistemi — 15+ otomasyon botu: bildirim, veri toplama, raporlama, müşteri etkileşimi\n• Fraud Analitik Sistemi — Gerçek zamanlı anomali tespiti, pattern matching, risk skorlama motoru\n• Multi-Tenant QR Menü — 8+ marka, 176+ API endpoint, RBAC güvenlik\n• AI Ajan Orkestrasyon — 60+ uzman ajan koordinasyonu, görev dağılımı, sonuç birleştirme\n• E-Ticaret Platform — React + Spring Boot, ürün katalog, sipariş yönetimi"
  },
  {
    question: "Teknik Yetkinliklerim?",
    answer: "Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Vue.js\nBackend: Node.js, Express, Java/Spring Boot, Python, PostgreSQL, MongoDB, REST/GraphQL\nAI & Otomasyon: Claude API/SDK, MCP Servers, Agentic AI, RAG, Telegram Bot API, Workflow Otomasyon\nDevOps: Docker, AWS, Vercel, CI/CD, Git/GitHub, Linux\nCommencis Uyumu: AWS Premier ekosistemi, agentic AI, enterprise platform geliştirme, Türkçe NLP"
  },
  {
    question: "Neden Commencis?",
    answer: "Commencis, Türkiye'nin tek kendi LLM'ini geliştiren dijital dönüşüm şirketi. AWS Premier Tier Partner statüsü, 15+ yıllık İşBank partnerliği ve bootstrapped büyüme modeliyle benzersiz. Benim agentic AI, multi-agent orkestrasyon ve full-stack platform deneyimim, Commencis'in 2026 vizyonuyla — LEAP Riyadh genişlemesi, Arapça LLM, 5G servisleri — mükemmel uyum sağlıyor. Burada gerçek etki yaratabileceğime inanıyorum."
  },
];

const qaEn: QA[] = [
  {
    question: "Who Am I?",
    answer: "Sedat Irtas — Full-Stack Developer & AI Systems Engineer. Built 13+ production projects with React/Next.js, Node.js, TypeScript, PostgreSQL. Orchestrated 60+ AI agents, built Telegram automation bots, real-time data processing platforms, and fraud analytics systems. Workintech Full-Stack Bootcamp graduate. Offering an engineering profile perfectly aligned with Commencis's agentic AI vision."
  },
  {
    question: "What Can I Bring to Commencis?",
    answer: "1) Agentic AI & Multi-Agent Systems — Experience orchestrating 60+ AI agents, can extend Commencis LLM vision to autonomous workflows. 2) Full-Stack Platform — Multi-tenant SaaS (176+ endpoints) and enterprise API experience applicable to projects like IsBank IsCep. 3) Data Engineering — Real-time data collection from 20+ sources, pipelines integrable with Dataroid analytics. 4) Cloud & DevOps — Docker, AWS, CI/CD experience compatible with AWS Premier Tier ecosystem."
  },
  {
    question: "Featured Projects?",
    answer: "• VPS Management Platform — Full automation across 12+ servers: deployment, monitoring\n• Telegram Bot Ecosystem — 15+ automation bots: notifications, data collection, reporting, engagement\n• Fraud Analytics System — Real-time anomaly detection, pattern matching, risk scoring engine\n• Multi-Tenant QR Menu — 8+ brands, 176+ API endpoints, RBAC security\n• AI Agent Orchestration — 60+ specialist agent coordination, task distribution, result aggregation\n• E-Commerce Platform — React + Spring Boot, product catalog, order management"
  },
  {
    question: "Technical Skills?",
    answer: "Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Vue.js\nBackend: Node.js, Express, Java/Spring Boot, Python, PostgreSQL, MongoDB, REST/GraphQL\nAI & Automation: Claude API/SDK, MCP Servers, Agentic AI, RAG, Telegram Bot API, Workflow Automation\nDevOps: Docker, AWS, Vercel, CI/CD, Git/GitHub, Linux\nCommencis Fit: AWS Premier ecosystem, agentic AI, enterprise platform development, Turkish NLP"
  },
  {
    question: "Why Commencis?",
    answer: "Commencis is Turkey's only digital transformation company developing its own LLM. With AWS Premier Tier Partner status, 15+ year IsBank partnership, and bootstrapped growth, it's unique. My agentic AI, multi-agent orchestration, and full-stack platform experience perfectly aligns with Commencis's 2026 vision — LEAP Riyadh expansion, Arabic LLM, 5G services. I believe I can create real impact here."
  },
];

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState<string | null>(null);
  const { lang } = useLang();
  const qa = lang === "tr" ? qaTr : qaEn;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => { setIsOpen(!isOpen); setActiveAnswer(null); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/20 flex items-center justify-center hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[520px] rounded-2xl bg-surface border border-border shadow-2xl shadow-black/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Sİ</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Sedat İrtaş</div>
                  <div className="text-[10px] text-foreground/40">
                    {lang === "tr" ? "Hızlı Tanışma" : "Quick Introduction"}
                  </div>
                </div>
                <span className="ml-auto relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {activeAnswer ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <button
                    onClick={() => setActiveAnswer(null)}
                    className="text-[10px] text-primary mb-3 flex items-center gap-1 hover:underline"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    {lang === "tr" ? "Sorulara Dön" : "Back to Questions"}
                  </button>
                  <div className="p-3 rounded-xl bg-background/50 border border-border/50">
                    <p className="text-xs text-foreground/70 leading-relaxed whitespace-pre-line">{activeAnswer}</p>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs text-foreground/40 mb-3">
                    {lang === "tr" ? "Merhaba! Aşağıdaki sorulardan birini seçerek hızlıca tanışalım:" : "Hello! Pick a question below to get to know me:"}
                  </p>
                  {qa.map((item, i) => (
                    <motion.button
                      key={item.question}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => setActiveAnswer(item.answer)}
                      className="w-full text-left p-3 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all text-xs text-foreground/70 flex items-center gap-2"
                    >
                      <span className="text-primary">→</span>
                      {item.question}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-border bg-surface/50 text-center">
              <span className="text-[9px] text-foreground/20">
                {lang === "tr" ? "Commencis başvurusu için hazırlanmıştır" : "Prepared for Commencis application"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
