"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/* ───── PRODUCT LINES ───── */
const productLinesTr = {
  wind: [
    { name: "Commencis LLM", capacity: "Türkçe AI — Mistral 7B tabanlı, Apache 2.0 lisanslı, on-premise deployment. AWS G5 instance'larda eğitilmiş. Bankacılık terminolojisinde Türkçe doğruluk skoru 9.8/10.", location: "On-Premise", status: "GPT-4 Seviye" },
    { name: "AI Framework", capacity: "Enterprise AI", location: "Cloud/On-Prem", status: "Modüler" },
    { name: "Commence Bot", capacity: "Chatbot", location: "Çok Kanallı", status: "NLP" },
    { name: "finbyte", capacity: "Fintech", location: "PFM/BaaS", status: "Bankacılık" },
  ],
  hydro: [
    { name: "Dataroid", capacity: "Dijital Analitik", location: "CDP/Analytics", status: "Gerçek Zamanlı" },
    { name: "CX Platform", capacity: "Müşteri Deneyimi", location: "Omnichannel", status: "Enterprise" },
    { name: "Cloud Services", capacity: "AWS Premier", location: "Migrasyon", status: "100+ Sertifika" },
  ],
  geothermal: [
    { name: "Mobil Bankacılık", capacity: "İsCep/Burgan", location: "14.5M+ Kullanıcı", status: "Aktif" },
    { name: "Havacılık Dijital", capacity: "Pegasus/Air Astana", location: "Web & Mobil", status: "Aktif" },
    { name: "Telekom Süper App", capacity: "Turkcell", location: "35M Kullanıcı", status: "Aktif" },
  ],
};

const productLinesEn = {
  wind: [
    { name: "Commencis LLM", capacity: "Turkish AI — Mistral 7B based, Apache 2.0 licensed, on-premise deployment. Trained on AWS G5 instances. Turkish accuracy score 9.8/10 in banking terminology.", location: "On-Premise", status: "GPT-4 Level" },
    { name: "AI Framework", capacity: "Enterprise AI", location: "Cloud/On-Prem", status: "Modular" },
    { name: "Commence Bot", capacity: "Chatbot", location: "Multi-Channel", status: "NLP" },
    { name: "finbyte", capacity: "Fintech", location: "PFM/BaaS", status: "Banking" },
  ],
  hydro: [
    { name: "Dataroid", capacity: "Digital Analytics", location: "CDP/Analytics", status: "Real-Time" },
    { name: "CX Platform", capacity: "Customer Experience", location: "Omnichannel", status: "Enterprise" },
    { name: "Cloud Services", capacity: "AWS Premier", location: "Migration", status: "100+ Certs" },
  ],
  geothermal: [
    { name: "Mobile Banking", capacity: "IsCep/Burgan", location: "14.5M+ Users", status: "Active" },
    { name: "Aviation Digital", capacity: "Pegasus/Air Astana", location: "Web & Mobile", status: "Active" },
    { name: "Telecom Super App", capacity: "Turkcell", location: "35M Users", status: "Active" },
  ],
};

