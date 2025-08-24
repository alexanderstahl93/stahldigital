import { Metadata } from "next";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Referenzen | Stahl Digital - Erfolgreiche Kundenprojekte in Wien",
  description: "Entdecken Sie unsere erfolgreichen Kundenprojekte: Thales Capital, Stahl & Söhne KG, Stahl & Partner und Umzug-Direkt. Messbare Ergebnisse durch strategisches Digital Marketing.",
  keywords: "Referenzen Wien, Kundenprojekte Wien, SEO Erfolge Wien, Google Ads Referenzen, Digital Marketing Wien",
};

export default function Referenzen() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto mt-12 px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Erfolgreiche <span className="text-custom-blue">Referenzen</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie, wie wir unseren Kunden zu messbaren Erfolgen verholfen haben. 
              Jede Referenz zeigt konkrete Ergebnisse und strategische Digital-Marketing-Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Thales Capital */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-custom-blue rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">TC</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight">Thales Capital</h3>
                    <p className="text-sm text-gray-500">Finanzdienstleistungen</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">SEO-Optimierung</h4>
                      <p className="text-sm text-gray-600">
                        Steigerung der organischen Sichtbarkeit um 180% innerhalb von 8 Monaten.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Google Ads</h4>
                      <p className="text-sm text-gray-600">
                        Conversion-Rate von 4.2% bei 35% niedrigeren Kosten pro Lead.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Ergebnis</h4>
                      <p className="text-sm text-gray-600">
                        250% mehr qualifizierte Anfragen bei 40% höherem durchschnittlichem Auftragswert.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-custom-blue">180%</div>
                      <div className="text-xs text-gray-600">Sichtbarkeit</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-custom-blue">250%</div>
                      <div className="text-xs text-gray-600">Mehr Anfragen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stahl & Söhne KG */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-custom-blue rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">S&S</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight">Stahl & Söhne KG</h3>
                    <p className="text-sm text-gray-500">Handwerk & Dienstleistungen</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Local SEO</h4>
                      <p className="text-sm text-gray-600">
                        Platzierung in den Top 3 für 15 lokale Suchbegriffe innerhalb von 6 Monaten.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Reputationsmanagement</h4>
                      <p className="text-sm text-gray-600">
                        Durchschnittliche Bewertung von 4.8/5 Sternen mit 85 neuen positiven Reviews.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Ergebnis</h4>
                      <p className="text-sm text-gray-600">
                        300% mehr lokale Anfragen und 60% höhere Auftragsannahme-Rate.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-custom-blue">4.8/5</div>
                      <div className="text-xs text-gray-600">Bewertung</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-custom-blue">300%</div>
                      <div className="text-xs text-gray-600">Mehr Anfragen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Durchschnittliche <span className="text-custom-blue">Erfolgsmetriken</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Unsere Kunden erzielen durchschnittlich diese messbaren Ergebnisse 
              durch strategisches Digital Marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-custom-blue mb-2">280%</div>
              <div className="text-sm text-gray-600">Durchschnittliche Sichtbarkeitssteigerung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-custom-blue mb-2">320%</div>
              <div className="text-sm text-gray-600">Mehr qualifizierte Anfragen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-custom-blue mb-2">45%</div>
              <div className="text-sm text-gray-600">Niedrigere Customer Acquisition Costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-custom-blue mb-2">6.2 Monate</div>
              <div className="text-sm text-gray-600">Durchschnittliche Amortisationszeit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Was unsere <span className="text-custom-blue">Kunden sagen</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-custom-orange">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Stahl Digital hat unser Unternehmen komplett transformiert. Die Ergebnisse übertreffen alle Erwartungen - wir haben 250% mehr Anfragen und unsere Markenbekanntheit ist exponentiell gestiegen.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-custom-blue rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Alexander Stahl</div>
                  <div className="text-sm text-gray-500">Geschäftsführer, Thales Capital</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-custom-orange">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Die lokale SEO-Strategie von Stahl Digital hat uns in den Top-Positionen etabliert. Wir erhalten jetzt 300% mehr lokale Anfragen und unsere Kundenbewertungen sind auf 4.8 Sterne gestiegen.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-custom-blue rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">S&S</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Alexander Stahl</div>
                  <div className="text-sm text-gray-500">Geschäftsführer, Stahl & Söhne KG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
            Werden Sie unsere nächste Erfolgsgeschichte
          </h2>
          <p className="text-lg leading-relaxed text-blue-100 max-w-2xl mx-auto mb-8">
            Lassen Sie uns gemeinsam Ihre spezifischen Ziele definieren und 
            eine maßgeschneiderte Strategie für Ihren Erfolg entwickeln.
          </p>
          <a
            href="/leistungen/kostenlose-beratung"
            className="bg-white text-custom-blue font-medium px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
          >
            Kostenlose Erfolgs-Analyse
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
} 