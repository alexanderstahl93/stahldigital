export default function UmzugHero() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏠 SPEZIALISIERT AUF UMZUGSUNTERNEHMEN
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Umzug Marketing & SEO
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue mb-6">
            Mehr Kunden für Ihr Umzugsunternehmen in Wien
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
            Wir helfen Umzugsunternehmen dabei, online sichtbar zu werden, qualifizierte Leads zu generieren und den Umsatz zu steigern. 
            Spezialisiert auf die lokale Umzugsbranche in Wien und Umgebung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#beratung"
              className="bg-gradient-to-r from-custom-blue to-custom-orange hover:from-blue-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105"
            >
              🚀 Kostenlose Beratung
            </a>
            <a
              href="#leistungen"
              className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