/* ───── CLIENT MEGA-PROJECTS ───── */
const megaProjectsTr = [
  {
    name: "İşBank İsCep Platformu",
    capacity: "14.5M Kullanıcı, 750+ Bankacılık Fonksiyonu",
    investment: "World's Best Mobile Banking",
    status: "Canlı",
    color: "#6366f1",
    details: [
      "Türkiye'nin en büyük mobil bankacılık platformu — 14.5M aktif kullanıcı",
      "Euromoney 'World's Best Digital Bank' ödülü",
      "Commencis LLM entegrasyonu ile AI-native bankacılık deneyimi",
      "KVKK/BDDK uyumlu on-premise AI deployment",
      "Günde 2M+ API çağrısı, %99.99 uptime",
    ],
    aiValue:
      "Commencis LLM (Mistral 7B fine-tuned, Türkçe skor 9.8/10) ile AI-native bankacılık. 9M tekil dijital müşteri Dataroid ile analiz edilmektedir.",
  },
  {
    name: "Pegasus Airlines Dijital",
    capacity: "70M+ Dijital Kullanıcı/Yıl, 500K+ Günlük Aktif",
    investment: "Web & Mobil",
    status: "Canlı",
    color: "#0ea5e9",
    details: [
      "Yılda 30M yolcu taşıyan Türkiye'nin en büyük LCC platformu",
      "Uçtan uca dijital deneyim: arama, satın alma, check-in, boarding",
      "A/B test odaklı sürekli optimizasyon — %23 dönüşüm artışı",
      "Air Astana ve Transavia'ya genişletilen platform mimarisi",
      "Altın Örümcek 'Yılın En İyi Mobil Uygulaması' 2024 ödüllü",
    ],
    aiValue:
      "Dinamik fiyatlama AI ve kişiselleştirilmiş teklif motoru ile ancillary gelirde %18 artış. Real-time koltuk optimizasyonu.",
  },
  {
    name: "Turkcell Süper Uygulama",
    capacity: "35M Kullanıcı",
    investment: "Süper App Dönüşümü",
    status: "Canlı",
    color: "#8b5cf6",
    details: [
      "Türkiye'nin en büyük telekom süper uygulaması — 35M aktif kullanıcı",
      "Fatura, paket yönetimi, dijital servisler tek platformda",
      "Commencis mimari danışmanlığı ile ölçeklenebilir altyapı",
      "Push notification optimizasyonu — %94+ delivery rate",
    ],
    aiValue:
      "AI tabanlı müşteri segmentasyonu ve kişiselleştirilmiş kampanyalar. Churn prediction ile %15 müşteri kaybı azalması.",
  },
  {
    name: "Burgan Bank ON Dijital",
    capacity: "2M Kullanıcı",
    investment: "Dijital Banka",
    status: "Canlı",
    color: "#6366f1",
    details: [
      "Sıfırdan tasarlanan dijital bankacılık platformu",
      "AI KYC doğrulama: 12sn (sektör ortalaması: 3dk)",
      "Commencis finbyte altyapısı ile PFM özellikleri",
      "Kuveyt'ten Türkiye'ye dijital bankacılık köprüsü",
    ],
    aiValue:
      "AI onboarding ile müşteri edinme maliyetinde %60 azalma. Dijital-first yaklaşım ile şube ihtiyacı minimumda.",
  },
  {
    name: "Commencis LLM v2.0",
    capacity: "Enterprise AI",
    investment: "Stratejik Ürün",
    status: "Geliştirme",
    color: "#f59e0b",
    details: [
      "GPT-4 Turbo seviyesinde Türkçe NLP doğruluğu (%98+)",
      "On-premise deployment — veri egemenliği ve regülasyon uyumu",
      "Bankacılık, havacılık, telekom sektör-spesifik fine-tuning",
      "Agentic AI yetenekleri — otonom görev tamamlama",
      "LEAP 2026 Riyadh'da Arapça genişleme duyurusu",
    ],
    aiValue:
      "Türkiye'nin ilk enterprise-grade Türkçe LLM'i. Commencis müşterilerinin %100'üne cross-sell potansiyeli. Yeni gelir akışı.",
  },
  {
    name: "Unilever & BSH CX",
    capacity: "B2B + B2C",
    investment: "Omnichannel",
    status: "Canlı",
    color: "#10b981",
    details: [
      "Unilever Türkiye dijital kanal optimizasyonu",
      "BSH (Bosch-Siemens) müşteri deneyimi platformu",
      "Omnichannel strateji: web, mobil, mağaza, çağrı merkezi",
      "Dataroid analitik entegrasyonu ile gerçek zamanlı CX ölçümü",
    ],
    aiValue:
      "AI destekli dijital kanal optimizasyonu ile online satışlarda %35 artış. Customer journey analizi ile friction noktalarının eliminasyonu.",
  },
];

