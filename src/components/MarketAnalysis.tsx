"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/* Digital transformation market segments */
const marketSegmentsTR = [
  { segment: "Bankacılık & Finans", growth: 28, marketSize: "$4.2B", color: "#6366f1", note: "Commencis'in ana uzmanlık alanı — İşBank, Burgan Bank, DenizBank" },
  { segment: "Havacılık & Seyahat", growth: 22, marketSize: "$1.8B", color: "#0ea5e9", note: "Pegasus, Air Astana, Transavia ile kanıtlanmış" },
  { segment: "Telekom & Medya", growth: 18, marketSize: "$2.5B", color: "#8b5cf6", note: "Turkcell süper uygulama dönüşümü" },
  { segment: "Perakende & FMCG", growth: 15, marketSize: "$1.2B", color: "#10b981", note: "Unilever, BSH dijital kanal optimizasyonu" },
];

const marketSegmentsEN = [
  { segment: "Banking & Finance", growth: 28, marketSize: "$4.2B", color: "#6366f1", note: "Commencis core expertise — IsBank, Burgan Bank, DenizBank" },
  { segment: "Aviation & Travel", growth: 22, marketSize: "$1.8B", color: "#0ea5e9", note: "Proven with Pegasus, Air Astana, Transavia" },
  { segment: "Telecom & Media", growth: 18, marketSize: "$2.5B", color: "#8b5cf6", note: "Turkcell super app transformation" },
  { segment: "Retail & FMCG", growth: 15, marketSize: "$1.2B", color: "#10b981", note: "Unilever, BSH digital channel optimization" },
];

/* Digital transformation companies — estimated figures based on public data & industry reports */
const competitorsTR = [
  { name: "Commencis", employees: 500, projects: 120, revenue: "~$85M", growth: "15%", highlight: true },
  { name: "Etiya", employees: 1600, projects: 200, revenue: "~$380M", growth: "12%", highlight: false },
  { name: "KoçDigital", employees: 500, projects: 150, revenue: "~$750M", growth: "10%", highlight: false },
  { name: "Accenture Turkey", employees: 2000, projects: 300, revenue: "N/A", growth: "8%", highlight: false },
];

const competitorsEN = [
  { name: "Commencis", employees: 500, projects: 120, revenue: "~$85M", growth: "15%", highlight: true },
  { name: "Etiya", employees: 1600, projects: 200, revenue: "~$380M", growth: "12%", highlight: false },
  { name: "KocDigital", employees: 500, projects: 150, revenue: "~$750M", growth: "10%", highlight: false },
  { name: "Accenture Turkey", employees: 2000, projects: 300, revenue: "N/A", growth: "8%", highlight: false },
];

/* Enterprise AI benchmarks */
const aiBenchmarksTR = [
  { metric: "Müşteri Deneyimi İyileştirme", value: "%35-45", source: "Deloitte Digital", detail: "AI kişiselleştirme ile NPS artışı" },
  { metric: "Geliştirme Hızı Artışı", value: "%40-60", source: "McKinsey Tech 2024", detail: "AI destekli yazılım geliştirme ile" },
  { metric: "Operasyonel Maliyet Azalma", value: "%25-35", source: "Gartner 2025", detail: "Agentic AI otomasyon ile" },
  { metric: "Türkçe NLP Doğruluğu", value: "%98+", source: "Commencis LLM", detail: "GPT-4 Turbo seviyesinde, on-premise" },
  { metric: "Cloud Maliyet Optimizasyonu", value: "%30-50", source: "AWS Well-Architected", detail: "Cloud-native migrasyon ile" },
  { metric: "Dijital Dönüşüm Pazarı", value: "$15B+", source: "Türkiye 2025", detail: "GDP'nin %5'i, hedef %10 (2030)" },
];

const aiBenchmarksEN = [
  { metric: "Customer Experience Improvement", value: "35-45%", source: "Deloitte Digital", detail: "NPS increase with AI personalization" },
  { metric: "Development Speed Increase", value: "40-60%", source: "McKinsey Tech 2024", detail: "With AI-powered software development" },
  { metric: "Operational Cost Reduction", value: "25-35%", source: "Gartner 2025", detail: "With Agentic AI automation" },
  { metric: "Turkish NLP Accuracy", value: "98%+", source: "Commencis LLM", detail: "GPT-4 Turbo level, on-premise" },
  { metric: "Cloud Cost Optimization", value: "30-50%", source: "AWS Well-Architected", detail: "With cloud-native migration" },
  { metric: "Digital Transformation Market", value: "$15B+", source: "Turkey 2025", detail: "5% of GDP, target 10% (2030)" },
];

