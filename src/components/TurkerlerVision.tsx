"use client";

import { motion } from "framer-motion";
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
      </div>
    </section>
  );
}
