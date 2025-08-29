import React from "react";
import Footer from "../../components/footer";

export default function BranchePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              🎯 BRANCHENSPEZIALISIERUNG
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Branchenspezifisches Marketing & SEO
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue mb-6">
              Maßgeschneiderte Lösungen für verschiedene Branchen
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Wir verstehen die einzigartigen Herausforderungen und Chancen verschiedener Branchen. 
              Von Umzugsunternehmen bis zu anderen Branchen - wir entwickeln maßgeschneiderte Marketing-Strategien, 
              die speziell auf Ihre Branche zugeschnitten sind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#branchen"
                className="bg-gradient-to-r from-custom-blue to-custom-orange hover:from-blue-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                🚀 Branchen entdecken
              </a>
              <a
                href="#beratung"
                className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Kostenlose Beratung
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry Specialization */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🎯 Warum Branchenspezialisierung?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Jede Branche hat ihre eigenen Herausforderungen, Zielgruppen und Marketing-Strategien. 
              Wir verstehen diese Unterschiede und entwickeln Lösungen, die wirklich funktionieren.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-custom-blue">
                Der Vorteil der Branchenspezialisierung
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Anstatt generische Marketing-Strategien anzuwenden, entwickeln wir Lösungen, 
                die speziell auf die Bedürfnisse Ihrer Branche zugeschnitten sind.
              </p>
              <div className="bg-blue-50 border-l-4 border-custom-blue p-4 rounded">
                <p className="text-blue-700 font-medium">
                  💡 <strong>Fakt:</strong> Branchenspezialisierte Marketing-Strategien führen zu 3x höheren Conversion-Raten
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 border border-blue-200">
              <h4 className="text-xl font-semibold mb-4 text-custom-blue">Unsere Branchenexpertise:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Tiefes Verständnis der Branchendynamik
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Branchenspezifische Keyword-Strategien
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Angepasste Content-Strategien
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Branchenrelevante Conversion-Optimierung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Industries */}
      <section id="branchen" className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🏢 Unsere aktuellen Branchenspezialisierungen
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie unsere spezialisierten Marketing-Lösungen für verschiedene Branchen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Umzug Industry */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-custom-blue hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-custom-blue text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🏠
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Umzugsbranche</h3>
                <p className="text-custom-blue font-semibold">Aktiv verfügbar</p>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                Spezialisiert auf Umzugsunternehmen, da wir selbst in der Branche tätig sind.
                Wir geben bewährte Methoden zur Umsatzsteigerung und Kundenakquise weiter.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Bessere Sichtbarkeit für die gewünschte Zielgruppe
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Nachhaltiges Kundenmanagement für CLV-Steigerung
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Business Intelligence für bessere Entscheidungsfindung
                </div>
              </div>
              <a
                href="/leistungen/branche/umzug"
                className="w-full bg-custom-blue hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
              >
                Mehr erfahren →
              </a>
            </div>

            {/* Future Industry Placeholder 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-gray-300 opacity-75">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🏥
                </div>
                <h3 className="text-2xl font-bold text-gray-500 mb-2">Gesundheitsbranche</h3>
                <p className="text-gray-500 font-semibold">In Planung</p>
              </div>
              <p className="text-gray-500 mb-6 text-center">
                Marketing-Lösungen für Ärzte, Zahnärzte, Physiotherapeuten und andere Gesundheitsdienstleister.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-gray-400 mr-2">⏳</span>
                  Ärzte Marketing
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-gray-400 mr-2">⏳</span>
                  Gesundheits SEO
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-gray-400 mr-2">⏳</span>
                  Patientenakquise
                </div>
              </div>
              <button className="w-full bg-gray-300 text-gray-500 font-semibold py-3 px-4 rounded-lg cursor-not-allowed text-center block">
                Bald verfügbar
              </button>
            </div>

            {/* Future Industry Placeholder 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-gray-300 opacity-75">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🏗️
                </div>
                <h3 className="text-2xl font-bold text-gray-500 mb-2">Bauwesen</h3>
                <p className="text-gray-500 font-semibold">In Planung</p>
              </div>
              <p className="text-gray-500 mb-6 text-center">
                Marketing-Strategien für Bauunternehmen, Handwerker und Bauservice-Anbieter.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-gray-400 mr-2">⏳</span>
                  Bauunternehmen Marketing
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-gray-400 mr-2">⏳</span>
                  Handwerker SEO
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-gray-400 mr-2">⏳</span>
                  Projektakquise
                </div>
              </div>
              <button className="w-full bg-gray-300 text-gray-500 font-semibold py-3 px-4 rounded-lg cursor-not-allowed text-center block">
                Bald verfügbar
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🔬 Unser Ansatz der Branchenspezialisierung
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Wie wir uns in neue Branchen einarbeiten und maßgeschneiderte Lösungen entwickeln.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-custom-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Branchenanalyse</h3>
              <p className="text-gray-600">
                Tiefgehende Analyse der Branche, Herausforderungen und Zielgruppen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-custom-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategieentwicklung</h3>
              <p className="text-gray-600">
                Entwicklung branchenspezifischer Marketing-Strategien.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Umsetzung</h3>
              <p className="text-gray-600">
                Professionelle Umsetzung mit branchenspezifischen Optimierungen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimierung</h3>
              <p className="text-gray-600">
                Kontinuierliche Optimierung basierend auf Branchenkenntnissen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🔥 Ihre Vorteile der Branchenspezialisierung
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Warum branchenspezifisches Marketing den Unterschied macht.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-custom-blue">
              <h3 className="text-xl font-semibold mb-4 text-custom-blue">Was Sie erreichen:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Höhere Conversion-Raten durch branchenspezifische Strategien
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Bessere Zielgruppenansprache und Kundenqualität
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Reduzierte Marketing-Kosten durch präzisere Ausrichtung
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Schnellere Ergebnisse durch bewährte Branchenstrategien
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Wettbewerbsvorteil durch spezialisierte Expertise
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-custom-orange">
              <h3 className="text-xl font-semibold mb-4 text-custom-orange">Warum wir anders sind:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">🎯</span>
                  Tiefes Verständnis verschiedener Branchen
                </li>
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">🏠</span>
                  Lokale Expertise für Wien und Umgebung
                </li>
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">📊</span>
                  Datenbasierte Strategien mit messbaren Ergebnissen
                </li>
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">🤝</span>
                  Persönliche Betreuung und laufender Support
                </li>
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">💡</span>
                  Innovative Ansätze für verschiedene Branchen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ❓ Häufig gestellte Fragen
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Welche Branchen planen Sie als nächstes?
              </h3>
              <p className="text-gray-600">
                Wir planen die Expansion in die Gesundheitsbranche, das Bauwesen, die Automobilbranche, 
                Gastronomie und Beratungsbranche. Die Reihenfolge richtet sich nach der Nachfrage und 
                unserem internen Entwicklungsplan.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Kann ich eine Branche vorschlagen?
              </h3>
              <p className="text-gray-600">
                Ja, wir freuen uns über Branchenvorschläge! Wenn Sie in einer Branche tätig sind, 
                die wir noch nicht abdecken, können Sie uns gerne kontaktieren. Wir prüfen dann, 
                ob eine Spezialisierung sinnvoll ist.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Gibt es Unterschiede in den Preisen zwischen den Branchen?
              </h3>
              <p className="text-gray-600">
                Die Grundpreise sind ähnlich, aber es können branchenspezifische Anpassungen geben, 
                je nach Komplexität und Anforderungen der jeweiligen Branche.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Wie lange dauert es, bis Sie sich in eine neue Branche eingearbeitet haben?
              </h3>
              <p className="text-gray-600">
                Typischerweise dauert es 4-8 Wochen, bis wir uns vollständig in eine neue Branche 
                eingearbeitet haben. Dies beinhaltet Marktanalyse, Wettbewerbsanalyse und 
                Strategieentwicklung.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
