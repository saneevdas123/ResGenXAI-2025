import Header from "../components/header"
import Footer from "../components/footer"
import AuthorGuidelinesHero from "../components/author-guidelines-hero"
import AuthorInstructions from "../components/author-instructions"
import PaperSubmissionGuidelines from "../components/paper-submission-guidelines"
import CameraReadySubmissions from "../components/camera-ready-submissions"
import PlagiarismPolicy from "../components/plagiarism-policy"
import IEEEPDFExpress from "../components/ieee-pdf-express"
import AdditionalResources from "../components/additional-resources"

export default function AuthorGuidelinesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      <AuthorGuidelinesHero />
      <AuthorInstructions />
      <PaperSubmissionGuidelines />
      <CameraReadySubmissions />
      <PlagiarismPolicy />
      <IEEEPDFExpress />
      <AdditionalResources />
      <Footer />
    </main>
  )
}