const megaProjectsEn = [
  {
    name: "IsBank IsCep Platform",
    capacity: "14.5M Users, 750+ Banking Functions",
    investment: "World's Best Mobile Banking",
    status: "Live",
    color: "#6366f1",
    details: [
      "Turkey's largest mobile banking platform — 14.5M active users",
      "Euromoney 'World's Best Digital Bank' award",
      "AI-native banking experience with Commencis LLM integration",
      "KVKK/BDDK compliant on-premise AI deployment",
      "2M+ daily API calls, 99.99% uptime",
    ],
    aiValue:
      "Commencis LLM (Mistral 7B fine-tuned, Turkish score 9.8/10) for AI-native banking. 9M unique digital customers analyzed via Dataroid.",
  },
  {
    name: "Pegasus Airlines Digital",
    capacity: "70M+ Digital Users/Year, 500K+ Daily Active",
    investment: "Web & Mobile",
    status: "Live",
    color: "#0ea5e9",
    details: [
      "Turkey's largest LCC platform serving 30M passengers annually",
      "End-to-end digital experience: search, purchase, check-in, boarding",
      "Continuous A/B test-driven optimization — 23% conversion increase",
      "Platform architecture extended to Air Astana and Transavia",
      "Altin Orumcek 'Best Mobile App of the Year' 2024 award winner",
    ],
    aiValue:
      "Dynamic pricing AI and personalized offer engine yielding 18% increase in ancillary revenue. Real-time seat optimization.",
  },
  {
    name: "Turkcell Super App",
    capacity: "35M Users",
    investment: "Super App Transformation",
    status: "Live",
    color: "#8b5cf6",
    details: [
      "Turkey's largest telecom super app — 35M active users",
      "Billing, package management, digital services on single platform",
      "Scalable infrastructure with Commencis architecture consulting",
      "Push notification optimization — 94%+ delivery rate",
    ],
    aiValue:
      "AI-based customer segmentation and personalized campaigns. Churn prediction reducing customer loss by 15%.",
  },
  {
    name: "Burgan Bank ON Digital",
    capacity: "2M Users",
    investment: "Digital Bank",
    status: "Live",
    color: "#6366f1",
    details: [
      "Digital banking platform designed from scratch",
      "AI KYC verification: 12s (industry average: 3min)",
      "PFM features powered by Commencis finbyte infrastructure",
      "Digital banking bridge from Kuwait to Turkey",
    ],
    aiValue:
      "60% reduction in customer acquisition cost with AI onboarding. Digital-first approach minimizing branch dependency.",
  },
  {
    name: "Commencis LLM v2.0",
    capacity: "Enterprise AI",
    investment: "Strategic Product",
    status: "In Development",
    color: "#f59e0b",
    details: [
      "GPT-4 Turbo level Turkish NLP accuracy (98%+)",
      "On-premise deployment — data sovereignty and regulatory compliance",
      "Banking, aviation, telecom sector-specific fine-tuning",
      "Agentic AI capabilities — autonomous task completion",
      "Arabic expansion announcement at LEAP 2026 Riyadh",
    ],
    aiValue:
      "Turkey's first enterprise-grade Turkish LLM. 100% cross-sell potential across Commencis clients. New revenue stream.",
  },
  {
    name: "Unilever & BSH CX",
    capacity: "B2B + B2C",
    investment: "Omnichannel",
    status: "Live",
    color: "#10b981",
    details: [
      "Unilever Turkey digital channel optimization",
      "BSH (Bosch-Siemens) customer experience platform",
      "Omnichannel strategy: web, mobile, store, call center",
      "Real-time CX measurement with Dataroid analytics integration",
    ],
    aiValue:
      "AI-powered digital channel optimization yielding 35% increase in online sales. Customer journey analysis eliminating friction points.",
  },
];

/* ───── MARKET POSITION ───── */
const vedasDataTr = {
  coverage: "450-500 Mühendis",
  subscribers: "AWS Premier Tier Partner",
  population: "20+ Ülkede Müşteri",
  area: "$85M+ Gelir",
  investment2025: "Commencis LLM",
  lossRate: "Agentic AI Platform",
  smartMeters: "LEAP 2026 Genişleme",
  labels: {
    investment: "Stratejik Ürün",
    subscribers: "Ortaklık",
    lossTarget: "Yeni Platform",
    servicePopulation: "Global Genişleme",
  },
  aiModule: "STRATEJİK KONUM ANALİZİ:",
  aiText:
    "Commencis, Türkiye'nin dijital dönüşüm pazarında benzersiz bir konumda: (1) Kendi LLM'ini geliştiren tek Türk teknoloji şirketi, (2) AWS Premier Tier — Türkiye'de sadece 2 şirket bu seviyede, (3) İşBank, Pegasus, Turkcell gibi Türkiye'nin en büyük dijital platformlarının arkasındaki teknoloji partneri, (4) Bootstrapped büyüme — $0 dış yatırım ile $85M gelir. LEAP 2026 ile Suudi Arabistan ve Körfez pazarına açılım, Arapça LLM genişlemesi ve 5G-enabled servisler stratejik büyüme alanları.",
};

