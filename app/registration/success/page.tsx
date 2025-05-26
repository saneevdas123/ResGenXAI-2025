"use client"

import { Suspense } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { Loader2 } from "lucide-react"
import RegistrationSuccessContent from "./RegistrationSuccessContent"

function SuccessPageLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      
      <section className="pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Loader2 className="w-24 h-24 animate-spin text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Loading Registration Details...
              </h1>
              <p className="text-lg text-gray-600">
                Please wait while we fetch your registration information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function RegistrationSuccess() {
  return (
    <Suspense fallback={<SuccessPageLoading />}>
      <RegistrationSuccessContent />
    </Suspense>
  )
}