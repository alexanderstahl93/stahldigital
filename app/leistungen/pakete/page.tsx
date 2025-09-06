import { Metadata } from 'next'
import Footer from '../../components/footer'

export const metadata: Metadata = {
  title: "Digitale Marketing Pakete Wien - SEO, Google Ads & AI Search | Stahl Digital",
  description: "Professionelle digitale Marketing Pakete für Dienstleistungsunternehmen in Wien: Sichtbarkeit & Vertrauen (€1.490), Lead-Maschine (€2.490), Digitale Dominanz (€4.990). 12-Monatsoption mit 2 Monaten geschenkt.",
  keywords: "digitale marketing pakete wien, seo pakete, google ads pakete, marketing agentur wien, seo agentur wien, digital marketing preise, marketing pakete österreich",
  authors: [{ name: "Stahl Digital KG" }],
  robots: "index, follow",
  openGraph: {
    title: "Digitale Marketing Pakete Wien - SEO, Google Ads & AI Search",
    description: "Drei professionelle Marketing-Pakete für nachhaltigen Erfolg: Von €1.490 bis €4.990 monatlich. Jährliche Option mit 2 Monaten geschenkt.",
    type: "website",
    url: "https://stahl-digital.at/leistungen/pakete",
    images: [
      {
        url: "https://stahl-digital.at/og-pakete.jpg",
        width: 1200,
        height: 630,
        alt: "Digitale Marketing Pakete Wien - Stahl Digital"
      }
    ]
  }
}

const packages = [
  {
    name: "Sichtbarkeit & Vertrauen",
    slug: "sichtbarkeit-vertrauen",
    tagline: "Ideal für lokale Dienstleister, die endlich digital durchstarten wollen",
    monthlyPrice: 1490,
    yearlyPrice: 14900,
    originalYearlyPrice: 17880,
    savings: "2 Monate geschenkt",
    features: [
      "Set Up einer neuen Web App angepasst an individuelle Bedürfnisse",
      "Best Practices für GEO-KI Ranking (Auffindbarkeit in LLMs wie ChatGPT, Perplexity, Gemini, etc.)",
      "Local SEO Setup (inkl. Google Business Optimierung)",
      "Profesionelles Fotoshooting für GMB und Website",
      "SEO Betreuung (Basic): 5 Keywords, 5 Blogartikel",
      "Google Ads or Meta Ads Setup",
      "Bewertungsstrategie (manuell) mit QR-Code, Textvorlagen",
      "Abschlussreporting + Empfehlungen",
      "Wachstumscall alle 60 Tage",
    ],
    bestFor: [
      "Lokale Dienstleister",
      "Neue digitale Präsenz",
      "Budget-bewusste Unternehmen",
      "Grundlegende Online-Sichtbarkeit"
    ],
    results: [
      "Erste Google-Rankings in 2-3 Monaten",
      "Steigerung der lokalen Sichtbarkeit",
      "Gezielte Kundenanfragen durch messbar mehr Sichtbarkeit",
      "Aufbau positiver Bewertungen"
    ]
  },
  {
    name: "Lead-Maschine",
    slug: "lead-maschine",
    tagline: "Für wachsende Betriebe, die gezielt mehr Kundenanfragen erhalten möchten.",
    monthlyPrice: 2490,
    yearlyPrice: 24900,
    originalYearlyPrice: 29880,
    savings: "2 Monate geschenkt",
    features: [
      "Erweiterte SEO Betreuung: 10 Keywords, 2 Blogartikel/Monat, Wettbewerbsanalyse",
      "Google Ads Betreuung (bis €5.000 Budget) inkl. Landingpage A/B-Tests",
      "Optimierung bestehender Website + Conversion-Funnel",
      "Reputationsmanagement inkl. Bewertungsmonitoring",
      "Lead-Dashboard (Google Sheets + KPI-Tracking)",
      "Monatliches Performance-Review",
      "Persönlicher Ansprechpartner (WhatsApp & E-Mail)",
      "AI Search (Light): Integrierte KI-Suche für Ihre Website mit FAQ-Trainingsdaten"
    ],
    bestFor: [
      "Wachsende Unternehmen",
      "Etablierte lokale Anbieter",
      "Lead-orientierte Strategien",
      "Skalierbare Marketing-Lösungen"
    ],
    results: [
      "Signifikante Traffic-Steigerung",
      "Qualifizierte Lead-Generierung",
      "Verbesserte Conversion-Raten",
      "Automatisierte Bewertungsverwaltung"
    ]
  },
  {
    name: "Digitale Dominanz",
    slug: "digitale-dominanz",
    tagline: "Für ambitionierte Dienstleister, die ihre Branche & Region digital dominieren wollen",
    monthlyPrice: 4990,
    yearlyPrice: 49900,
    originalYearlyPrice: 59880,
    savings: "2 Monate geschenkt",
    features: [
      "SEO Full-Service: 20+ Keywords, technisches SEO, 4 Content-Stücke/Monat",
      "Google Ads Full Funnel: Search, Display, Video, Retargeting",
      "Bewertungsautomatisierung mit E-Mail/SMS-System & Bewertungs-Dashboard",
      "AI Search (Advanced): Integrierte KI-Suche + semantische Kundenanfragen (Chat-ähnlich)",
      "Web App Development (MVP-Level): z.B. Lead-Kalkulator, Buchungstool, Bewertungsportal o.ä.",
      "CRM-Integration & Marketing Automation (HubSpot, Pipedrive, Mailchimp)",
      "Wettbewerbs-Tracking (SEO + Ads)",
      "Strategieboarding + Slack-Support"
    ],
    bestFor: [
      "Ambitiöse Unternehmen",
      "Branchenführer",
      "Technologie-affine Kunden",
      "Vollständige digitale Transformation"
    ],
    results: [
      "Marktführerschaft in der Region",
      "Automatisierte Lead-Generierung",
      "Hochwertige Kundenanfragen",
      "Skalierbare Technologie-Infrastruktur"
    ]
  }
]

