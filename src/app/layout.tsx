import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sedat Irtaş | Commencis — Dijital Dönüşüm & AI Mühendisliği",
  description: "Full-Stack Developer & AI Systems Engineer. Commencis için dijital deneyim, agentic AI ve enterprise çözüm önerisi.",
  keywords: ["Commencis", "dijital dönüşüm", "AI", "agentic AI", "AWS", "İstanbul", "full-stack developer", "Commencis LLM", "Dataroid", "enterprise software"],
  openGraph: {
    title: "Sedat Irtaş | Commencis — Dijital Dönüşüm & AI Mühendisliği",
    description: "Commencis'in agentic AI vizyonuna katkı sunacak full-stack & AI mühendisliği yaklaşımı. 450+ uzman, 20+ ülke, AWS Premier Tier Partner.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
