"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

/* ═══════════════════════════════════════════════════════════
   SECTION 1: COMMENCIS STRATEGIC RADAR — Real, sourced data
   ═══════════════════════════════════════════════════════════ */

const radarEn = [
  {
    date: "Sep 2025",
    title: "2nd Place — OpenAI to Z Challenge",
    desc: "Commencis AI team placed 2nd worldwide among 10,000+ participants from 20+ countries. GlyphTrack: GPT-assisted anomaly detection on LiDAR/satellite data — uncovering pre-Columbian civilizations in the Amazon. Featured in National Geographic.",
    color: "#f59e0b",
    tag: "AI / ML",
    myFit: "I built Isolation Forest anomaly detection and adaptive intelligence scoring systems. GlyphTrack's pattern detection workflow mirrors my ML security pipeline — I can contribute to Commencis's AI R&D team on similar anomaly detection projects.",
    source: "commencis.com/newsroom",
  },
  {
    date: "Oct 2025",
    title: "AWS Premier Tier Services Partner",
    desc: "Highest recognition in the AWS Partner Network. 120+ successful cloud transformation projects, 100+ AWS certifications. Only a handful of companies in Turkey hold this status.",
    color: "#0ea5e9",
    tag: "Cloud / DevOps",
    myFit: "I manage 8 live Docker containers on VPS with PostgreSQL 16, Redis 7, Nginx reverse proxy, and Tailscale VPN. My Docker Compose orchestration, health checks, and resource limit experience maps directly to AWS ECS/EKS workflows.",
    source: "commencis.com/newsroom",
  },
  {
    date: "2025",
    title: "CAIRNE Green Member — Only from Turkey",
    desc: "Confederation of Laboratories for AI Research in Europe — pushing for a 'CERN for AI'. Commencis is the sole Turkish member, signaling commitment to trustworthy, human-centered AI by 2030.",
    color: "#8b5cf6",
    tag: "AI Governance",
    myFit: "My fraud detection systems (IP/username/clientID dedup) and ML security layers align with CAIRNE's trustworthy AI mission. I've implemented human-in-the-loop oversight in my autonomous agent architecture.",
    source: "cairne.eu/innovation-network",
  },
  {
    date: "May 2024",
    title: "Commencis LLM — Turkish-Fluent, Open Source",
    desc: "Purpose-built LLM for banking/finance on Mistral 7B. 3+ months fine-tuning on Turkish semantics. Trained on customer service records, financial reports, legal documents. On-premise deployment for data sovereignty. Available on Hugging Face.",
    color: "#6366f1",
    tag: "LLM / NLP",
    myFit: "I built 6 autonomous agents (PaymentAgent, WorkflowAgent, InventoryAgent) with event-driven architecture. I can extend Commencis LLM into agentic workflows — autonomous customer service bots, financial document processing pipelines, multi-agent orchestration.",
    source: "huggingface.co/Commencis",
  },
  {
    date: "2024",
    title: "Beyon Money — Bahrain's First Financial Super App",
    desc: "Built for Bahrain Telecom (Batelco/Beyon). Visa prepaid cards, stored value wallet, open banking across all Bahrain banks, Apple Pay + Benefit Pay integration, MoneyGram remittances to 200+ countries.",
    color: "#10b981",
    tag: "Fintech / Super App",
    myFit: "I built a multi-chain HD Wallet system (BIP32/39/44) supporting Bitcoin, Ethereum, BSC, Polygon, Tron, Litecoin. My payment processing experience with 6 autonomous agents directly applies to super app financial infrastructure.",
    source: "beyonmoney.com",
  },
  {
    date: "Jul 2025",
    title: "MCP Showdown: ADK vs OpenAI Agents SDK vs LangGraph",
    desc: "Commencis engineering blog comparing Google ADK, OpenAI Agents SDK, and LangGraph for production AI agent systems. Indicates active investment in multi-agent orchestration frameworks.",
    color: "#ef4444",
    tag: "Agentic AI",
    myFit: "I've built production multi-agent systems — 6 agents communicating via event bus with DLQ retry, exponential backoff, and workflow orchestration. I can bring hands-on agent architecture experience to Commencis's agentic AI research.",
    source: "medium.com/commencis",
  },
  {
    date: "2025",
    title: "finbyte — Berlin Open Banking JV with finleap",
    desc: "Joint venture combining Commencis software expertise with finleap's European fintech network. Positioned for PSD3 (EU open banking regulation mandating full interoperability by 2026). Open banking API calls projected to surge from 137B to 722B by 2028.",
    color: "#3b82f6",
    tag: "Open Banking",
    myFit: "My QR Menu SaaS platform has 184 endpoints with multi-tenant architecture and 5-tier RBAC. This API-heavy, multi-brand isolation experience is exactly what open banking platforms need — secure, scalable, permission-controlled API ecosystems.",
    source: "linkedin.com/company/wearefinbyte",
  },
];

