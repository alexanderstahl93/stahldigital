"use client"

import Image from "next/image";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgvogpl";

export default function WebinarPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error((data && data.error) || "Fehler beim Senden der Anfrage.");
      }

      // Redirect to success page
      router.push("/anmeldung-erfolgreich");
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.";
      setErrorMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
             LIVE-WEBINAR - LIMITIERTE PLÄTZE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Google war gestern
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue mb-6">
              Die Zukunft entscheidet sich in ChatGPT & Co.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Wenn dein Business heute nicht in den Antworten von KI auftaucht, existierst du morgen für deine Kunden nicht mehr.
            </p>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-custom-blue">📅</div>
                  <div className="text-sm text-gray-600">Datum</div>
                  <div className="font-semibold">06.09.2025</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-custom-blue">⏰</div>
                  <div className="text-sm text-gray-600">Uhrzeit</div>
                  <div className="font-semibold">14:00 Uhr</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-custom-blue">🎟️</div>
                  <div className="text-sm text-gray-600">Kosten</div>
                  <div className="font-semibold text-green-600">Kostenlos</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#anmeldung"
                className="bg-gradient-to-r from-custom-blue to-custom-orange hover:from-blue-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                🚀 Jetzt anmelden
              </a>
              <a
                href="#details"
                className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="details" className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ❌ Das Problem
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Immer mehr Menschen suchen Antworten direkt in <strong>ChatGPT, Gemini, Copilot & Co.</strong> – und genau dort entscheiden LLMs, <strong>welche Marken sie nennen</strong> … und welche unsichtbar bleiben.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-red-600">
                Wenn ChatGPT dich nicht kennt, bist du unsichtbar!
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Deine Kunden fragen nicht mehr Google, sondern direkt ChatGPT nach Lösungen. Und wenn dein Unternehmen dort nicht vorkommt, existierst du für deine Zielgruppe schlicht nicht.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-700 font-medium">
                  💡 <strong>Fakt:</strong> 73% der Nutzer vertrauen KI-Antworten mehr als traditionellen Suchergebnissen
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
              <h4 className="text-xl font-semibold mb-4 text-red-600">Was passiert, wenn du nicht sichtbar bist?</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Deine Konkurrenz wird empfohlen
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Du verlierst potenzielle Kunden
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Deine Marke wird irrelevant
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Du bleibst im digitalen Schatten
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ✅ Die Lösung
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              In diesem Webinar zeige ich dir, wie du dein Unternehmen so positionierst, dass LLMs dich nennen – und nicht die Konkurrenz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 border border-blue-200">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">LLM-Strategien verstehen</h3>
              <p className="text-gray-600">
                Lerne, wie LLMs Marken auswählen und empfehlen. Verstehe die Algorithmen hinter ChatGPT & Co.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6 border border-green-200">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Content-Optimierung</h3>
              <p className="text-gray-600">
                Welche Content-Typen werden am häufigsten zitiert? Erfahre, was wirklich funktioniert.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg p-6 border border-orange-200">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Sofort umsetzbar</h3>
              <p className="text-gray-600">
                Konkrete Strategien und Tools, die du direkt nach dem Webinar anwenden kannst.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6 border border-purple-200">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">SEO vs. KI-Sichtbarkeit</h3>
              <p className="text-gray-600">
                Warum klassisches SEO nicht mehr reicht und was jetzt wirklich zählt.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-lg p-6 border border-red-200">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Von der Konkurrenz abheben</h3>
              <p className="text-gray-600">
                Werde sichtbar, bevor deine Konkurrenz es überhaupt versteht.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg p-6 border border-teal-200">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-3">Exklusive Insights</h3>
              <p className="text-gray-600">
                Erfahre, was die meisten Marketer noch nicht wissen – und nutze den Vorsprung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🎯 Für wen ist das Webinar?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Perfekt für alle, die ihre Marke in der neuen KI-Ära zukunftssicher machen wollen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-custom-blue text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                👔
              </div>
              <h3 className="text-xl font-semibold mb-3">Unternehmer:innen</h3>
              <p className="text-gray-600">
                Die ihre Marke zukunftssicher machen und in der KI-Ära relevant bleiben wollen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-custom-orange text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                📈
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketer:innen</h3>
              <p className="text-gray-600">
                Die verstehen möchten, wie KI-Sichtbarkeit funktioniert und was sie für ihre Kunden tun können.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                ✍️
              </div>
              <h3 className="text-xl font-semibold mb-3">Content-Creators</h3>
              <p className="text-gray-600">
                Die ihre Reichweite durch AI Overviews & Chatbots boosten und mehr Sichtbarkeit generieren wollen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                👨‍🏫 Dein Host
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Ich bin <strong>Alexander Stahl</strong>, Unternehmer & Marketer bei Stahl Digital, und beschäftige mich mit <a href="https://www.linkedin.com/newsletters/7041344488937541632/" className="font-bold" target="_blank" rel="noopener noreferrer">Simple AI</a> seit 2022 mit künstlicher Intelligenz.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Ich helfe Marken dabei, sich erfolgreich im neuen digitalen Ökosystem zu positionieren – <strong>dort, wo Entscheidungen in Sekunden fallen: in den Antworten von LLMs.</strong>
              </p>
              <div className="bg-gradient-to-r from-custom-blue to-custom-orange text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Warum ich das kann:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Über 5 Jahre Erfahrung im digitalen Marketing</li>
                  <li>• Eigenes Unternehmen <a href="https://www.stahlundsoehne.at" className="font-bold" target="_blank" rel="noopener noreferrer">Stahl & Söhne</a> aufgebaut</li>
                  <li>• Spezialisiert auf praxisorientierte Strategien</li>
                  <li>• Fokussiert auf praktische Anwendung von KI-basierten Lösungen</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Image 
                src="/alexanderstahl.png" 
                alt="Alexander Stahl - Stahl Digital"
                width={192}
                height={192}
                className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-lg border-4 border-white"
                priority
              />
              <h3 className="text-2xl font-bold text-custom-blue mb-2">Alexander Stahl</h3>
              <p className="text-gray-600">Unternehmer & Marketer bei Stahl Digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🔥 Dein Vorteil
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Nach diesem Webinar weißt du genau, wie du deine Marke in der KI-Ära sichtbar machst.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-custom-blue">
              <h3 className="text-xl font-semibold mb-4 text-custom-blue">Was du lernst:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Wie du gezielt in LLM-Ausgaben auftauchst
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Welche Quick Wins du sofort nutzen kannst
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Wie du dich von deiner Konkurrenz abhebst
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Welche Tools und Strategien wirklich funktionieren
                </li>
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">✓</span>
                  Wie du deine Marke zukunftssicher machst
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-custom-orange">
              <h3 className="text-xl font-semibold mb-4 text-custom-orange">Was du bekommst:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">🎁</span>
                  45 Minuten Live-Webinar mit Q&A
                </li>
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">📱</span>
                  Aufzeichnung zum Nachschauen
                </li>
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">📋</span>
                  Checkliste mit allen Schritten
                </li>
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">🔗</span>
                  Exklusive Ressourcen & Tools
                </li>
                <li className="flex items-start">
                  <span className="text-custom-orange mr-2">💬</span>
                  Zugang zur exklusiven Community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="anmeldung" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-custom-blue to-custom-orange">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            🎟️ Melde dich jetzt an
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Die Plätze sind limitiert – sichere dir kostenlos deinen Zugang zum Webinar &quot;Sichtbar in der KI-Ära&quot;
          </p>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">�� Nur noch wenige Plätze verfügbar!</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
              <div>
                <div className="text-2xl font-bold text-custom-blue">📅</div>
                <div className="text-sm text-gray-600">Datum</div>
                <div className="font-semibold">06.09.2025</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-custom-blue">⏰</div>
                <div className="text-sm text-gray-600">Uhrzeit</div>
                <div className="font-semibold">14:00 Uhr</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-custom-blue">🎯</div>
                <div className="text-sm text-gray-600">Dauer</div>
                <div className="font-semibold">45 Min</div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="vorname"
                  placeholder="Vorname *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                />
                <input
                  type="text"
                  name="nachname"
                  placeholder="Nachname *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="E-Mail-Adresse *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
              />
              
              <input
                type="text"
                name="unternehmen"
                placeholder="Unternehmen (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
              />
              
              <input
                type="hidden"
                name="webinar"
                value="Sichtbar in der KI-Ära - 06.09.2025"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-custom-blue to-custom-orange hover:from-blue-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Wird gesendet…" : "🚀 Jetzt kostenlos anmelden"}
              </button>
            </form>
            
            {errorMessage && (
              <div className="text-red-600 text-sm mt-4 text-center">{errorMessage}</div>
            )}
            

            
            <p className="text-sm text-gray-500 mt-4">
              * Pflichtfelder. Du erhältst eine Bestätigung per E-Mail.
            </p>
          </div>
          
          <div className="text-white opacity-90">
            <p className="text-lg mb-4">
              💡 <strong>Bonus:</strong> Alle Teilnehmer erhalten exklusiven Zugang zu unseren KI-Marketing-Ressourcen!
            </p>
            <p className="text-sm">
              Keine versteckten Kosten • Keine Verpflichtung • Direkt nach dem Webinar verfügbar
            </p>
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
                Ist das Webinar wirklich kostenlos?
              </h3>
              <p className="text-gray-600">
                Ja, das Webinar ist komplett kostenlos. Wir möchten unser Wissen teilen und dir helfen, in der KI-Ära sichtbar zu werden.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Bekomme ich eine Aufzeichnung?
              </h3>
              <p className="text-gray-600">
                Ja, alle Teilnehmer erhalten eine Aufzeichnung des Webinars, um es in Ruhe nachschauen zu können.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Brauche ich Vorkenntnisse?
              </h3>
              <p className="text-gray-600">
                Nein, das Webinar ist für alle Levels geeignet. Wir erklären alles von Grund auf und geben praktische Tipps.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Kann ich Fragen stellen?
              </h3>
              <p className="text-gray-600">
                Ja, es gibt eine Q&A-Sektion am Ende des Webinars, wo du alle deine Fragen stellen kannst.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}