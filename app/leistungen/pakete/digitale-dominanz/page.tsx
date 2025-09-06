import { Metadata } from "next";
import Footer from "../../../components/footer";

export const metadata: Metadata = {
  title: "Digitale Dominanz Paket | Stahl Digital - Vollständige digitale Transformation Wien",
  description: "Für ambitionierte Dienstleister: SEO Full-Service, Google Ads Full Funnel, AI Search Advanced, Web App Development. €4.990 monatlich oder €49.900 jährlich (2 Monate geschenkt).",
  keywords: "Digitale Transformation Wien, SEO Full-Service Wien, Google Ads Full Funnel Wien, AI Search Advanced Wien, Web App Development Wien, Marketing Automation Wien",
};

export default function DigitaleDominanz() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-custom-orange text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Paket 3 - Premium
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-custom-blue">Digitale</span> Dominanz
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Für ambitionierte Dienstleister, die ihre Branche & Region digital dominieren wollen. 
              Vollständige digitale Transformation mit modernster Technologie.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">€4.990</div>
                  <div className="text-gray-600">monatlich</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-custom-blue mb-2">€49.900</div>
                  <div className="text-gray-600">jährlich (2 Monate geschenkt)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                  Was ist im Paket enthalten?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">SEO Full-Service</h3>
                      <p className="text-gray-600">
                        20+ Keywords optimiert, technisches SEO, 4 Content-Stücke pro Monat und umfassende Performance-Analyse.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Google Ads Full Funnel</h3>
                      <p className="text-gray-600">
                        Search, Display, Video, Retargeting - vollständige Funnel-Optimierung für maximale Conversion.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Bewertungsautomatisierung</h3>
                      <p className="text-gray-600">
                        E-Mail/SMS-System mit Bewertungs-Dashboard für vollautomatisierte Kundenbewertungen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">AI Search (Advanced)</h3>
                      <p className="text-gray-600">
                        Integrierte KI-Suche mit semantischen Kundenanfragen (Chat-ähnlich) für maximale Kundeninteraktion.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Web App Development</h3>
                      <p className="text-gray-600">
                        MVP-Level Entwicklung: Lead-Kalkulator, Buchungstool, Bewertungsportal oder ähnliche Tools.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">CRM-Integration & Marketing Automation</h3>
                      <p className="text-gray-600">
                        Vollständige Integration mit HubSpot, Pipedrive, Mailchimp für automatisierte Workflows.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Wettbewerbs-Tracking</h3>
                      <p className="text-gray-600">
                        Umfassendes SEO + Ads Monitoring der Wettbewerber für strategische Vorteile.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Strategieboarding + Slack-Support</h3>
                      <p className="text-gray-600">
                        Persönliche Strategieberatung mit direktem Slack-Support für sofortige Kommunikation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Ideal für:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Ambitiöse Unternehmen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Branchenführer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Technologie-affine Kunden</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Vollständige digitale Transformation</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-custom-blue rounded-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Erwartete Ergebnisse:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Marktführerschaft in der Region</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Automatisierte Lead-Generierung</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Hochwertige Kundenanfragen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Skalierbare Technologie-Infrastruktur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              <span className="text-custom-blue">Premium-Features</span> für digitale Dominanz
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Exklusive Technologien und Services, die Sie zur Marktführerschaft führen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">AI Search Advanced</h3>
              <p className="text-gray-600 text-center">
                Semantische Kundenanfragen mit Chat-ähnlicher Interaktion für maximale Kundenbindung und Lead-Qualifizierung.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Web App Development</h3>
              <p className="text-gray-600 text-center">
                Individuelle Web-Anwendungen wie Lead-Kalkulatoren, Buchungstools oder Bewertungsportale für Ihr Business.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Marketing Automation</h3>
              <p className="text-gray-600 text-center">
                Vollständige CRM-Integration mit HubSpot, Pipedrive, Mailchimp für automatisierte Workflows und Lead-Nurturing.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Wettbewerbs-Tracking</h3>
              <p className="text-gray-600 text-center">
                Umfassendes Monitoring der Wettbewerber in SEO und Google Ads für strategische Vorteile.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Slack-Support</h3>
              <p className="text-gray-600 text-center">
                Direkter Slack-Support mit sofortiger Kommunikation und persönlicher Strategieberatung.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Full Funnel Marketing</h3>
              <p className="text-gray-600 text-center">
                Vollständige Funnel-Optimierung von Awareness bis Conversion mit Search, Display, Video und Retargeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Ihr Weg zur <span className="text-custom-blue">digitalen Dominanz</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              In 6 Schritten zur vollständigen digitalen Transformation und Marktführerschaft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategie & Analyse</h3>
              <p className="text-gray-600 text-sm">
                Umfassende Marktanalyse und Entwicklung einer digitalen Dominanz-Strategie.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">SEO Full-Service</h3>
              <p className="text-gray-600 text-sm">
                Technisches SEO, 20+ Keywords und 4 Content-Stücke pro Monat für maximale Sichtbarkeit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Full Funnel Ads</h3>
              <p className="text-gray-600 text-sm">
                Launch aller Google Ads Kanäle: Search, Display, Video und Retargeting.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Search Advanced</h3>
              <p className="text-gray-600 text-sm">
                Implementierung der semantischen KI-Suche für Chat-ähnliche Kundeninteraktion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Web App Development</h3>
              <p className="text-gray-600 text-sm">
                Entwicklung individueller Web-Anwendungen für Ihr spezifisches Business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">6</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Automation & Skalierung</h3>
              <p className="text-gray-600 text-sm">
                Vollständige Marketing-Automation und kontinuierliche Optimierung für Marktführerschaft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-custom-blue">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
            Bereit für digitale Dominanz?
          </h2>
          <p className="text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto mb-8">
            Starten Sie noch heute mit dem &quot;Digitale Dominanz&quot; Paket und 
            werden Sie zum unangefochtenen Marktführer in Ihrer Branche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/leistungen/kostenlose-beratung?paket=digitale-dominanz"
              className="bg-custom-orange hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Kostenlose Beratung anfordern
            </a>
            <a
              href="/leistungen/pakete"
              className="border-2 border-white text-white hover:bg-white hover:text-custom-blue font-medium px-8 py-4 rounded-lg transition-all duration-200"
            >
              Alle Pakete vergleichen
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 