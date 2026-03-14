"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

/* ───── PROJECT DEEP DIVE DATA ───── */
const projectsTr = [
  {
    title: "Gerçek Zamanlı Topluluk Platformu",
    metric: "64,900 Satır",
    color: "#6366f1",
    stack: "Fastify 5 + Next.js 15 + React 19 + PostgreSQL 16 + Redis 7",
    highlights: [
      "164 API endpoint, 29 Prisma modeli, 17 route modülü",
      "JWT + Argon2 kimlik doğrulama, rol bazlı erişim kontrolü",
      "80+ React bileşeni, Zustand state management, Framer Motion animasyonları",
      "Python Telegram bot — Claude AI entegrasyonu, Flask mini-app",
      "Otonom monitoring daemon: uptime, SEO audit, trafik analiz, hata log takibi",
      "Gamifikasyon: puan/ödül/çekiliş/ticket event sistemi",
      "SEO otomasyonu: IndexNow, dinamik sitemap, JSON-LD structured data",
      "Yandex'te #1 organik sıralama elde edildi",
    ],
    infra: "5 Docker container, Nginx reverse proxy, Cloudflare CDN, Tailscale VPN",
    decision: "Fastify seçiminin nedeni: Express'e göre 2-3x daha hızlı JSON serialization, schema-based validation, hook sistemi ile middleware yönetimi. Prisma ORM ile tip güvenli veritabanı sorguları.",
  },
  {
    title: "Akıllı Lojistik & Ödeme Platformu",
    metric: "34,600 Satır",
    color: "#0ea5e9",
    stack: "pnpm Monorepo — 5 Paket: API (Fastify) + Web (React) + Bot (Grammy) + MiniApp + Shared",
    highlights: [
      "25 Prisma modeli, PostgreSQL 16, Redis 7",
      "6 Otonom Ajan: PaymentAgent, OrderAgent, InventoryAgent, NotificationAgent, SignalAgent, WorkflowAgent",
      "DLQRetryAgent: başarısız işlemleri exponential backoff ile retry",
      "HD Wallet (BIP32/39/44) — multi-chain: Bitcoin, Ethereum, BSC, Polygon, Tron, Litecoin",
      "Coğrafi sorgulama, kapasite takibi, anlaşmazlık sistemi (72 saat timeout)",
      "Audit logging: tüm kritik işlemler izlenebilir",
    ],
    infra: "7 Docker servisi (postgres, redis, signal-api, api, bot, web + dev overrides)",
    decision: "Monorepo mimarisi: shared types ve utilities ile kod tekrarı sıfır. Otonom ajanlar event-driven — human-in-the-loop sadece dispute resolution'da devreye giriyor.",
  },
  {
    title: "Çok Modüllü Bot & AI Ekosistemi",
    metric: "15,000+ Satır",
    color: "#8b5cf6",
    stack: "Python 3.11 + FastAPI + Uvicorn + python-telegram-bot 20.7 + Telethon 1.38",
    highlights: [
      "4 mikro servis: Dashboard, Verification Bot, Autopost Bot, Member Bot",
      "Gemini 2.0 Flash AI entegrasyonu — API key rotation, rate limiting, Türkçe system prompt",
      "ML Güvenlik: Isolation Forest anomali tespiti, adaptive intelligence scoring",
      "Flood risk detection, fraud detection (IP/username/clientID dedup)",
      "FastAPI admin dashboard: 39 Jinja2 template, SSE real-time monitoring, event bus",
      "SQLite, 31 tablo, 70+ index, multi-brand izolasyonu",
      "Canlı etkinlik chat sistemi (1,786 satır), otomatik scraping & davet motoru",
    ],
    infra: "4 Docker container, SSE real-time monitoring",
    decision: "Isolation Forest seçimi: unsupervised öğrenme — etiketli veri gerektirmez, normal davranış pattern'ını otomatik öğrenir. Adaptive scoring ile her kullanıcıya dinamik risk skoru.",
  },
  {
    title: "QR Menü SaaS Platformu",
    metric: "184 Endpoint",
    color: "#10b981",
    stack: "Node.js + Express 4.21 + PostgreSQL + bcrypt + JWT",
    highlights: [
      "184 API endpoint, 21 route modülü, 46 veritabanı tablosu",
      "12 SQL migration, 20+ veritabanı index optimizasyonu",
      "5 kademeli RBAC: super_admin → brand_manager → brand_owner → branch_manager → staff",
      "Tam sadakat programı: 4 tier, kampanya yönetimi, puan/ödül sistemi",
      "Tema motoru: JSONB tabanlı özelleştirme, marka bazlı renk/font/logo",
      "SMS OTP doğrulama (NETGSM), çoklu şube desteği, slug routing",
      "8+ aktif marka, multi-tenant mimari",
    ],
    infra: "Canlı: qr.sebastianlogic.com",
    decision: "Multi-tenant SaaS: tek veritabanı, brand_id ile izolasyon. RBAC 5 kademeli çünkü gerçek restoran hiyerarşisi bu — franchise sahibi, marka yöneticisi ve şube müdürü farklı yetkilere ihtiyaç duyar.",
  },
];

