import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from "./components/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stahl Digital | Elite SEO Agentur Wien | Google Ads & Reputationsmanagement",
  description: "Professionelle SEO, Google Ads & Reputationsmanagement Agentur in Wien. Wir steigern den Umsatz von Dienstleistungsunternehmen um durchschnittlich 40%. Lokale Expertise für Wien & Umgebung.",
  keywords: [
    "SEO Agentur Wien",
    "Google Ads Wien", 
    "Reputationsmanagement Wien",
    "Digital Marketing Wien",
    "SEO Optimierung Österreich",
    "Google Werbung Wien",
    "Marketing Agentur Wien",
    "Umsatzsteigerung Wien",
    "Lokale SEO Wien",
    "Google Bewertungen Wien",
    "Online Marketing Wien",
    "Conversion Optimierung Wien"
  ].join(", "),
  authors: [{ name: "Stahl Digital Team" }],
  creator: "Stahl Digital",
  publisher: "Stahl Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stahldigital.at'),
  alternates: {
    canonical: '/',
    languages: {
      'de': '/de',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://stahldigital.at',
    siteName: 'Stahl Digital',
    title: 'Stahl Digital | Elite SEO Agentur Wien | Google Ads & Reputationsmanagement',
    description: 'Professionelle SEO, Google Ads & Reputationsmanagement Agentur in Wien. Wir steigern den Umsatz von Dienstleistungsunternehmen um durchschnittlich 40%.',
    images: [
      {
        url: '/stahl_digital.png',
        width: 1200,
        height: 630,
        alt: 'Stahl Digital - Elite Marketing Agentur Wien',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stahl Digital | Elite SEO Agentur Wien',
    description: 'Professionelle SEO, Google Ads & Reputationsmanagement Agentur in Wien',
    images: ['/stahl_digital.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Marketing Agency',
  classification: 'Business',
  themeColor: "#171717",
  colorScheme: "light",
  viewport: "width=device-width, initial-scale=1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Stahl Digital"
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.svg',
    shortcut: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for AI Search & SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "Stahl Digital",
    "alternateName": "Stahl Digital Marketing Agentur",
    "description": "Professionelle SEO, Google Ads & Reputationsmanagement Agentur in Wien. Wir steigern den Umsatz von Dienstleistungsunternehmen um durchschnittlich 40%.",
    "url": "https://stahldigital.at",
    "logo": "https://stahldigital.at/stahl_digital.png",
    "image": "https://stahldigital.at/stahl_digital.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wien",
      "addressRegion": "Wien",
      "addressCountry": "AT"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+43-676-7734689",
      "contactType": "customer service",
      "email": "office@stahldigital.at",
      "availableLanguage": ["German", "English"]
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.2082,
        "longitude": 16.3738
      },
      "geoRadius": "50000"
    },
    "areaServed": ["Wien", "Niederösterreich", "Burgenland"],
    "services": [
      {
        "@type": "Service",
        "name": "SEO Optimierung",
        "description": "Strategische Suchmaschinenoptimierung für nachhaltige Sichtbarkeit"
      },
      {
        "@type": "Service",
        "name": "Google Ads Management",
        "description": "Zielgerichtete Werbekampagnen mit messbarem ROI"
      },
      {
        "@type": "Service",
        "name": "Reputationsmanagement",
        "description": "Aufbau und Schutz Ihres Online-Rufs"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing-Pakete",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sichtbarkeit & Vertrauen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lead-Maschine"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digitale Dominanz"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Bank Transfer, Credit Card",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/stahl-digital",
      "https://www.instagram.com/stahldigital"
    ]
  };

  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Structured Data for AI Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Browser Theme Colors */}
        <meta name="theme-color" content="#171717" />
        <meta name="msapplication-TileColor" content="#171717" />
        <meta name="msapplication-navbutton-color" content="#171717" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Custom CSS for browser theming */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Browser header theming */
            ::-webkit-scrollbar {
              width: 12px;
            }
            ::-webkit-scrollbar-track {
              background: #f1f5f9;
            }
            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #000080, #ff6600);
              border-radius: 6px;
              border: 2px solid #f1f5f9;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #ff6600, #000080);
            }
            
            /* Selection color */
            ::selection {
              background: #000080;
              color: white;
            }
            ::-moz-selection {
              background: #000080;
              color: white;
            }
          `
        }} />
      </head>
      <GoogleTagManager gtmId="GTM-" />
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
      <GoogleAnalytics gaId="G-" />
    </html>
  );
}

