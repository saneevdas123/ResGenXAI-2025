import Header from "../components/header"
import Footer from "../components/footer"
import ReviewerGuidelinesHero from "../components/reviewer-guidelines-hero"
import ReviewerQualifications from "../components/reviewer-qualifications"
import ReviewerInstructions from "../components/reviewer-instructions"

export default function ReviewerGuidelinesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      <ReviewerGuidelinesHero />
      <ReviewerQualifications />
      <ReviewerInstructions />
      <Footer />
    </main>
  )
}