const radarTr = [
  {
    date: "Eyl 2025",
    title: "OpenAI to Z Challenge — Dünya 2.si",
    desc: "Commencis AI ekibi, 20+ ülkeden 10.000+ katılımcı arasında dünya 2.si oldu. GlyphTrack: LiDAR/uydu verileri üzerinde GPT destekli anomali tespiti — Amazon'da Kolomb öncesi medeniyetlerin keşfi. National Geographic'te yayınlandı.",
    color: "#f59e0b",
    tag: "AI / ML",
    myFit: "Isolation Forest anomali tespiti ve adaptive intelligence scoring sistemleri kurdum. GlyphTrack'in pattern detection yaklaşımı benim ML güvenlik pipeline'ıma benzer — Commencis'in AI Ar-Ge ekibine benzer anomali tespit projelerinde katkı sağlayabilirim.",
    source: "commencis.com/newsroom",
  },
  {
    date: "Eki 2025",
    title: "AWS Premier Tier Services Partner",
    desc: "AWS Partner Network'teki en yüksek seviye. 120+ başarılı bulut dönüşüm projesi, 100+ AWS sertifikası. Türkiye'de sadece birkaç şirket bu statüde.",
    color: "#0ea5e9",
    tag: "Cloud / DevOps",
    myFit: "VPS üzerinde 8 canlı Docker container yönetiyorum — PostgreSQL 16, Redis 7, Nginx reverse proxy, Tailscale VPN. Docker Compose orkestrasyon, health check ve resource limit deneyimim AWS ECS/EKS iş akışlarıyla doğrudan eşleşiyor.",
    source: "commencis.com/newsroom",
  },
  {
    date: "2025",
    title: "CAIRNE Üyeliği — Türkiye'den Tek",
    desc: "Avrupa AI Araştırma Laboratuvarları Konfederasyonu — 'AI için CERN' vizyonu. Commencis, tek Türk üye. 2030'a kadar güvenilir, insan odaklı AI taahhüdü.",
    color: "#8b5cf6",
    tag: "AI Governance",
    myFit: "Dolandırıcılık tespit sistemlerim (IP/kullanıcı adı/clientID dedup) ve ML güvenlik katmanlarım CAIRNE'nin güvenilir AI misyonuyla örtüşüyor. Otonom ajan mimarimde human-in-the-loop denetim mekanizması uyguladım.",
    source: "cairne.eu/innovation-network",
  },
  {
    date: "May 2024",
    title: "Commencis LLM — Türkçe, Açık Kaynak",
    desc: "Bankacılık/finans için Mistral 7B üzerine inşa edilmiş LLM. 3+ ay Türkçe semantik fine-tuning. Müşteri hizmetleri kayıtları, finansal raporlar, hukuki dokümanlar üzerinde eğitildi. On-premise deployment, Hugging Face'te açık.",
    color: "#6366f1",
    tag: "LLM / NLP",
    myFit: "6 otonom ajan (PaymentAgent, WorkflowAgent, InventoryAgent) event-driven mimariyle geliştirdim. Commencis LLM'i agentic iş akışlarına genişletebilirim — otonom müşteri hizmetleri botları, finansal doküman işleme, multi-agent orkestrasyon.",
    source: "huggingface.co/Commencis",
  },
  {
    date: "2024",
    title: "Beyon Money — Bahreyn'in İlk Finansal Süper Uygulaması",
    desc: "Bahrain Telecom (Batelco/Beyon) için geliştirildi. Visa ön ödemeli kart, cüzdan, tüm Bahreyn bankaları ile açık bankacılık, Apple Pay + Benefit Pay entegrasyonu, MoneyGram ile 200+ ülkeye havale.",
    color: "#10b981",
    tag: "Fintech / Süper App",
    myFit: "Multi-chain HD Wallet sistemi (BIP32/39/44) kurdum — Bitcoin, Ethereum, BSC, Polygon, Tron, Litecoin desteği. 6 otonom ajanla ödeme işleme deneyimim süper app finansal altyapısına doğrudan uygulanabilir.",
    source: "beyonmoney.com",
  },
  {
    date: "Tem 2025",
    title: "MCP Showdown: ADK vs OpenAI Agents SDK vs LangGraph",
    desc: "Commencis mühendislik blogu — Google ADK, OpenAI Agents SDK ve LangGraph'ı production AI agent sistemleri için karşılaştırıyor. Multi-agent orkestrasyon framework'lerine aktif yatırım göstergesi.",
    color: "#ef4444",
    tag: "Agentic AI",
    myFit: "Production multi-agent sistemleri kurdum — event bus ile iletişim kuran 6 ajan, DLQ retry, exponential backoff ve workflow orkestrasyon. Commencis'in agentic AI araştırmasına pratik ajan mimarisi deneyimi getirebilirim.",
    source: "medium.com/commencis",
  },
  {
    date: "2025",
    title: "finbyte — finleap ile Berlin Açık Bankacılık JV",
    desc: "Commencis yazılım uzmanlığı + finleap Avrupa fintech ağı. PSD3 (AB açık bankacılık düzenlemesi, 2026'ya kadar tam interoperabilite zorunluluğu) için konumlanma. Açık bankacılık API çağrıları 2028'e kadar 137 milyardan 722 milyara çıkacak.",
    color: "#3b82f6",
    tag: "Açık Bankacılık",
    myFit: "QR Menü SaaS platformum 184 endpoint, multi-tenant mimari ve 5 kademeli RBAC içeriyor. Bu API-yoğun, çok markalı izolasyon deneyimi tam olarak açık bankacılık platformlarının ihtiyacı — güvenli, ölçeklenebilir, yetki kontrollü API ekosistemi.",
    source: "linkedin.com/company/wearefinbyte",
  },
];

