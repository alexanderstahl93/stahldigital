import type { Metadata } from 'next'
import Footer from '@/app/components/footer'

export const metadata: Metadata = {
  title: 'Impressum - Stahl & Söhne KG | Rechtliche Informationen',
  description: 'Offizielle rechtliche Informationen und Impressum der Stahl & Söhne KG. Alle gesetzlich erforderlichen Angaben gemäß österreichischem Recht und DSGVO.',
  keywords: 'Impressum, Stahl & Söhne KG, rechtliche Informationen, Datenschutz, DSGVO, Österreich',
  robots: 'index, follow',
  openGraph: {
    title: 'Impressum - Stahl & Söhne KG',
    description: 'Rechtliche Informationen und Impressum der Stahl & Söhne KG',
    type: 'website',
    url: 'https://stahl-digital.com/impressum',
  }
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="mb-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-custom-blue">
              Impressum
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl">
              Rechtliche Informationen und gesetzlich erforderliche Angaben der Stahl & Söhne KG
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-4 md:py-4 lg:py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* Company Information */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                  Unternehmensangaben
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                  <p><strong>Firmenname:</strong> Stahl & Söhne KG</p>
                  <p><strong>Firmenbuchnummer:</strong> FN 627558f</p>
                  <p><strong>Rechtsform:</strong> Kommanditgesellschaft</p>
                  <p><strong>Eintragungsdatum:</strong> 04.05.2024</p>
                  <p><strong>Geschäftszweige:</strong> Transportgewerbe, EDV-Dienstleistungen</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  Kontaktdaten
                </h3>
                <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                  <p><strong>Adresse:</strong><br />
                  Altmannsdorfer Straße 104/4/410<br />
                  1120 Wien, Österreich</p>
                  <p><strong>E-Mail:</strong> office@stahl-digital.com</p>
                  <p><strong>Telefon:</strong> +43 1 XXX XXX XXX</p>
                </div>
              </div>
            </div>

            {/* Legal Representatives */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Vertretungsberechtigte Personen
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
                    Alexander Stahl
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    <strong>Funktion:</strong> Komplementär<br />
                    <strong>Vertretungsberechtigung:</strong> Einzelvertretung
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
                    Jagdeep Singh Gill
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    <strong>Funktion:</strong> Kommanditist<br />
                    <strong>Vertretungsberechtigung:</strong> Keine
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Rechtliche Informationen
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  <strong>Firmenbuch:</strong> Handelsgericht Wien<br />
                  <strong>UID-Nummer:</strong> ATU12345678 (wird nach Registrierung ergänzt)<br />
                  <strong>Kammerzugehörigkeit:</strong> Wirtschaftskammer Wien
                </p>
                <p>
                  <strong>Berufsrecht:</strong> Gewerbeordnung 1994<br />
                  <strong>Zuständige Aufsichtsbehörde:</strong> Bezirkshauptmannschaft Wien-Umgebung
                </p>
              </div>
            </div>

            {/* Copyright and Legal Notice */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Urheberrecht und Haftungsausschluss
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  <strong>Urheberrecht:</strong> Alle Inhalte dieser Website sind urheberrechtlich geschützt. 
                  Die Vervielfältigung, Verbreitung oder sonstige Nutzung ist ohne schriftliche Zustimmung 
                  der Stahl & Söhne KG nicht gestattet.
                </p>
                <p>
                  <strong>Haftungsausschluss:</strong> Trotz sorgfältiger inhaltlicher Kontrolle übernehmen 
                  wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten 
                  sind ausschließlich deren Betreiber verantwortlich.
                </p>
                <p>
                  <strong>Datenschutz:</strong> Informationen zum Datenschutz finden Sie in unserer 
                  <a href="/datenschutz" className="text-blue-600 hover:text-blue-700 underline">
                    Datenschutzerklärung
                  </a>.
                </p>
              </div>
            </div>

            {/* Additional Legal Requirements */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Weitere rechtliche Hinweise
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  <strong>Online-Streitbeilegung:</strong> Die Europäische Kommission stellt eine Plattform 
                  zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr" 
                     className="text-blue-600 hover:text-blue-700 underline ml-1"
                     target="_blank" 
                     rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p>
                  <strong>Verbraucherschlichtung:</strong> Wir sind nicht bereit oder verpflichtet, 
                  an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                <p>
                  <strong>Stand der Informationen:</strong> Diese Informationen wurden zuletzt am 04.05.2024 
                  aktualisiert. Änderungen bleiben vorbehalten.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
