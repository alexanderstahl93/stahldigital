import { Metadata } from "next";
import Footer from "../../../components/footer";

export const metadata: Metadata = {
  title: "Lead-Maschine Paket | Stahl Digital - Lead-Generierung & Conversion-Optimierung Wien",
  description: "Für wachsende Betriebe: Erweiterte SEO, Google Ads bis €5.000 Budget, Conversion-Funnel, AI Search. €2.490 monatlich oder €24.900 jährlich (2 Monate geschenkt).",
  keywords: "Lead-Generierung Wien, Conversion-Optimierung Wien, Google Ads Wien, AI Search Wien, Lead-Dashboard Wien, Marketing Automation Wien",
};

export default function LeadMaschine() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-custom-orange text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Paket 2 - Empfohlen
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-custom-blue">Lead</span>-Maschine
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Für wachsende Betriebe, die gezielt mehr Kundenanfragen erhalten möchten. 
              Signifikante Traffic-Steigerung mit qualifizierter Lead-Generierung.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">€2.490</div>
                  <div className="text-gray-600">monatlich</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-custom-blue mb-2">€24.900</div>
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
                      <h3 className="font-medium text-gray-900 mb-1">Erweiterte SEO Betreuung</h3>
                      <p className="text-gray-600">
                        10 Keywords optimiert, 2 Blogartikel pro Monat, umfassende Wettbewerbsanalyse und technische SEO-Optimierung.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Google Ads Betreuung (bis €5.000 Budget)</h3>
                      <p className="text-gray-600">
                        Umfassende Kampagnen-Verwaltung inklusive Landingpage A/B-Tests für maximale Conversion-Optimierung.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Website & Conversion-Funnel Optimierung</h3>
                      <p className="text-gray-600">
                        Systematische Optimierung Ihrer bestehenden Website und Entwicklung effektiver Conversion-Funnel.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Reputationsmanagement</h3>
                      <p className="text-gray-600">
                        Vollständiges Bewertungsmonitoring mit automatisierten Prozessen und proaktiver Bewertungsverwaltung.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Lead-Dashboard</h3>
                      <p className="text-gray-600">
                        Google Sheets-basiertes KPI-Tracking mit automatisierten Berichten und Lead-Qualifizierung.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Monatliches Performance-Review</h3>
                      <p className="text-gray-600">
                        Detaillierte Analyse aller Marketing-Kanäle mit konkreten Optimierungsempfehlungen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Persönlicher Ansprechpartner</h3>
                      <p className="text-gray-600">
                        Direkter Kontakt über WhatsApp & E-Mail mit schneller Reaktionszeit für alle Fragen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">AI Search (Light)</h3>
                      <p className="text-gray-600">
                        Integrierte KI-Suche für Ihre Website mit FAQ-Trainingsdaten für bessere Kundeninteraktion.
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
                    <span className="text-gray-700">Wachsende Unternehmen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Etablierte lokale Anbieter</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Lead-orientierte Strategien</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Skalierbare Marketing-Lösungen</span>
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
                    <span>Signifikante Traffic-Steigerung</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Qualifizierte Lead-Generierung</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Verbesserte Conversion-Raten</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Automatisierte Bewertungsverwaltung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Feature */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                <span className="text-custom-blue">AI Search</span> für bessere Kundeninteraktion
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Integrieren Sie eine intelligente Suchfunktion in Ihre Website, die Kundenfragen automatisch beantwortet 
                und die Conversion-Rate steigert.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Automatische FAQ-Beantwortung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 Kundenbetreuung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Lead-Qualifizierung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Conversion-Optimierung</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Search Light</h3>
                <p className="text-gray-600 mb-6">
                  Integrierte KI-Suche mit FAQ-Trainingsdaten für automatische Kundenbetreuung und Lead-Generierung.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-custom-blue">Inklusive</div>
                  <div className="text-sm text-gray-600">im Lead-Maschine Paket</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Ihr Weg zur <span className="text-custom-blue">Lead-Maschine</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              In 5 Schritten zu einer vollautomatisierten Lead-Generierungsmaschine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analyse & Setup</h3>
              <p className="text-gray-600 text-sm">
                Umfassende Analyse Ihrer aktuellen Performance und Einrichtung aller Marketing-Tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">SEO & Content</h3>
              <p className="text-gray-600 text-sm">
                Erweiterte SEO-Optimierung mit 10 Keywords und 2 Blogartikeln pro Monat.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Google Ads Launch</h3>
              <p className="text-gray-600 text-sm">
                Start der Google Ads Kampagnen mit bis zu €5.000 Budget und A/B-Tests.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Search Integration</h3>
              <p className="text-gray-600 text-sm">
                Implementierung der KI-Suche für automatische Kundenbetreuung und Lead-Qualifizierung.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimierung & Skalierung</h3>
              <p className="text-gray-600 text-sm">
                Kontinuierliche Optimierung basierend auf Performance-Daten und Lead-Dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-custom-blue">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
            Bereit für Ihre Lead-Maschine?
          </h2>
          <p className="text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto mb-8">
            Starten Sie noch heute mit dem &quot;Lead-Maschine&quot; Paket und 
            generieren Sie qualifizierte Leads mit modernster KI-Technologie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/leistungen/kostenlose-beratung?paket=lead-maschine"
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