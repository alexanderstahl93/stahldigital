import { Metadata } from "next"
import Navbar from "./components/navbar"
import Cover from "./components/cover"
import Footer from "./components/footer"
import References from "./components/references"

export const metadata: Metadata = {
  title: "Stahl Digital | SEO Optimierung, Google Werbung, Reputationsmanagement",
  description:
  "Wir unterstützen Dienstleistungsunternehmen in Wien & Umgebung dabei, mit SEO, Reputationsmanagement und Google Werbung sichtbarer zu werden und ihren Umsatz zu steigern.",
  keywords: "Local SEO Wien, Google Ads Wien, SEO Optimierung Wien, Google Werbung Wien, Reputationsmanagement, Google Bewertung, Google Anfragen Wien, Google Reviews",
}


const Home = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <References />
      <Footer />
    </>
  )
}

export default Home
