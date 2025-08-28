import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: 'Anmeldung erfolgreich - Webinar "Sichtbar in der KI-Ära" | Stahl Digital',
  description: 'Deine Anmeldung zum kostenlosen Webinar "Sichtbar in der KI-Ära" war erfolgreich. Erfahre, was als nächstes passiert und entdecke unsere Leistungen für dein Business.',
  keywords: 'Webinar Anmeldung erfolgreich, KI-Marketing, Stahl Digital Leistungen, ChatGPT Marketing, LLM Sichtbarkeit',
  openGraph: {
    title: 'Anmeldung erfolgreich - Webinar "Sichtbar in der KI-Ära"',
    description: 'Deine Anmeldung war erfolgreich. Erfahre, was als nächstes passiert.',
    type: 'website',
    url: 'https://stahldigital.at/anmeldung-erfolgreich',
    images: [
      {
        url: 'https://stahldigital.at/webinar-success-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Webinar Anmeldung erfolgreich - Stahl Digital'
      }
    ]
  }
}

export default function AnmeldungErfolgreichPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-6">
              ✅
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Anmeldung erfolgreich!
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Du bist jetzt offiziell für unser kostenloses Webinar &quot;Sichtbar in der KI-Ära&quot; angemeldet. 
              Wir freuen uns, dass du dabei bist!
            </p>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Was passiert als nächstes?</h2>
              <div className="space-y-4 text-left">

                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Erinnerung 1 Tag vorher</h3>
                    <p className="text-gray-600 text-sm">Wir erinnern dich einen Tag vor dem Webinar an den Termin.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Live-Webinar am 06.09.2025</h3>
                    <p className="text-gray-600 text-sm">Um 14:00 Uhr startet das Webinar - sei pünktlich dabei!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Details */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              🚀 Dein Webinar &quot;Sichtbar in der KI-Ära&quot;
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Lerne, wie du dein Business in der neuen KI-Ära sichtbar machst und von ChatGPT & Co. empfohlen wirst.
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
          </div>
        </div>
      </section>

      {/* CTA to Leistungen */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-custom-blue to-custom-orange">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Während du wartest...
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Entdecke unsere Leistungen und mache dein Business fit für die KI-Ära. 
            Wir helfen dir dabei, sichtbar zu werden - nicht nur bei Google, sondern auch bei ChatGPT & Co.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">👑</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digitale Dominanz</h3>
              <p className="text-gray-600 text-sm mb-4">
                Werde die unangefochtene Nummer 1 in deiner Branche
              </p>
              <Link 
                href="/leistungen/pakete/digitale-dominanz"
                className="inline-block bg-custom-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Mehr erfahren
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead-Maschine</h3>
              <p className="text-gray-600 text-sm mb-4">
                Generiere qualifizierte Leads rund um die Uhr
              </p>
              <Link 
                href="/leistungen/pakete/lead-maschine"
                className="inline-block bg-custom-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Mehr erfahren
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sichtbarkeit & Vertrauen</h3>
              <p className="text-gray-600 text-sm mb-4">
                Baue eine starke Marke auf, der deine Kunden vertrauen
              </p>
              <Link 
                href="/leistungen/pakete/sichtbarkeit-vertrauen"
                className="inline-block bg-custom-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/leistungen"
              className="bg-white text-custom-blue font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105"
            >
              🚀 Alle Leistungen entdecken
            </Link>
            <Link
              href="/ihr-investment"
              className="border-2 border-white text-white hover:bg-white hover:text-custom-blue font-medium px-8 py-4 rounded-lg transition-all duration-200"
            >
              💰 Investment verstehen
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ❓ Häufig gestellte Fragen
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Wann erhalte ich den Link zum Webinar?
              </h3>
              <p className="text-gray-600">
                Du erhältst den Link zum Webinar in der Bestätigungs-E-Mail und eine Erinnerung einen Tag vor dem Termin.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Kann ich das Webinar nachschauen?
              </h3>
              <p className="text-gray-600">
                Ja, alle Teilnehmer erhalten eine Aufzeichnung des Webinars, um es in Ruhe nachschauen zu können.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Was passiert nach dem Webinar?
              </h3>
              <p className="text-gray-600">
                Nach dem Webinar erhältst du exklusive Ressourcen und kannst unsere Leistungen nutzen, um das Gelernte umzusetzen.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-blue">
                Wie kann ich mit Stahl Digital zusammenarbeiten?
              </h3>
              <p className="text-gray-600">
                Entdecke unsere Leistungen und buche eine kostenlose Beratung, um zu besprechen, wie wir dir helfen können.
              </p>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  )
}