const projectsEn = [
  {
    title: "Real-Time Community Platform",
    metric: "64,900 Lines",
    color: "#6366f1",
    stack: "Fastify 5 + Next.js 15 + React 19 + PostgreSQL 16 + Redis 7",
    highlights: [
      "164 API endpoints, 29 Prisma models, 17 route modules",
      "JWT + Argon2 authentication, role-based access control",
      "80+ React components, Zustand state management, Framer Motion animations",
      "Python Telegram bot — Claude AI integration, Flask mini-app",
      "Autonomous monitoring daemon: uptime, SEO audit, traffic analysis, error log tracking",
      "Gamification: points/rewards/giveaway/ticket event system",
      "SEO automation: IndexNow, dynamic sitemap, JSON-LD structured data",
      "Achieved #1 organic ranking on Yandex",
    ],
    infra: "5 Docker containers, Nginx reverse proxy, Cloudflare CDN, Tailscale VPN",
    decision: "Chose Fastify over Express: 2-3x faster JSON serialization, schema-based validation, hook system for middleware management. Prisma ORM for type-safe database queries.",
  },
  {
    title: "Smart Logistics & Payment Platform",
    metric: "34,600 Lines",
    color: "#0ea5e9",
    stack: "pnpm Monorepo — 5 Packages: API (Fastify) + Web (React) + Bot (Grammy) + MiniApp + Shared",
    highlights: [
      "25 Prisma models, PostgreSQL 16, Redis 7",
      "6 Autonomous Agents: PaymentAgent, OrderAgent, InventoryAgent, NotificationAgent, SignalAgent, WorkflowAgent",
      "DLQRetryAgent: retries failed operations with exponential backoff",
      "HD Wallet (BIP32/39/44) — multi-chain: Bitcoin, Ethereum, BSC, Polygon, Tron, Litecoin",
      "Geo-queries, capacity tracking, dispute system (72-hour timeout)",
      "Audit logging: all critical operations are traceable",
    ],
    infra: "7 Docker services (postgres, redis, signal-api, api, bot, web + dev overrides)",
    decision: "Monorepo architecture: zero code duplication with shared types and utilities. Autonomous agents are event-driven — human-in-the-loop only activates for dispute resolution.",
  },
  {
    title: "Multi-Module Bot & AI Ecosystem",
    metric: "15,000+ Lines",
    color: "#8b5cf6",
    stack: "Python 3.11 + FastAPI + Uvicorn + python-telegram-bot 20.7 + Telethon 1.38",
    highlights: [
      "4 microservices: Dashboard, Verification Bot, Autopost Bot, Member Bot",
      "Gemini 2.0 Flash AI integration — API key rotation, rate limiting, Turkish system prompt",
      "ML Security: Isolation Forest anomaly detection, adaptive intelligence scoring",
      "Flood risk detection, fraud detection (IP/username/clientID dedup)",
      "FastAPI admin dashboard: 39 Jinja2 templates, SSE real-time monitoring, event bus",
      "SQLite, 31 tables, 70+ indexes, multi-brand isolation",
      "Live event chat system (1,786 lines), automated scraping & invite engine",
    ],
    infra: "4 Docker containers, SSE real-time monitoring",
    decision: "Isolation Forest: unsupervised learning — no labeled data needed, automatically learns normal behavior patterns. Adaptive scoring gives each user a dynamic risk score.",
  },
  {
    title: "QR Menu SaaS Platform",
    metric: "184 Endpoints",
    color: "#10b981",
    stack: "Node.js + Express 4.21 + PostgreSQL + bcrypt + JWT",
    highlights: [
      "184 API endpoints, 21 route modules, 46 database tables",
      "12 SQL migrations, 20+ database index optimizations",
      "5-tier RBAC: super_admin → brand_manager → brand_owner → branch_manager → staff",
      "Full loyalty program: 4 tiers, campaign management, points/rewards system",
      "Theme engine: JSONB-based customization, brand-specific colors/fonts/logos",
      "SMS OTP verification (NETGSM), multi-branch support, slug routing",
      "8+ active brands, multi-tenant architecture",
    ],
    infra: "Live: qr.sebastianlogic.com",
    decision: "Multi-tenant SaaS: single database, isolation via brand_id. 5-tier RBAC because real restaurant hierarchy demands it — franchise owner, brand manager, and branch manager need different permissions.",
  },
];

