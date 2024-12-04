import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stahl Digital | SEO Optimierung, Google Werbung, Reputationsmanagement",
  description:
  "Wir unterstützen Dienstleistungsunternehmen in Wien & Umgebung dabei, mit SEO, Reputationsmanagement und Google Werbung sichtbarer zu werden und ihren Umsatz zu steigern.",
  keywords: "Local SEO Wien, Google Ads Wien, SEO Optimierung Wien, Google Werbung Wien, Reputationsmanagement, Google Bewertung, Google Anfragen Wien, Google Reviews",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
    <GoogleTagManager gtmId="GTM-" />
    <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-" />
    </html>
  );
}

