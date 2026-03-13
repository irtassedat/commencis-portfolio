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
      titleA: "Enterprise Dijital Deneyimi İçin",
      titleB: "AI-Powered Çözüm Önerisi",
      desc: "450+ uzman, 20+ ülke, 15+ yıllık bankacılık uzmanlığı... Commencis'in agentic AI vizyonuna katkı sunacak full-stack & AI mühendisliği yaklaşımı.",
      cta1: "Vizyonu Keşfet",
      cta2: "Canlı Demo",
      data: {
        header: "COMMENCİS — TEMEL VERİLER",
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
          title: "STRATEJİK KONUM",
          desc: "Commencis'in Türkçe odaklı LLM'i, AWS Premier Tier Partner statüsü ve 15+ yıllık bankacılık uzmanlığı (İşBank IsCep) ile Türkiye'nin dijital dönüşüm pazarında benzersiz bir konumda. Agentic AI ve enterprise çözümlerde lider.",
        },
        source: "Kaynak: Commencis Kurumsal, AWS Partner Network, Sektör Raporları",
      },
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Teknolojiyi ",
      titleB: "Enterprise Çözümlere Dönüştürüyorum",
      bio1: "Full-stack yazılımcı olarak React/Next.js ekosistemi, Node.js/Express backend ve modern AI teknolojileri konusunda üretim seviyesinde deneyime sahibim. Commencis'in dijital dönüşüm vizyonuna ",
      bio1_s1: "AI otomasyon mühendisliği",
      bio1_s2: "full-stack platform geliştirme",
      bio1_s3: "enterprise dijital çözümler",
      bio1_end: " alanlarında katkı sunabilirim.",
      bio2: "Multi-tenant SaaS sistemleri, çok kaynaklı veri toplama ve otomasyon konularında geliştirdiğim projeler, büyük ölçekli operasyonlarda dijital dönüşüm aracı olarak kullanılmaktadır. Commencis'in agentic AI vizyonu, Türkçe LLM geliştirmeleri ve AWS Premier altyapısıyla tam uyumlu bir mühendislik yaklaşımı sunuyorum.",
      journey: "YOLCULUK",
      timeline: [
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, veritabanı yönetimi" },
        { year: "2024-25", title: "QR Menu Platform", desc: "176+ endpoint, 8+ marka, multi-tenant SaaS" },
        { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack proje" },
        { year: "2025-26", title: "AI Ajan & Otomasyon Sistemleri", desc: "60+ AI ajan, Telegram botları, veri işleme platformları" },
      ],
      highlights: [
        { icon: "\u26A1", title: "AI & Otomasyon", desc: "60+ AI ajan orkestrasyonu, Claude API, MCP Server, agentic AI sistemleri. Commencis LLM vizyonuyla uyumlu." },
        { icon: "\uD83E\uDD16", title: "Full-Stack Dev", desc: "React, Next.js, Node.js, TypeScript, PostgreSQL ile 13+ üretim seviyesinde proje. Enterprise platform deneyimi." },
        { icon: "\uD83D\uDCCA", title: "Enterprise Platform", desc: "Multi-tenant SaaS, gerçek zamanlı dashboard, veri analitiği. Dataroid ve CX Engine entegrasyonuna hazır." },
        { icon: "\uD83D\uDE80", title: "Cloud & DevOps", desc: "Docker, CI/CD, AWS altyapı deneyimi. Commencis'in AWS Premier Tier ekosistemine uyumlu." },
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
      financialSource: "Kaynak: Sektör Raporları, Kurumsal Veriler",
      revenue: "Yıllık Gelir",
      grossProfit: "Çalışan Sayısı",
      grossMargin: "Müşteri Memnuniyeti",
      vedasTitle: "TÜRKİYE DİJİTAL DÖNÜŞÜM PAZARI",
      lossRate: "pazar payı",
      competitorTitle: "REKABET KONUMLANDIRMASI",
      competitorSource: "Türkiye Dijital Dönüşüm & AI Pazarı 2025",
      tableHeaders: { company: "Şirket", currentMW: "Çalışan", targetMW: "Gelir", growth: "Odak Alan", revenue: "Segment" },
      competitorNote: "Commencis'in kritik farklılaşma noktaları: Türkçe odaklı LLM (bankacılık), AWS Premier Tier Partner statüsü (Türkiye'de nadir), 15+ yıllık İşBank partnerliği ve bootstrapped büyüme modeli. Accenture, Deloitte Digital ve TCS gibi global oyunculara karşı yerel uzmanlık ve çeviklik avantajı. Etiya, Innova ve Softtech gibi yerel rakiplere karşı AI ve cloud derinliği.",
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
        { title: "Multi-Tenant SaaS Platform", desc: "8+ marka ve 10+ şubeyi tek panelden yöneten restoran sistemi. React/Vite frontend, Express.js backend, PostgreSQL veritabanı.", metric: "176+ API endpoint" },
        { title: "AI Ajan Orkestrasyon Sistemi", desc: "60+ uzman ajanın koordineli çalışmasını sağlayan enterprise orkestrasyon platformu. Commencis'in agentic AI vizyonuyla uyumlu.", metric: "60+ AI ajan" },
        { title: "Gerçek Zamanlı Veri İşleme", desc: "20+ kaynaktan yüksek hacimli veri toplama, normalizasyon ve anlık anomali tespit sistemi. Dataroid analitiğiyle karşılaştırılabilir.", metric: "10K+ veri/dk" },
        { title: "Enterprise API Mimarisi", desc: "Java Spring Boot tabanlı enterprise API. Microservices pattern, RBAC güvenlik, performans optimizasyonu.", metric: "12K+ satır kod" },
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
      titleA: "Birlikte ",
      titleB: "Başaralım",
      subtitle: "Commencis'in agentic AI vizyonuna katkı sunmak ve enterprise dijital dönüşüm ekibinin bir parçası olmak için önerdiğim yol haritası.",
      steps: [
        { step: "01", title: "AI Çözüm Tasarımı", desc: "Commencis'in agentic AI vizyonuna uygun prototip. Multi-agent orkestrasyon ve Türkçe NLP entegrasyonu." },
        { step: "02", title: "Enterprise Platform", desc: "Commencis LLM ve Dataroid ile entegrasyon POC. Bankacılık ve fintech use-case'leri için çözüm geliştirme." },
        { step: "03", title: "Cloud & Ölçeklendirme", desc: "AWS Premier altyapısında deployment. Kubernetes, CI/CD ve monitoring ile production-ready sistemler." },
        { step: "04", title: "Sürekli İnovasyon", desc: "Multi-agent sistemler ve yeni vertikaller. finbyte, Expresia ve global genişleme projelerine katkı." },
      ],
      stepLabel: "Adım",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat İrtaş",
      ctaText: "Bu portfolyo, Commencis'in dijital dönüşüm ve agentic AI vizyonuna katkı sunmak amacıyla özel olarak hazırlanmıştır. Tüm teknik detaylar, mimari tasarım ve prototip kodları incelemeye açıktır.",
      viewSource: "Kaynak Kodunu İncele",
      backToVision: "Vizyona Dön",
    },
    footer: {
      name: "Sedat İrtaş",
      tagline: "Commencis için hazırlanmıştır — Dijital Dönüşüm & AI Mühendisliği",
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
      titleA: "AI-Powered Solution Proposal",
      titleB: "For Enterprise Digital Experience",
      desc: "450+ experts, 20+ countries, 15+ years of banking expertise... A full-stack & AI engineering approach to contribute to Commencis's agentic AI vision.",
      cta1: "Explore the Vision",
      cta2: "Live Demo",
      data: {
        header: "COMMENCIS — KEY DATA",
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
          title: "STRATEGIC POSITIONING",
          desc: "Commencis holds a unique position in Turkey's digital transformation market with its Turkish-focused LLM, AWS Premier Tier Partner status, and 15+ years of banking expertise (IsBank IsCep). Leader in agentic AI and enterprise solutions.",
        },
        source: "Source: Commencis Corporate, AWS Partner Network, Industry Reports",
      },
    },
    about: {
      section: "ABOUT ME",
      titleA: "Turning Technology ",
      titleB: "Into Enterprise Solutions",
      bio1: "As a full-stack developer, I have production-level experience with the React/Next.js ecosystem, Node.js/Express backend, and modern AI technologies. I can contribute to Commencis's digital transformation vision through ",
      bio1_s1: "AI automation engineering",
      bio1_s2: "full-stack platform development",
      bio1_s3: "enterprise digital solutions",
      bio1_end: ".",
      bio2: "My projects in multi-tenant SaaS systems, multi-source data collection, and automation serve as digital transformation tools in large-scale operations. I offer an engineering approach fully aligned with Commencis's agentic AI vision, Turkish LLM developments, and AWS Premier infrastructure.",
      journey: "JOURNEY",
      timeline: [
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, database management" },
        { year: "2024-25", title: "QR Menu Platform", desc: "176+ endpoints, 8+ brands, multi-tenant SaaS" },
        { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack project" },
        { year: "2025-26", title: "AI Agent & Automation Systems", desc: "60+ AI agents, Telegram bots, data processing platforms" },
      ],
      highlights: [
        { icon: "\u26A1", title: "AI & Automation", desc: "60+ AI agent orchestration, Claude API, MCP Server, agentic AI systems. Aligned with Commencis LLM vision." },
        { icon: "\uD83E\uDD16", title: "Full-Stack Dev", desc: "13+ production projects with React, Next.js, Node.js, TypeScript, PostgreSQL. Enterprise platform experience." },
        { icon: "\uD83D\uDCCA", title: "Enterprise Platform", desc: "Multi-tenant SaaS, real-time dashboards, data analytics. Ready for Dataroid and CX Engine integration." },
        { icon: "\uD83D\uDE80", title: "Cloud & DevOps", desc: "Docker, CI/CD, AWS infrastructure experience. Compatible with Commencis's AWS Premier Tier ecosystem." },
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
      financialSource: "Source: Industry Reports, Corporate Data",
      revenue: "Annual Revenue",
      grossProfit: "Employee Count",
      grossMargin: "Client Satisfaction",
      vedasTitle: "TURKEY DIGITAL TRANSFORMATION MARKET",
      lossRate: "market share",
      competitorTitle: "COMPETITIVE POSITIONING",
      competitorSource: "Turkey Digital Transformation & AI Market 2025",
      tableHeaders: { company: "Company", currentMW: "Employees", targetMW: "Revenue", growth: "Focus Area", revenue: "Segment" },
      competitorNote: "Commencis's critical differentiators: Turkish-focused LLM (banking), AWS Premier Tier Partner status (rare in Turkey), 15+ year IsBank partnership, and bootstrapped growth model. Local expertise and agility advantage against global players like Accenture, Deloitte Digital, and TCS. AI and cloud depth advantage against local competitors like Etiya, Innova, and Softtech.",
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
        { title: "Multi-Tenant SaaS Platform", desc: "Restaurant system managing 8+ brands and 10+ branches from a single panel. React/Vite frontend, Express.js backend, PostgreSQL.", metric: "176+ API endpoints" },
        { title: "AI Agent Orchestration", desc: "Enterprise orchestration platform coordinating 60+ specialized agents. Aligned with Commencis's agentic AI vision.", metric: "60+ AI agents" },
        { title: "Real-Time Data Processing", desc: "High-volume data collection from 20+ sources with normalization and real-time anomaly detection. Comparable to Dataroid analytics.", metric: "10K+ data/min" },
        { title: "Enterprise API Architecture", desc: "Java Spring Boot enterprise API. Microservices pattern, RBAC security, performance optimization.", metric: "12K+ lines of code" },
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
      titleA: "Let's ",
      titleB: "Build Together",
      subtitle: "My proposed roadmap for contributing to Commencis's agentic AI vision and becoming part of the enterprise digital transformation team.",
      steps: [
        { step: "01", title: "AI Solution Design", desc: "Prototype aligned with Commencis's agentic AI vision. Multi-agent orchestration and Turkish NLP integration." },
        { step: "02", title: "Enterprise Platform", desc: "Integration POC with Commencis LLM and Dataroid. Solution development for banking and fintech use-cases." },
        { step: "03", title: "Cloud & Scaling", desc: "Deployment on AWS Premier infrastructure. Production-ready systems with Kubernetes, CI/CD, and monitoring." },
        { step: "04", title: "Continuous Innovation", desc: "Multi-agent systems and new verticals. Contributing to finbyte, Expresia, and global expansion projects." },
      ],
      stepLabel: "Step",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat Irtas",
      ctaText: "This portfolio was specifically prepared to contribute to Commencis's digital transformation and agentic AI vision. All technical details, architectural designs, and prototype code are available for review.",
      viewSource: "View Source Code",
      backToVision: "Back to Vision",
    },
    footer: {
      name: "Sedat Irtas",
      tagline: "Prepared for Commencis — Digital Transformation & AI Engineering",
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