/* ═══════════════════════════════════════════════════════════
   SECTION 2: MARKET CONTEXT — Real Turkish AI market stats
   ═══════════════════════════════════════════════════════════ */

const marketEn = [
  { stat: "7.5%", label: "Turkish enterprise AI adoption", sub: "24.1% among 250+ employee companies", source: "TurkStat 2025" },
  { stat: "$546M", label: "Turkey Gen AI market by 2033", sub: "17.48% CAGR", source: "IMARC Group" },
  { stat: "74.2%", label: "Cite 'lack of expertise' as barrier", sub: "= massive demand for AI-skilled engineers", source: "TurkStat" },
  { stat: "1 in 5", label: "Turkish individuals use generative AI", sub: "Rapid consumer adoption driving enterprise demand", source: "Daily Sabah" },
];

const marketTr = [
  { stat: "%7.5", label: "Türk kurumsal AI benimseme oranı", sub: "250+ çalışanlı şirketlerde %24.1", source: "TÜİK 2025" },
  { stat: "$546M", label: "Türkiye Gen AI pazarı (2033)", sub: "%17.48 CAGR", source: "IMARC Group" },
  { stat: "%74.2", label: "'Uzmanlık eksikliği' en büyük engel", sub: "= AI yetenekli mühendislere devasa talep", source: "TÜİK" },
  { stat: "5'te 1", label: "Türk bireyi generatif AI kullanıyor", sub: "Hızlı tüketici benimsemesi kurumsal talebi tetikliyor", source: "Daily Sabah" },
];

/* ═══════════════════════════════════════════════════════════
   SECTION 3: COMMENCIS CLIENT PORTFOLIO — Updated & sourced
   ═══════════════════════════════════════════════════════════ */