/* ───── SKILLS → COMMENCIS MAPPING ───── */
const skillMapTr = [
  {
    mySkill: "6 Otonom Ajan Sistemi",
    commencisNeed: "Agentic AI Ölçekleme",
    how: "PaymentAgent, WorkflowAgent gibi event-driven otonom ajanlar geliştirdim. Commencis LLM'i otonom iş süreçlerine, multi-agent orkestrasyonuna ve human-in-the-loop denetim sistemlerine genişletebilirim.",
    color: "#6366f1",
  },
  {
    mySkill: "400+ API Endpoint & Monorepo",
    commencisNeed: "Enterprise Platform Geliştirme",
    how: "Fastify 5 + Prisma + PostgreSQL ile 164 endpoint'li backend, pnpm monorepo (5 paket) geliştirdim. İsCep gibi büyük platformların backend ekibinde hızla üretken olabilirim.",
    color: "#0ea5e9",
  },
  {
    mySkill: "ML Güvenlik & Anomali Tespiti",
    commencisNeed: "AI Model Güvenliği",
    how: "Isolation Forest ile anomali tespiti, adaptive intelligence scoring, fraud detection (IP/username/clientID dedup) sistemleri kurdum. Commencis'in AI governance ve güvenlik katmanına katkı sağlayabilirim.",
    color: "#8b5cf6",
  },
  {
    mySkill: "8 Canlı Docker Container & VPS",
    commencisNeed: "AWS Cloud & DevOps",
    how: "PostgreSQL 16, Redis 7, Nginx, Tailscale VPN ile production altyapı yönetiyorum. Docker Compose orkestrasyon, health check, resource limit deneyimim AWS ekosistemiyle doğrudan uyumlu.",
    color: "#10b981",
  },
  {
    mySkill: "15+ Telegram Bot & Otomasyon",
    commencisNeed: "İç Süreç Otomasyonu",
    how: "Python + Grammy + Telethon ile otonom bot sistemleri, FastAPI dashboard ile SSE monitoring kurdum. Commencis'in iç süreçlerini ve Commence Bot platformunu güçlendirebilirim.",
    color: "#f59e0b",
  },
];

