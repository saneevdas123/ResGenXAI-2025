import Header from "../components/header"
import Footer from "../components/footer"
import SightSeeingHero from "../components/sight-seeing-hero"
import TouristAttractions from "../components/tourist-attractions"

export default function SightSeeingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      <SightSeeingHero />
      <TouristAttractions />
      <Footer />
    </main>
  )
}
