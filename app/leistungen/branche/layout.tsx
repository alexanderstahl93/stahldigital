import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branchenspezialisierung Marketing & SEO | Stahl Digital - Spezialisiert auf verschiedene Branchen',
  description: 'Wir sind spezialisiert auf branchenspezifisches Marketing und SEO. Von Umzugsunternehmen bis zu anderen Branchen - maßgeschneiderte Lösungen für Ihren Erfolg.',
  keywords: 'Branchenspezialisierung Marketing, Branchen SEO, Umzug Marketing, Branchen Marketing Wien, Spezialisierte Marketing Agentur',
  authors: [{ name: 'Alexander Stahl' }],
  creator: 'Stahl Digital',
  publisher: 'Stahl Digital',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://stahldigital.at/leistungen/branche'
  },
  openGraph: {
    title: 'Branchenspezialisierung Marketing & SEO | Stahl Digital',
    description: 'Wir sind spezialisiert auf branchenspezifisches Marketing und SEO. Maßgeschneiderte Lösungen für verschiedene Branchen.',
    type: 'website',
    url: 'https://stahldigital.at/leistungen/branche',
    siteName: 'Stahl Digital',
    locale: 'de_AT',
    images: [
      {
        url: 'https://stahldigital.at/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Branchenspezialisierung Marketing & SEO - Stahl Digital',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branchenspezialisierung Marketing & SEO | Stahl Digital',
    description: 'Wir sind spezialisiert auf branchenspezifisches Marketing und SEO.',
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

export default function BrancheLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stahl Digital",
            "description": "Spezialisiert auf branchenspezifisches Marketing und SEO für verschiedene Branchen in Wien und Umgebung.",
            "url": "https://stahldigital.at/leistungen/branche",
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Branchenspezialisierung Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Umzug Marketing & SEO",
                    "description": "Spezialisiert auf Umzugsunternehmen in Wien und Umgebung"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Branchenspezifisches Marketing",
                    "description": "Maßgeschneiderte Marketing-Strategien für verschiedene Branchen"
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
            "name": "Branchenspezialisierung Marketing & SEO",
            "description": "Professionelle Marketing- und SEO-Dienstleistungen speziell für verschiedene Branchen.",
            "provider": {
              "@type": "Organization",
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
              "description": "Kostenlose Erstberatung für branchenspezifisches Marketing"
            }
          })
        }}
      />
      
      {children}
    </>
  )
}