const skillMapEn = [
  {
    mySkill: "6 Autonomous Agent Systems",
    commencisNeed: "Agentic AI Scaling",
    how: "Built event-driven autonomous agents like PaymentAgent, WorkflowAgent. Can extend Commencis LLM into autonomous business processes, multi-agent orchestration, and human-in-the-loop oversight systems.",
    color: "#6366f1",
  },
  {
    mySkill: "400+ API Endpoints & Monorepo",
    commencisNeed: "Enterprise Platform Development",
    how: "Built 164-endpoint backend with Fastify 5 + Prisma + PostgreSQL, pnpm monorepo (5 packages). Can quickly become productive in backend teams of large platforms like IsCep.",
    color: "#0ea5e9",
  },
  {
    mySkill: "ML Security & Anomaly Detection",
    commencisNeed: "AI Model Security",
    how: "Built Isolation Forest anomaly detection, adaptive intelligence scoring, fraud detection (IP/username/clientID dedup) systems. Can contribute to Commencis's AI governance and security layer.",
    color: "#8b5cf6",
  },
  {
    mySkill: "8 Live Docker Containers & VPS",
    commencisNeed: "AWS Cloud & DevOps",
    how: "Managing production infrastructure with PostgreSQL 16, Redis 7, Nginx, Tailscale VPN. Docker Compose orchestration, health checks, resource limits experience directly compatible with AWS ecosystem.",
    color: "#10b981",
  },
  {
    mySkill: "15+ Telegram Bots & Automation",
    commencisNeed: "Internal Process Automation",
    how: "Built autonomous bot systems with Python + Grammy + Telethon, FastAPI dashboard with SSE monitoring. Can strengthen Commencis's internal processes and Commence Bot platform.",
    color: "#f59e0b",
  },
];

/* ───── COMMENCIS MEGA PROJECTS ───── */
const megaTr = [
  { name: "İşBank İsCep", users: "14.5M Kullanıcı", award: "World's Best Mobile Banking", color: "#6366f1", details: ["Türkiye'nin en büyük mobil bankacılık platformu", "Commencis LLM ile AI-native bankacılık deneyimi", "Günde 2M+ API çağrısı, %99.99 uptime"] },
  { name: "Pegasus Airlines", users: "70M+ Dijital Kullanıcı/Yıl", award: "Altın Örümcek 2024", color: "#0ea5e9", details: ["Yılda 30M yolcu, uçtan uca dijital deneyim", "A/B test ile %23 dönüşüm artışı", "Air Astana ve Transavia'ya genişletilen platform"] },
  { name: "Turkcell Süper App", users: "35M Kullanıcı", award: "Süper App Dönüşümü", color: "#8b5cf6", details: ["Türkiye'nin en büyük telekom uygulaması", "Fatura, paket, dijital servisler tek platformda", "Push notification %94+ delivery rate"] },
  { name: "Commencis LLM v2.0", users: "Enterprise AI", award: "Stratejik Ürün", color: "#f59e0b", details: ["GPT-4 Turbo seviyesinde Türkçe NLP (9.8/10)", "On-premise deployment — veri egemenliği", "LEAP 2026 Riyadh — Arapça genişleme"] },
];

const megaEn = [
  { name: "IsBank IsCep", users: "14.5M Users", award: "World's Best Mobile Banking", color: "#6366f1", details: ["Turkey's largest mobile banking platform", "AI-native banking with Commencis LLM", "2M+ daily API calls, 99.99% uptime"] },
  { name: "Pegasus Airlines", users: "70M+ Digital Users/Year", award: "Altin Orumcek 2024", color: "#0ea5e9", details: ["30M passengers/year, end-to-end digital", "23% conversion increase with A/B testing", "Platform extended to Air Astana and Transavia"] },
  { name: "Turkcell Super App", users: "35M Users", award: "Super App Transformation", color: "#8b5cf6", details: ["Turkey's largest telecom app", "Billing, packages, digital services on single platform", "Push notification 94%+ delivery rate"] },
  { name: "Commencis LLM v2.0", users: "Enterprise AI", award: "Strategic Product", color: "#f59e0b", details: ["GPT-4 Turbo level Turkish NLP (9.8/10)", "On-premise deployment — data sovereignty", "LEAP 2026 Riyadh — Arabic expansion"] },
];

