import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '../components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unser Team - Stahl Digital| Alexander Stahl & Musa Karaca',
  description: 'Lernen Sie das Team von Stahl Digital kennen. Alexander Stahl - Builder of Purpose-Driven Businesses und Musa - Creative Video Professional.',
  keywords: 'Team, Alexander Stahl, Musa Karaca, Stahl Digital, Creative Video, AI Strategy, Digital Transformation',
  robots: 'index, follow',  
  openGraph: {
    title: 'Unser Team - Stahl Digital',
    description: 'Alexander Stahl & Musa Karaca - Ihr Team für echtes Wachstum, und nachhaltige Ergebnisse.',
    type: 'website',
    url: 'https://stahl-digital.at/team',
  }
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto mt-12 px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Unser Team
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Das kreative Duo hinter Stahl Digital - wo strategisches Denken auf kreative Umsetzung trifft. 
              Lernen Sie Alexander Stahl und Musa Karaca kennen, die Ihr Unternehmen mit KI-Strategie und kreativen Video-Lösungen auf das nächste Level bringen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#team" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Team kennenlernen
              </a>
              <a 
                href="/leistungen" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-20">
            
            {/* Alexander Stahl */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Alexander Stahl
                  </h2>
                  <p className="text-xl text-blue-600 font-medium">
                    Builder of Purpose-Driven Businesses
                  </p>
                </div>
                
                <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                  <p>
                    Ich bin ein interdisziplinärer Gestalter mit einer Leidenschaft für Gesundheit, 
                    Unternehmertum, künstliche Intelligenz und Mustererkennung.
                  </p>
                  <p>
                                         Mein Fokus liegt auf dem, was ich &ldquo;strategisches Pattern Recognition&rdquo; nenne: 
                     Die Fähigkeit, in komplexen Daten, Systemen und Märkten verborgene Zusammenhänge 
                     zu erkennen und nutzbar zu machen.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Top Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Sales
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Business Development
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Full-Stack Development
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      AI Strategy
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Digital Transformation
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Aktuelle Projekte</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <Link href="https://www.stahlundsoehne.at"> 
                      <span className="text-gray-700 hover:text-custom-blue">Stahl & Söhne KG - Geschäftsführer</span>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <Link href="https://www.simpleai.at">

                      <span className="text-gray-700 hover:text-custom-blue">Simple AI - Founder & KI-Beratung</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bild von Alexander Stahl */}
              <div className="order-first md:order-last relative z-10">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto overflow-hidden border-4 border-white shadow-2xl">
                      <Image
                        src="/alexanderstahl-2.png"
                        alt="Alexander Stahl - Geschäftsführer & Gründer Stahl Digital"
                        width={224}
                        height={224}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Alexander Stahl</h3>
                    <p className="text-lg text-gray-600">Geschäftsführer & Gründer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Musa Karaca - Bild */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-first relative z-10">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto overflow-hidden border-4 border-white shadow-2xl">
                      <Image
                        src="/musakaraca.png"
                        alt="Musa Karaca - Media Professional Stahl Digital"
                        width={224}
                        height={224}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Musa Karaca</h3>
                    <p className="text-lg text-gray-600">Media Professional & Gründer</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Musa Karaca
                  </h2>
                  <p className="text-xl text-emerald-600 font-medium">
                    Creative Video Professional
                  </p>
                </div>
                
                <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                  <p>
                    Als kreativer Video-Experte bringt Musa Karaca eine einzigartige Perspektive in unser Team ein. 
                    Seine Expertise liegt in der visuellen Kommunikation und der Erschaffung von 
                    fesselnden Inhalten, die Geschichten zum Leben erwecken.
                  </p>
                  <p>
                    Mit seinem kreativen Auge und technischen Fähigkeiten entwickelt er innovative 
                    Video-Lösungen, die unsere digitalen Strategien visuell unterstützen und 
                    die Markenkommunikation auf ein neues Level heben.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      Video Production
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      Creative Direction
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      Visual Storytelling
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      Brand Communication
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Philosophy */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Unsere Philosophie
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Bei Stahl Digitalverbinden wir strategisches Denken mit kreativer Umsetzung. 
                  Alexanders Expertise in AI-Strategie und digitaler Transformation trifft auf Musas 
                  kreative Vision für visuelle Kommunikation.
                </p>
                <p>
                  Gemeinsam schaffen wir Lösungen, die nicht nur funktional sind, sondern auch 
                  emotional ansprechen und nachhaltige Ergebnisse liefern.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Lassen Sie uns gemeinsam arbeiten
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Bereit, Ihr Unternehmen mit strategischer KI-Integration und kreativen 
                Video-Lösungen auf das nächste Level zu bringen?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/leistungen" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Unsere Leistungen entdecken
                </a>
                <a 
                  href="/leistungen/kostenlose-beratung" 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Beratung anfordern
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