const addOnModules = [
  {
    name: "Foto-/Video-Shooting (Profil & Ads)",
    description: "Professionelle Medienproduktion für Marketing",
    oneTime: "ab €890",
    monthly: "–"
  },
  {
    name: "Conversion-Optimierung (UX & Copywriting)",
    description: "Systematische Optimierung Ihrer Conversion-Funnel",
    oneTime: "ab €1.490",
    monthly: "–"
  },
  {
    name: "Individuelle Web App / Kalkulator / Tool",
    description: "Maßgeschneiderte Web-Anwendungen für Ihr Business",
    oneTime: "ab €4.900",
    monthly: "ab €490"
  },
  {
    name: "Erweiterte AI Search (custom LLM, fine-tuned)",
    description: "Maßgeschneiderte KI-Modelle für Ihre Branche",
    oneTime: "ab €2.500",
    monthly: "ab €290"
  },
  {
    name: "Automatisiertes Reporting & ROI-Cockpit",
    description: "Umfassende Berichterstattung und ROI-Tracking",
    oneTime: "–",
    monthly: "€190"
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Digitale Marketing Pakete Wien",
  "description": "Professionelle digitale Marketing Pakete für Dienstleistungsunternehmen in Wien. Von €1.490 bis €4.990 monatlich mit jährlicher Option und 2 Monaten geschenkt.",
  "provider": {
    "@type": "Organization",
    "name": "Stahl Digital KG",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wien",
      "addressCountry": "AT"
    }
  },
  "itemListElement": packages.map(pkg => ({
    "@type": "Offer",
    "name": pkg.name,
    "description": pkg.tagline,
    "price": pkg.monthlyPrice,
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": pkg.monthlyPrice,
      "priceCurrency": "EUR",
      "unitText": "MONTH"
    },
    "offeredBy": {
      "@type": "Organization",
      "name": "Stahl Digital KG"
    }
  }))
}

