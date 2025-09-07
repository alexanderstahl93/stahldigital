import { Metadata } from 'next';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'Karriere bei Stahl Digital - Sales Jobs Wien | B2B Marketing Agentur',
  description: 'Werden Sie Teil von Stahl Digital - der führenden Wachstumsagentur für Dienstleistungsbetriebe im DACH-Raum. Offene Positionen: Sales Closer & Setter. Remote-first, leistungsorientiert, transparent.',
  keywords: 'Karriere Stahl Digital, Sales Jobs Wien, B2B Vertrieb Jobs, Marketing Agentur Jobs, Remote Jobs Österreich, Sales Closer, Lead Setter, Digital Marketing Karriere',
  authors: [{ name: 'Stahl Digital' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Karriere bei Stahl Digital - Sales Jobs Wien | B2B Marketing Agentur',
    description: 'Werden Sie Teil von Stahl Digital - der führenden Wachstumsagentur für Dienstleistungsbetriebe im DACH-Raum. Offene Positionen: Sales Closer & Setter.',
    type: 'website',
    url: 'https://stahldigital.com/karriere',
    images: [
      {
        url: 'https://stahldigital.com/og-career.jpg',
        width: 1200,
        height: 630,
        alt: 'Karriere bei Stahl Digital - Sales Jobs Wien'
      }
    ]
  }
};

// Structured Data for AI Search
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stahl Digital",
  "description": "Wachstumsagentur für Dienstleistungsbetriebe im DACH-Raum",
  "url": "https://stahldigital.com",
  "logo": "https://stahldigital.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/stahl-digital"
  ],
  "hasJobPosting": [
    {
      "@type": "JobPosting",
      "title": "Sales Closer (m/w)",
      "description": "Abschluss qualifizierter Deals mit Dienstleistungsbetrieben. Beratungsgespräche auf Augenhöhe führen und Übergabe an Delivery-Team.",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Stahl Digital"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wien",
          "addressCountry": "AT"
        }
      },
      "workHours": "Flexible Arbeitszeiten",
      "remote": true
    },
    {
      "@type": "JobPosting",
      "title": "Sales Setter (m/w)",
      "description": "Generierung und Qualifizierung von Leads. Erstgespräche vereinbaren für unsere Closer mit modernen Tools.",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Stahl Digital"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wien",
          "addressCountry": "AT"
        }
      },
      "workHours": "Flexible Arbeitszeiten",
      "remote": true
    }
  ]
};