/* ───── GROWTH ROADMAP ───── */
const growthTr = [
  { label: "Pozitron", year: "2000", pct: 15, color: "#0e4d92", detail: "Mobil çözümler ile kuruluş" },
  { label: "İsCep Lansmanı", year: "2007", pct: 30, color: "#3b82f6", detail: "İşBank mobil bankacılık — Türkiye'de ilk" },
  { label: "Monitise Satın Alma", year: "2014", pct: 50, color: "#0ea5e9", detail: "Global fintech genişlemesi" },
  { label: "Fiserv Dönemi", year: "2017", pct: 65, color: "#8b5cf6", detail: "Enterprise fintech olgunlaşması" },
  { label: "Commencis Kuruluş", year: "2018", pct: 80, color: "#10b981", detail: "Bağımsız dijital dönüşüm şirketi" },
  { label: "LLM & AWS Premier", year: "2024-25", pct: 100, color: "#f59e0b", detail: "Kendi AI modeli + AWS Partner of the Year Turkey 2024" },
];

const growthEn = [
  { label: "Pozitron", year: "2000", pct: 15, color: "#0e4d92", detail: "Founded with mobile solutions" },
  { label: "IsCep Launch", year: "2007", pct: 30, color: "#3b82f6", detail: "IsBank mobile banking — first in Turkey" },
  { label: "Monitise Acquisition", year: "2014", pct: 50, color: "#0ea5e9", detail: "Global fintech expansion" },
  { label: "Fiserv Era", year: "2017", pct: 65, color: "#8b5cf6", detail: "Enterprise fintech maturation" },
  { label: "Commencis Founded", year: "2018", pct: 80, color: "#10b981", detail: "Independent digital transformation company" },
  { label: "LLM & AWS Premier", year: "2024-25", pct: 100, color: "#f59e0b", detail: "Own AI model + AWS Partner of the Year Turkey 2024" },
];

/* ───── PROBLEMS & SOLUTIONS ───── */
const problemsTr = [
  {
    area: "Legacy Bankacılık Sistemleri", icon: "\uD83C\uDFE6", severity: "Kritik",
    problems: ["Türk bankalarının %70'i monolitik core banking", "COBOL/mainframe bağımlılığı", "API-first mimari eksikliği"],
    solutions: ["Commencis API Gateway ile kademeli modernizasyon", "Microservices ile core banking sarmalama", "finbyte ile açık bankacılık altyapısı"],
    myRole: "400+ endpoint'li çoklu platform deneyimimle API modernizasyonu ve microservices geçişine katkı sağlayabilirim.",
  },
  {
    area: "Türkçe NLP Boşluğu", icon: "\uD83E\uDDE0", severity: "Kritik",
    problems: ["Global LLM'ler Türkçe'de yetersiz", "Bankacılık terminolojisinde Türkçe AI yok", "KVKK/BDDK veri egemenliği gerekliliği"],
    solutions: ["Commencis LLM — Türkçe doğruluk 9.8/10", "Sektör-spesifik fine-tuning", "On-premise deployment ile regülasyon uyumu"],
    myRole: "6 otonom ajan ve ML güvenlik deneyimimle LLM'in agentic AI'a genişletilmesinde — otonom müşteri hizmetleri, dolandırıcılık tespiti — doğrudan rol alabilirim.",
  },
  {
    area: "Cloud Göçü & DevOps Olgunluğu", icon: "\u2601\uFE0F", severity: "Yüksek",
    problems: ["Türk şirketlerinin %60'ı hala on-premise", "CI/CD pipeline eksikliği — manuel deploy", "Container orkestrasyon bilgi açığı"],
    solutions: ["Commencis AWS Premier Partner altyapısı", "Infrastructure as Code ile otomasyon", "Kubernetes/Docker ile microservice migrasyonu"],
    myRole: "8 canlı Docker container yöneten, PostgreSQL/Redis/Nginx altyapısı kuran DevOps deneyimimle cloud migration ve container orkestrasyon süreçlerine doğrudan katkı sağlayabilirim.",
  },
];

