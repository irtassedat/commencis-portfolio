"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en";

const dict = {
  tr: {
    nav: [
      { href: "#hero", label: "Ana Sayfa" },
      { href: "#projects", label: "Projeler" },
      { href: "#tech", label: "Teknoloji" },
      { href: "#demo", label: "Demo" },
      { href: "#about", label: "Hakkımda" },
      { href: "#turkerler", label: "Neden Commencis" },
      { href: "#contact", label: "İletişim" },
    ],
    hero: {
      badge: "Commencis için hazırlanmıştır",
      titleA: "Endüstri Mühendisliği × AI Mühendisliği",
      titleB: "Commencis İçin Tasarlanmış Portfolyo",
      desc: "Endüstri mühendisliği altyapım, 130K+ satır production kodu, 400+ API endpoint, 100+ veritabanı modeli ve 8 canlı Docker container yöneten VPS altyapısıyla Commencis'in agentic AI vizyonuna katkı sunmak için buradayım. Bu portfolyonun kendisi de Next.js 16 + TypeScript + Tailwind ile sıfırdan geliştirilmiştir.",
      cta1: "Vizyonu Keşfet",
      cta2: "Canlı Demo",
      data: {
        header: "COMMENCİS — NEDEN BU ŞİRKET?",
        metrics: [
          { label: "Proje", value: "120+", sub: "Başarılı dijital dönüşüm" },
          { label: "Ülke", value: "20+", sub: "Global müşteri ağı" },
          { label: "AWS Sertifika", value: "100+", sub: "Partner of the Year 2024" },
          { label: "Yıllık Gelir", value: "~$85M", sub: "Sıfır dış yatırım" },
        ],
        sub: [
          { label: "Çalışan", value: "450-500" },
          { label: "Ofisler", value: "İst/Lon/Berlin" },
          { label: "Glassdoor", value: "4.0/5" },
        ],
        ipo: {
          title: "NEDEN COMMENCİS?",
          desc: "Türkiye'nin tek Türkçe LLM geliştiren şirketi, AWS Premier Tier Partner (Türkiye'de sadece 2 şirket), 15+ yıllık İşBank partnerliği. Benim AI otomasyon, full-stack platform ve endüstri mühendisliği deneyimim, Commencis'in 2026 genişleme hedefleriyle — LEAP Riyadh, Arapça LLM, 5G servisleri — mükemmel uyum sağlıyor.",
        },
        source: "Kaynak: Commencis Kurumsal, AWS Partner Network, Sektör Raporları",
      },
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Endüstri Mühendisi, ",
      titleB: "Full-Stack AI Developer",
      bio1: "2023 sonunda Workintech bootcamp ile yazılıma başladım, 2024'te endüstri mühendisliği mezuniyetimin ardından tam odaklandım. 2+ yılda 130K+ satır production kodu yazdım, 400+ API endpoint tasarladım, 100+ veritabanı modeli oluşturdum, 15+ otonom bot ve 6 otonom ajan sistemi geliştirdim. VPS üzerinde 8 canlı Docker container yönetiyorum. Commencis'in dijital dönüşüm vizyonuna ",
      bio1_s1: "AI otomasyon mühendisliği",
      bio1_s2: "full-stack platform geliştirme",
      bio1_s3: "enterprise dijital çözümler",
      bio1_end: " alanlarında katkı sunabilirim.",
      bio2: "Bu portfolyonun kendisi benim teknik yetkinliğimin kanıtıdır: Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion ile sıfırdan geliştirdim. Dark/light mode, çok dilli yapı (TR/EN), AI chat widget, canvas parçacık animasyonu ve GitHub API entegrasyonu içerir. Commencis'in kullandığı aynı teknoloji yığınıyla enterprise seviyede uygulama geliştirebildiğimi gösteriyor.",
      journey: "YOLCULUK",
      timeline: [
        { year: "2024", title: "Endüstri Mühendisliği Mezuniyeti", desc: "Veri analitiği, süreç optimizasyonu, istatistiksel modelleme" },
        { year: "2023-24", title: "Workintech Full-Stack Bootcamp", desc: "JavaScript, React, Java/Spring Boot, veritabanı yönetimi" },
        { year: "2024-25", title: "SaaS & Platform Geliştirme", desc: "QR Menü (184 endpoint, 46 tablo), topluluk platformu (64,900 satır), lojistik monorepo (34,600 satır)" },
        { year: "2025-26", title: "AI Otomasyon & Production", desc: "15+ otonom bot, 6 otonom ajan, ML güvenlik, Gemini AI, 8 canlı Docker container, canlı platform" },
      ],
      highlights: [
        { icon: "\u26A1", title: "AI & Otomasyon", desc: "Claude API/SDK, MCP Server, Gemini AI entegrasyonu. 6 otonom ajan (ödeme doğrulama, envanter, bildirim, workflow orkestrasyon), ML tabanlı anomali tespiti (Isolation Forest), adaptive intelligence scoring, flood risk detection. 15+ otonom Telegram botu." },
        { icon: "\uD83E\uDD16", title: "Full-Stack Monorepo", desc: "34,600 satırlık pnpm monorepo (5 paket: API + Web + Bot + MiniApp + Shared). 64,900 satırlık topluluk platformu (Fastify 5, Next.js 15, 29 Prisma modeli). QR Menü SaaS (184 endpoint, 46 tablo). E-Ticaret (React + Spring Boot)." },
        { icon: "\uD83D\uDCCA", title: "Enterprise Altyapı", desc: "VPS üzerinde 8 canlı Docker container. PostgreSQL 16 (max_connections=200), Redis 7 (512MB, AOF), Nginx reverse proxy, Tailscale VPN, Cloudflare CDN. 20+ kaynaktan gerçek zamanlı API tüketimi." },
        { icon: "\uD83D\uDE80", title: "SEO & Büyüme", desc: "Yandex'te #1 organik sıralama elde eden canlı platform. IndexNow + dinamik sitemap ile SEO otomasyonu. Google/Yandex Metrica, GTM, Cloudflare CDN, Technical SEO deneyimi." },
      ],
    },
    turkerler: {
      section: "NEDEN COMMENCİS?",
      titleA: "Neden ",
      titleB: "Commencis?",
    },
    market: {
      section: "PAZAR ANALİZİ",
      titleA: "Rakip Analizi & ",
      titleB: "AI Benchmark",
      subtitle: "Gartner, Forrester, McKinsey raporları ve sektör benchmarklarından derlenen verilerle Commencis'in global konumu.",
      financial: "FİNANSAL PERFORMANS",
      financialSource: "Kaynak: Sektör Tahminleri (çalışan sayısı × ortalama gelir/çalışan)",
      revenue: "Yıllık Gelir",
      grossProfit: "Çalışan Sayısı",
      grossMargin: "Müşteri Memnuniyeti",
      vedasTitle: "TÜRKİYE DİJİTAL DÖNÜŞÜM PAZARI",
      lossRate: "pazar payı",
      competitorTitle: "REKABET KONUMLANDIRMASI",
      competitorSource: "Türkiye Dijital Dönüşüm & AI Pazarı 2025",
      tableHeaders: { company: "Şirket", currentMW: "Çalışan", targetMW: "Gelir", growth: "Odak Alan", revenue: "Segment" },
      competitorNote: "Commencis'i seçme nedenim: (1) Türkçe LLM geliştiren tek şirket — NLP odağımla örtüşüyor, (2) AWS Premier Tier Partner — Türkiye'de sadece 2 şirket, DevOps deneyimime uygun, (3) 15 yıllık İşBank partnerliği — enterprise ölçekte çalışma imkanı, (4) Bootstrapped büyüme — startup çevikliği + enterprise müşteri portföyü. 130K+ satır production kodu, 6 otonom ajan sistemi ve ML güvenlik deneyimim, Commencis LLM'i otonom iş akışlarına genişletebilir.",
      aiTitle: "GLOBAL AI & DİJİTAL DÖNÜŞÜM BENCHMARKLARİ",
      aiSource: "Gartner AI Hype Cycle, McKinsey Digital, Forrester 2024-2025",
      projectionTitle: "COMMENCİS İÇİN PROJEKSİYON",
      projectionText: "Agentic AI pazarı 2025-2028 arasında yıllık %45+ büyüme bekleniyor. Commencis'in Türkçe LLM'i, bankacılık domain uzmanlığı ve AWS Premier altyapısıyla bu büyümeden pay alma potansiyeli çok yüksek. finbyte (Berlin fintech JV), Kontent.ai (AI içerik yönetimi) ve Commence-Assist (AI geliştirme otomasyonu) ile global genişleme stratejisi güçlü.",
      aiFocusHakkari: "DİJİTAL FIRSAT ANALİZİ — AGENTİC AI ODAK",
      hakkariText: "Türkiye bankacılık sektöründe Türkçe NLP açığı kritik. Commencis LLM bu boşluğu dolduruyor. İşBank IsCep başarısı (Global Finance ödülü) referans proje. Agentic AI ile müşteri hizmetleri otomasyonu, dolandırıcılık tespiti ve kişiselleştirilmiş bankacılık deneyimi sunulabilir. Multi-agent sistemlerle operasyonel verimlilik %30+ artırılabilir.",
    },
    architecture: {
      section: "// SİSTEM MİMARİSİ",
      titleA: "Commencis ",
      titleB: "Enterprise Platform Mimarisi",
      subtitle: "Veri & AI, platform servisleri, uygulama katmanı ve bulut altyapısını birleştiren katmanlı enterprise mimari.",
      techTitle: "Kullanılacak Teknolojiler",
      layers: [
        { title: "Veri & AI Katmanı", items: [
          { name: "Commencis LLM", desc: "Türkçe odaklı bankacılık dil modeli" },
          { name: "Agentic AI", desc: "Multi-agent orkestrasyon sistemi" },
          { name: "NLP Engine", desc: "Türkçe doğal dil işleme motoru" },
          { name: "ML Pipeline", desc: "Makine öğrenimi eğitim ve çıkarım hattı" },
          { name: "Data Lake", desc: "Merkezi veri gölü ve analitik altyapısı" },
        ]},
        { title: "Platform Katmanı", items: [
          { name: "Dataroid Analytics", desc: "Müşteri davranış analitiği platformu" },
          { name: "CX Engine", desc: "Müşteri deneyimi yönetim motoru" },
          { name: "API Gateway", desc: "Merkezi API yönetimi ve güvenlik" },
          { name: "Microservices", desc: "Dağıtık mikro servis mimarisi" },
          { name: "Event Bus", desc: "Olay güdümlü iletişim altyapısı" },
        ]},
        { title: "Uygulama Katmanı", items: [
          { name: "Mobile (iOS/Android)", desc: "Native ve cross-platform mobil uygulamalar" },
          { name: "Web Frontend", desc: "React/Next.js ile modern web arayüzleri" },
          { name: "Commence Bot", desc: "Conversational AI chatbot platformu" },
          { name: "Admin Portal", desc: "Yönetim ve operasyon paneli" },
          { name: "Commence-Assist", desc: "AI destekli yazılım geliştirme otomasyon platformu" },
        ]},
        { title: "Altyapı Katmanı", items: [
          { name: "AWS Cloud", desc: "Premier Tier Partner altyapısı" },
          { name: "Kubernetes", desc: "Container orkestrasyon ve ölçeklendirme" },
          { name: "CI/CD", desc: "Sürekli entegrasyon ve dağıtım hattı" },
          { name: "Monitoring", desc: "7/24 izleme ve uyarı sistemleri" },
          { name: "Security", desc: "Enterprise güvenlik ve uyumluluk" },
        ]},
      ],
    },
    demo: {
      section: "CANLI DEMO",
      titleA: "Real-Time ",
      titleB: "Dashboard Demo",
      subtitle: "Enterprise seviyede dashboard prototipi — canlı metrikler, proje durumu, AI uyarıları ve analitik, tek ekranda.",
      kpis: [
        { label: "Aktif Kullanıcı", sub: "Tüm platformlar geneli" },
        { label: "Dijital Proje", sub: "Aktif geliştirme" },
        { label: "API Çağrısı", sub: "Günlük işlem hacmi" },
        { label: "Müşteri Skoru", sub: "NPS değerlendirmesi" },
      ],
      plantStatus: "PROJE DURUMU",
      aiAlerts: "AI UYARILARI",
      vedasDist: "MÜŞTERİ ANALİTİĞİ",
      projectProgress: "GELİŞTİRME AŞAMASI",
      live: "Canlı",
      statusLabels: { online: "Aktif", maintenance: "Bakımda", warning: "Uyarı" },
      disclaimer: "* Simüle edilmiş verilerle prototip. Gerçek uygulamada Dataroid, Commencis LLM, AWS CloudWatch ve enterprise API'lerle canlı veri akışı sağlanır.",
    },
    github: {
      section: "PROJELER & DENEYİM",
      titleA: "Geliştirdiğim ",
      titleB: "Sistemler",
      syncLabel: "GitHub ile senkronize",
      viewAll: "Tüm Projeleri Gör",
      openSource: "Açık Kaynak Projeler",
      dataAnalysis: "Veri Analiz & Otomasyon Sistemleri",
      projectMeta: {
        latestv2: { title: "Full-Stack Web App", desc: "React + REST API ile modern web uygulaması. Component tabanlı mimari ve responsive tasarım." },
        "qrmenu-backend": { title: "QR Menü Backend", desc: "Node.js + Express + PostgreSQL API. 176+ endpoint, RBAC yetkilendirme, multi-tenant SaaS." },
        ecommerce: { title: "E-Ticaret Platform", desc: "React + Redux ile dijital ticaret platformu. Ürün katalog, sepet yönetimi, ödeme entegrasyonu." },
        "ecommerce-backendAPI": { title: "E-Ticaret API", desc: "Java Spring Boot ile enterprise API. Ürün yönetimi, stok takibi, sipariş işlemleri." },
        "web-sayfam": { title: "Kişisel Website", desc: "React + Tailwind ile responsive site. Modern UI/UX ve performans optimizasyonu." },
        "commencis-portfolio": { title: "Commencis Portfolyo", desc: "Commencis için AI tabanlı dijital dönüşüm vizyonu. Next.js + TypeScript + Framer Motion." },
      },
      achievements: [
        { title: "Gerçek Zamanlı Topluluk Platformu", desc: "64,900 satır production kodu. Fastify 5 backend (164 endpoint, 29 Prisma modeli), Next.js 15 frontend (80+ component), Python Telegram botu + otonom monitoring ajanı. 5 Docker container, Nginx, Cloudflare, Tailscale VPN. Gamifikasyon (puan/ödül/çekiliş), SEO otomasyonu (IndexNow, dinamik sitemap). Yandex'te #1 organik sıralama.", metric: "64,900 Satır" },
        { title: "Akıllı Lojistik & Ödeme Platformu", desc: "34,600 satırlık pnpm monorepo: Fastify API (11K satır) + React admin (11K) + Grammy Telegram bot + Mini App + shared library. 25 Prisma modeli, 6 otonom ajan (ödeme doğrulama, envanter, workflow), multi-chain ödeme sistemi, coğrafi sorgulama, kapasite takibi. 7 Docker servisi.", metric: "34,600 Satır" },
        { title: "Çok Modüllü Bot & AI Ekosistemi", desc: "15,000+ satır Python, 74 modül, 4 Docker servisi. Gemini AI entegrasyonu, ML tabanlı güvenlik (Isolation Forest), adaptive intelligence scoring, canlı etkinlik chat sistemi (1,786 satır), flood risk detection, otomatik scraping & davet motoru. FastAPI admin dashboard ile SSE real-time monitoring.", metric: "15,000+ Satır" },
        { title: "QR Menü SaaS Platformu", desc: "12,685 satır backend. 184 API endpoint, 46 veritabanı tablosu, 12 SQL migration. 8+ marka, çoklu şube, 5 kademeli RBAC, tam sadakat programı (4 tier, kampanya, puan/ödül), tema motoru (JSONB), SMS OTP doğrulama. Canlı: qr.sebastianlogic.com", metric: "184 Endpoint" },
      ],
    },
    tech: {
      section: "// TEKNOLOJİ YIĞINI",
      titleA: "Teknik ",
      titleB: "Yetkinlikler",
      categories: ["Frontend & Mobile", "Backend & Cloud", "AI & Otomasyon", "DevOps & Altyapı"],
    },
    contact: {
      section: "SONRAKİ ADIMLAR",
      titleA: "İlk 90 ",
      titleB: "Günüm — Aksiyon Planı",
      subtitle: "Commencis'e katıldığımda ilk 90 gün içinde somut değer üretmeyi hedefliyorum. İşte yol haritam:",
      steps: [
        { step: "01", title: "Hafta 1-2: Onboarding & Analiz", desc: "Commencis LLM, Dataroid ve mevcut mimariyi derinlemesine öğrenme. Ekip dinamiklerini anlama, code review'lara katılma." },
        { step: "02", title: "Hafta 3-6: İlk Katkı", desc: "Mevcut projelerde aktif geliştirme. AI ajan deneyimimi Commencis LLM entegrasyonlarına uygulama, ilk PR'ları merge etme." },
        { step: "03", title: "Hafta 7-10: Otomasyon & Verimlilik", desc: "Telegram bot ve otomasyon deneyimimle iç süreçleri optimize etme. CI/CD pipeline iyileştirmeleri, test coverage artırma." },
        { step: "04", title: "Hafta 11-12: Sonuç & Vizyon", desc: "İlk çeyrekteki katkıları raporlama, sonraki çeyrek için agentic AI ve multi-agent sistem önerileri sunma." },
      ],
      stepLabel: "Adım",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat İrtaş",
      ctaText: "Bu portfolyo Commencis'e özel olarak geliştirilmiştir. Kaynak kodu açıktır — kod kalitem, mimari yaklaşımım ve problem çözme yeteneğim buradan incelenebilir. Next.js 16, TypeScript, Tailwind CSS 4 ve Framer Motion ile sıfırdan yazılmıştır.",
      viewSource: "Kaynak Kodunu İncele",
      backToVision: "Vizyona Dön",
    },
    footer: {
      name: "Sedat İrtaş",
      tagline: "Next.js 16 + TypeScript + AI ile sıfırdan geliştirilmiştir — Commencis başvurusu",
      sync: "GitHub ile senkronize",
    },
  },

  en: {
    nav: [
      { href: "#hero", label: "Home" },
      { href: "#projects", label: "Projects" },
      { href: "#tech", label: "Technology" },
      { href: "#demo", label: "Demo" },
      { href: "#about", label: "About" },
      { href: "#turkerler", label: "Why Commencis" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      badge: "Prepared for Commencis",
      titleA: "Industrial Engineering × AI Engineering",
      titleB: "Portfolio Designed for Commencis",
      desc: "With my industrial engineering background, 130K+ lines of production code, 400+ API endpoints, 100+ database models, and VPS infrastructure managing 8 live Docker containers, I'm here to contribute to Commencis's agentic AI vision. This portfolio itself was built from scratch with Next.js 16 + TypeScript + Tailwind.",
      cta1: "Explore the Vision",
      cta2: "Live Demo",
      data: {
        header: "COMMENCIS — WHY THIS COMPANY?",
        metrics: [
          { label: "Projects", value: "120+", sub: "Successful digital transformations" },
          { label: "Countries", value: "20+", sub: "Global client network" },
          { label: "AWS Certifications", value: "100+", sub: "Partner of the Year 2024" },
          { label: "Annual Revenue", value: "~$85M", sub: "Zero external funding" },
        ],
        sub: [
          { label: "Employees", value: "450-500" },
          { label: "Offices", value: "Ist/Lon/Berlin" },
          { label: "Glassdoor", value: "4.0/5" },
        ],
        ipo: {
          title: "WHY COMMENCIS?",
          desc: "Turkey's only company developing a Turkish LLM, AWS Premier Tier Partner (only 2 companies in Turkey), 15+ year IsBank partnership. My AI automation, full-stack platform, and industrial engineering experience perfectly aligns with Commencis's 2026 expansion goals — LEAP Riyadh, Arabic LLM, 5G services.",
        },
        source: "Source: Commencis Corporate, AWS Partner Network, Industry Reports",
      },
    },
    about: {
      section: "ABOUT ME",
      titleA: "Industrial Engineer, ",
      titleB: "Full-Stack AI Developer",
      bio1: "I started software with Workintech bootcamp in late 2023, then fully committed after graduating in Industrial Engineering in 2024. In 2+ years, I wrote 130K+ lines of production code, designed 400+ API endpoints, created 100+ database models, built 15+ autonomous bots and 6 autonomous agent systems. I manage 8 live Docker containers on VPS. I can contribute to Commencis's digital transformation vision through ",
      bio1_s1: "AI automation engineering",
      bio1_s2: "full-stack platform development",
      bio1_s3: "enterprise digital solutions",
      bio1_end: ".",
      bio2: "This portfolio itself is proof of my technical competence: built from scratch with Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion. Includes dark/light mode, multilingual (TR/EN), AI chat widget, canvas particle animation, and GitHub API integration. Demonstrates my ability to build enterprise-level applications with the same tech stack Commencis uses.",
      journey: "JOURNEY",
      timeline: [
        { year: "2024", title: "Industrial Engineering Degree", desc: "Data analytics, process optimization, statistical modeling" },
        { year: "2023-24", title: "Workintech Full-Stack Bootcamp", desc: "JavaScript, React, Java/Spring Boot, database management" },
        { year: "2024-25", title: "SaaS & Platform Development", desc: "QR Menu (184 endpoints, 46 tables), community platform (64,900 lines), logistics monorepo (34,600 lines)" },
        { year: "2025-26", title: "AI Automation & Production", desc: "15+ autonomous bots, 6 autonomous agents, ML security, Gemini AI, 8 live Docker containers, live platform" },
      ],
      highlights: [
        { icon: "\u26A1", title: "AI & Automation", desc: "Claude API/SDK, MCP Server, Gemini AI integration. 6 autonomous agents (payment verification, inventory, notification, workflow orchestration), ML-based anomaly detection (Isolation Forest), adaptive intelligence scoring, flood risk detection. 15+ autonomous Telegram bots." },
        { icon: "\uD83E\uDD16", title: "Full-Stack Monorepo", desc: "34,600-line pnpm monorepo (5 packages: API + Web + Bot + MiniApp + Shared). 64,900-line community platform (Fastify 5, Next.js 15, 29 Prisma models). QR Menu SaaS (184 endpoints, 46 tables). E-Commerce (React + Spring Boot)." },
        { icon: "\uD83D\uDCCA", title: "Enterprise Infra", desc: "8 live Docker containers on VPS. PostgreSQL 16 (max_connections=200), Redis 7 (512MB, AOF), Nginx reverse proxy, Tailscale VPN, Cloudflare CDN. Real-time API consumption from 20+ sources." },
        { icon: "\uD83D\uDE80", title: "SEO & Growth", desc: "Live platform achieving #1 organic ranking on Yandex. SEO automation with IndexNow + dynamic sitemaps. Google/Yandex Metrica, GTM, Cloudflare CDN, Technical SEO experience." },
      ],
    },
    turkerler: {
      section: "WHY COMMENCIS?",
      titleA: "Why ",
      titleB: "Commencis?",
    },
    market: {
      section: "MARKET ANALYSIS",
      titleA: "Competitor Analysis & ",
      titleB: "AI Benchmark",
      subtitle: "Commencis's global positioning based on Gartner, Forrester, McKinsey reports, and industry benchmarks.",
      financial: "FINANCIAL PERFORMANCE",
      financialSource: "Source: Industry Estimates (employee count × avg revenue/employee)",
      revenue: "Annual Revenue",
      grossProfit: "Employee Count",
      grossMargin: "Client Satisfaction",
      vedasTitle: "TURKEY DIGITAL TRANSFORMATION MARKET",
      lossRate: "market share",
      competitorTitle: "COMPETITIVE POSITIONING",
      competitorSource: "Turkey Digital Transformation & AI Market 2025",
      tableHeaders: { company: "Company", currentMW: "Employees", targetMW: "Revenue", growth: "Focus Area", revenue: "Segment" },
      competitorNote: "Why I chose Commencis: (1) Only company developing a Turkish LLM — aligns with my NLP focus, (2) AWS Premier Tier Partner — only 2 companies in Turkey, fits my DevOps experience, (3) 15-year IsBank partnership — opportunity to work at enterprise scale, (4) Bootstrapped growth — startup agility + enterprise client portfolio. My 130K+ lines of production code, 6 autonomous agent systems, and ML security experience can extend Commencis LLM to autonomous workflows.",
      aiTitle: "GLOBAL AI & DIGITAL TRANSFORMATION BENCHMARKS",
      aiSource: "Gartner AI Hype Cycle, McKinsey Digital, Forrester 2024-2025",
      projectionTitle: "PROJECTION FOR COMMENCIS",
      projectionText: "The agentic AI market is expected to grow 45%+ annually between 2025-2028. With its Turkish LLM, banking domain expertise, and AWS Premier infrastructure, Commencis has high potential to capture this growth. Strong global expansion strategy with finbyte (Berlin fintech JV), Kontent.ai (AI content management), and Commence-Assist (AI development automation).",
      aiFocusHakkari: "DIGITAL OPPORTUNITY — AGENTIC AI FOCUS",
      hakkariText: "The Turkish NLP gap in Turkey's banking sector is critical. Commencis LLM fills this void. IsBank IsCep success (Global Finance award) serves as reference project. With agentic AI, customer service automation, fraud detection, and personalized banking experience can be delivered. Multi-agent systems can increase operational efficiency by 30%+.",
    },
    architecture: {
      section: "// SYSTEM ARCHITECTURE",
      titleA: "Commencis ",
      titleB: "Enterprise Platform Architecture",
      subtitle: "Layered enterprise architecture unifying data & AI, platform services, application layer, and cloud infrastructure.",
      techTitle: "Technologies to be Used",
      layers: [
        { title: "Data & AI Layer", items: [
          { name: "Commencis LLM", desc: "Turkish-focused banking language model" },
          { name: "Agentic AI", desc: "Multi-agent orchestration system" },
          { name: "NLP Engine", desc: "Turkish natural language processing engine" },
          { name: "ML Pipeline", desc: "Machine learning training and inference pipeline" },
          { name: "Data Lake", desc: "Central data lake and analytics infrastructure" },
        ]},
        { title: "Platform Layer", items: [
          { name: "Dataroid Analytics", desc: "Customer behavior analytics platform" },
          { name: "CX Engine", desc: "Customer experience management engine" },
          { name: "API Gateway", desc: "Central API management and security" },
          { name: "Microservices", desc: "Distributed microservice architecture" },
          { name: "Event Bus", desc: "Event-driven communication infrastructure" },
        ]},
        { title: "Application Layer", items: [
          { name: "Mobile (iOS/Android)", desc: "Native and cross-platform mobile apps" },
          { name: "Web Frontend", desc: "Modern web interfaces with React/Next.js" },
          { name: "Commence Bot", desc: "Conversational AI chatbot platform" },
          { name: "Admin Portal", desc: "Management and operations panel" },
          { name: "Commence-Assist", desc: "AI-powered software development automation platform" },
        ]},
        { title: "Infrastructure Layer", items: [
          { name: "AWS Cloud", desc: "Premier Tier Partner infrastructure" },
          { name: "Kubernetes", desc: "Container orchestration and scaling" },
          { name: "CI/CD", desc: "Continuous integration and deployment pipeline" },
          { name: "Monitoring", desc: "24/7 monitoring and alerting systems" },
          { name: "Security", desc: "Enterprise security and compliance" },
        ]},
      ],
    },
    demo: {
      section: "LIVE DEMO",
      titleA: "Real-Time ",
      titleB: "Dashboard Demo",
      subtitle: "Enterprise-level dashboard prototype — live metrics, project status, AI alerts and analytics, on a single screen.",
      kpis: [
        { label: "Active Users", sub: "Across all platforms" },
        { label: "Digital Projects", sub: "Active development" },
        { label: "API Calls", sub: "Daily transaction volume" },
        { label: "Client Score", sub: "NPS rating" },
      ],
      plantStatus: "PROJECT STATUS",
      aiAlerts: "AI ALERTS",
      vedasDist: "CLIENT ANALYTICS",
      projectProgress: "DEVELOPMENT PHASE",
      live: "Live",
      statusLabels: { online: "Active", maintenance: "Maintenance", warning: "Warning" },
      disclaimer: "* Prototype with simulated data. In production, live data flows via Dataroid, Commencis LLM, AWS CloudWatch, and enterprise APIs.",
    },
    github: {
      section: "PROJECTS & EXPERIENCE",
      titleA: "Systems I've ",
      titleB: "Built",
      syncLabel: "Synced with GitHub",
      viewAll: "View All Projects",
      openSource: "Open Source Projects",
      dataAnalysis: "Data Analysis & Automation Systems",
      projectMeta: {
        latestv2: { title: "Full-Stack Web App", desc: "Modern web application with React + REST API. Component-based architecture and responsive design." },
        "qrmenu-backend": { title: "QR Menu Backend", desc: "Node.js + Express + PostgreSQL API. 176+ endpoints, RBAC authorization, multi-tenant SaaS." },
        ecommerce: { title: "E-Commerce Platform", desc: "Digital commerce platform with React + Redux. Product catalog, cart management, payment integration." },
        "ecommerce-backendAPI": { title: "E-Commerce API", desc: "Enterprise API with Java Spring Boot. Product management, inventory tracking, order processing." },
        "web-sayfam": { title: "Personal Website", desc: "Responsive site with React + Tailwind. Modern UI/UX and performance optimization." },
        "commencis-portfolio": { title: "Commencis Portfolio", desc: "AI-powered digital transformation vision for Commencis. Next.js + TypeScript + Framer Motion." },
      },
      achievements: [
        { title: "Real-Time Community Platform", desc: "64,900 lines of production code. Fastify 5 backend (164 endpoints, 29 Prisma models), Next.js 15 frontend (80+ components), Python Telegram bot + autonomous monitoring agent. 5 Docker containers, Nginx, Cloudflare, Tailscale VPN. Gamification (points/rewards/giveaways), SEO automation (IndexNow, dynamic sitemaps). #1 organic ranking on Yandex.", metric: "64,900 Lines" },
        { title: "Smart Logistics & Payment Platform", desc: "34,600-line pnpm monorepo: Fastify API (11K lines) + React admin (11K) + Grammy Telegram bot + Mini App + shared library. 25 Prisma models, 6 autonomous agents (payment verification, inventory, workflow), multi-chain payment system, geo-queries, capacity tracking. 7 Docker services.", metric: "34,600 Lines" },
        { title: "Multi-Module Bot & AI Ecosystem", desc: "15,000+ lines Python, 74 modules, 4 Docker services. Gemini AI integration, ML-based security (Isolation Forest), adaptive intelligence scoring, live event chat system (1,786 lines), flood risk detection, automated scraping & invite engine. FastAPI admin dashboard with SSE real-time monitoring.", metric: "15,000+ Lines" },
        { title: "QR Menu SaaS Platform", desc: "12,685 lines backend. 184 API endpoints, 46 database tables, 12 SQL migrations. 8+ brands, multi-branch, 5-tier RBAC, full loyalty program (4 tiers, campaigns, points/rewards), theme engine (JSONB), SMS OTP verification. Live: qr.sebastianlogic.com", metric: "184 Endpoints" },
      ],
    },
    tech: {
      section: "// TECH STACK",
      titleA: "Technical ",
      titleB: "Expertise",
      categories: ["Frontend & Mobile", "Backend & Cloud", "AI & Automation", "DevOps & Infrastructure"],
    },
    contact: {
      section: "NEXT STEPS",
      titleA: "My First 90 ",
      titleB: "Days — Action Plan",
      subtitle: "When I join Commencis, I aim to deliver tangible value within my first 90 days. Here's my roadmap:",
      steps: [
        { step: "01", title: "Week 1-2: Onboarding & Analysis", desc: "Deep-dive into Commencis LLM, Dataroid, and existing architecture. Understanding team dynamics, participating in code reviews." },
        { step: "02", title: "Week 3-6: First Contributions", desc: "Active development on existing projects. Applying my AI agent experience to Commencis LLM integrations, merging first PRs." },
        { step: "03", title: "Week 7-10: Automation & Efficiency", desc: "Optimizing internal processes with my Telegram bot and automation experience. CI/CD pipeline improvements, increasing test coverage." },
        { step: "04", title: "Week 11-12: Results & Vision", desc: "Reporting first quarter contributions, presenting agentic AI and multi-agent system proposals for next quarter." },
      ],
      stepLabel: "Step",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat Irtas",
      ctaText: "This portfolio was built specifically for Commencis. The source code is open — my code quality, architectural approach, and problem-solving ability can be reviewed here. Written from scratch with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.",
      viewSource: "View Source Code",
      backToVision: "Back to Vision",
    },
    footer: {
      name: "Sedat Irtas",
      tagline: "Built from scratch with Next.js 16 + TypeScript + AI — Commencis application",
      sync: "Synced with GitHub",
    },
  },
};

type Dict = typeof dict;
type Translations = Dict[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "tr",
  setLang: () => {},
  t: dict.tr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("commencis-lang") as Lang | null;
    if (saved && dict[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("commencis-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