export default function KarrierePage() {
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
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Werde Teil von <span className="text-custom-blue">Stahl Digital</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Der Wachstumsagentur für Dienstleistungsbetriebe im DACH-Raum
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto m-4">
                Wir bauen gemeinsam mit unseren Kunden nachhaltiges Wachstum auf. 
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto m-2">
                <strong className="text-custom-blue"> Transparent, ehrlich, datenbasiert.</strong>
                </p>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto m-4">
                Behandle das Unternehmen deiner Kunden wie dein eigenes – und wachse mit uns.
                </p>
              <a
                href="#offene-positionen"
                className="inline-flex items-center px-8 py-4 bg-custom-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover-lift"
              >
                👉 Offene Positionen ansehen
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unsere Mission
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Bei Stahl Digital glauben wir an ehrliche Arbeit, Transparenz und datenbasierte Lösungen. 
                  Wir helfen Dienstleistungsbetrieben in Handwerk, Bau und Services, ihr Wachstum zu skalieren – 
                  effizient, nachhaltig und partnerschaftlich.
                </p>
                <div className="bg-custom-blue/10 rounded-2xl p-8 border-2 border-custom-blue/20">
                  <p className="text-xl md:text-2xl font-semibold text-custom-blue">
                    &ldquo;Wir behandeln das Geschäft unserer Kunden wie unser eigenes.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section id="offene-positionen" className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Offene Positionen
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Werden Sie Teil unseres wachsenden Teams und helfen Sie Dienstleistungsbetrieben beim nachhaltigen Wachstum
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Sales Closer Position */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 hover-lift">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Sales Closer (m/w)</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Senior Level
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Abschluss qualifizierter Deals mit Dienstleistungsbetrieben im DACH-Raum
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Deine Rolle:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Abschluss qualifizierter Deals mit Dienstleistungsbetrieben
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Beratungsgespräche auf Augenhöhe führen (kein Push-Sales)
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Übergabe an Delivery, sowie enge Zusammenarbeit mit Marketing & Customer Success
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Was du mitbringst:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        3–5 Jahre Erfahrung im B2B-Sales oder Agenturumfeld
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Fließend Deutsch (C1+)
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Unternehmerisches Mindset
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Was dich erwartet:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        Überdurchschnittliche Vergütung durch attraktive Provision (5-stellig möglich)
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        Remote-first oder Hybrid in Wien
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        Persönliche Weiterentwicklung & Aufstiegschancen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sales Setter Position */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 hover-lift">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Sales Setter (m/w)</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Entry Level
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Terminvereinbarungen mit Dienstleistungsbetrieben im DACH-Raum
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Deine Rolle:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Terminvereinbarungen mit Dienstleistungsbetrieben
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Erstgespräche vereinbaren für unsere Closer
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-blue mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Arbeit mit modernen Tools (CRM, LinkedIn Sales Navigator)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Was du mitbringst:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Erste Erfahrung im Vertrieb oder Marketing
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Kommunikationsstärke & Disziplin
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-custom-orange mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Fließend Deutsch (C1+)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Was dich erwartet:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        Überdurchschnittliche Vergütung durch attraktive Provision (⌀ 5.000€)
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        Flexible Arbeitszeiten & Remote-first
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        Direkter Einfluss auf unseren Wachstumserfolg
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unsere Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Wir bieten mehr als nur einen Job – wir bieten eine Karriere mit Perspektive
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "💻",
                  title: "Remote-first",
                  description: "Arbeiten von überall, optional Hybrid in Wien"
                },
                {
                  icon: "⏰",
                  title: "Flexible Arbeitszeiten",
                  description: "Wir vertrauen auf Ergebnisse, nicht auf Kontrolle"
                },
                {
                  icon: "📈",
                  title: "Leistungsorientiertes Einkommen",
                  description: "Deine Performance bestimmt dein Gehalt"
                },
                {
                  icon: "🎓",
                  title: "Weiterentwicklung",
                  description: "Zugang zu Trainings, Masterclasses und Mentoring"
                },
                {
                  icon: "🚀",
                  title: "Karriereperspektiven",
                  description: "Werde Teil einer wachsenden Agentur mit Führungsoptionen"
                },
                {
                  icon: "🤝",
                  title: "Teamspirit",
                  description: "Wir wachsen als Team, nicht auf Kosten anderer"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Values Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unsere Kultur & Werte
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bei Stahl Digital leben wir unsere Werte jeden Tag – transparent, ehrlich und datenbasiert
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Transparenz",
                  description: "Ehrliche Kommunikation nach innen & außen",
                  color: "blue"
                },
                {
                  title: "Ownership",
                  description: "Wir behandeln Kundenprojekte wie unsere eigenen",
                  color: "green"
                },
                {
                  title: "Langfristigkeit",
                  description: "Wir setzen auf nachhaltiges Wachstum statt kurzfristiger Hypes",
                  color: "orange"
                },
                {
                  title: "Fairness",
                  description: "Wir geben ehrliches Feedback – auch wenn das ein \"Nein\" bedeutet",
                  color: "purple"
                },
                {
                  title: "Datenbasierte Lösungen",
                  description: "Entscheidungen basieren auf Fakten, nicht auf Bauchgefühl",
                  color: "indigo"
                },
                {
                  title: "Harte Arbeit",
                  description: "Wir setzen auf Disziplin und kontinuierliche Verbesserung",
                  color: "red"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover-lift">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Unique Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Was uns einzigartig macht
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
                Viele Agenturen liefern Kampagnen. Wir liefern echtes Wachstum.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-custom-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-custom-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Spezialisierung auf Dienstleistungsbetriebe</h3>
                    <p className="text-gray-600">Tiefe Branchen-Expertise im DACH-Raum für Handwerk, Bau und Services</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-custom-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-custom-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Datengestützte Entscheidungen</h3>
                    <p className="text-gray-600">Wachstumsgarantie durch Daten, nicht Hypothesen</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Unternehmerische Partnerschaft</h3>
                    <p className="text-gray-600">Wir sind Co-Builder, keine Dienstleister</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-custom-blue/10 to-custom-orange/10 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Warum Stahl Digital?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Wir arbeiten nicht wie typische Agenturen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Langfristige Partnerschaften statt kurzfristiger Projekte</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Messbare Ergebnisse für jeden Kunden</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Transparente Kommunikation und ehrliche Beratung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for AI Search Optimization */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-gray-600">
                Antworten auf die wichtigsten Fragen zu Jobs bei Stahl Digital
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Welche Arbeitszeiten sind bei Stahl Digital üblich?",
                  answer: "Wir bieten flexible Arbeitszeiten und vertrauen auf Ergebnisse statt Kontrolle. Du kannst deine Arbeitszeit selbst gestalten, solange die Ziele erreicht werden. Remote-first bedeutet, dass du von überall arbeiten kannst, mit optionalen Hybrid-Möglichkeiten in Wien."
                },
                {
                  question: "Wie funktioniert die leistungsorientierte Bezahlung?",
                  answer: "Sales Closer erhalten ein Fixum plus attraktive Provisionen basierend auf abgeschlossenen Deals. Sales Setter bekommen ein Fixum plus Bonus pro qualifiziertem Termin und Umsatzbeteiligung. Bei sehr guter Leistung sind 6-stellige Jahresgehälter möglich."
                },
                {
                  question: "Welche Weiterbildungsmöglichkeiten gibt es?",
                  answer: "Wir investieren stark in die persönliche Entwicklung unseres Teams. Du erhältst Zugang zu Trainings, Masterclasses, Mentoring-Programmen und hast klare Aufstiegschancen in Führungspositionen beim Wachstum der Agentur."
                },
                {
                  question: "Wie unterscheidet sich Stahl Digital von anderen Marketing-Agenturen?",
                  answer: "Wir arbeiten nicht wie typische Agenturen, sondern wie Co-Builder unserer Kunden. Wir spezialisieren uns auf Dienstleistungsbetriebe im DACH-Raum, treffen datenbasierte Entscheidungen und bauen langfristige Partnerschaften statt kurzfristiger Kampagnen."
                },
                {
                  question: "Welche Tools und Technologien werden verwendet?",
                  answer: "Wir arbeiten mit modernen CRM-Systemen (HubSpot, GoHighLevel), LinkedIn Sales Navigator, automatisierten E-Mail-Tools und internen Reporting-Dashboards. Alle Tools sind darauf ausgelegt, datenbasierte Entscheidungen zu ermöglichen."
                },
                {
                  question: "Wie läuft der Bewerbungsprozess ab?",
                  answer: "Der Prozess ist bewusst schlank gehalten: 1) Online-Bewerbung über unser Formular oder per E-Mail, 2) Screening-Call (15 Minuten), 3) Fachgespräch mit Team Lead Sales, 4) Cultural-Fit-Interview mit der Geschäftsführung, 5) Angebot & Start bei Stahl Digital."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bewerbungsprozess
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Ein schlanker, transparenter Prozess – von der Bewerbung bis zum Start
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                { step: "1", title: "Online bewerben", description: "Formular oder E-Mail an bewerbung@stahldigital.at" },
                { step: "2", title: "Screening-Call", description: "15 Minuten Kennenlernen" },
                { step: "3", title: "Fachgespräch", description: "Mit Team Lead Sales" },
                { step: "4", title: "Cultural-Fit", description: "Interview mit Geschäftsführung" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-custom-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-custom-blue to-custom-orange rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Gestalte die Zukunft von Stahl Digital mit
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Und hilf Dienstleistungsbetrieben im DACH-Raum beim nachhaltigen Wachstum
              </p>
              <a
                href="mailto:bewerbung@stahldigital.at?subject=Bewerbung%20Stahl%20Digital&body=Hallo%20Stahl%20Digital%20Team,%0D%0A%0D%0Aich%20interessiere%20mich%20für%20eine%20Position%20als%20[Closer/Setter]%20bei%20Stahl%20Digital.%0D%0A%0D%0A[Ihre%20Bewerbungsunterlagen%20hier%20einfügen]%0D%0A%0D%0AMit%20freundlichen%20Grüßen"
                className="inline-flex items-center px-8 py-4 bg-white text-custom-blue font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                👉 Jetzt bewerben
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
