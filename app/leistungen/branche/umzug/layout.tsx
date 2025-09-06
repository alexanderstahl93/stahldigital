import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Umzug Marketing & SEO Agentur Wien | Stahl Digital - Mehr Kunden für Umzugsunternehmen',
  description: 'Spezialisiert auf Umzug Marketing & SEO in Wien. Wir steigern Ihre Sichtbarkeit bei Google, generieren qualifizierte Leads und steigern Ihren Umsatz. Kostenlose Beratung!',
  keywords: 'Umzug Marketing Wien, Umzug SEO, Umzugsunternehmen Marketing, Umzug Werbung, Umzug Google Ads, Umzug Social Media, Umzug Lead Generation, Umzug Wien',
  authors: [{ name: 'Alexander Stahl' }],
  creator: 'Stahl Digital',
  publisher: 'Stahl Digital',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://stahldigital.at/leistungen/branche/umzug'
  },
  openGraph: {
    title: 'Umzug Marketing & SEO Agentur Wien | Stahl Digital',
    description: 'Spezialisiert auf Umzug Marketing & SEO in Wien. Wir steigern Ihre Sichtbarkeit bei Google, generieren qualifizierte Leads und steigern Ihren Umsatz.',
    type: 'website',
    url: 'https://stahldigital.at/leistungen/branche/umzug',
    siteName: 'Stahl Digital',
    locale: 'de_AT',
    images: [
      {
        url: 'https://stahldigital.at/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Umzug Marketing & SEO Agentur Wien - Stahl Digital',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umzug Marketing & SEO Agentur Wien | Stahl Digital',
    description: 'Spezialisiert auf Umzug Marketing & SEO in Wien. Wir steigern Ihre Sichtbarkeit bei Google.',
    images: ['https://stahldigital.at/og-image.jpg']
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#3B82F6',
  colorScheme: 'light'
}

export default function UmzugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Stahl Digital",
            "description": "Spezialisiert auf Umzug Marketing & SEO in Wien. Wir steigern Ihre Sichtbarkeit bei Google, generieren qualifizierte Leads und steigern Ihren Umsatz.",
            "url": "https://stahldigital.at/leistungen/branche/umzug",
            "telephone": "+43-xxx-xxx-xxx",
            "email": "info@stahldigital.at",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ihre Straße",
              "addressLocality": "Wien",
              "postalCode": "1000",
              "addressCountry": "AT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.2082,
              "longitude": 16.3738
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "€€",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 48.2082,
                "longitude": 16.3738
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Umzug Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Umzug SEO Optimierung",
                    "description": "Verbessern Sie Ihre Google-Rankings für Umzug-bezogene Suchanfragen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Umzug Google Ads",
                    "description": "Zielgerichtete Werbung für Umzugsdienstleistungen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Umzug Social Media Marketing",
                    "description": "Aufbau einer starken Online-Präsenz für Umzugsunternehmen"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.linkedin.com/company/stahl-digital",
              "https://www.facebook.com/stahldigital"
            ]
          })
        }}
      />
      
      {/* Structured Data for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Umzug Marketing & SEO",
            "description": "Professionelle Marketing- und SEO-Dienstleistungen speziell für Umzugsunternehmen in Wien und Umgebung.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Stahl Digital"
            },
            "areaServed": {
              "@type": "City",
              "name": "Wien"
            },
            "serviceType": "Digital Marketing",
            "category": "Marketing Agency",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Kostenlose Erstberatung für Umzugsunternehmen"
            }
          })
        }}
      />
      
      {children}
    </>
  )
}