const vedasDataEn = {
  coverage: "450-500 Engineers",
  subscribers: "AWS Premier Tier Partner",
  population: "Clients in 20+ Countries",
  area: "$85M+ Revenue",
  investment2025: "Commencis LLM",
  lossRate: "Agentic AI Platform",
  smartMeters: "LEAP 2026 Expansion",
  labels: {
    investment: "Strategic Product",
    subscribers: "Partnership",
    lossTarget: "New Platform",
    servicePopulation: "Global Expansion",
  },
  aiModule: "STRATEGIC POSITION ANALYSIS:",
  aiText:
    "Commencis holds a unique position in Turkey's digital transformation market: (1) The only Turkish tech company developing its own LLM, (2) AWS Premier Tier — only 2 companies at this level in Turkey, (3) Technology partner behind Turkey's largest digital platforms: IsBank, Pegasus, Turkcell, (4) Bootstrapped growth — $85M revenue with $0 external funding. LEAP 2026 opens Saudi Arabia and Gulf markets, Arabic LLM expansion and 5G-enabled services are strategic growth areas.",
};

/* ───── CRITICAL PROBLEMS TO SOLVE ───── */
const healthcareProjectsTr = [
  {
    name: "Agentic AI Ölçekleme",
    beds: "Otonom Görev Yönetimi",
    area: "Enterprise AI",
    investment: "Stratejik",
    status: "Geliştirme",
    note: "LLM'den Agentic AI'a geçiş — otonom iş süreçleri, çoklu ajan orkestrasyonu, insan-döngüsü denetimi",
  },
  {
    name: "Çoklu Pazar Lokalizasyonu",
    beds: "Arapça + 5 Dil",
    area: "Global Genişleme",
    investment: "LEAP 2026",
    status: "Planlama",
    note: "Suudi Arabistan genişlemesi için Arapça LLM, Körfez bankacılığı ve havacılık sektörlerine adaptasyon",
  },
  {
    name: "Enterprise AI Yönetişimi",
    beds: "Regülasyon & Uyum",
    area: "KVKK/GDPR/BDDK",
    investment: "Zorunlu",
    status: "Aktif",
    note: "AI model güvenliği, bias tespiti, açıklanabilir AI (XAI), veri egemenliği ve cross-border veri yönetimi",
  },
];

const healthcareProjectsEn = [
  {
    name: "Agentic AI Scaling",
    beds: "Autonomous Task Management",
    area: "Enterprise AI",
    investment: "Strategic",
    status: "Development",
    note: "LLM to Agentic AI transition — autonomous business processes, multi-agent orchestration, human-in-the-loop oversight",
  },
  {
    name: "Multi-Market Localization",
    beds: "Arabic + 5 Languages",
    area: "Global Expansion",
    investment: "LEAP 2026",
    status: "Planning",
    note: "Arabic LLM for Saudi expansion, adaptation to Gulf banking and aviation sectors",
  },
  {
    name: "Enterprise AI Governance",
    beds: "Regulation & Compliance",
    area: "KVKK/GDPR/BDDK",
    investment: "Mandatory",
    status: "Active",
    note: "AI model security, bias detection, explainable AI (XAI), data sovereignty and cross-border data management",
  },
];