const problemsEn = [
  {
    area: "Legacy Banking Systems", icon: "\uD83C\uDFE6", severity: "Critical",
    problems: ["70% of Turkish banks use monolithic core banking", "COBOL/mainframe dependency", "Lack of API-first architecture"],
    solutions: ["Gradual modernization with Commencis API Gateway", "Core banking wrapping with microservices", "Open banking infrastructure with finbyte"],
    myRole: "With my multi-platform experience of 400+ endpoints, I can contribute to API modernization and microservices transitions.",
  },
  {
    area: "Turkish NLP Gap", icon: "\uD83E\uDDE0", severity: "Critical",
    problems: ["Global LLMs underperform in Turkish", "No Turkish AI for banking terminology", "KVKK/BDDK data sovereignty requirements"],
    solutions: ["Commencis LLM — Turkish accuracy 9.8/10", "Sector-specific fine-tuning", "On-premise deployment for regulatory compliance"],
    myRole: "With my 6 autonomous agents and ML security experience, I can directly contribute to extending the LLM into agentic AI — autonomous customer service, fraud detection.",
  },
  {
    area: "Cloud Migration & DevOps Maturity", icon: "\u2601\uFE0F", severity: "High",
    problems: ["60% of Turkish companies still on-premise", "Lack of CI/CD pipelines — manual deployments", "Container orchestration knowledge gap"],
    solutions: ["Commencis AWS Premier Partner infrastructure", "Automation with Infrastructure as Code", "Microservice migration with Kubernetes/Docker"],
    myRole: "With my DevOps experience managing 8 live Docker containers and building PostgreSQL/Redis/Nginx infrastructure, I can directly contribute to cloud migration and container orchestration processes.",
  },
];

