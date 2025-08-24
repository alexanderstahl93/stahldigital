import { Metadata } from 'next'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: "Digitale Marketing Leistungen Wien - SEO, Google Ads & AI Search | Stahl Digital",
  description: "Professionelle digitale Marketing Leistungen in Wien: Local SEO, Google Ads Management, Reputationsmanagement, AI Search Integration und Web App Development. Steigern Sie Ihre Sichtbarkeit und Umsatz.",
  keywords: "digitale marketing leistungen wien, seo agentur wien, google ads management, reputationsmanagement, ai search integration, web app development, local seo, conversion optimierung",
  authors: [{ name: "Stahl Digital KG" }],
  robots: "index, follow",
  openGraph: {
    title: "Digitale Marketing Leistungen Wien - SEO, Google Ads & AI Search",
    description: "Professionelle digitale Marketing Leistungen für Dienstleistungsunternehmen in Wien. SEO, Google Ads, Reputationsmanagement und moderne Technologien für nachhaltigen Erfolg.",
    type: "website",
    url: "https://stahl-digital.at/leistungen",
    images: [
      {
        url: "https://stahl-digital.at/og-leistungen.jpg",
        width: 1200,
        height: 630,
        alt: "Digitale Marketing Leistungen Wien - Stahl Digital"
      }
    ]
  }
}