/* ───── PROBLEMS & SOLUTIONS ───── */
const criticalProblemsTr = [
  {
    area: "Legacy Bankacılık Sistemleri",
    icon: "\uD83C\uDFE6",
    severity: "Kritik",
    problems: [
      "Türk bankalarının %70'i hâlâ monolitik core banking sistemleri kullanıyor",
      "COBOL/mainframe bağımlılığı — modernizasyon maliyeti çok yüksek",
      "API-first mimari eksikliği — açık bankacılık (PSD2) uyumsuzluğu",
      "Dijital müşteri beklentileri ile legacy altyapı arasındaki uçurum",
    ],
    solutions: [
      "Commencis API Gateway ile kademeli modernizasyon — big bang değil, iteratif geçiş",
      "Microservices mimari ile core banking sarmalama (strangler fig pattern)",
      "İsCep modelinin diğer bankalara ölçeklenmesi — kanıtlanmış referans",
      "finbyte ile açık bankacılık uyumu ve BaaS (Banking-as-a-Service) altyapısı",
    ],
    roi: "API modernizasyonu ile geliştirme hızında %60 artış + açık bankacılık gelir fırsatları",
  },
  {
    area: "Türkçe NLP Boşluğu",
    icon: "\uD83E\uDDE0",
    severity: "Kritik",
    problems: [
      "Global LLM'ler Türkçe'de yetersiz — morfolojik karmaşıklık, agglutinative yapı",
      "Bankacılık ve finans terminolojisinde Türkçe AI çözümü yok",
      "On-premise gerekliliği — KVKK/BDDK verilerin yurt dışına çıkmasını engelliyor",
      "Enterprise müşteriler GPT API'sine bağımlı olmak istemiyor — vendor lock-in riski",
    ],
    solutions: [
      "Commencis LLM — GPT-4 Turbo seviyesinde Türkçe doğruluk (%98+)",
      "Sektör-spesifik fine-tuning: bankacılık, havacılık, telekom, perakende",
      "Tamamen on-premise deployment — veri egemenliği ve regülasyon uyumu",
      "RAG (Retrieval-Augmented Generation) ile müşteri-spesifik bilgi tabanı entegrasyonu",
    ],
    roi: "Müşteri hizmetleri maliyetinde %45 azalma + Türkçe NLP pazarında ilk hareket avantajı",
  },
  {
    area: "Omnichannel Fragmentasyonu",
    icon: "\uD83D\uDD17",
    severity: "Yüksek",
    problems: [
      "Web, mobil, şube, çağrı merkezi arasında kopuk müşteri deneyimi",
      "Kanal bazlı veri siloları — 360° müşteri görünümü oluşturulamıyor",
      "Her kanal için ayrı teknoloji stack'i — bakım maliyeti ve tutarsızlık",
      "Gerçek zamanlı kişiselleştirme yapılamıyor — statik kampanyalar",
    ],
    solutions: [
      "Dataroid CDP ile tüm kanallardan veri birleştirme — 360° müşteri profili",
      "Commencis CX Platform: tutarlı deneyim web, mobil, chatbot, şube",
      "AI tabanlı gerçek zamanlı kişiselleştirme — doğru mesaj, doğru kanal, doğru zaman",
      "Commence Bot ile omnichannel müşteri hizmetleri — %85 otomasyon oranı",
    ],
    roi: "NPS'de %35 artış + müşteri edinme maliyetinde %40 azalma",
  },
  {
    area: "Cloud Migrasyon Karmaşıklığı",
    icon: "\u2601\uFE0F",
    severity: "Yüksek",
    problems: [
      "Türk enterprise'larının %60'ı hâlâ on-premise altyapıda",
      "Cloud migrasyon maliyeti ve risk algısı çok yüksek",
      "Hybrid cloud stratejisi eksikliği — ya tamamen bulut ya tamamen yerinde",
      "Cloud-native beceri açığı — DevOps/SRE mühendis eksikliği",
    ],
    solutions: [
      "AWS Premier Tier Partner olarak kademeli migrasyon — Well-Architected Framework",
      "Hybrid cloud strateji tasarımı — hassas veri yerinde, scalable servisler bulutta",
      "Cloud Camp eğitim programı — 100+ AWS sertifikalı mühendis",
      "FinOps optimizasyonu — %30-50 cloud maliyet tasarrufu garanti modeli",
    ],
    roi: "Cloud maliyetinde %35 optimizasyon + %99.99 uptime SLA + %40 daha hızlı deployment",
  },
];

