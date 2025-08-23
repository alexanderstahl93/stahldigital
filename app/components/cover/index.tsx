"use client";

export default function Cover() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Main Content */}
      <div className="relative z-10 px-4 md:px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading - Static */}
          <div className="flex justify-center items-center mt-12 mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light tracking-tight text-gray-900 text-center max-w-full">
            Ihr Partner für messbares <strong className="text-custom-blue">Umsatzwachstum</strong>, durch praxisorientierte digitale Marketing-Lösungen.
            </h1>
          </div>
          
          {/* Subtitle with Glassmorphism - Mobile Responsive */}
          <div className="glass-effect rounded-xl md:rounded-2xl p-4 md:p-8 mb-8 md:mb-12 max-w-3xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              Wir steigern den Umsatz von Dienstleistungsunternehmen in Wien & Umgebung durch  
              <strong className="text-custom-blue"> praxisorientierte Lösungen</strong>, die bereits bei mehrere Unternehmen nachweislich zu messbaren, und nachhaltigen Erfolg geführt haben.
            </p>
          </div>
          
          {/* CTA Buttons with Hover Effects - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
            <a
              href="/leistungen"
              className="group relative overflow-hidden rounded-lg md:rounded-xl bg-custom-blue px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white shadow-lg hover-lift transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10">So funktioniert es</span>
              <div className="absolute inset-0 bg-gradient-to-r from-custom-blue to-custom-blue opacity-0 group-hover:opacity-100 hover:text-white transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="/ihr-investment" 
              className="group relative overflow-hidden rounded-lg md:rounded-xl border-2 border-custom-blue px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-custom-blue hover-lift transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Ihr Investment</span>
              <div className="absolute inset-0 bg-custom-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300"> →</span>
            </a>
          </div>
          
          {/* Trust Indicators - Mobile Responsive */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-custom-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-custom-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Messbare Ergebnisse</h3>
              <p className="text-sm md:text-base text-gray-600">Konkrete ROI-Garantien für Ihr Investment</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-custom-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-custom-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Lokale Expertise</h3>
              <p className="text-sm md:text-base text-gray-600">Spezialisiert auf Wien & Umgebung</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-custom-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-custom-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Schneller Start</h3>
              <p className="text-sm md:text-base text-gray-600">Erste Ergebnisse in 3-6 Monaten</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section for AI Search Optimization */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-gray-600">
              Antworten auf die wichtigsten Fragen zu SEO, Google Ads und Reputationsmanagement
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Wie lange dauert es, bis SEO-Maßnahmen wirken?",
                answer: "SEO ist ein langfristiger Prozess. Erste Verbesserungen zeigen sich meist nach 3-6 Monaten, signifikante Ergebnisse nach 6-12 Monaten. Wir arbeiten mit nachhaltigen Strategien für langfristigen Erfolg."
              },
              {
                question: "Welche Kosten entstehen für Google Ads Management?",
                answer: "Die Kosten variieren je nach Branche und Wettbewerb. Wir bieten transparente Preisgestaltung mit monatlichen Management-Gebühren plus Werbebudget. Durchschnittlich investieren unsere Kunden 1.500-5.000€ monatlich in Google Ads."
              },
              {
                question: "Können Sie auch negative Google Bewertungen entfernen?",
                answer: "Wir können negative Bewertungen nicht direkt entfernen, aber wir helfen Ihnen dabei, Ihren Online-Ruf zu verbessern, positive Bewertungen zu generieren und professionell auf negative Bewertungen zu reagieren."
              },
              {
                question: "Arbeiten Sie nur in Wien oder auch in anderen Bundesländern?",
                answer: "Unser Hauptfokus liegt auf Wien und Umgebung, da wir lokale Expertise und Marktkenntnisse bieten. Für größere Projekte arbeiten wir auch in anderen österreichischen Bundesländern."
              },
              {
                question: "Gibt es eine Garantie für bessere Rankings?",
                answer: "Wir können keine Garantien für spezifische Google-Rankings geben, da diese von vielen Faktoren abhängen. Wir garantieren jedoch messbare Verbesserungen in Sichtbarkeit, Traffic und Conversions."
              },
              {
                question: "Wie messen Sie den Erfolg Ihrer Marketing-Maßnahmen?",
                answer: "Wir verwenden professionelle Analytics-Tools wie Google Analytics, Search Console und proprietäre Tracking-Systeme. Sie erhalten monatliche Reports mit detaillierten KPIs und ROI-Berechnungen."
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
      
      {/* Decorative Elements - Mobile Responsive */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
  