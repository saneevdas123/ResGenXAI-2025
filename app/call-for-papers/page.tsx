import Header from "../components/header"
import Footer from "../components/footer"
import CallForPapersHero from "../components/call-for-papers-hero"
import TracksList from "../components/tracks-list"

export default function CallForPapersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      <CallForPapersHero />
      <TracksList />
      <Footer />
    </main>
  )
}
