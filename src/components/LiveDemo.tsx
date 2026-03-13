"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";

function useAnimatedNumber(target: number, duration: number = 2000) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { value, start: () => setStarted(true) };
}

const projects = [
  { name: "İşBank İsCep", type: "Mobil Bankacılık", cap: "14.5M kullanıcı, 750+ fonksiyon", status: "online" as const, eff: 98, color: "#6366f1" },
  { name: "Pegasus Airlines", type: "Web & Mobil", cap: "70M+ dijital kullanıcı/yıl", status: "online" as const, eff: 94, color: "#0ea5e9" },
  { name: "Turkcell Süper App", type: "Süper Uygulama", cap: "35M kullanıcı", status: "online" as const, eff: 91, color: "#8b5cf6" },
  { name: "Burgan Bank ON", type: "Dijital Banka", cap: "2M kullanıcı", status: "online" as const, eff: 89, color: "#6366f1" },
  { name: "Commencis LLM v2", type: "Türkçe AI", cap: "Mistral 7B fine-tuned", status: "warning" as const, eff: 76, color: "#f59e0b" },
  { name: "Unilever CX", type: "Omnichannel", cap: "B2B + B2C", status: "online" as const, eff: 87, color: "#10b981" },
  { name: "Cloud Camp 2026", type: "Eğitim", cap: "AWS Cert", status: "online" as const, eff: 100, color: "#0ea5e9" },
  { name: "LEAP 2026 Riyadh", type: "Etkinlik", cap: "Nisan 2026", status: "maintenance" as const, eff: 0, color: "#f59e0b" },
];

const alertsTr = [
  { time: "14:32", type: "warning", msg: "İsCep — Giriş sayfası yanıt süresi 2.1s'e çıktı. AI önerisi: CDN cache politikası güncellenmeli. Tahmini etki: %40 iyileşme." },
  { time: "14:28", type: "info", msg: "Commencis LLM — Bankacılık fine-tuning epoch 47/100 tamamlandı. Türkçe doğruluk skoru: 9.82/10. Hedef: 9.9." },
  { time: "14:15", type: "success", msg: "Pegasus Airlines — Mobil uygulama A/B testi sonuçlandı. Yeni checkout akışı %23 daha yüksek dönüşüm. Production'a alınıyor." },
  { time: "13:58", type: "warning", msg: "Turkcell Süper App — Push notification delivery rate %94.2'ye düştü. FCM token yenileme job'ı önerildi." },
  { time: "13:42", type: "info", msg: "Burgan Bank ON — Yeni müşteri onboarding akışı canlıya alındı. AI KYC doğrulama süresi: 12sn (önceki: 3dk)." },
  { time: "13:30", type: "info", msg: "AWS Maliyet Raporu — Mart ayı cloud harcaması %8 altında bütçe. Reserved Instance önerisi: yıllık $45K tasarruf." },
  { time: "13:15", type: "success", msg: "Haftalık CX skoru raporu oluşturuldu. Ortalama NPS: 72 (+3 önceki haftaya göre). En yüksek: İsCep (NPS 84, 15 ödül)." },
  { time: "13:00", type: "info", msg: "Kontent.ai entegrasyonu — AI içerik yönetimi modülü aktif. Headless CMS ile çok kanallı içerik dağıtımı devrede." },
  { time: "12:45", type: "success", msg: "AWS Partner of the Year 2024 — Commencis, Türkiye'nin ilk ve tek AWS Premier Tier Partner'ı olarak ödüllendirildi." },
];

const alertsEn = [
  { time: "14:32", type: "warning", msg: "IsCep — Login page response time rose to 2.1s. AI recommendation: CDN cache policy should be updated. Estimated impact: 40% improvement." },
  { time: "14:28", type: "info", msg: "Commencis LLM — Banking fine-tuning epoch 47/100 completed. Turkish accuracy score: 9.82/10. Target: 9.9." },
  { time: "14:15", type: "success", msg: "Pegasus Airlines — Mobile app A/B test concluded. New checkout flow shows 23% higher conversion. Deploying to production." },
  { time: "13:58", type: "warning", msg: "Turkcell Super App — Push notification delivery rate dropped to 94.2%. FCM token refresh job recommended." },
  { time: "13:42", type: "info", msg: "Burgan Bank ON — New customer onboarding flow went live. AI KYC verification time: 12s (previous: 3min)." },
  { time: "13:30", type: "info", msg: "AWS Cost Report — March cloud spend 8% under budget. Reserved Instance recommendation: $45K annual savings." },
  { time: "13:15", type: "success", msg: "Weekly CX score report generated. Average NPS: 72 (+3 vs. previous week). Highest: IsCep (NPS 84, 15 awards)." },
  { time: "13:00", type: "info", msg: "Kontent.ai integration — AI content management module active. Omnichannel content distribution via headless CMS enabled." },
  { time: "12:45", type: "success", msg: "AWS Partner of the Year 2024 — Commencis recognized as Turkey's first and only AWS Premier Tier Partner." },
];