/* Commencis financial estimates — based on ~450 employees × industry avg revenue/employee */
const financialsTR = [
  { year: "2022", revenue: "55", grossProfit: "22", margin: "40", unit: "milyon $" },
  { year: "2023", revenue: "66", grossProfit: "28", margin: "42.4", unit: "milyon $" },
  { year: "2024", revenue: "85", grossProfit: "38", margin: "44.7", unit: "milyon $" },
];

const financialsEN = [
  { year: "2022", revenue: "55", grossProfit: "22", margin: "40", unit: "M $" },
  { year: "2023", revenue: "66", grossProfit: "28", margin: "42.4", unit: "M $" },
  { year: "2024", revenue: "85", grossProfit: "38", margin: "44.7", unit: "M $" },
];

/* Financial summary cards */
const financialSummaryTR = [
  { label: "AWS Sertifika", value: "100+", sub: "Premier Tier Partner" },
  { label: "Müşteri Ülkesi", value: "20+", sub: "Global erişim" },
  { label: "Benim Uyumum", value: "AI + Full-Stack", sub: "Agentic AI odağı" },
  { label: "Meta-Kanıt", value: "Bu Portfolyo", sub: "Next.js 16 + TS ile yazıldı" },
];

const financialSummaryEN = [
  { label: "AWS Certifications", value: "100+", sub: "Premier Tier Partner" },
  { label: "Client Countries", value: "20+", sub: "Global reach" },
  { label: "My Fit", value: "AI + Full-Stack", sub: "Agentic AI focus" },
  { label: "Meta-Proof", value: "This Portfolio", sub: "Built with Next.js 16 + TS" },
];