const clientsEn = [
  { name: "IsBank IsCep", stat: "14.5M Users", award: "TCXA 2025 Gold — Best UX", color: "#6366f1", detail: "Turkey's largest mobile banking, AI-native with Commencis LLM" },
  { name: "Pegasus Airlines", stat: "70M+ Digital/Year", award: "UX Design Awards 2025 Nominee", color: "#0ea5e9", detail: "1-minute ticket purchase, extended to Air Astana & Transavia" },
  { name: "Burgan Bank ON Mobil", stat: "Digital Transformation", award: "TCXA 2025 Finalist", color: "#10b981", detail: "Full digital channel redesign, UX Design Awards 2025 nominee" },
  { name: "Turkcell Super App", stat: "35M Users", award: "Super App", color: "#8b5cf6", detail: "Billing, packages, digital services — native iOS/Android" },
  { name: "Beyon Money (Bahrain)", stat: "Super App", award: "Gulf Expansion", color: "#f59e0b", detail: "Bahrain's first open banking super app — Visa, Apple Pay, MoneyGram" },
  { name: "Mapfre Insurance", stat: "Agency Portal", award: "Digital Channel", color: "#ef4444", detail: "Agency Portal + MapfreGO digital transformation" },
];

const clientsTr = [
  { name: "İşBank İsCep", stat: "14.5M Kullanıcı", award: "TCXA 2025 Altın — En İyi UX", color: "#6366f1", detail: "Türkiye'nin en büyük mobil bankacılığı, Commencis LLM ile AI-native" },
  { name: "Pegasus Airlines", stat: "70M+ Dijital/Yıl", award: "UX Design Awards 2025 Aday", color: "#0ea5e9", detail: "1 dakikada bilet, Air Astana & Transavia'ya genişletildi" },
  { name: "Burgan Bank ON Mobil", stat: "Dijital Dönüşüm", award: "TCXA 2025 Finalist", color: "#10b981", detail: "Tam dijital kanal yeniden tasarımı" },
  { name: "Turkcell Süper App", stat: "35M Kullanıcı", award: "Süper App", color: "#8b5cf6", detail: "Fatura, paket, dijital servisler — native iOS/Android" },
  { name: "Beyon Money (Bahreyn)", stat: "Süper App", award: "Körfez Genişleme", color: "#f59e0b", detail: "Bahreyn'in ilk açık bankacılık süper uygulaması" },
  { name: "Mapfre Sigorta", stat: "Acente Portalı", award: "Dijital Kanal", color: "#ef4444", detail: "Acente Portalı + MapfreGO dijital dönüşüm" },
];

/* ═══════════════════════════════════════════════════════════
   SECTION 4: MY PROJECTS — Compact, focused
   ═══════════════════════════════════════════════════════════ */

const projectsEn = [
  { title: "Real-Time Community Platform", metric: "64,900 Lines", color: "#6366f1", stack: "Fastify 5 · Next.js 15 · PostgreSQL 16 · Redis 7", highlights: ["164 API endpoints, 29 Prisma models", "Autonomous monitoring daemon", "Achieved #1 organic ranking on Yandex"] },
  { title: "Smart Logistics & Payment Platform", metric: "34,600 Lines", color: "#0ea5e9", stack: "pnpm Monorepo · 5 Packages · 6 Autonomous Agents", highlights: ["HD Wallet — multi-chain (BTC, ETH, BSC, MATIC, TRX)", "DLQRetryAgent with exponential backoff", "Event-driven agent architecture"] },
  { title: "Multi-Module Bot & AI Ecosystem", metric: "15,000+ Lines", color: "#8b5cf6", stack: "Python · FastAPI · Gemini AI · Isolation Forest", highlights: ["ML security: anomaly detection + fraud scoring", "4 microservices, SSE real-time dashboard", "31 tables, 70+ indexes, multi-brand isolation"] },
  { title: "QR Menu SaaS Platform", metric: "184 Endpoints", color: "#10b981", stack: "Node.js · Express · PostgreSQL · JWT", highlights: ["5-tier RBAC, multi-tenant architecture", "46 database tables, 8+ active brands", "Live: qr.sebastianlogic.com"] },
];