export default function PaketePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
          <div className="max-w-7xl mx-auto mt-12 px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Digitale Marketing Pakete
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
                Drei professionelle Pakete für nachhaltigen digitalen Erfolg. 
                Von der ersten Online-Sichtbarkeit bis zur digitalen Marktführerschaft - 
                wir haben die perfekte Lösung für Ihr Business.
              </p>
              <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-700 text-white rounded-lg p-6 max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold mb-2">🎉 Jährliche Option: 2 Monate geschenkt!</h2>
                <p className="text-blue-100">
                  Sparen Sie bis zu €9.980 im Jahr und erhalten Sie 2 Monate kostenlos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                Unsere High-Ticket-Pakete für Umsatzwachstum
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Wählen Sie das Paket, das zu Ihren Zielen und Budget passt. 
                Alle Pakete sind monatlich kündbar und enthalten alle Leistungen.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.slug} 
                  className={`bg-white rounded-lg shadow-lg border-2 p-8 relative ${
                    index === 1 ? 'border-blue-600 scale-105' : 'border-gray-200'
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Empfohlen
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {pkg.tagline}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-gray-900">
                        €{pkg.monthlyPrice.toLocaleString()}
                      </div>
                      <div className="text-gray-600">monatlich</div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="text-sm text-green-800">
                        <strong>Jährlich: €{pkg.yearlyPrice.toLocaleString()}</strong>
                      </div>
                      <div className="text-xs text-green-600">
                        statt €{pkg.originalYearlyPrice.toLocaleString()} - {pkg.savings}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Leistungen:</h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ideal für:</h4>
                      <ul className="space-y-2">
                        {pkg.bestFor.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Erwartete Ergebnisse:</h4>
                      <ul className="space-y-2">
                        {pkg.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href={`/leistungen/kostenlose-beratung?paket=${pkg.slug}`}
                      className={`w-full text-center font-medium px-6 py-3 rounded-lg transition-colors duration-200 ${
                        index === 1 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      {index === 1 ? 'Jetzt starten' : 'Angebot anfordern'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Modules */}
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                Zusatzmodule für jedes Paket
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Erweitern Sie Ihr Paket um spezielle Leistungen, die perfekt zu Ihren Bedürfnissen passen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOnModules.map((module, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {module.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {module.description}
                  </p>
                  <div className="space-y-2">
                    {module.oneTime !== "–" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Einmalig:</span>
                        <span className="font-medium">{module.oneTime}</span>
                      </div>
                    )}
                    {module.monthly !== "–" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Monatlich:</span>
                        <span className="font-medium">{module.monthly}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                Häufig gestellte Fragen zu unseren Paketen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Was ist der Unterschied zwischen den Paketen?
                  </h3>
                  <p className="text-gray-600">
                    Die Pakete unterscheiden sich im Umfang und der Intensität der Leistungen. Paket 1 fokussiert sich auf Grundlagen, Paket 2 auf Lead-Generierung und Paket 3 auf vollständige digitale Dominanz mit modernsten Technologien.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Kann ich mein Paket später upgraden?
                  </h3>
                  <p className="text-gray-600">
                    Ja, Sie können jederzeit zu einem höheren Paket wechseln. Die Differenz wird anteilig berechnet. Ein Downgrade ist zum Monatsende möglich.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Was passiert nach der 12-Monatsoption?
                  </h3>
                  <p className="text-gray-600">
                    Nach 12 Monaten können Sie entweder verlängern (mit erneutem Rabatt) oder auf monatliche Zahlung umstellen. Alle Leistungen bleiben unverändert.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Sind alle Leistungen in den Preisen enthalten?
                  </h3>
                  <p className="text-gray-600">
                    Ja, alle aufgeführten Leistungen sind in den monatlichen Preisen enthalten. Zusätzliche Kosten entstehen nur bei Zusatzmodulen oder individuellen Anpassungen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Wie schnell kann ich mit einem Paket starten?
                  </h3>
                  <p className="text-gray-600">
                    Nach der Beauftragung starten wir innerhalb von 1-2 Wochen mit der Implementierung. Google Ads sind sofort aktiv, SEO-Optimierungen zeigen erste Ergebnisse in 3-6 Monaten.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Bieten Sie auch individuelle Lösungen an?
                  </h3>
                  <p className="text-gray-600">
                    Ja, für größere Projekte oder spezielle Anforderungen erstellen wir gerne maßgeschneiderte Lösungen. Kontaktieren Sie uns für ein individuelles Angebot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
                Bereit für digitalen Erfolg?
              </h2>
              <p className="text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto mb-8">
                Lassen Sie uns gemeinsam Ihr perfektes Paket finden und Ihre digitale Präsenz aufbauen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Kostenlose Beratung
                </a>
                <a 
                  href="/leistungen" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium px-8 py-4 rounded-lg transition-all duration-200"
                >
                  Alle Leistungen ansehen
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
} 