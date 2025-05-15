import Header from "../components/header"
import Footer from "../components/footer"
import CommitteesHero from "../components/committees-hero"
import Patrons from "../components/patrons"
import OrganizingCommittee from "../components/organizing-committee"
import TechnicalCommittee from "../components/technical-committee"

export default function CommitteesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      <CommitteesHero />
      <Patrons />
      <Footer />
    </main>
  )
}