export default function MarketAnalysis() {
  const { lang, t } = useLang();

  const marketSegments = lang === "tr" ? marketSegmentsTR : marketSegmentsEN;
  const competitors = lang === "tr" ? competitorsTR : competitorsEN;
  const aiBenchmarks = lang === "tr" ? aiBenchmarksTR : aiBenchmarksEN;
  const financials = lang === "tr" ? financialsTR : financialsEN;
  const financialSummary = lang === "tr" ? financialSummaryTR : financialSummaryEN;

  const focusLabel = lang === "tr" ? "Odak" : "Focus";
  const segmentSubtitle = lang === "tr" ? "Türkiye dijital dönüşüm — sektörel büyüme oranları & pazar büyüklüğü" : "Turkey digital transformation — sector growth rates & market size";

  return (
    <section id="market" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-secondary tracking-wider">
            {t.market.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.market.titleA}
            <span className="text-gradient">{t.market.titleB}</span>
          </h2>
          <p className="text-foreground/40 mt-3 text-sm max-w-2xl mx-auto">
            {t.market.subtitle}
          </p>
        </motion.div>

        {/* ───── FINANCIAL PERFORMANCE ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.financial}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.financialSource}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {financials.map((f, i) => (
              <motion.div
                key={f.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="text-xs font-mono text-primary mb-3">{f.year}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.revenue}</span>
                    <span className="text-sm font-bold text-foreground/70">{f.revenue} {f.unit}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.grossProfit}</span>
                    <span className="text-sm font-bold text-primary">{f.grossProfit} {f.unit}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.grossMargin}</span>
                    <span className="text-sm font-bold text-accent">%{f.margin}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-4 gap-3">
            {financialSummary.map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-background/30 border border-border/20 text-center">
                <div className="text-[8px] text-foreground/15 uppercase tracking-wider">{m.label}</div>
                <div className="text-xs font-bold text-foreground/60 mt-1">{m.value}</div>
                <div className="text-[8px] text-foreground/15 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ───── DİJİTAL DÖNÜŞÜM PAZARI ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.vedasTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{segmentSubtitle}</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {marketSegments.map((p, i) => (
              <motion.div
                key={p.segment}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">{p.segment}</span>
                  <span className="text-xs text-foreground/25">{p.marketSize}</span>
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold" style={{ color: p.color }}>
                    %{p.growth}
                  </div>
                  <div className="text-[9px] text-foreground/20">{lang === "tr" ? "yıllık büyüme oranı" : "annual growth rate"}</div>
                </div>
                <div className="h-2 bg-surface-light rounded-full overflow-hidden mb-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.growth * 3}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
                <div className="text-[9px] text-foreground/20">{p.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
            <div className="text-[10px] font-mono text-indigo-500/50 mb-1.5">
              {lang === "tr" ? "BANKACILIK AI LİDERLİĞİ" : "BANKING AI LEADERSHIP"}
            </div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {lang === "tr"
                ? "Commencis LLM + İşBank İsCep ortaklığı, Türkiye'nin en büyük mobil bankacılık platformunu (14.5M kullanıcı) AI-native hale getiriyor. Benim 60+ AI ajan orkestrasyon deneyimim ve fraud analitik sistemlerim, bu LLM'in otonom müşteri hizmetleri, dolandırıcılık tespiti ve kişiselleştirilmiş bankacılık deneyimine genişletilmesinde doğrudan uygulanabilir."
                : "Commencis LLM + IsBank IsCep partnership is making Turkey's largest mobile banking platform (14.5M users) AI-native. My 60+ AI agent orchestration experience and fraud analytics systems are directly applicable to extending this LLM into autonomous customer service, fraud detection, and personalized banking experiences."}
            </p>
          </div>
        </motion.div>

        {/* ───── COMPETITOR POSITIONING ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.competitorTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.competitorSource}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.company}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{lang === "tr" ? "Çalışan" : "Employees"}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{lang === "tr" ? "Proje" : "Projects"}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{lang === "tr" ? "Gelir" : "Revenue"}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{lang === "tr" ? "Büyüme" : "Growth"}</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-border/10 ${c.highlight ? "bg-primary/3" : ""}`}
                  >
                    <td className={`py-2.5 ${c.highlight ? "text-primary font-semibold" : "text-foreground/50"}`}>
                      {c.name}
                      {c.highlight && <span className="ml-1.5 text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">{focusLabel}</span>}
                    </td>
                    <td className="text-right py-2.5 text-foreground/50">{c.employees.toLocaleString()}</td>
                    <td className="text-right py-2.5 text-foreground/50">{c.projects}</td>
                    <td className="text-right py-2.5 font-medium" style={{ color: c.highlight ? "#10b981" : undefined }}>
                      {c.revenue}
                    </td>
                    <td className="text-right py-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        c.highlight ? "bg-primary/10 text-primary font-bold" : "text-foreground/30"
                      }`}>
                        {c.growth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-primary/3 border border-primary/10">
            <p className="text-[10px] text-foreground/35 leading-relaxed">
              <strong className="text-primary/70">
                {lang === "tr" ? "Kritik farklılaşma:" : "Critical differentiation:"}
              </strong>{" "}
              {t.market.competitorNote.split(lang === "tr" ? "Kritik farklılaşma: " : "Critical differentiation: ")[1] || t.market.competitorNote}
            </p>
          </div>
        </motion.div>

        {/* ───── ENTERPRISE AI BENCHMARKS ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              {t.market.aiTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.aiSource}</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aiBenchmarks.map((b, i) => (
              <motion.div
                key={b.metric}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="text-xl font-bold text-gradient mb-1">{b.value}</div>
                <div className="text-xs font-medium text-foreground/60 mb-1">{b.metric}</div>
                <div className="text-[9px] text-foreground/25 mb-1.5">{b.detail}</div>
                <div className="text-[8px] text-foreground/15 italic">{b.source}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-lg bg-accent/5 border border-accent/10">
            <div className="text-[10px] font-mono text-accent/50 mb-1.5">{t.market.projectionTitle}</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {lang === "tr"
                ? "450+ kişilik mühendislik ekibiyle global AI benchmarklarının alt sınırı uygulandığında bile: geliştirme hızında %40 artış, operasyonel maliyetlerde %25 azalma, müşteri deneyiminde %35 iyileşme. Commencis LLM'in yeni sektörlere (sigorta, telekom, perakende) genişlemesiyle bu etkiler katlanarak büyür."
                : "Even applying the lower bounds of global AI benchmarks with a 450+ engineering team: 40% increase in development speed, 25% reduction in operational costs, 35% improvement in customer experience. These effects multiply as Commencis LLM expands into new sectors (insurance, telecom, retail)."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