export default function DeepAnalysis() {
  const { lang } = useLang();
  const tr = lang === "tr";

  const projects = tr ? projectsTr : projectsEn;
  const skillMap = tr ? skillMapTr : skillMapEn;
  const mega = tr ? megaTr : megaEn;
  const growth = tr ? growthTr : growthEn;
  const problems = tr ? problemsTr : problemsEn;

  return (
    <main className="min-h-screen bg-background">
      {/* ───── HEADER ───── */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xs text-primary hover:underline flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {tr ? "Portfolyoya Dön" : "Back to Portfolio"}
          </Link>
          <span className="text-[10px] text-foreground/30 font-mono">
            {tr ? "DERİN ANALİZ" : "DEEP ANALYSIS"}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* ───── HERO ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {tr ? "Derin " : "Deep "}
            <span className="text-gradient">{tr ? "Analiz" : "Analysis"}</span>
          </h1>
          <p className="text-sm text-foreground/50 max-w-xl mx-auto">
            {tr
              ? "Projelerimin teknik detayları, Commencis'e yetkinlik uyumum ve sektör araştırmam."
              : "Technical details of my projects, skills alignment with Commencis, and industry research."}
          </p>
        </motion.div>

        {/* ═══════ SECTION 1: PROJECT DEEP DIVE ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Projelerim — Teknik Detay" : "My Projects — Technical Detail"}
          </h2>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-sm">{p.title}</h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: p.color + "15", color: p.color }}>
                    {p.metric}
                  </span>
                </div>

                <div className="text-[11px] text-foreground/50 font-mono mb-4 p-2 rounded bg-background/50 border border-border/30">
                  {p.stack}
                </div>

                <ul className="space-y-1.5 mb-4">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-xs text-foreground/70 flex items-start gap-2">
                      <span className="shrink-0 mt-0.5" style={{ color: p.color }}>&#10003;</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-background/40 border border-border/30">
                    <div className="text-[9px] text-foreground/30 uppercase tracking-wider mb-1">
                      {tr ? "ALTYAPI" : "INFRASTRUCTURE"}
                    </div>
                    <div className="text-[11px] text-foreground/60">{p.infra}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-background/40 border border-border/30">
                    <div className="text-[9px] text-foreground/30 uppercase tracking-wider mb-1">
                      {tr ? "MİMARİ KARAR" : "ARCHITECTURE DECISION"}
                    </div>
                    <div className="text-[11px] text-foreground/60">{p.decision}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ SECTION 2: SKILLS → COMMENCIS MAPPING ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Yetkinlik → Commencis Uyumu" : "Skills → Commencis Alignment"}
          </h2>

          <div className="space-y-3">
            {skillMap.map((s, i) => (
              <motion.div
                key={s.mySkill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: s.color + "15", color: s.color }}>
                    {s.mySkill}
                  </span>
                  <svg className="w-4 h-4 text-foreground/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <span className="text-xs font-medium text-foreground/60">{s.commencisNeed}</span>
                </div>
                <p className="text-xs text-foreground/50 leading-relaxed">{s.how}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ SECTION 3: COMMENCIS CLIENT PROJECTS ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Commencis Müşteri Projeleri" : "Commencis Client Projects"}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {mega.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: m.color + "15", color: m.color }}>
                    {m.users}
                  </span>
                  <span className="text-[10px] text-foreground/40">{m.award}</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{m.name}</h4>
                <ul className="space-y-1">
                  {m.details.map((d) => (
                    <li key={d} className="text-[11px] text-foreground/50 flex items-start gap-1.5">
                      <span className="text-foreground/30 shrink-0">&bull;</span>{d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ SECTION 4: GROWTH ROADMAP ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Commencis Büyüme Yol Haritası" : "Commencis Growth Roadmap"}
          </h2>

          <div className="p-6 rounded-xl bg-surface border border-border">
            <div className="space-y-3">
              {growth.map((g, i) => (
                <motion.div
                  key={g.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-28 shrink-0 text-right">
                    <span className="text-xs text-foreground/50">{g.label}</span>
                  </div>
                  <div className="flex-1 h-7 bg-background/50 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${g.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded flex items-center px-2 min-w-[50px]"
                      style={{ backgroundColor: g.color + "25" }}
                    >
                      <span className="text-[10px] font-bold whitespace-nowrap" style={{ color: g.color }}>{g.year}</span>
                    </motion.div>
                  </div>
                  <div className="w-44 shrink-0 text-[10px] text-foreground/40 hidden lg:block">{g.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════ SECTION 5: PROBLEMS & SOLUTIONS ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Sektör Sorunları & Çözüm Önerilerim" : "Industry Problems & My Solution Proposals"}
          </h2>

          <div className="space-y-4">
            {problems.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{item.icon}</span>
                  <h4 className="font-bold text-sm flex-1">{item.area}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">{item.severity}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-[10px] font-mono text-red-400 font-bold mb-2">{tr ? "SORUNLAR" : "PROBLEMS"}</div>
                    <ul className="space-y-1">
                      {item.problems.map((p) => (
                        <li key={p} className="text-[11px] text-foreground/70 flex items-start gap-1.5">
                          <span className="text-red-400 shrink-0">&#10007;</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-indigo-400 font-bold mb-2">{tr ? "ÇÖZÜMLER" : "SOLUTIONS"}</div>
                    <ul className="space-y-1">
                      {item.solutions.map((s) => (
                        <li key={s} className="text-[11px] text-foreground/70 flex items-start gap-1.5">
                          <span className="text-indigo-400 shrink-0">&#10003;</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-[9px] font-mono text-primary font-bold mb-1">{tr ? "BENİM ROLÜM:" : "MY ROLE:"}</div>
                  <p className="text-[11px] text-foreground/60">{item.myRole}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───── FOOTER CTA ───── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-border"
        >
          <p className="text-xs text-foreground/30 mb-4">
            {tr ? "Bu analiz Commencis başvurusu için hazırlanmıştır." : "This analysis was prepared for the Commencis application."}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {tr ? "Portfolyoya Dön" : "Back to Portfolio"}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
