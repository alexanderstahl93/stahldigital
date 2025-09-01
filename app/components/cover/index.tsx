"use client";

import Image from "next/image";

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



      {/* Der Unterschied - Warum wir anders sind */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Warum wir anders sind
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Der Unterschied zwischen leeren Versprechungen und echten Ergebnissen. 
              Wir haben es selbst erlebt - und machen es jetzt besser.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Andere Agenturen */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 md:p-10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-700">Andere Agenturen</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">Komplexe Fachsprache</h4>
                    <p className="text-red-600 text-sm">Du verstehst nicht, was sie machen</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">Keine Praxiserfahrung</h4>
                    <p className="text-red-600 text-sm">Keine Ahnung von der Materie, nur theoretische Kenntnisse über Marketingabläufe.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">Versteckte Kosten</h4>
                    <p className="text-red-600 text-sm">Setup-Gebühren, versteckte Zusatzkosten</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">Keine messbaren Ergebnisse</h4>
                    <p className="text-red-600 text-sm">Schöne Reports, aber keine echten Erfolge</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">Standard-Lösungen</h4>
                    <p className="text-red-600 text-sm">Das gleiche für jeden - ohne Rücksicht auf dein Business</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">Lange Vertragslaufzeiten</h4>
                    <p className="text-red-600 text-sm">12-24 Monate gebunden, auch wenn es nicht funktioniert</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stahl Digital */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 md:p-10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-700">Stahl Digital</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-1">Klare, verständliche Sprache</h4>
                    <p className="text-green-600 text-sm">Du verstehst immer, was wir machen</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-1">Echte Praxiserfahrung</h4>
                    <p className="text-green-600 text-sm">Alexander hat selber ein eigenes <a href="www.stahlundsoehne.at" className="text-green-600 underline">Dienstleistungsunternehmen</a> aufgebaut.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-1">100% transparente Preise</h4>
                    <p className="text-green-600 text-sm">Keine versteckten Kosten, keine Überraschungen</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-1">Messbare Erfolge garantiert</h4>
                    <p className="text-green-600 text-sm">Konkrete KPIs und nachweisbare Ergebnisse</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-1">Maßgeschneiderte Strategien</h4>
                    <p className="text-green-600 text-sm">Jede Lösung ist auf dein Business zugeschnitten</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-1">Monatlich kündbar</h4>
                    <p className="text-green-600 text-sm">Keine langen Verträge, volle Flexibilität</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Der Gründer - Alexander Stahl persönlich */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lerne Alexander kennen
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Der Mann hinter Stahl Digital - ein Unternehmer, der deine Frustration versteht, 
              weil er sie selbst erlebt hat.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Alexander's Foto */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto lg:mx-0 overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/alexanderstahl.png"
                    alt="Alexander Stahl - Stahl Digital"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-custom-orange rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Alexander's Story */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Alexander Stahl
                </h3>
                <h4 className="text-xl md:text-2xl text-custom-blue font-semibold mb-6">
                  Gründer & Unternehmer
                </h4>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h5 className="font-semibold text-gray-900 mb-3">Seine Geschichte</h5>
                  <p className="text-gray-700 leading-relaxed">
                    &ldquo;Ich habe selbst Tausende Euro in Marketing-Agenturen verbrannt - ohne Ergebnisse. 
                    Das war der Moment, als ich beschloss: Es muss anders gehen. 
                    Heute helfe ich anderen Unternehmern, den Weg zu gehen, den ich mir damals gewünscht hätte.&rdquo;
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-custom-blue mb-2">10+</div>
                    <div className="text-sm text-gray-600">Jahre Unternehmererfahrung</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-custom-orange mb-2">100%</div>
                    <div className="text-sm text-gray-600">Praxisorientiert</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-custom-blue to-custom-orange rounded-xl p-6 text-white">
                  <h5 className="font-semibold mb-3">Seine Credentials</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Umzugsfirma erfolgreich aufgebaut</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Marketing-Frust selbst erlebt</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lösungen entwickelt, die funktionieren</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <a 
                  href="/team" 
                  className="inline-flex items-center px-6 py-3 bg-custom-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                >
                  Mehr über das Team erfahren
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Der Vergleich - Was kostet es wirklich? */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Was investierst du wirklich?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transparenz bei den Kosten - keine versteckten Gebühren, 
              keine Überraschungen. Du weißt immer, was du investierst.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Andere Agenturen */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Andere Agenturen</h3>
                <p className="text-red-600 font-medium">Versteckte Kosten & Überraschungen</p>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Setup-Gebühren</span>
                    <span className="text-2xl font-bold text-red-600">€2.000-5.000</span>
                  </div>
                  <p className="text-sm text-gray-500">Einmalige Kosten vor dem Start</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Monatliche Kosten</span>
                    <span className="text-2xl font-bold text-red-600">€1.500-3.000</span>
                  </div>
                  <p className="text-sm text-gray-500">Management & Wartung</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Vertragslaufzeit</span>
                    <span className="text-2xl font-bold text-red-600">12-24 Monate</span>
                  </div>
                  <p className="text-sm text-gray-500">Gebunden, auch wenn es nicht funktioniert</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Zusatzkosten</span>
                    <span className="text-2xl font-bold text-red-600">€500-1.500</span>
                  </div>
                  <p className="text-sm text-gray-500">Pro Monat für &ldquo;zusätzliche&rdquo; Services</p>
                </div>
                
                <div className="pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">€20.000-60.000</div>
                    <div className="text-sm text-gray-500">Gesamtkosten im ersten Jahr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stahl Digital */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-custom-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-custom-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Empfohlen
                </div>
              </div>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-custom-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Stahl Digital</h3>
                <p className="text-custom-blue font-medium">100% transparent & fair</p>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Setup-Gebühren</span>
                    <span className="text-2xl font-bold text-green-600">€0</span>
                  </div>
                  <p className="text-sm text-gray-500">Keine versteckten Kosten</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Monatliche Investition</span>
                    <span className="text-2xl font-bold text-custom-blue">€997</span>
                  </div>
                  <p className="text-sm text-gray-500">Alles inklusive, keine Zusatzkosten</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Vertragslaufzeit</span>
                    <span className="text-2xl font-bold text-green-600">Ohne Bindung</span>
                  </div>
                  <p className="text-sm text-gray-500">Kündbar, volle Flexibilität</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Zusatzkosten</span>
                    <span className="text-2xl font-bold text-green-600">€0</span>
                  </div>
                  <p className="text-sm text-gray-500">Alles im Preis inklusive</p>
                </div>
                
                <div className="pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-custom-blue mb-2">€11.964</div>
                    <div className="text-sm text-gray-500">Gesamtinvestition im ersten Jahr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-custom-blue to-custom-orange rounded-2xl p-8 md:p-10 text-white shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Das spart dir im ersten Jahr
              </h3>
              <div className="text-4xl md:text-5xl font-bold mb-6">€8.000 - €48.000</div>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Und das bei besserem Service, messbaren Ergebnissen und voller Transparenz. 
                Keine versteckten Kosten, keine Überraschungen.
              </p>
              <a 
                href="/ihr-investment" 
                className="inline-flex items-center px-8 py-4 bg-white text-custom-blue font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Investment-Details ansehen
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
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
  