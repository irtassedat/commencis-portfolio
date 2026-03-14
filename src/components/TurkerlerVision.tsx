"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const reasonsTr = [
  {
    icon: "\uD83E\uDDE0",
    title: "Türkiye'nin Tek Türkçe LLM'i",
    desc: "Commencis, kendi LLM'ini geliştiren tek Türk teknoloji şirketi. Benim 6 otonom ajan (ödeme doğrulama, envanter, workflow orkestrasyon) ve ML güvenlik deneyimim, Commencis LLM'i otonom iş akışlarına genişletebilir.",
    color: "#6366f1",
  },
  {
    icon: "\u2601\uFE0F",
    title: "AWS Premier Tier Partner",
    desc: "Türkiye'de sadece 2 şirket bu statüde. VPS üzerinde 8 canlı Docker container yöneten, PostgreSQL/Redis/Nginx altyapısı kuran DevOps deneyimim, AWS ekosistemiyle uyumlu.",
    color: "#0ea5e9",
  },
  {
    icon: "\uD83C\uDFE6",
    title: "Enterprise Ölçek — İşBank, Pegasus, Turkcell",
    desc: "400+ endpoint'li çoklu platform, 100+ veritabanı modeli, multi-tenant SaaS mimarisi geliştirdim. İsCep (14.5M kullanıcı) gibi projelerin backend ekibine doğrudan katkı sağlayabilirim.",
    color: "#8b5cf6",
  },
  {
    icon: "\uD83D\uDE80",
    title: "Startup Çevikliği + Enterprise Gücü",
    desc: "Commencis $0 dış yatırımla $85M gelire ulaşmış — bootstrapped büyüme modeli benim çalışma tarzıma çok uygun. Solo olarak 130K+ satır production sistemi kuran biri olarak, hızlı iterasyon ve sonuç odaklı çalışırım.",
    color: "#10b981",
  },
];

const reasonsEn = [
  {
    icon: "\uD83E\uDDE0",
    title: "Turkey's Only Turkish LLM",
    desc: "Commencis is the only Turkish tech company developing its own LLM. My experience with 6 autonomous agents (payment verification, inventory, workflow orchestration) and ML security can extend Commencis LLM into autonomous workflows.",
    color: "#6366f1",
  },
  {
    icon: "\u2601\uFE0F",
    title: "AWS Premier Tier Partner",
    desc: "Only 2 companies in Turkey hold this status. My DevOps experience managing 8 live Docker containers on VPS with PostgreSQL/Redis/Nginx infrastructure aligns with the AWS ecosystem.",
    color: "#0ea5e9",
  },
  {
    icon: "\uD83C\uDFE6",
    title: "Enterprise Scale — IsBank, Pegasus, Turkcell",
    desc: "I've built multi-platform systems with 400+ endpoints, 100+ database models, and multi-tenant SaaS architecture. I can directly contribute to backend teams on projects like IsCep (14.5M users).",
    color: "#8b5cf6",
  },
  {
    icon: "\uD83D\uDE80",
    title: "Startup Agility + Enterprise Power",
    desc: "Commencis reached $85M revenue with $0 external funding — the bootstrapped growth model fits my work style perfectly. As someone who built 130K+ lines of production systems solo, I work with fast iteration and results-driven focus.",
    color: "#10b981",
  },
];

export default function TurkerlerVision() {
  const { lang, t } = useLang();
  const reasons = lang === "tr" ? reasonsTr : reasonsEn;

  return (
    <section id="turkerler" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary tracking-wider">
            {t.turkerler.section}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
            {t.turkerler.titleA}
            <span className="text-gradient">{t.turkerler.titleB}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-surface border border-border hover:border-opacity-50 transition-all group"
              style={{ borderColor: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = r.color + "40";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "transparent";
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{r.icon}</span>
                <h3 className="font-semibold text-sm">{r.title}</h3>
              </div>
              <p className="text-xs text-foreground/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Deep Analysis CTA — impossible to miss */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.35 }}
          className="mt-12"
        >
          <Link
            href="/deep-analysis"
            className="group relative block w-full overflow-hidden rounded-2xl transition-all duration-300 cta-glow"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl p-[1.5px] cta-border-spin">
              <div className="absolute inset-0 rounded-2xl" style={{ background: "conic-gradient(from var(--cta-angle, 0deg), #6366f1, #8b5cf6, #0ea5e9, #6366f1)" }} />
            </div>

            {/* Inner background */}
            <div
              className="relative rounded-2xl m-[1.5px]"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(15,15,35,0.95) 30%, rgba(15,15,35,0.95) 70%, rgba(139,92,246,0.15) 100%)" }}
            >
              {/* Always-on shimmer sweep */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(105deg, transparent 35%, rgba(99,102,241,0.12) 45%, rgba(139,92,246,0.08) 55%, transparent 65%)",
                  backgroundSize: "300% 100%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              />

              <div className="relative px-6 py-6 sm:px-8 sm:py-7">
                {/* Top row: icon + title + arrow */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_24px_rgba(99,102,241,0.5)]"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-base sm:text-lg font-bold text-white">
                        {lang === "tr"
                          ? "Derin Analiz Raporu"
                          : "Deep Analysis Report"}
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/50 mt-0.5">
                        {lang === "tr"
                          ? "Teknik detaylar, mimari kararlar & Commencis uyum analizi"
                          : "Technical details, architecture decisions & Commencis fit analysis"}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6366f1]/20 flex items-center justify-center group-hover:bg-[#6366f1]/40 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#6366f1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>

                {/* Teaser stats — creates FOMO */}
                <div className="flex flex-wrap gap-2">
                  {(lang === "tr"
                    ? ["5 Proje Detayı", "Yetkinlik Haritası", "Sektör Araştırması", "Mimari Analiz", "Büyüme Planı"]
                    : ["5 Project Details", "Skills Map", "Industry Research", "Architecture Analysis", "Growth Plan"]
                  ).map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                      className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-[#6366f1]/10 text-[#a5b4fc] border border-[#6366f1]/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
