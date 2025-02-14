import { Metadata } from "next"
import Navbar from "./components/navbar"
import Cover from "./components/cover"
import Footer from "./components/footer"
import References from "./components/references"
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import React from "react";

export const metadata: Metadata = {
  title: "Stahl Digital | SEO Optimierung, Google Werbung, Reputationsmanagement",
  description:
  "Wir unterstützen Dienstleistungsunternehmen in Wien & Umgebung dabei, mit SEO, Reputationsmanagement und Google Werbung sichtbarer zu werden und ihren Umsatz zu steigern.",
  keywords: "Local SEO Wien, Google Ads Wien, SEO Optimierung Wien, Google Werbung Wien, Reputationsmanagement, Google Bewertung, Google Anfragen Wien, Google Reviews",
}

// Data arrays
const benefits = [
  {
    title: "Nachhaltige SEO-Strategie",
    description: "Wir optimieren Ihre Online-Präsenz für maximale Sichtbarkeit in den Suchergebnissen. Durch gezielte Keyword-Recherche und Content-Optimierung erreichen Sie genau die Kunden, die nach Ihren Dienstleistungen suchen."
  },
  {
    title: "Effiziente Google Ads Kampagnen",
    description: "Mit maßgeschneiderten Google Ads Kampagnen generieren wir qualifizierte Leads für Ihr Unternehmen. Unser erfahrenes Team sorgt für optimale Budgetverteilung und kontinuierliche Performance-Verbesserung."
  },
  {
    title: "Aktives Reputationsmanagement",
    description: "Positive Kundenbewertungen sind Gold wert. Wir helfen Ihnen dabei, authentische Bewertungen zu sammeln und Ihr Online-Image professionell zu pflegen."
  }
];

const process = [
  {
    title: "Analyse & Strategie",
    description: "Wir analysieren Ihre aktuelle Online-Präsenz und entwickeln eine maßgeschneiderte Digitale Marketing-Strategie."
  },
  {
    title: "Umsetzung & Optimierung",
    description: "Unsere Experten setzen die vereinbarten Maßnahmen um und optimieren diese kontinuierlich für beste Ergebnisse."
  },
  {
    title: "Messung & Reporting",
    description: "Sie erhalten regelmäßige Reports über die wichtigsten KPIs und Entwicklungen Ihrer Kampagnen."
  }
];

const industries = [
  "Handwerksbetriebe",
  "Rechtsanwälte & Steuerberater",
  "Ärzte & Gesundheitsdienstleister",
  "Immobilienmakler",
  "Beratungsunternehmen"
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Cover />
            {/* Benefits Section */}
            <section className="py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ihre Vorteile auf einen Blick</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Erfolgsmethode</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Branchen-Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center space-x-2 p-4">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <References />
      <Footer />
    </>
  )
}

export default Home