const cxMetricsTr = [
  { label: "Toplam Kullanıcı", value: "85M+", trend: "+1.2M bu ay" },
  { label: "Ortalama NPS", value: "72", trend: "+3 önceki aya göre | İsCep: 15 ödül" },
  { label: "API Uptime", value: "%99.97", trend: "Son 90 gün" },
  { label: "Ortalama Yanıt", value: "142ms", trend: "P99: 380ms" },
];

const cxMetricsEn = [
  { label: "Total Users", value: "85M+", trend: "+1.2M this month" },
  { label: "Average NPS", value: "72", trend: "+3 vs. previous month | IsCep: 15 awards" },
  { label: "API Uptime", value: "99.97%", trend: "Last 90 days" },
  { label: "Avg. Response", value: "142ms", trend: "P99: 380ms" },
];

const kpiColors = ["#10b981", "#6366f1", "#0ea5e9", "#8b5cf6"];

export default function LiveDemo() {
  const { lang, t } = useLang();

  const totalUsers = useAnimatedNumber(85000000);
  const activeProjects = useAnimatedNumber(120);
  const apiCalls = useAnimatedNumber(2400000);
  const npsScore = useAnimatedNumber(92);

  const alerts = lang === "tr" ? alertsTr : alertsEn;
  const cxMetrics = lang === "tr" ? cxMetricsTr : cxMetricsEn;

  const kpiValues = [
    `${(totalUsers.value / 1000000).toFixed(0)}M+`,
    `${activeProjects.value}`,
    `${(apiCalls.value / 1000000).toFixed(1)}M`,
    `${npsScore.value}`,
  ];

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-accent tracking-wider">
            {t.demo.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.demo.titleA}
            <span className="text-gradient">{t.demo.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-3 text-sm max-w-3xl mx-auto">
            {t.demo.subtitle}
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            totalUsers.start();
            activeProjects.start();
            apiCalls.start();
            npsScore.start();
          }}
          viewport={{ once: true }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface-light/30">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">CX</span>
              </div>
              <span className="text-sm font-semibold">Commencis CX Intelligence Hub</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                v2.0 Enterprise
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-foreground/30">
              <span>14 Mar 2026 14:35</span>
              <span className="flex items-center gap-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                {t.demo.live}
              </span>
            </div>
          </div>

          <div className="p-5">
            {/* Top KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {t.demo.kpis.map((kpi, i) => (
                <div key={kpi.label} className="p-3 rounded-lg bg-background/50 border border-border/30">
                  <div className="text-[9px] text-foreground/25 uppercase tracking-wider">{kpi.label}</div>
                  <div className="text-lg font-bold mt-1" style={{ color: kpiColors[i] }}>{kpiValues[i]}</div>
                  <div className="text-[9px] text-foreground/20 mt-0.5">{kpi.sub}</div>
                </div>
              ))}
            </div>

            {/* Three Columns */}
            <div className="grid lg:grid-cols-12 gap-4">
              {/* Projects Grid - 5 cols */}
              <div className="lg:col-span-5">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.plantStatus}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {projects.slice(0, 8).map((p, i) => {
                    const statusCfg = {
                      online: { dot: "bg-green-400", label: t.demo.statusLabels.online },
                      maintenance: { dot: "bg-yellow-400", label: t.demo.statusLabels.maintenance },
                      warning: { dot: "bg-red-400", label: t.demo.statusLabels.warning },
                    };
                    const s = statusCfg[p.status];
                    return (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium truncate">{p.name}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        </div>
                        <div className="text-[9px] text-foreground/20 mb-1.5">
                          {p.type} &middot; {p.cap}
                        </div>
                        <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.eff}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: p.color }}
                          />
                        </div>
                        <div className="text-[8px] text-foreground/15 mt-0.5">{p.eff > 0 ? `${p.eff}%` : s.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* AI Alerts - 4 cols */}
              <div className="lg:col-span-4">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.aiAlerts}
                </div>
                <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
                  {alerts.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[9px] text-foreground/15 font-mono">{a.time}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          a.type === "warning" ? "bg-yellow-400" : a.type === "success" ? "bg-green-400" : "bg-blue-400"
                        }`} />
                      </div>
                      <div className="text-[10px] text-foreground/45 leading-relaxed">{a.msg}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Customer Analytics Panel - 3 cols */}
              <div className="lg:col-span-3">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.vedasDist}
                </div>
                <div className="space-y-2">
                  {cxMetrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="text-[9px] text-foreground/20 uppercase">{m.label}</div>
                      <div className="text-sm font-bold text-yellow-400 mt-0.5">{m.value}</div>
                      <div className="text-[9px] text-foreground/15">{m.trend}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Development Milestones */}
                <div className="mt-3">
                  <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                    {t.demo.projectProgress}
                  </div>
                  {[
                    { name: "Commencis LLM v2.0", pct: 76, color: "#6366f1" },
                    { name: "Agentic AI Platform", pct: 45, color: "#8b5cf6" },
                    { name: "LEAP 2026 Hazırlık", pct: 88, color: "#0ea5e9" },
                  ].map((p) => (
                    <div key={p.name} className="mb-2">
                      <div className="flex justify-between text-[9px] mb-0.5">
                        <span className="text-foreground/30">{p.name}</span>
                        <span style={{ color: p.color }}>{p.pct}%</span>
                      </div>
                      <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: p.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] text-foreground/15 mt-4"
        >
          {t.demo.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
