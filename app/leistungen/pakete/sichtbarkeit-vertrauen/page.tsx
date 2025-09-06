import { Metadata } from "next";
import Footer from "../../../components/footer";

export const metadata: Metadata = {
  title: "Sichtbarkeit & Vertrauen Paket | Stahl Digital - Local SEO & Google Ads Wien",
  description: "Ideal für lokale Dienstleister: Local SEO Setup, Google Ads bis €1.500 Budget, Bewertungsstrategie. €1.490 monatlich oder €14.900 jährlich (2 Monate geschenkt).",
  keywords: "Local SEO Wien, Google Ads Wien, Bewertungsstrategie Wien, lokale Sichtbarkeit Wien, Google Business Optimierung Wien",
};

export default function SichtbarkeitVertrauen() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Paket 1
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Sichtbarkeit & <span className="text-custom-blue">Vertrauen</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Ideal für lokale Dienstleister, die endlich digital durchstarten wollen. 
              Erste Google-Rankings in 3-6 Monaten mit gezielter lokaler Sichtbarkeit.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">€1.490</div>
                  <div className="text-gray-600">monatlich</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-custom-blue mb-2">€14.900</div>
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
                      <h3 className="font-medium text-gray-900 mb-1">Local SEO Setup</h3>
                      <p className="text-gray-600">
                        Vollständige Google Business Optimierung, lokale Keyword-Recherche und technische SEO-Grundlagen für Ihre Region.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">SEO Betreuung (Basic)</h3>
                      <p className="text-gray-600">
                        5 Keywords optimiert, 1 Blogartikel pro Monat, kontinuierliche Performance-Überwachung und Optimierung.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Google Ads Setup & Betreuung</h3>
                      <p className="text-gray-600">
                        Professionelle Kampagnen-Einrichtung bis €1.500 Budget, kontinuierliche Optimierung und Performance-Tracking.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Bewertungsstrategie</h3>
                      <p className="text-gray-600">
                        Manuelles Bewertungsmanagement mit QR-Codes, E-Mail-Vorlagen und systematischem Aufbau positiver Reviews.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Monatliches Reporting</h3>
                      <p className="text-gray-600">
                        Detaillierte Performance-Berichte mit konkreten Empfehlungen für kontinuierliche Verbesserung.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Strategie-Call alle 60 Tage</h3>
                      <p className="text-gray-600">
                        Persönliche Beratung und Strategieanpassung basierend auf aktuellen Ergebnissen und Marktentwicklungen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Basis-Web-Check</h3>
                      <p className="text-gray-600">
                        CRO-Analyse Ihrer bestehenden Website mit konkreten Optimierungsempfehlungen für bessere Conversion.
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
                    <span className="text-gray-700">Lokale Dienstleister</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Neue digitale Präsenz</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Budget-bewusste Unternehmen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Grundlegende Online-Sichtbarkeit</span>
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
                    <span>Erste Google-Rankings in 3-6 Monaten</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Steigerung der lokalen Sichtbarkeit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Gezielte Kundenanfragen über Google Ads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Aufbau positiver Bewertungen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Ihr Weg zur digitalen <span className="text-custom-blue">Sichtbarkeit</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              In 4 Schritten zu Ihrer ersten Online-Präsenz und lokalen Sichtbarkeit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analyse & Setup</h3>
              <p className="text-gray-600 text-sm">
                Vollständige Analyse Ihrer aktuellen Online-Präsenz und Einrichtung aller notwendigen Tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Google Business Optimierung</h3>
              <p className="text-gray-600 text-sm">
                Professionelle Optimierung Ihres Google Business Profiles für maximale lokale Sichtbarkeit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Google Ads Launch</h3>
              <p className="text-gray-600 text-sm">
                Start der Google Ads Kampagnen mit sofortiger Sichtbarkeit und Lead-Generierung.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Kontinuierliche Optimierung</h3>
              <p className="text-gray-600 text-sm">
                Regelmäßige Anpassungen und Optimierungen basierend auf Performance-Daten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-custom-blue">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
            Bereit für Ihre erste digitale Sichtbarkeit?
          </h2>
          <p className="text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto mb-8">
            Starten Sie noch heute mit dem &quot;Sichtbarkeit & Vertrauen&quot; Paket und 
            erzielen Sie erste Google-Rankings in 3-6 Monaten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/leistungen/kostenlose-beratung?paket=sichtbarkeit-vertrauen"
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