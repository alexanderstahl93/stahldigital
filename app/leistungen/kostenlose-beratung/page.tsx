import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kostenlose Marketing Beratung Wien - SEO, Google Ads & AI Search | Stahl Digital",
  description: "Kostenlose digitale Marketing Beratung für Unternehmen in Wien. Analyse Ihrer aktuellen Online-Präsenz, individuelle Strategie-Entwicklung und maßgeschneiderte Lösungen für SEO, Google Ads und AI Search.",
  keywords: "kostenlose marketing beratung wien, seo beratung wien, google ads beratung, digital marketing beratung, marketing agentur beratung, seo agentur wien beratung",
  authors: [{ name: "Stahl Digital KG" }],
  robots: "index, follow",
  openGraph: {
    title: "Kostenlose Marketing Beratung Wien - SEO, Google Ads & AI Search",
    description: "Professionelle kostenlose Beratung für Ihre digitale Marketing Strategie. Individuelle Analyse und maßgeschneiderte Lösungen für nachhaltigen Erfolg.",
    type: "website",
    url: "https://stahl-digital.at/leistungen/kostenlose-beratung",
    images: [
      {
        url: "https://stahl-digital.at/og-beratung.jpg",
        width: 1200,
        height: 630,
        alt: "Kostenlose Marketing Beratung Wien - Stahl Digital"
      }
    ]
  }
}

const consultationBenefits = [
  {
    title: "Kostenlose Website-Analyse",
    description: "Wir analysieren Ihre aktuelle Online-Präsenz und identifizieren Optimierungspotenziale",
  },
  {
    title: "Individuelle Strategie-Entwicklung",
    description: "Maßgeschneiderte Marketing-Strategie basierend auf Ihren Zielen und Budget",
  },
  {
    title: "Konkrete Handlungsempfehlungen",
    description: "Praktische Tipps und nächste Schritte für sofortige Verbesserungen",
  },
  {
    title: "Paket-Empfehlung",
    description: "Empfehlung des passenden Marketing-Pakets für Ihr Business",
  }
]

const consultationProcess = [
  {
    step: "1",
    title: "Kontaktaufnahme",
    description: "Füllen Sie das Formular aus oder kontaktieren Sie uns direkt"
  },
  {
    step: "2",
    title: "Terminvereinbarung",
    description: "Wir vereinbaren einen Termin für ein kostenloses Beratungsgespräch"
  },
  {
    step: "3",
    title: "Analyse & Beratung",
    description: "30-45 Minuten intensives Gespräch mit individueller Analyse"
  },
  {
    step: "4",
    title: "Strategie & Angebot",
    description: "Sie erhalten eine schriftliche Zusammenfassung mit konkreten Empfehlungen"
  }
]

const faqData = [
  {
    question: "Was kostet die Beratung?",
    answer: "Die Erstberatung ist vollständig kostenlos und unverbindlich. Wir investieren Zeit in die Analyse Ihres Business, um Ihnen die bestmöglichen Empfehlungen geben zu können."
  },
  {
    question: "Wie lange dauert das Beratungsgespräch?",
    answer: "Das Beratungsgespräch dauert in der Regel 30-45 Minuten. Wir nehmen uns die Zeit, um Ihre Situation gründlich zu verstehen und individuelle Lösungen zu entwickeln."
  },
  {
    question: "Kann ich auch online beraten werden?",
    answer: "Ja, wir bieten sowohl persönliche Beratung in Wien als auch Online-Beratung per Video-Call an. Beide Formate sind gleichwertig und effektiv."
  },
  {
    question: "Was passiert nach der Beratung?",
    answer: "Nach der Beratung erhalten Sie eine schriftliche Zusammenfassung mit konkreten Handlungsempfehlungen. Sie entscheiden selbst, ob und wann Sie mit uns zusammenarbeiten möchten."
  },
  {
    question: "Für welche Branchen bieten Sie Beratung an?",
    answer: "Wir beraten hauptsächlich Dienstleistungsunternehmen in Wien und Umgebung. Unsere Expertise umfasst Handwerker, Ärzte, Anwälte, Berater, Gastronomie und viele weitere Branchen."
  },
  {
    question: "Gibt es eine Mindestlaufzeit bei Zusammenarbeit?",
    answer: "Nein, alle unsere Pakete sind monatlich kündbar. Wir arbeiten nur langfristig erfolgreich, wenn Sie mit unseren Leistungen zufrieden sind."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kostenlose Marketing Beratung Wien",
  "description": "Professionelle kostenlose Beratung für digitale Marketing Strategien. Individuelle Analyse und maßgeschneiderte Lösungen für SEO, Google Ads und AI Search.",
  "provider": {
    "@type": "Organization",
    "name": "Stahl Digital KG",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wien",
      "addressCountry": "AT"
    }
  },
  "serviceType": "Digital Marketing Consultation",
  "areaServed": {
    "@type": "City",
    "name": "Wien"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
    "description": "Kostenlose Erstberatung für digitale Marketing Strategien"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Beratungsleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website-Analyse",
          "description": "Kostenlose Analyse Ihrer aktuellen Online-Präsenz"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strategie-Entwicklung",
          "description": "Individuelle Marketing-Strategie basierend auf Ihren Zielen"
        }
      }
    ]
  }
}