const criticalProblemsEn = [
  {
    area: "Legacy Banking Systems",
    icon: "\uD83C\uDFE6",
    severity: "Critical",
    problems: [
      "70% of Turkish banks still use monolithic core banking systems",
      "COBOL/mainframe dependency — modernization cost extremely high",
      "Lack of API-first architecture — open banking (PSD2) non-compliance",
      "Gap between digital customer expectations and legacy infrastructure",
    ],
    solutions: [
      "Gradual modernization with Commencis API Gateway — iterative, not big bang",
      "Core banking wrapping with microservices architecture (strangler fig pattern)",
      "Scaling the IsCep model to other banks — proven reference",
      "Open banking compliance and BaaS infrastructure with finbyte",
    ],
    roi: "60% increase in development speed with API modernization + open banking revenue opportunities",
  },
  {
    area: "Turkish NLP Gap",
    icon: "\uD83E\uDDE0",
    severity: "Critical",
    problems: [
      "Global LLMs underperform in Turkish — morphological complexity, agglutinative structure",
      "No Turkish AI solution for banking and finance terminology",
      "On-premise requirement — KVKK/BDDK prevents data from leaving the country",
      "Enterprise clients don't want GPT API dependency — vendor lock-in risk",
    ],
    solutions: [
      "Commencis LLM — GPT-4 Turbo level Turkish accuracy (98%+)",
      "Sector-specific fine-tuning: banking, aviation, telecom, retail",
      "Fully on-premise deployment — data sovereignty and regulatory compliance",
      "RAG (Retrieval-Augmented Generation) with customer-specific knowledge base integration",
    ],
    roi: "45% reduction in customer service costs + first-mover advantage in Turkish NLP market",
  },
  {
    area: "Omnichannel Fragmentation",
    icon: "\uD83D\uDD17",
    severity: "High",
    problems: [
      "Disconnected customer experience across web, mobile, branch, call center",
      "Channel-based data silos — unable to build 360-degree customer view",
      "Separate tech stack per channel — maintenance cost and inconsistency",
      "Unable to do real-time personalization — static campaigns",
    ],
    solutions: [
      "Data unification from all channels with Dataroid CDP — 360-degree customer profile",
      "Commencis CX Platform: consistent experience across web, mobile, chatbot, branch",
      "AI-based real-time personalization — right message, right channel, right time",
      "Omnichannel customer service with Commence Bot — 85% automation rate",
    ],
    roi: "35% increase in NPS + 40% reduction in customer acquisition cost",
  },
  {
    area: "Cloud Migration Complexity",
    icon: "\u2601\uFE0F",
    severity: "High",
    problems: [
      "60% of Turkish enterprises still on on-premise infrastructure",
      "Cloud migration cost and risk perception very high",
      "Lack of hybrid cloud strategy — all-cloud or all-on-premise",
      "Cloud-native skills gap — DevOps/SRE engineer shortage",
    ],
    solutions: [
      "Gradual migration as AWS Premier Tier Partner — Well-Architected Framework",
      "Hybrid cloud strategy design — sensitive data on-prem, scalable services in cloud",
      "Cloud Camp training program — 100+ AWS certified engineers",
      "FinOps optimization — guaranteed 30-50% cloud cost savings model",
    ],
    roi: "35% cloud cost optimization + 99.99% uptime SLA + 40% faster deployment",
  },
];

/* ───── GROWTH ROADMAP ───── */
const growthPhasesTr = [
  { label: "Pozitron", mw: "2000", pct: 15, color: "#0e4d92", detail: "Mobil çözümler ile kuruluş" },
  { label: "İsCep Lansmanı", mw: "2007", pct: 30, color: "#3b82f6", detail: "İşBank mobil bankacılık — Türkiye'de ilk" },
  { label: "Monitise Satın Alma", mw: "2014", pct: 50, color: "#0ea5e9", detail: "Global fintech genişlemesi" },
  { label: "Fiserv Dönemi", mw: "2017", pct: 65, color: "#8b5cf6", detail: "Enterprise fintech olgunlaşması" },
  { label: "Commencis Kuruluş", mw: "2018", pct: 80, color: "#10b981", detail: "Bağımsız dijital dönüşüm şirketi" },
  { label: "LLM & AWS Premier", mw: "2024-25", pct: 100, color: "#f59e0b", detail: "Kendi AI modeli + AWS Premier Tier Partner. AWS Consulting Partner of the Year Turkey 2024. Kontent.ai ortaklığı, Commence-Assist AI platform" },
];

