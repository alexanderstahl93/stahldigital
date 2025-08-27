import { Metadata } from "next";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Ihr Investment | Stahl Digital - Strategische Digital-Marketing-Investitionen",
  description: "Entdecken Sie die präzisen Investment-Vorteile für Ihr Unternehmen: Neue Unternehmen, junge Unternehmen und Bestandsunternehmen profitieren von unseren strategischen Digital-Marketing-Lösungen.",
  keywords: "Digital Marketing Investment, SEO Investment Wien, Google Ads ROI, Marketing Budget Wien, Unternehmenswachstum Wien",
};

export default function IhrInvestment() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto mt-12 px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ihr strategisches <span className="text-custom-blue">Investment</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Präzise Digital-Marketing-Strategien für messbare Umsatzsteigerungen. 
              Jede Investition wird durch datenbasierte Optimierung und strategische Expertise maximiert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#investment" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Investment entdecken
              </a>
              <a 
                href="/leistungen" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Categories */}
      <section id="investment" className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Strategische Vorteile nach Unternehmensphase
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Unsere Expertise wird auf Ihre spezifische Unternehmensphase abgestimmt, 
              um maximale ROI-Effizienz zu gewährleisten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Neue Unternehmen */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">
                  Neue Unternehmen
                </h3>
                <p className="text-sm text-gray-500">0-12 Monate am Markt</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Marktpositionierung</h4>
                    <p className="text-sm text-gray-600">
                      Strategische Platzierung in der digitalen Landschaft mit 85% höherer Sichtbarkeit innerhalb der ersten 6 Monate.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Kundenakquise</h4>
                    <p className="text-sm text-gray-600">
                      Durchschnittlich 200% mehr qualifizierte Leads im Vergleich zu traditionellen Marketing-Methoden.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Wachstumsbeschleunigung</h4>
                    <p className="text-sm text-gray-600">
                      Umsatzsteigerung von durchschnittlich 150% im ersten Jahr durch präzise Zielgruppenansprache.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Unternehmen jünger als 5 Jahre */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">
                  Wachsende Unternehmen
                </h3>
                <p className="text-sm text-gray-500">1-5 Jahre am Markt</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Marktanteil-Expansion</h4>
                    <p className="text-sm text-gray-600">
                      Durchschnittliche Marktanteilssteigerung von 40% durch optimierte Conversion-Raten und erweiterte Reichweite.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Kundenbindung</h4>
                    <p className="text-sm text-gray-600">
                      65% höhere Kundenbindungsrate durch personalisierte Marketing-Strategien und Reputationsmanagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Skalierungseffizienz</h4>
                    <p className="text-sm text-gray-600">
                      Umsatzwachstum von 120% bei gleichzeitiger Reduzierung der Customer Acquisition Costs um 30%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bestandsunternehmen */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">
                  Bestandsunternehmen
                </h3>
                <p className="text-sm text-gray-500">5+ Jahre am Markt</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Marktdominanz</h4>
                    <p className="text-sm text-gray-600">
                      Konsolidierung der Marktposition mit 50% höherer Markenbekanntheit und 75% gesteigerter Autorität.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Wettbewerbsvorteile</h4>
                    <p className="text-sm text-gray-600">
                      Durchschnittlich 90% höhere Conversion-Raten im Vergleich zu Wettbewerbern durch präzise Optimierung.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Nachhaltiges Wachstum</h4>
                    <p className="text-sm text-gray-600">
                      Kontinuierliche Umsatzsteigerung von 25-40% jährlich durch datenbasierte Strategieoptimierung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Messbare <span className="text-custom-blue">ROI-Garantie</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Jede Investition wird durch präzise Datenanalyse und strategische Optimierung maximiert. 
                Unsere Kunden erzielen durchschnittlich 300% ROI innerhalb der ersten 12 Monate.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-custom-blue mb-2">300%</div>
                  <div className="text-sm text-gray-600">Durchschnittlicher ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-custom-blue mb-2">6 Monate</div>
                  <div className="text-sm text-gray-600">Bis zur Amortisation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-custom-blue mb-2">85%</div>
                  <div className="text-sm text-gray-600">Kundenbindungsrate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-custom-blue mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Performance-Monitoring</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Ihre Investment-Vorteile</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Transparente Performance-Berichte</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Strategische Beratung inklusive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Kontinuierliche Optimierung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Dedizierter Erfolgsmanager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Skalierbare Lösungen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-custom-blue">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
            Bereit für Ihr strategisches Investment?
          </h2>
          <p className="text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto mb-8">
            Lassen Sie uns gemeinsam Ihre spezifischen Wachstumsziele definieren und 
            eine maßgeschneiderte Investment-Strategie entwickeln.
          </p>
          <a
            href="/leistungen/kostenlose-beratung"
            className="bg-custom-orange hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
          >
            Kostenlose Strategie-Beratung
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
} 