const services = [
  {
    category: "SEO & Content Marketing",
    slug: "seo",
    description: "Nachhaltige Suchmaschinenoptimierung für lokale und nationale Sichtbarkeit",
    services: [
      {
        name: "Local SEO Setup",
        slug: "local-seo-setup",
        description: "Optimierung für lokale Suchergebnisse mit Google Business Profile",
        features: ["Google Business Optimierung", "Lokale Keywords", "NAP-Konsistenz", "Lokale Backlinks"],
        price: "ab €1.490/monatlich"
      },
      {
        name: "SEO Betreuung",
        slug: "seo-betreuung",
        description: "Kontinuierliche SEO-Optimierung und Content-Strategie",
        features: ["Keyword-Monitoring", "Content-Erstellung", "Technische Optimierung", "Performance-Tracking"],
        price: "ab €1.490/monatlich"
      },
      {
        name: "Technisches SEO",
        slug: "technisches-seo",
        description: "Optimierung der technischen Website-Grundlagen",
        features: ["Core Web Vitals", "Strukturierte Daten", "XML-Sitemaps", "Robots.txt Optimierung"],
        price: "ab €2.490/monatlich"
      },
      {
        name: "Content Marketing",
        slug: "content-marketing",
        description: "Strategische Content-Erstellung für organisches Wachstum",
        features: ["Blog-Strategie", "SEO-optimierte Texte", "Content-Kalender", "Performance-Analyse"],
        price: "ab €2.490/monatlich"
      },
      {
        name: "Wettbewerbsanalyse",
        slug: "wettbewerbsanalyse",
        description: "Umfassende Analyse der Konkurrenz und Marktpositionierung",
        features: ["Keyword-Gap-Analyse", "Backlink-Analyse", "Content-Analyse", "Strategie-Empfehlungen"],
        price: "ab €2.490/monatlich"
      }
    ]
  },
  {
    category: "Google Ads Management",
    slug: "google-ads",
    description: "Professionelle Google Ads Kampagnen für gezielte Lead-Generierung",
    services: [
      {
        name: "Google Ads Setup",
        slug: "google-ads-setup",
        description: "Professioneller Aufbau von Google Ads Kampagnen",
        features: ["Kampagnen-Struktur", "Keyword-Research", "Ad-Copy-Erstellung", "Conversion-Tracking"],
        price: "ab €1.490/monatlich"
      },
      {
        name: "Google Ads Betreuung",
        slug: "google-ads-betreuung",
        description: "Kontinuierliche Optimierung und Betreuung Ihrer Kampagnen",
        features: ["Performance-Monitoring", "Bid-Optimierung", "A/B-Testing", "Budget-Management"],
        price: "ab €1.490/monatlich"
      },
      {
        name: "Display & Video Ads",
        slug: "display-video-ads",
        description: "Erweiterte Werbeformate für maximale Reichweite",
        features: ["Display-Netzwerk", "YouTube-Werbung", "Remarketing", "Audience-Targeting"],
        price: "ab €2.490/monatlich"
      },
      {
        name: "Retargeting",
        slug: "retargeting",
        description: "Gezielte Ansprache von Interessenten und Kunden",
        features: ["Audience-Segmentierung", "Dynamisches Retargeting", "Cross-Device-Tracking", "Conversion-Optimierung"],
        price: "ab €2.490/monatlich"
      },
      {
        name: "Landingpage A/B-Tests",
        slug: "landingpage-ab-tests",
        description: "Optimierung Ihrer Landingpages für maximale Conversion",
        features: ["Hypothesen-Entwicklung", "Test-Design", "Statistische Auswertung", "Implementierung"],
        price: "ab €2.490/monatlich"
      }
    ]
  },
  {
    category: "Reputationsmanagement",
    slug: "reputation",
    description: "Aufbau und Pflege Ihres Online-Rufs für mehr Vertrauen",
    services: [
      {
        name: "Google Bewertungen",
        slug: "google-bewertungen",
        description: "Strategischer Aufbau positiver Google Bewertungen",
        features: ["Bewertungsstrategie", "QR-Code-System", "E-Mail-Vorlagen", "Response-Management"],
        price: "ab €1.490/monatlich"
      },
      {
        name: "Bewertungsautomatisierung",
        slug: "bewertungsautomatisierung",
        description: "Automatisierte Bewertungsanfragen und -verwaltung",
        features: ["E-Mail/SMS-System", "Bewertungs-Dashboard", "Automatische Follow-ups", "Performance-Tracking"],
        price: "ab €4.990/monatlich"
      },
      {
        name: "Reputationsmanagement",
        slug: "reputationsmanagement",
        description: "Umfassendes Management Ihres Online-Rufs",
        features: ["Monitoring aller Plattformen", "Krisenmanagement", "Positiv-Content-Erstellung", "Influencer-Cooperation"],
        price: "ab €2.490/monatlich"
      },
      {
        name: "Bewertungs-Dashboard",
        slug: "bewertungs-dashboard",
        description: "Zentrales Dashboard für alle Bewertungen und Reviews",
        features: ["Multi-Platform-Monitoring", "Analytics & Reporting", "Alert-System", "Response-Templates"],
        price: "ab €4.990/monatlich"
      }
    ]
  },
  {
    category: "AI Search Integration",
    slug: "ai-search",
    description: "Moderne KI-gestützte Suchfunktionen für Ihre Website",
    services: [
      {
        name: "AI Search Integration",
        slug: "ai-search-integration",
        description: "Integration intelligenter Suchfunktionen in Ihre Website",
        features: ["Semantische Suche", "FAQ-Integration", "Chat-ähnliche Anfragen", "Automatische Antworten"],
        price: "ab €2.490/monatlich"
      },
      {
        name: "Custom LLM",
        slug: "custom-llm",
        description: "Maßgeschneiderte KI-Modelle für Ihre Branche",
        features: ["Fine-tuning", "Branchenspezifisches Training", "Custom Responses", "Performance-Optimierung"],
        price: "ab €2.500 einmalig"
      },
      {
        name: "Semantische Suche",
        slug: "semantische-suche",
        description: "Verständnisbasierte Suche für bessere Nutzererfahrung",
        features: ["Intent-Erkennung", "Kontextverständnis", "Mehrsprachige Suche", "Learning-Algorithmen"],
        price: "ab €290/monatlich"
      }
    ]
  },
  {
    category: "Web App Development",
    slug: "web-apps",
    description: "Maßgeschneiderte Web-Anwendungen für Ihr Business",
    services: [
      {
        name: "Web App Development",
        slug: "web-app-development",
        description: "Entwicklung individueller Web-Anwendungen",
        features: ["MVP-Entwicklung", "Responsive Design", "API-Integration", "Performance-Optimierung"],
        price: "ab €4.900 einmalig"
      },
      {
        name: "Lead-Kalkulator",
        slug: "lead-kalkulator",
        description: "Interaktive Kalkulatoren für Lead-Generierung",
        features: ["Custom-Berechnungen", "Formular-Integration", "Analytics-Tracking", "Mobile-Optimierung"],
        price: "ab €4.900 einmalig"
      },
      {
        name: "Buchungstool",
        slug: "buchungstool",
        description: "Online-Buchungssystem für Termine und Services",
        features: ["Kalender-Integration", "Zahlungsabwicklung", "E-Mail-Benachrichtigungen", "Admin-Dashboard"],
        price: "ab €4.900 einmalig"
      },
      {
        name: "Bewertungsportal",
        slug: "bewertungsportal",
        description: "Eigenes Portal für Kundenbewertungen",
        features: ["Multi-Platform-Integration", "Moderation-Tools", "Analytics-Dashboard", "API-Anbindung"],
        price: "ab €4.900 einmalig"
      }
    ]
  },
  {
    category: "Conversion-Optimierung",
    slug: "conversion",
    description: "Optimierung Ihrer Website für maximale Conversion-Raten",
    services: [
      {
        name: "Conversion-Optimierung",
        slug: "conversion-optimierung",
        description: "Systematische Optimierung Ihrer Conversion-Funnel",
        features: ["Funnel-Analyse", "A/B-Testing", "UX-Optimierung", "Conversion-Tracking"],
        price: "ab €1.490 einmalig"
      },
      {
        name: "UX & Copywriting",
        slug: "ux-copywriting",
        description: "Optimierung von Nutzererfahrung und Texten",
        features: ["User-Research", "Copywriting", "Wireframing", "Usability-Testing"],
        price: "ab €1.490 einmalig"
      },
      {
        name: "Foto-/Video-Shooting",
        slug: "foto-video-shooting",
        description: "Professionelle Medienproduktion für Marketing",
        features: ["Produktfotografie", "Video-Content", "Social Media Assets", "Brand-Storytelling"],
        price: "ab €890 einmalig"
      },
      {
        name: "Performance-Reporting",
        slug: "performance-reporting",
        description: "Umfassende Berichterstattung und ROI-Tracking",
        features: ["KPI-Dashboard", "Automatisierte Reports", "ROI-Berechnung", "Trend-Analyse"],
        price: "ab €190/monatlich"
      }
    ]
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digitale Marketing Leistungen Wien",
  "description": "Professionelle digitale Marketing Leistungen für Dienstleistungsunternehmen in Wien: SEO, Google Ads, Reputationsmanagement, AI Search Integration und Web App Development.",
  "provider": {
    "@type": "Organization",
    "name": "Stahl Digital KG",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wien",
      "addressCountry": "AT"
    }
  },
  "serviceType": "Digital Marketing",
  "areaServed": {
    "@type": "City",
    "name": "Wien"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digitale Marketing Services",
    "itemListElement": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.category,
        "description": service.description
      }
    }))
  }
}