const projectsTr = [
  { title: "Gerçek Zamanlı Topluluk Platformu", metric: "64,900 Satır", color: "#6366f1", stack: "Fastify 5 · Next.js 15 · PostgreSQL 16 · Redis 7", highlights: ["164 API endpoint, 29 Prisma modeli", "Otonom monitoring daemon", "Yandex'te #1 organik sıralama"] },
  { title: "Akıllı Lojistik & Ödeme Platformu", metric: "34,600 Satır", color: "#0ea5e9", stack: "pnpm Monorepo · 5 Paket · 6 Otonom Ajan", highlights: ["HD Wallet — multi-chain (BTC, ETH, BSC, MATIC, TRX)", "DLQRetryAgent exponential backoff ile", "Event-driven ajan mimarisi"] },
  { title: "Çok Modüllü Bot & AI Ekosistemi", metric: "15,000+ Satır", color: "#8b5cf6", stack: "Python · FastAPI · Gemini AI · Isolation Forest", highlights: ["ML güvenlik: anomali tespiti + fraud scoring", "4 mikro servis, SSE gerçek zamanlı dashboard", "31 tablo, 70+ index, çok markalı izolasyon"] },
  { title: "QR Menü SaaS Platformu", metric: "184 Endpoint", color: "#10b981", stack: "Node.js · Express · PostgreSQL · JWT", highlights: ["5 kademeli RBAC, multi-tenant mimari", "46 veritabanı tablosu, 8+ aktif marka", "Canlı: qr.sebastianlogic.com"] },
];

/* ═══════════════════════════════════════════════════════════ */

