"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en";

const dict = {
  tr: {
    nav: [
      { href: "#hero", label: "Vizyon" },
      { href: "#market", label: "Pazar Analizi" },
      { href: "#architecture", label: "Mimari" },
      { href: "#demo", label: "Demo" },
      { href: "#turkerler", label: "Commencis Vizyonu" },
      { href: "#projects", label: "Projeler" },
      { href: "#tech", label: "Teknoloji" },
      { href: "#about", label: "Hakkımda" },
      { href: "#contact", label: "İletişim" },
    ],
    hero: {
      badge: "Commencis için hazırlanmıştır",
      titleA: "Endüstri Mühendisliği × AI Mühendisliği",
      titleB: "Commencis İçin Tasarlanmış Portfolyo",
      desc: "Endüstri mühendisliği altyapım, 13+ üretim projesi, 60+ AI ajan orkestrasyonu ve fraud analitik deneyimimle Commencis'in agentic AI vizyonuna katkı sunmak için buradayım. Bu portfolyonun kendisi de Next.js 16 + TypeScript + Tailwind ile sıfırdan geliştirilmiştir.",
      cta1: "Vizyonu Keşfet",
      cta2: "Canlı Demo",
      data: {
        header: "COMMENCİS — NEDEN BU ŞİRKET?",
        metrics: [
          { label: "Proje", value: "120+", sub: "Başarılı dijital dönüşüm" },
          { label: "Ülke", value: "20+", sub: "Global müşteri ağı" },
          { label: "AWS Sertifika", value: "100+", sub: "Premier Tier Partner" },
          { label: "Yıllık Gelir", value: "~$85M", sub: "Bootstrapped büyüme" },
        ],
        sub: [
          { label: "Çalışan", value: "450-500" },
          { label: "Kuruluş", value: "2018" },
          { label: "Glassdoor", value: "4.0/5" },
        ],
        ipo: {
          title: "NEDEN COMMENCİS?",
          desc: "Türkiye'nin tek Türkçe LLM geliştiren şirketi, AWS Premier Tier Partner (Türkiye'de sadece 2 şirket), 15+ yıllık İşBank partnerliği. Benim multi-agent orkestrasyon ve endüstri mühendisliği deneyimim, Commencis'in 2026 genişleme hedefleriyle — LEAP Riyadh, Arapça LLM, 5G servisleri — mükemmel uyum sağlıyor.",
        },
        source: "Kaynak: Commencis Kurumsal, AWS Partner Network, Sektör Raporları",
      },
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Endüstri Mühendisi, ",
      titleB: "Full-Stack AI Developer",
      bio1: "2024'te endüstri mühendisliği mezuniyetim ve Workintech bootcamp'ini tamamladıktan sonra yazılıma tam odaklandım. Veri analitiği ve süreç optimizasyonu disipliniyle 13+ üretim projesi geliştirdim, 60+ AI ajanı orkestre ettim, 15+ Telegram otomasyon botu kurdum ve gerçek zamanlı fraud analitik sistemi inşa ettim. Commencis'in dijital dönüşüm vizyonuna ",
      bio1_s1: "AI otomasyon mühendisliği",
      bio1_s2: "full-stack platform geliştirme",
      bio1_s3: "enterprise dijital çözümler",
      bio1_end: " alanlarında katkı sunabilirim.",
      bio2: "Bu portfolyonun kendisi benim teknik yetkinliğimin kanıtıdır: Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion ile sıfırdan geliştirdim. Dark/light mode, çok dilli yapı (TR/EN), AI chat widget, canvas parçacık animasyonu ve GitHub API entegrasyonu içerir. Commencis'in kullandığı aynı teknoloji yığınıyla enterprise seviyede uygulama geliştirebildiğimi gösteriyor.",
      journey: "YOLCULUK",
      timeline: [
        { year: "2024", title: "Endüstri Mühendisliği Mezuniyeti", desc: "Veri analitiği, süreç optimizasyonu, istatistiksel modelleme" },
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, veritabanı yönetimi" },
        { year: "2024-25", title: "QR Menu & SaaS Platformları", desc: "176+ endpoint, 8+ marka, multi-tenant mimari" },
        { year: "2025-26", title: "AI Ajan & Otomasyon Sistemleri", desc: "60+ AI ajan, Telegram botları, fraud analitik, VPS otomasyon" },
      ],
      highlights: [
        { icon: "\u26A1", title: "AI & Otomasyon", desc: "Claude API/SDK, MCP Server, multi-agent orkestrasyon ile 60+ uzman AI ajanı koordine ettim. Fraud tespiti, veri toplama, raporlama ve müşteri etkileşimi için otonom sistemler kurdum." },
        { icon: "\uD83E\uDD16", title: "Full-Stack Dev", desc: "QR Menü SaaS (176+ endpoint, 8+ marka), E-Ticaret platformu, VPS yönetim paneli dahil 13+ üretim projesi. Multi-tenant mimari ve RBAC güvenlik deneyimi." },
        { icon: "\uD83D\uDCCA", title: "Enterprise Platform", desc: "12+ sunucu üzerinde VPS otomasyon platformu, 20+ kaynaktan gerçek zamanlı veri toplama, 10K+ işlem/dk fraud analitik motoru. Endüstri mühendisliği perspektifiyle veri odaklı karar sistemleri." },
        { icon: "\uD83D\uDE80", title: "Cloud & DevOps", desc: "Docker containerization, AWS deployment, Vercel CI/CD, Linux sistem yönetimi. 12+ VPS sunucu üzerinde production ortam yönetimi ve otomatik yedekleme deneyimi." },
      ],
    },
    turkerler: {
      section: "COMMENCİS VİZYONU — DERİNLEMESİNE ANALİZ",
      titleA: "Pozitron'dan Commencis'e: ",
      titleB: "Türkiye'nin Dijital Dönüşüm Lideri",
      subtitle: "Fırat ve Fatih İşbecer'in Pozitron'dan başlayan yolculuğu, Monitise ve Fiserv dönemlerinden geçerek 2018'de Commencis olarak yeniden doğdu. Bugün 450+ uzman, 20+ ülke ve AWS Premier Tier statüsüyle Türkiye'nin en büyük bağımsız dijital dönüşüm şirketi.",
      portfolio: "ÜRÜN PORTFÖYÜ",
      wind: "Commencis LLM & AI",
      hydro: "Dataroid & Analytics",
      geothermal: "Platform & Çözümler",
      growth: "BÜYÜME YOL HARİTASI — POZİTRON'DAN COMMENCİS'E",
      megaTitle: "Müşteri Başarı ",
      megaTitleB: "Hikayeleri",
      aiContribution: "AI ÇÖZÜMÜ:",
      vedasTitle: "ÜRÜN EKOSİSTEMİ — Commencis LLM, AI Framework, Dataroid",
      healthcareTitle: "Enterprise Müşteri Portföyü — 20+ Ülke",
      healthcareAi: "İşBank IsCep (Global Finance En İyi Mobil Bankacılık), Burgan Bank ON, DenizBank, Pegasus Airlines, Turkcell, Unilever Türkiye, MetLife, Air Astana, Turkish Airlines. Commencis LLM ile Türkçe odaklı bankacılık AI'ı, Dataroid ile müşteri analitiği, Commence Bot ile conversational AI.",
      problemsTitle: "Müşteri Zorlukları & ",
      problemsTitleB: "Commencis Çözüm Önerisi",
      currentIssues: "MEVCUT ZORLUKLAR",
      aiSolution: "COMMENCİS ÇÖZÜM MODÜLÜ",
      labels: {
        capacity: "Kapasite",
        area: "Alan",
        investment: "Yatırım",
        status: "Durum",
      },
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
      competitorNote: "Commencis'i seçme nedenim: (1) Türkçe LLM geliştiren tek şirket — NLP odağımla örtüşüyor, (2) AWS Premier Tier Partner — Türkiye'de sadece 2 şirket, DevOps deneyimime uygun, (3) 15 yıllık İşBank partnerliği — enterprise ölçekte çalışma imkanı, (4) Bootstrapped büyüme — startup çevikliği + enterprise müşteri portföyü. 60+ AI ajan orkestrasyon deneyimim, Commencis LLM'i otonom iş akışlarına genişletebilir.",
      aiTitle: "GLOBAL AI & DİJİTAL DÖNÜŞÜM BENCHMARKLARİ",
      aiSource: "Gartner AI Hype Cycle, McKinsey Digital, Forrester 2024-2025",
      projectionTitle: "COMMENCİS İÇİN PROJEKSİYON",
      projectionText: "Agentic AI pazarı 2025-2028 arasında yıllık %45+ büyüme bekleniyor. Commencis'in Türkçe LLM'i, bankacılık domain uzmanlığı ve AWS Premier altyapısıyla bu büyümeden pay alma potansiyeli çok yüksek. finbyte (Berlin fintech JV) ve Expresia (Kanada DXP) ile global genişleme stratejisi güçlü.",
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
          { name: "DXP (Expresia)", desc: "Dijital deneyim platformu" },
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
      titleA: "Commencis CX ",
      titleB: "Intelligence Hub",
      subtitle: "Aktif kullanıcılar, dijital projeler, API performansı, müşteri memnuniyeti ve AI optimizasyon önerileri — tek ekranda.",
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
        { title: "VPS & Sunucu Otomasyon Platformu", desc: "12+ VPS sunucu üzerinde deployment, monitoring ve yönetim otomasyonu. Uptime izleme, otomatik yedekleme, SSL sertifika yönetimi ve performans raporlama.", metric: "12+ Sunucu" },
        { title: "Telegram Bot Ekosistemi", desc: "15+ otomasyon botu: anlık bildirim, çok kaynaklı veri toplama, otomatik raporlama, müşteri etkileşimi ve cron job yönetimi. Commencis'in Commence Bot vizyonuyla uyumlu.", metric: "15+ Bot" },
        { title: "Fraud Analitik & Risk Motoru", desc: "Gerçek zamanlı anomali tespiti, pattern matching, risk skorlama ve uyarı sistemi. 20+ veri kaynağından akan verinin analizi. Commencis'in bankacılık AI güvenliğiyle örtüşen deneyim.", metric: "10K+ İşlem/dk" },
        { title: "AI Ajan Orkestrasyon Sistemi", desc: "60+ uzman AI ajanın koordineli çalışmasını sağlayan enterprise orkestrasyon platformu. Görev dağılımı, sonuç birleştirme, hata yönetimi. Commencis'in agentic AI vizyonuyla tam uyumlu.", metric: "60+ AI Ajan" },
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
      { href: "#hero", label: "Vision" },
      { href: "#market", label: "Market Analysis" },
      { href: "#architecture", label: "Architecture" },
      { href: "#demo", label: "Demo" },
      { href: "#turkerler", label: "Commencis Vision" },
      { href: "#projects", label: "Projects" },
      { href: "#tech", label: "Technology" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      badge: "Prepared for Commencis",
      titleA: "Industrial Engineering × AI Engineering",
      titleB: "Portfolio Designed for Commencis",
      desc: "With my industrial engineering background, 13+ production projects, 60+ AI agent orchestration, and fraud analytics experience, I'm here to contribute to Commencis's agentic AI vision. This portfolio itself was built from scratch with Next.js 16 + TypeScript + Tailwind.",
      cta1: "Explore the Vision",
      cta2: "Live Demo",
      data: {
        header: "COMMENCIS — WHY THIS COMPANY?",
        metrics: [
          { label: "Projects", value: "120+", sub: "Successful digital transformations" },
          { label: "Countries", value: "20+", sub: "Global client network" },
          { label: "AWS Certifications", value: "100+", sub: "Premier Tier Partner" },
          { label: "Annual Revenue", value: "~$85M", sub: "Bootstrapped growth" },
        ],
        sub: [
          { label: "Employees", value: "450-500" },
          { label: "Founded", value: "2018" },
          { label: "Glassdoor", value: "4.0/5" },
        ],
        ipo: {
          title: "WHY COMMENCIS?",
          desc: "Turkey's only company developing a Turkish LLM, AWS Premier Tier Partner (only 2 companies in Turkey), 15+ year IsBank partnership. My multi-agent orchestration and industrial engineering experience perfectly aligns with Commencis's 2026 expansion goals — LEAP Riyadh, Arabic LLM, 5G services.",
        },
        source: "Source: Commencis Corporate, AWS Partner Network, Industry Reports",
      },
    },
    about: {
      section: "ABOUT ME",
      titleA: "Industrial Engineer, ",
      titleB: "Full-Stack AI Developer",
      bio1: "After graduating in Industrial Engineering and completing Workintech bootcamp in 2024, I fully committed to software. With data analytics and process optimization discipline, I built 13+ production projects, orchestrated 60+ AI agents, deployed 15+ Telegram automation bots, and built a real-time fraud analytics system. I can contribute to Commencis's digital transformation vision through ",
      bio1_s1: "AI automation engineering",
      bio1_s2: "full-stack platform development",
      bio1_s3: "enterprise digital solutions",
      bio1_end: ".",
      bio2: "This portfolio itself is proof of my technical competence: built from scratch with Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion. Includes dark/light mode, multilingual (TR/EN), AI chat widget, canvas particle animation, and GitHub API integration. Demonstrates my ability to build enterprise-level applications with the same tech stack Commencis uses.",
      journey: "JOURNEY",
      timeline: [
        { year: "2024", title: "Industrial Engineering Degree", desc: "Data analytics, process optimization, statistical modeling" },
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, database management" },
        { year: "2024-25", title: "QR Menu & SaaS Platforms", desc: "176+ endpoints, 8+ brands, multi-tenant architecture" },
        { year: "2025-26", title: "AI Agent & Automation Systems", desc: "60+ AI agents, Telegram bots, fraud analytics, VPS automation" },
      ],
      highlights: [
        { icon: "\u26A1", title: "AI & Automation", desc: "Coordinated 60+ specialist AI agents with Claude API/SDK, MCP Server, multi-agent orchestration. Built autonomous systems for fraud detection, data collection, reporting, and customer engagement." },
        { icon: "\uD83E\uDD16", title: "Full-Stack Dev", desc: "13+ production projects including QR Menu SaaS (176+ endpoints, 8+ brands), E-Commerce platform, VPS management panel. Multi-tenant architecture and RBAC security experience." },
        { icon: "\uD83D\uDCCA", title: "Enterprise Platform", desc: "VPS automation platform across 12+ servers, real-time data collection from 20+ sources, 10K+ txn/min fraud analytics engine. Data-driven decision systems with industrial engineering perspective." },
        { icon: "\uD83D\uDE80", title: "Cloud & DevOps", desc: "Docker containerization, AWS deployment, Vercel CI/CD, Linux system administration. Production environment management and automatic backup experience across 12+ VPS servers." },
      ],
    },
    turkerler: {
      section: "COMMENCIS VISION — IN-DEPTH ANALYSIS",
      titleA: "From Pozitron to Commencis: ",
      titleB: "Turkey's Digital Transformation Leader",
      subtitle: "The journey started by Firat and Fatih Isbecer from Pozitron, passing through Monitise and Fiserv eras, was reborn as Commencis in 2018. Today, with 450+ experts, 20+ countries, and AWS Premier Tier status, it's Turkey's largest independent digital transformation company.",
      portfolio: "PRODUCT PORTFOLIO",
      wind: "Commencis LLM & AI",
      hydro: "Dataroid & Analytics",
      geothermal: "Platform & Solutions",
      growth: "GROWTH ROADMAP — FROM POZITRON TO COMMENCIS",
      megaTitle: "Client Success ",
      megaTitleB: "Stories",
      aiContribution: "AI SOLUTION:",
      vedasTitle: "PRODUCT ECOSYSTEM — Commencis LLM, AI Framework, Dataroid",
      healthcareTitle: "Enterprise Client Portfolio — 20+ Countries",
      healthcareAi: "IsBank IsCep (Global Finance Best Mobile Banking), Burgan Bank ON, DenizBank, Pegasus Airlines, Turkcell, Unilever Turkey, MetLife, Air Astana, Turkish Airlines. Turkish-focused banking AI with Commencis LLM, customer analytics with Dataroid, conversational AI with Commence Bot.",
      problemsTitle: "Client Challenges & ",
      problemsTitleB: "Commencis Solution Proposal",
      currentIssues: "CURRENT CHALLENGES",
      aiSolution: "COMMENCIS SOLUTION MODULE",
      labels: {
        capacity: "Capacity",
        area: "Area",
        investment: "Investment",
        status: "Status",
      },
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
      competitorNote: "Why I chose Commencis: (1) Only company developing a Turkish LLM — aligns with my NLP focus, (2) AWS Premier Tier Partner — only 2 companies in Turkey, fits my DevOps experience, (3) 15-year IsBank partnership — opportunity to work at enterprise scale, (4) Bootstrapped growth — startup agility + enterprise client portfolio. My 60+ AI agent orchestration experience can extend Commencis LLM to autonomous workflows.",
      aiTitle: "GLOBAL AI & DIGITAL TRANSFORMATION BENCHMARKS",
      aiSource: "Gartner AI Hype Cycle, McKinsey Digital, Forrester 2024-2025",
      projectionTitle: "PROJECTION FOR COMMENCIS",
      projectionText: "The agentic AI market is expected to grow 45%+ annually between 2025-2028. With its Turkish LLM, banking domain expertise, and AWS Premier infrastructure, Commencis has high potential to capture this growth. Strong global expansion strategy with finbyte (Berlin fintech JV) and Expresia (Canada DXP).",
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
          { name: "DXP (Expresia)", desc: "Digital experience platform" },
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
      titleA: "Commencis CX ",
      titleB: "Intelligence Hub",
      subtitle: "Active users, digital projects, API performance, client satisfaction, and AI optimization suggestions — on a single screen.",
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
        { title: "VPS & Server Automation Platform", desc: "Deployment, monitoring, and management automation across 12+ VPS servers. Uptime monitoring, automatic backups, SSL certificate management, and performance reporting.", metric: "12+ Servers" },
        { title: "Telegram Bot Ecosystem", desc: "15+ automation bots: instant notifications, multi-source data collection, automated reporting, customer engagement, and cron job management. Aligned with Commencis's Commence Bot vision.", metric: "15+ Bots" },
        { title: "Fraud Analytics & Risk Engine", desc: "Real-time anomaly detection, pattern matching, risk scoring, and alerting system. Analysis of data flowing from 20+ sources. Experience aligned with Commencis's banking AI security.", metric: "10K+ Txn/min" },
        { title: "AI Agent Orchestration System", desc: "Enterprise orchestration platform coordinating 60+ specialist AI agents. Task distribution, result aggregation, error handling. Fully aligned with Commencis's agentic AI vision.", metric: "60+ AI Agents" },
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