const growthPhasesEn = [
  { label: "Pozitron", mw: "2000", pct: 15, color: "#0e4d92", detail: "Founded with mobile solutions" },
  { label: "IsCep Launch", mw: "2007", pct: 30, color: "#3b82f6", detail: "IsBank mobile banking — first in Turkey" },
  { label: "Monitise Acquisition", mw: "2014", pct: 50, color: "#0ea5e9", detail: "Global fintech expansion" },
  { label: "Fiserv Era", mw: "2017", pct: 65, color: "#8b5cf6", detail: "Enterprise fintech maturation" },
  { label: "Commencis Founded", mw: "2018", pct: 80, color: "#10b981", detail: "Independent digital transformation company" },
  { label: "LLM & AWS Premier", mw: "2024-25", pct: 100, color: "#f59e0b", detail: "Own AI model + AWS Premier Tier Partner. AWS Consulting Partner of the Year Turkey 2024. Kontent.ai partnership, Commence-Assist AI platform" },
];

export default function TurkerlerVision() {
  const { lang, t } = useLang();

  const operationalPlants = lang === "tr" ? productLinesTr : productLinesEn;
  const megaProjects = lang === "tr" ? megaProjectsTr : megaProjectsEn;
  const vedasData = lang === "tr" ? vedasDataTr : vedasDataEn;
  const healthcareProjects = lang === "tr" ? healthcareProjectsTr : healthcareProjectsEn;
  const criticalProblems = lang === "tr" ? criticalProblemsTr : criticalProblemsEn;
  const growthPhases = lang === "tr" ? growthPhasesTr : growthPhasesEn;

  const totalOperational = lang === "tr"
    ? "4 Ürün + 3 Platform + 3 Referans Proje"
    : "4 Products + 3 Platforms + 3 Reference Projects";

  return (
    <section id="turkerler" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">
            {t.turkerler.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.turkerler.titleA}
            <span className="text-gradient">{t.turkerler.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-3xl mx-auto text-sm">
            {t.turkerler.subtitle}
          </p>
        </motion.div>

        {/* ───── PRODUCT LINES ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono text-foreground/40 tracking-wider">
              {t.turkerler.portfolio} &mdash; {totalOperational}
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              450+ {lang === "tr" ? "Mühendis" : "Engineers"}
            </span>
          </div>

          {/* AI & Products */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-xs font-semibold text-indigo-400">
                {t.turkerler.wind} &mdash; 4 {lang === "tr" ? "Ürün" : "Products"}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {operationalPlants.wind.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-center">
                  <div className="text-[10px] font-medium truncate">{p.name}</div>
                  <div className="text-xs font-bold text-indigo-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold text-cyan-400">
                {t.turkerler.hydro} &mdash; 3 {lang === "tr" ? "Platform" : "Platforms"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {operationalPlants.hydro.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-center">
                  <div className="text-[10px] font-medium">{p.name}</div>
                  <div className="text-xs font-bold text-cyan-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reference Projects */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-xs font-semibold text-purple-400">
                {t.turkerler.geothermal} &mdash; {lang === "tr" ? "Referans Projeler" : "Reference Projects"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {operationalPlants.geothermal.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-purple-500/5 border border-purple-500/10 text-center">
                  <div className="text-[10px] font-medium">{p.name}</div>
                  <div className="text-xs font-bold text-purple-400">{p.capacity}</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ───── GROWTH ROADMAP ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <h3 className="text-sm font-mono text-foreground/40 mb-6 tracking-wider">
            {t.turkerler.growth}
          </h3>
          <div className="space-y-3">
            {growthPhases.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-36 shrink-0 text-right">
                  <span className="text-xs text-foreground/30">{g.label}</span>
                </div>
                <div className="flex-1 h-7 bg-surface-light rounded overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded flex items-center px-2 min-w-[60px]"
                    style={{ backgroundColor: g.color + "25" }}
                  >
                    <span className="text-[11px] font-bold whitespace-nowrap" style={{ color: g.color }}>
                      {g.mw}
                    </span>
                  </motion.div>
                </div>
                <div className="w-48 shrink-0 text-[10px] text-foreground/25 hidden lg:block">
                  {g.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ───── CLIENT MEGA-PROJECTS ───── */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            {t.turkerler.megaTitle}
            <span className="text-gradient">{t.turkerler.megaTitleB}</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {megaProjects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl bg-surface border border-border hover:border-opacity-50 transition-all"
                style={{ borderColor: p.color + "00" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = p.color + "40";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: p.color + "15", color: p.color }}>
                    {p.capacity}
                  </span>
                  <span className="text-[10px] text-foreground/30">{p.status}</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{p.name}</h4>
                <ul className="space-y-1 mb-3">
                  {p.details.slice(0, 3).map((d) => (
                    <li key={d} className="text-[11px] text-foreground/40 flex items-start gap-1.5">
                      <span className="text-foreground/20 mt-0.5 shrink-0">&bull;</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-border">
                  <div className="text-[10px] font-mono text-primary font-semibold mb-1">{t.turkerler.aiContribution}</div>
                  <p className="text-[10px] text-foreground/60 leading-relaxed">{p.aiValue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───── STRATEGIC POSITION ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 border border-indigo-500/20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{"\uD83D\uDE80"}</span>
            <div>
              <h3 className="font-bold">{t.turkerler.vedasTitle}</h3>
              <p className="text-xs text-foreground/40">
                {vedasData.coverage} &middot; {vedasData.subscribers} &middot; {vedasData.area}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {[
              { label: vedasData.labels.investment, value: vedasData.investment2025, color: "#6366f1" },
              { label: vedasData.labels.subscribers, value: vedasData.subscribers, color: "#0ea5e9" },
              { label: vedasData.labels.lossTarget, value: vedasData.lossRate, color: "#8b5cf6" },
              { label: vedasData.labels.servicePopulation, value: vedasData.population, color: "#10b981" },
            ].map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-surface/50 border border-border/50 text-center">
                <div className="text-[10px] text-foreground/30 uppercase tracking-wider">{m.label}</div>
                <div className="text-sm font-bold mt-1" style={{ color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-surface/50 border border-border/50">
            <div className="text-[10px] font-mono text-indigo-500/60 mb-2">{vedasData.aiModule}</div>
            <p className="text-xs text-foreground/50 leading-relaxed">
              {vedasData.aiText}
            </p>
          </div>
        </motion.div>

        {/* ───── CRITICAL PROBLEMS TO SOLVE ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span>{"\uD83C\uDFAF"}</span> {t.turkerler.healthcareTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {healthcareProjects.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <h4 className="font-semibold text-sm mb-3">{h.name}</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.capacity}</span><span className="font-medium">{h.beds}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.area}</span><span className="font-medium">{h.area}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.investment}</span><span className="font-medium">{h.investment}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.status}</span><span className="text-primary font-medium">{h.status}</span></div>
                </div>
                <div className="mt-3 pt-3 border-t border-border text-[10px] text-foreground/30">{h.note}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-lg bg-surface border border-border">
            <div className="text-[10px] font-mono text-primary font-semibold mb-1">{t.turkerler.aiContribution}</div>
            <p className="text-xs text-foreground/60">
              {t.turkerler.healthcareAi}
            </p>
          </div>
        </motion.div>

        {/* ───── PROBLEMS & SOLUTIONS ───── */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8">
            {t.turkerler.problemsTitle}
            <span className="text-gradient">{t.turkerler.problemsTitleB}</span>
          </h3>
          <div className="space-y-4">
            {criticalProblems.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="font-bold text-sm flex-1">{item.area}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.severity === "Kritik" || item.severity === "Critical" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {item.severity}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono text-red-400/50 mb-2 tracking-wider">{t.turkerler.currentIssues}</div>
                    <ul className="space-y-1.5">
                      {item.problems.map((p) => (
                        <li key={p} className="text-[11px] text-foreground/55 flex items-start gap-2">
                          <span className="text-red-400/40 shrink-0">&times;</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-primary/80 mb-2 tracking-wider">{t.turkerler.aiSolution}</div>
                    <ul className="space-y-1.5">
                      {item.solutions.map((s) => (
                        <li key={s} className="text-[11px] text-foreground/65 flex items-start gap-2">
                          <span className="text-primary/60 shrink-0">&check;</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                  <span className="text-[10px] font-mono text-accent/50">ROI:</span>
                  <span className="text-xs text-accent font-medium">{item.roi}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
