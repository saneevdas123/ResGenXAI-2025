import Header from "../components/header"
import Footer from "../components/footer"
import CommitteesHero from "../components/committees-hero"
import Patrons from "../components/patrons"
import OrganizingCommittee from "../components/organizing-committee"
import TechnicalCommittee from "../components/technical-committee"
import HonoraryCommittee from "../components/honorary-committee"
import Publicity from "../components/publicity"
import Panel from "../components/panel"
import Finance from "../components/finance"
import Keynote from "../components/keynote"
import Sponsorship from "../components/sponsorship"
import Publication from "../components/publication"
import Conference from "../components/conference-planning"
import Local from "../components/local-organizing"
import Website from "../components/website"

export default function CommitteesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      <CommitteesHero />
      <Patrons />
      <HonoraryCommittee/>
      <OrganizingCommittee/>
      <Publication/>
      <Panel/>
      <Finance/>
      <Publicity/>
      <Keynote/>
      <Sponsorship/>
      <Conference/>
      <Local/>
      <Website/>
      <TechnicalCommittee/>
      <Footer />
    </main>
  )
}
