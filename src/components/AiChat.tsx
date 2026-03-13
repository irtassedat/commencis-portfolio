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
    answer: "Sedat İrtaş — Endüstri Mühendisi & Full-Stack AI Developer. 2024'te endüstri mühendisliği mezuniyetim ve Workintech Full-Stack Bootcamp'i tamamladım. Veri analitiği ve süreç optimizasyonu altyapımı yazılımla birleştirerek 13+ üretim projesi, 60+ AI ajan orkestrasyonu, Telegram otomasyon botları, fraud analitik sistemleri ve VPS otomasyon platformları kurdum. Endüstri mühendisliğinin analitik yaklaşımıyla Commencis'in agentic AI vizyonuna tam uyumlu bir profil sunuyorum."
  },
  {
    question: "Commencis'e Ne Katabilirim?",
    answer: "Somut katkılarım: 1) Agentic AI — 60+ AI ajan orkestre ettim, Commencis LLM'i otonom iş süreçlerine taşıyabilirim. Fraud tespiti, müşteri segmentasyonu, otomatik raporlama. 2) Full-Stack Platform — 176+ endpoint'li multi-tenant SaaS geliştirdim, İşBank İsCep gibi projelerin backend'ine katkı sağlarım. 3) Otomasyon — 15+ Telegram bot ve 12+ VPS sunucu otomasyonu ile Commencis'in iç süreçlerini hızlandırabilirim. 4) Endüstri Mühendisliği — Veri analitiği ve süreç optimizasyonu perspektifim, sadece kod yazmak değil, iş süreçlerini de optimize etmemi sağlar."
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
    answer: "Üç somut neden: 1) Türkiye'nin tek Türkçe LLM geliştiren şirketi — benim NLP ve agentic AI odağımla birebir örtüşüyor. 2) AWS Premier Tier Partner — Türkiye'de sadece 2 şirket bu statüde, cloud ve DevOps deneyimime uygun bir ekosistem. 3) İşBank, Pegasus, Turkcell gibi müşteri portföyü — enterprise ölçekte etki yaratma fırsatı. Ayrıca bootstrapped büyüme modeli, startup çevikliği ile enterprise gücünü birleştiriyor — benim çalışma tarzıma çok uygun."
  },
];

const qaEn: QA[] = [
  {
    question: "Who Am I?",
    answer: "Sedat Irtas — Industrial Engineer & Full-Stack AI Developer. Graduated in Industrial Engineering and completed Workintech Full-Stack Bootcamp in 2024. Combining data analytics and process optimization background with software to build 13+ production projects, 60+ AI agent orchestrations, Telegram automation bots, fraud analytics systems, and VPS automation platforms. Offering a profile that merges industrial engineering's analytical approach with Commencis's agentic AI vision."
  },
  {
    question: "What Can I Bring to Commencis?",
    answer: "Concrete contributions: 1) Agentic AI — Orchestrated 60+ AI agents, can extend Commencis LLM to autonomous workflows. Fraud detection, customer segmentation, automated reporting. 2) Full-Stack Platform — Built multi-tenant SaaS with 176+ endpoints, can contribute to backends like IsBank IsCep. 3) Automation — 15+ Telegram bots and 12+ VPS server automation to accelerate Commencis's internal processes. 4) Industrial Engineering — Data analytics and process optimization perspective enables me to optimize business processes, not just write code."
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
    answer: "Three concrete reasons: 1) Turkey's only company developing a Turkish LLM — directly aligns with my NLP and agentic AI focus. 2) AWS Premier Tier Partner — only 2 companies in Turkey have this status, an ecosystem fitting my cloud and DevOps experience. 3) Client portfolio like IsBank, Pegasus, Turkcell — opportunity to create impact at enterprise scale. Plus, the bootstrapped growth model combines startup agility with enterprise power — perfectly fits my work style."
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
