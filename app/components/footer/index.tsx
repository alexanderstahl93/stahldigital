"use client"

import Image from "next/image"
import Link from "next/link"
import { JSX, SVGProps } from "react"

const navigation = {
  services: [
    { name: 'SEO & Content Marketing', href: '/leistungen', icon: '🎯' },
    { name: 'Google Ads Management', href: '/leistungen', icon: '📈' },
    { name: 'Reputationsmanagement', href: '/leistungen', icon: '⭐' },
    { name: 'AI Search Integration', href: '/leistungen', icon: '🤖' },
    { name: 'Web App Development', href: '/leistungen', icon: '💻' },
    { name: 'Conversion-Optimierung', href: '/leistungen', icon: '🚀' },
  ],
  packages: [
    { name: 'Sichtbarkeit & Vertrauen', href: '/leistungen/pakete/sichtbarkeit-vertrauen', icon: '👁️' },
    { name: 'Lead-Maschine', href: '/leistungen/pakete/lead-maschine', icon: '🎣' },
    { name: 'Digitale Dominanz', href: '/leistungen/pakete/digitale-dominanz', icon: '👑' },
  ],
  branche: [
    { name: 'Branchenübersicht', href: '/leistungen/branche', icon: '🏠' },
    { name: 'Umzug', href: '/leistungen/branche/umzug', icon: '🏠' },
  ],
  company: [
    { name: 'Karriere', href: '/karriere', icon: '💼' },
    { name: 'Das Team', href: '/team', icon: '👥' },
    { name: 'Ihr Investment', href: '/ihr-investment', icon: '💰' },
    { name: 'Referenzen', href: '/referenzen', icon: '🏆' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/stahldigitalwien',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/stahl-digital-kg',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },

    {
      name: 'Youtube',
      href: 'https://www.youtube.com/@StahlDigital',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@stahldigital',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 lg:py-24">
          
          {/* Mobile-First Grid Layout */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 xl:gap-8">
            
            {/* Company Info - Full Width on Mobile */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  alt="Stahl Digital Marketing Agentur Wien"
                  src="/stahl_digital.png"
                  className="h-10 w-auto"
                  width={140}
                  height={40}
                />
              </div>
              
              <p className="font-light text-sm leading-relaxed text-gray-600 max-w-md">
                Wir steigern den Umsatz von Dienstleistungsunternehmen in Wien & Umgebung durch maßgeschneiderte, und praxisorienterte digitale Marketing Lösungen.
              </p>
              
              {/* Contact Info for Mobile */}
              <div className="md:hidden space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <a href="mailto:office@stahldigital.at" className="hover:text-blue-600 transition-colors duration-200">
                    office@stahldigital.at
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <a href="tel:+436767734689" className="hover:text-blue-600 transition-colors duration-200">
                    +43 676 7734689
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-6">
              <Link href="/leistungen" className="group">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Leistungen
                </h3>
              </Link>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="group flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                    >
                      <span className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {item.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages Section */}
            <div className="space-y-6">
              <Link href="/leistungen/pakete" className="group">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                  Pakete
                </h3>
              </Link>
              <ul className="space-y-3">
                {navigation.packages.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="group flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                    >
                      <span className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {item.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Branche Section */}

            <div className="space-y-6">
              <Link href="/leistungen/branche" className="group">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Branchenübersicht
                </h3>
              </Link>
              <ul className="space-y-3">
                {navigation.branche.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="group flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                    >
                      <span className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {item.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Stahl Digital
              </h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="group flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1"
                    >
                      <span className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {item.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200 flex items-center space-x-2">
                        {item.name}
                        {item.name === 'Karriere' && (
                          <span className="bg-custom-blue text-white text-xs px-2 py-0.5 rounded-full font-medium ml-2">
                            Neu
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section for Mobile */}
          <div className="mt-12 md:hidden">
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-100/50">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                Bereit für mehr Umsatz?
              </h4>
              <p className="text-sm text-gray-600 text-center mb-4">
                Lassen Sie uns gemeinsam Ihre digitale Präsenz optimieren
              </p>
              <Link
                href="/leistungen/kostenlose-beratung"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Jetzt beraten lassen
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 py-8 md:py-10">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Stahl & Söhne KG. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
              <Link 
                href="/rechtliches/datenschutz" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Datenschutzerklärung
              </Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link 
                href="/rechtliches/impressum" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
  