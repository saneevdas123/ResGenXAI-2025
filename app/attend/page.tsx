import Header from "../components/header"
import Footer from "../components/footer"
import AttendHero from "../components/attend-hero"
import CodeOfConduct from "../components/code-of-conduct"
import VenueInfo from "../components/venue-info"

export default function AttendPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      <AttendHero />
      <CodeOfConduct />
      <VenueInfo />
      <Footer />
    </main>
  )
}
