"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function DeepAnalysisCTA() {
  const { lang } = useLang();

  const label =
    lang === "tr"
      ? "Derin Analiz — Projeler, Yetkinlik Uyumu & Sektör Araştırması"
      : "Deep Analysis — Projects, Skills Alignment & Industry Research";

  const sub =
    lang === "tr"
      ? "Teknik detaylar, mimari kararlar ve Commencis uyum analizi"
      : "Technical details, architecture decisions and Commencis fit analysis";

  return (
    <section className="px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/deep-analysis"
            className="group flex items-center justify-between gap-4 px-6 py-4 rounded-xl bg-surface border border-primary/15 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)] transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground/90 truncate">
                  {label}
                </p>
                <p className="text-xs text-foreground/35 mt-0.5">{sub}</p>
              </div>
            </div>
            <svg
              className="flex-shrink-0 w-4 h-4 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
