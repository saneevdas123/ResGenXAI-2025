"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Mail, Calendar } from "lucide-react"
import Link from "next/link"

export default function RegistrationSuccess() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* Success Animation */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Registration Successful!
              </h1>
              <p className="text-lg text-gray-600">
                Thank you for registering for ResGenXAI 2025. Your payment has been processed successfully.
              </p>
            </div>

            {/* Success Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-green-600">What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 text-left">
                  <Mail className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Check Your Email</h3>
                    <p className="text-gray-600 text-sm">
                      A confirmation email with your registration details has been sent to your email address.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Calendar className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Save the Date</h3>
                    <p className="text-gray-600 text-sm">
                      ResGenXAI 2025 will be held on September 10-12, 2025 at Centurion University, Bhubaneswar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Download className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Certificate & Proceedings</h3>
                    <p className="text-gray-600 text-sm">
                      Your participation certificate and conference proceedings will be available after the event.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conference Details Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Conference Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900">Conference Dates</h4>
                  <p className="text-gray-600">September 10-12, 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Venue</h4>
                  <p className="text-gray-600">
                    Centurion University of Technology and Management<br />
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Contact</h4>
                  <p className="text-gray-600">
                    Email: saneev.das@cutm.ac.in<br />
                    Phone: +91 7978029866
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto">
                  Back to Home
                </Button>
              </Link>
              <Link href="/sight-seeing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Odisha
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> Please keep your registration confirmation email safe. 
                You may need it during the conference check-in process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