export default function LeistungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto mt-12 px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Digitale Marketing Leistungen
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
                Professionelle digitale Marketing Lösungen für Dienstleistungsunternehmen in Wien. 
                Von Local SEO bis AI Search Integration - wir machen Ihr Business sichtbar und steigern Ihren Umsatz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Alle Leistungen entdecken
                </a>
                <a 
                  href="/leistungen/pakete" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
                >
                  Pakete ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                Unsere Leistungen im Überblick
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Wir bieten umfassende digitale Marketing Lösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((category) => (
                <div key={category.slug} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                        {category.category}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        {category.description}
                      </p>
                      <a 
                        href={`/leistungen/${category.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Alle {category.category} Leistungen ansehen
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                    
                    <div className="space-y-4">
                      {category.services.slice(0, 3).map((service) => (
                        <div key={service.slug} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-gray-900">{service.name}</h4>
                            <span className="text-sm text-gray-500">{service.price}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {service.features.slice(0, 2).map((feature, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                Häufig gestellte Fragen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Welche Leistungen sind in den Paketen enthalten?
                  </h3>
                  <p className="text-gray-600">
                    Unsere Pakete enthalten alle wichtigen digitalen Marketing Leistungen: SEO, Google Ads, Reputationsmanagement und moderne Technologien wie AI Search. Die Pakete sind gestaffelt nach Umfang und Budget.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Wie lange dauert es, bis ich erste Ergebnisse sehe?
                  </h3>
                  <p className="text-gray-600">
                    Google Ads zeigen sofort Ergebnisse. SEO benötigt 3-6 Monate für sichtbare Verbesserungen. Reputationsmanagement und AI Search sind innerhalb von 4-8 Wochen implementiert.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Arbeiten Sie nur mit Unternehmen in Wien?
                  </h3>
                  <p className="text-gray-600">
                    Wir konzentrieren uns auf Wien und Umgebung, da wir die lokalen Märkte und Zielgruppen bestens kennen. Für größere Projekte arbeiten wir auch österreichweit.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Was kostet ein typisches Projekt?
                  </h3>
                  <p className="text-gray-600">
                    Unsere Pakete starten bei €1.490 monatlich. Einzelne Leistungen können auch separat gebucht werden. Wir erstellen gerne ein individuelles Angebot für Ihre Bedürfnisse.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Bieten Sie auch Einzelleistungen an?
                  </h3>
                  <p className="text-gray-600">
                    Ja, alle Leistungen können einzeln gebucht werden. Wir empfehlen jedoch unsere Pakete, da sie optimal aufeinander abgestimmt sind und bessere Ergebnisse liefern.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Wie messen Sie den Erfolg?
                  </h3>
                  <p className="text-gray-600">
                    Wir verwenden umfassende Analytics-Tools und erstellen monatliche Reports. Wichtige KPIs sind: Website-Traffic, Conversion-Raten, Lead-Generierung und ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
                Bereit für digitalen Erfolg?
              </h2>
              <p className="text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto mb-8">
                Lassen Sie uns gemeinsam Ihre digitale Präsenz aufbauen und Ihren Umsatz steigern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/leistungen/pakete" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Pakete vergleichen
                </a>
                <a 
                  href="/leistungen/kostenlose-beratung" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium px-8 py-4 rounded-lg transition-all duration-200"
                >
                  Kostenlose Beratung
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 