import Footer from "../../components/footer"

export default function BeratungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Kostenlose Marketing Beratung
                </h1>
                <p className="text-lg leading-relaxed text-gray-600">
                  Lassen Sie uns gemeinsam Ihre digitale Marketing Strategie entwickeln. 
                  In einem kostenlosen Beratungsgespräch analysieren wir Ihre aktuelle Situation 
                  und zeigen Ihnen den Weg zu mehr Online-Sichtbarkeit und Umsatz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#beratung-formular" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-center"
                  >
                    Jetzt Beratung anfordern
                  </a>
                  <a 
                    href="tel:+436767734689" 
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 text-center"
                  >
                    Direkt anrufen
                  </a>
                </div>
              </div>
              
              {/* Formular */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Kostenlose Beratung anfordern</h3>
                <form 
                  action="https://formspree.io/f/movnvjga" 
                  method="POST" 
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="ihre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+43 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Ihre Situation (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Erzählen Sie uns kurz von Ihrem Business und Ihren Zielen..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    Kostenlose Beratung anfordern
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                Was Sie von unserer Beratung erwarten können
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                In einem kostenlosen Beratungsgespräch erhalten Sie wertvolle Einblicke 
                und konkrete Handlungsempfehlungen für Ihr digitales Marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                So läuft Ihre kostenlose Beratung ab
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                In nur 4 einfachen Schritten zu Ihrer individuellen Marketing-Strategie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                  Warum Stahl Digital für Ihre Beratung?
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  Wir sind spezialisiert auf digitale Marketing Lösungen für Dienstleistungsunternehmen 
                  in Wien und Umgebung. Unsere Expertise umfasst alle wichtigen Bereiche des 
                  digitalen Marketings.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900">Lokale Expertise</h3>
                      <p className="text-gray-600">Wir kennen die Wiener Märkte und Zielgruppen bestens</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900">Moderne Technologien</h3>
                      <p className="text-gray-600">AI Search, Web Apps und Marketing Automation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ergebnisorientiert</h3>
                      <p className="text-gray-600">Wir messen Erfolg an konkreten KPIs und ROI</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900">Persönlicher Service</h3>
                      <p className="text-gray-600">Direkter Kontakt und maßgeschneiderte Lösungen</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Kostenlose Erstberatung</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>30-45 Minuten Beratung</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Website-Analyse</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Individuelle Strategie</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Schriftliche Zusammenfassung</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>100% unverbindlich</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                Häufig gestellte Fragen zur Beratung
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqData.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="beratung-formular" className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
                Bereit für Ihre kostenlose Beratung?
              </h2>
              <p className="text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto mb-8">
                Lassen Sie uns gemeinsam Ihre digitale Marketing Strategie entwickeln 
                und den Weg zu mehr Online-Sichtbarkeit und Umsatz finden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+43123456789" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Jetzt anrufen
                </a>
                <a 
                  href="mailto:beratung@stahl-digital.at" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium px-8 py-4 rounded-lg transition-all duration-200"
                >
                  E-Mail senden
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