export default function DeepAnalysis() {
  const { lang, setLang } = useLang();
  const tr = lang === "tr";
  const radar = tr ? radarTr : radarEn;
  const market = tr ? marketTr : marketEn;
  const clients = tr ? clientsTr : clientsEn;
  const projects = tr ? projectsTr : projectsEn;

  return (
    <main className="min-h-screen bg-background">
      {/* ───── HEADER ───── */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xs text-primary hover:underline flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {tr ? "Portfolyoya Dön" : "Back to Portfolio"}
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-foreground/30 font-mono">
              {tr ? "DERİN ANALİZ" : "DEEP ANALYSIS"}
            </span>
            <div className="flex rounded-lg border border-border/50 overflow-hidden">
              <button onClick={() => setLang("tr")} className={`px-2.5 py-1 text-[10px] font-medium transition-colors ${lang === "tr" ? "bg-primary/20 text-primary" : "text-foreground/30 hover:text-foreground/50"}`}>TR</button>
              <button onClick={() => setLang("en")} className={`px-2.5 py-1 text-[10px] font-medium transition-colors ${lang === "en" ? "bg-primary/20 text-primary" : "text-foreground/30 hover:text-foreground/50"}`}>EN</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* ───── HERO ───── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {tr ? "Commencis " : "Commencis "}
            <span className="text-gradient">{tr ? "Stratejik Radar" : "Strategic Radar"}</span>
          </h1>
          <p className="text-sm text-foreground/50 max-w-2xl mx-auto">
            {tr
              ? "Commencis'in 2024-2026 stratejik hamleleri, her biri için deneyim eşleşmem ve sektör bağlamı. Tüm veriler gerçek, kaynakları belirtilmiştir."
              : "Commencis's 2024-2026 strategic moves, my experience match for each, and market context. All data is real and sourced."}
          </p>
        </motion.div>

        {/* Source badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-surface/30">
            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative rounded-full h-1.5 w-1.5 bg-emerald-400" /></span>
            <span className="text-[10px] text-foreground/40">{tr ? "Mart 2026 — güncel veriler" : "March 2026 — live data"}</span>
          </div>
        </motion.div>

        {/* ═══════ SECTION 1: STRATEGIC RADAR ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Commencis Şimdi Ne Yapıyor?" : "What Is Commencis Doing Right Now?"}
          </h2>

          <div className="space-y-4">
            {radar.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-surface border border-border overflow-hidden"
              >
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border/50" style={{ backgroundColor: item.color + "08" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold" style={{ color: item.color }}>{item.date}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: item.color + "15", color: item.color }}>{item.tag}</span>
                  </div>
                  <span className="text-[9px] text-foreground/25 font-mono">{item.source}</span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-foreground/55 leading-relaxed mb-4">{item.desc}</p>

                  {/* My Fit — the money shot */}
                  <div className="p-3 rounded-lg border" style={{ backgroundColor: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.2)" }}>
                    <div className="text-[9px] font-mono font-bold mb-1" style={{ color: "#818cf8" }}>{tr ? "BENİM KATKUM:" : "MY CONTRIBUTION:"}</div>
                    <p className="text-[11px] leading-relaxed" style={{ color: "rgba(241,245,249,0.65)" }}>{item.myFit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ SECTION 2: MARKET CONTEXT ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Türkiye AI Pazarı — Neden Şimdi?" : "Turkey AI Market — Why Now?"}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {market.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-xl bg-surface border border-border text-center"
              >
                <div className="text-2xl font-bold text-gradient mb-1">{m.stat}</div>
                <div className="text-[10px] text-foreground/60 font-medium mb-1">{m.label}</div>
                <div className="text-[9px] text-foreground/35">{m.sub}</div>
                <div className="text-[8px] text-foreground/20 mt-2 font-mono">{m.source}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ SECTION 3: COMMENCIS CLIENT PORTFOLIO ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Commencis Müşteri Portföyü (2025)" : "Commencis Client Portfolio (2025)"}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: c.color + "15", color: c.color }}>{c.stat}</span>
                  <span className="text-[9px] text-foreground/30">{c.award}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{c.name}</h4>
                <p className="text-[10px] text-foreground/45">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ SECTION 4: MY PROJECTS — Compact ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Projelerim — Teknik Özet" : "My Projects — Technical Summary"}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm">{p.title}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: p.color + "15", color: p.color }}>{p.metric}</span>
                </div>
                <div className="text-[10px] text-foreground/40 font-mono mb-3 p-2 rounded bg-background/50 border border-border/30">{p.stack}</div>
                <ul className="space-y-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-[11px] text-foreground/60 flex items-start gap-1.5">
                      <span className="shrink-0 mt-0.5" style={{ color: p.color }}>&#10003;</span>{h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════ SECTION 5: TECH BLOG ALIGNMENT ═══════ */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">//</span>
            {tr ? "Commencis Blog — Teknik Odak Alanları" : "Commencis Blog — Technical Focus Areas"}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "MCP Showdown: ADK vs Agents SDK vs LangGraph", tag: "Agentic AI", date: "Jul 2025", color: "#ef4444" },
              { title: "RAG Retrieval: Sparse vs Dense vs Hybrid", tag: "RAG", date: "2025", color: "#6366f1" },
              { title: "On-Device AI with Gemma 3n on Android", tag: "Edge AI", date: "2025", color: "#10b981" },
              { title: "Resolving AWS SSO User Auth in EKS", tag: "AWS/K8s", date: "Mar 2025", color: "#0ea5e9" },
              { title: "Karate Framework for API Testing", tag: "QA", date: "2025", color: "#f59e0b" },
              { title: "Softmatch: On-Device Intelligent Search", tag: "Mobile", date: "2025", color: "#8b5cf6" },
            ].map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-3 rounded-lg bg-surface border border-border/50"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: post.color + "15", color: post.color }}>{post.tag}</span>
                  <span className="text-[9px] text-foreground/25">{post.date}</span>
                </div>
                <p className="text-[11px] text-foreground/60 font-medium">{post.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-lg bg-surface/50 border border-border/30">
            <p className="text-[11px] text-foreground/50 leading-relaxed">
              <span className="text-primary font-bold">{tr ? "Uyum notu:" : "Alignment note:"}</span>{" "}
              {tr
                ? "Commencis'in blog içerikleri MCP/agent framework'leri, RAG pipeline'ları, AWS/EKS altyapısı ve API test otomasyonuna odaklanıyor. Benim projelerimde de aynı alanlar var: 6 otonom ajan, event-driven mimari, Docker/PostgreSQL/Redis altyapısı, 400+ endpoint'li API sistemleri."
                : "Commencis's blog focuses on MCP/agent frameworks, RAG pipelines, AWS/EKS infrastructure, and API test automation. My projects cover the same areas: 6 autonomous agents, event-driven architecture, Docker/PostgreSQL/Redis infrastructure, 400+ endpoint API systems."}
            </p>
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
            {tr
              ? "Bu analiz kamuya açık kaynaklardan derlenen gerçek verilerle Commencis başvurusu için hazırlanmıştır."
              : "This analysis was prepared for the Commencis application using real data compiled from public sources."}
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
