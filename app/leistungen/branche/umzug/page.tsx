import React from "react";
import Footer from "../../../components/footer";

export default function UmzugPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏠 SPEZIALISIERT AUF UMZUGSUNTERNEHMEN
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Business Development & Marketing
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue mb-6">
              Mehr Kunden, und nachhaltige Prozessoptimierung für Ihr Umzugsunternehmen.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Wir helfen Umzugsunternehmen dabei, online sichtbar zu werden, qualifizierte Leads zu generieren und den Umsatz nachhaltig zu steigern. 
              Als Inhaber eines Umzugsunternehmens, verstehen wir die Herausforderungen der Branche und geben bewährte Methoden weiter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#beratung"
                className="bg-gradient-to-r from-custom-blue to-custom-orange hover:from-blue-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                Beratung anfordern
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ❌ Das Problem der Umzugsbranche
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Umzugsunternehmen kämpfen mit <strong>geringer Online-Sichtbarkeit</strong>, 
              <strong>hohen Werbekosten</strong> und <strong>schwieriger Kundenakquise</strong>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-red-600">
                Warum Umzugsunternehmen online unsichtbar sind
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Die meisten Umzugsunternehmen haben keine professionelle Online-Präsenz. 
                Sie verlieren potenzielle Kunden an Konkurrenten, die bereits online sichtbar sind.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-700 font-medium">
                  💡 <strong>Fakt:</strong> 87% der Kunden suchen online nach Umzugsunternehmen, bevor sie sich entscheiden
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
              <h4 className="text-xl font-semibold mb-4 text-red-600">Häufige Probleme:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Keine Google-Sichtbarkeit für Umzug-Suchanfragen
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Hohe Kosten für Google Ads ohne ROI
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Fehlende Online-Bewertungen und Referenzen
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Keine systematische Lead-Generierung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="loesung" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ✅ Unsere Lösung für Umzugsunternehmen
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Unsere Lösung kommt aus der Praxis. Wir haben selbst Erfahrung in der Umzugsbranche und wissen, wie es geht.
              Wir geben bewährte Methoden weiter und helfen Ihnen, Ihr Unternehmen nachhaltig zu steigern.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 border border-blue-200">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Sichtbarkeit</h3>
              <p className="text-gray-600">
                Wir verbessern Ihre Sichtbarkeit, und sorgen dafür, dass Sie dort gesehen werden, wo Sie gebraucht werden.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6 border border-green-200">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Werbeschaltung</h3>
              <p className="text-gray-600">
                Wir schalten Werbung so, dass Sie Sinn macht, und Ihnen den meisten Nutzen bringt.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg p-6 border border-orange-200">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Kundenmanagement</h3>
              <p className="text-gray-600">
                Wir optimieren die Kommunikationsprozesse mit Ihren Kunden, und sorgen dafür, dass Kunden langfristig wiederkehren, und weitere Kunden empfehlen.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6 border border-purple-200">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
              <p className="text-gray-600">
                Optimierung für lokale Suchanfragen und Google My Business für Umzugsunternehmen.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-lg p-6 border border-red-200">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
              <p className="text-gray-600">
                Systematische Generierung qualifizierter Leads für Ihr Umzugsunternehmen.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg p-6 border border-teal-200">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-3">Content Marketing</h3>
              <p className="text-gray-600">
                Professionelle Inhalte, die Ihr Umzugsunternehmen als Experten positionieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="zielgruppe" className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🎯 Für welche Umzugsunternehmen sind wir da?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Wir helfen Umzugsunternehmen aller Größen, die ihre Online-Präsenz verbessern und mehr Kunden gewinnen möchten.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-custom-blue text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                🏢
              </div>
              <h3 className="text-xl font-semibold mb-3">Kleine Umzugsunternehmen</h3>
              <p className="text-gray-600">
                Familienbetriebe, die online sichtbar werden und mit größeren Konkurrenten mithalten möchten.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-custom-orange text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                📈
              </div>
              <h3 className="text-xl font-semibold mb-3">Wachsende Unternehmen</h3>
              <p className="text-gray-600">
                Umzugsunternehmen, die expandieren und systematisch neue Kunden gewinnen möchten.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-3">Spezialisierte Anbieter</h3>
              <p className="text-gray-600">
                Umzugsunternehmen mit besonderen Dienstleistungen, die diese online vermarkten möchten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="prozess" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🔄 Unser Prozess für Umzugsunternehmen
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Ein strukturierter Ansatz, der Ihr Umzugsunternehmen Schritt für Schritt online erfolgreich macht.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-custom-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyse</h3>
              <p className="text-gray-600">
                Detaillierte Analyse Ihrer aktuellen Online-Präsenz und der lokalen Umzugsbranche.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-custom-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategie</h3>
              <p className="text-gray-600">
                Entwicklung einer maßgeschneiderten Marketing-Strategie für Ihr Umzugsunternehmen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Umsetzung</h3>
              <p className="text-gray-600">
                Professionelle Umsetzung aller Marketing-Maßnahmen mit laufender Optimierung.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimierung</h3>
              <p className="text-gray-600">
                Kontinuierliche Analyse und Optimierung für maximale Ergebnisse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="vorteile" className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🔥 Ihre Vorteile mit Stahl Digital
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Warum Umzugsunternehmen mit uns erfolgreich werden.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-custom-blue">
              <h3 className="text-xl font-semibold mb-4 text-custom-blue">Was Sie erreichen:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Höhere Google-Rankings für Umzug-Suchanfragen
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Mehr qualifizierte Leads für Ihr Umzugsunternehmen
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Reduzierte Werbekosten bei höheren Conversion-Raten
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Professionelle Online-Präsenz, die Vertrauen schafft
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Messbare Ergebnisse und transparente Berichterstattung
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-custom-orange">
              <h3 className="text-xl font-semibold mb-4 text-custom-orange">Warum wir anders sind:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">🎯</span>
                  Spezialisiert auf die Umzugsbranche
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
                  Innovative Ansätze für die Umzugsbranche
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ❓ Häufig gestellte Fragen
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Wie lange dauert es, bis ich erste Ergebnisse sehe?
              </h3>
              <p className="text-gray-600">
                SEO-Ergebnisse zeigen sich typischerweise in 3-6 Monaten. Google Ads können bereits in der ersten Woche zu Leads führen. 
                Wir liefern Ihnen laufend detaillierte Berichte über den Fortschritt.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Welche Kosten fallen für das Umzug Marketing an?
              </h3>
              <p className="text-gray-600">
                Wir bieten verschiedene Pakete an, die auf Ihre Bedürfnisse zugeschnitten sind. 
                Die Kosten variieren je nach Umfang der Dienstleistungen. Vereinbaren Sie ein kostenloses Beratungsgespräch für ein individuelles Angebot.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Arbeiten Sie nur mit Umzugsunternehmen in Wien?
              </h3>
              <p className="text-gray-600">
                Unser Fokus liegt auf Wien und Umgebung, da wir die lokale Umzugsbranche sehr gut kennen. 
                Für Umzugsunternehmen in anderen österreichischen Städten können wir individuelle Lösungen entwickeln.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Kann ich meine bestehende Website behalten?
              </h3>
              <p className="text-gray-600">
                Ja, in den meisten Fällen können wir Ihre bestehende Website optimieren. 
                Falls eine neue Website sinnvoller ist, beraten wir Sie gerne über die beste Lösung für Ihr Umzugsunternehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="beratung" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-custom-blue to-custom-orange">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            🚀 Starten Sie jetzt mit Ihrem Umzug Marketing
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Umzugsunternehmen online erfolgreich machen. 
            Kostenlose Erstberatung ohne Verpflichtung.
          </p>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Was Sie von der Beratung erwarten können:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-center mb-6">
              <div>
                <div className="text-2xl font-bold text-custom-blue">📊</div>
                <div className="text-sm text-gray-600">Analyse</div>
                <div className="font-semibold">Ihrer aktuellen Situation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-custom-blue">🎯</div>
                <div className="text-sm text-gray-600">Strategie</div>
                <div className="font-semibold">Für Ihr Umzugsunternehmen</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a
                href="/leistungen/kostenlose-beratung"
                className="w-full bg-gradient-to-r from-custom-blue to-custom-orange hover:from-blue-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105 block text-center"
              >
                🚀 Kostenlose Beratung vereinbaren
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Keine versteckten Kosten • Keine Verpflichtung • Direkt nach der Beratung verfügbar
            </p>
          </div>
          
          <div className="text-white opacity-90">
            <p className="text-lg mb-4">
              💡 <strong>Bonus:</strong> Alle Teilnehmer der Beratung erhalten exklusiven Zugang zu unseren Umzug Marketing-Ressourcen!
            </p>
            <p className="text-sm">
              Spezialisiert auf die Umzugsbranche • Lokale Expertise für Wien • Messbare Ergebnisse
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
