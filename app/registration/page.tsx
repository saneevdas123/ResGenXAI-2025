// app/registration/page.tsx
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../components/header"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Upload, FileText, Users, CreditCard, CheckCircle } from "lucide-react"

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RegistrationFormData {
  // Personal Information
  participantName: string
  mobileNumber: string
  whatsappNumber: string
  country: string
  email: string
  
  // Paper Information
  paperId: string
  copyrightAgreement: string
  presentationMode: string
  
  // Registration Details
  registrationFee: string
  category: string
  ieeeStatus: string
  nationality: string
  
  // File Uploads
  paymentProof?: File
  ieeeProof?: File
}

const PRICING = {
  student: {
    ieee: { national: 6500, international: 350 },
    nonIeee: { national: 7500, international: 450 },
    attendee: { national: 1000, international: 120 }
  },
  academician: {
    ieee: { national: 7500, international: 450 },
    nonIeee: { national: 8500, international: 550 },
    attendee: { national: 1500, international: 150 }
  },
  industry: {
    ieee: { national: 8500, international: 450 },
    nonIeee: { national: 9500, international: 550 },
    attendee: { national: 1500, international: 150 }
  }
}

export default function RegistrationPage() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    participantName: "",
    mobileNumber: "",
    whatsappNumber: "",
    country: "",
    email: "",
    paperId: "",
    copyrightAgreement: "",
    presentationMode: "",
    registrationFee: "",
    category: "",
    ieeeStatus: "",
    nationality: "",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [calculatedFee, setCalculatedFee] = useState(0)
  const [currency, setCurrency] = useState("INR")
  const router = useRouter()
  const { toast } = useToast()

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Calculate registration fee based on selections
  useEffect(() => {
    if (formData.category && formData.ieeeStatus && formData.nationality) {
      const categoryKey = formData.category.toLowerCase() as keyof typeof PRICING
      const ieeeKey = formData.ieeeStatus === "yes" ? "ieee" : "nonIeee"
      const nationalityKey = formData.nationality === "national" ? "national" : "international"
      
      if (formData.category.toLowerCase().includes("attendee")) {
        const fee = PRICING[categoryKey].attendee[nationalityKey]
        setCalculatedFee(fee)
        setCurrency(nationalityKey === "national" ? "INR" : "USD")
      } else {
        const fee = PRICING[categoryKey][ieeeKey][nationalityKey]
        setCalculatedFee(fee)
        setCurrency(nationalityKey === "national" ? "INR" : "USD")
      }
    }
  }, [formData.category, formData.ieeeStatus, formData.nationality])

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (name: string, file: File) => {
    setFormData(prev => ({ ...prev, [name]: file }))
  }

  const uploadToS3 = async (file: File, fileName: string) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileName', fileName)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) throw new Error('Upload failed')
    return await response.json()
  }

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.participantName && formData.email && formData.mobileNumber && formData.country
      case 2:
        return formData.category && formData.ieeeStatus && formData.nationality
      case 3:
        return formData.paperId && formData.copyrightAgreement && formData.presentationMode
      default:
        return true
    }
  }

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1)
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      })
    }
  }

  const handlePayment = async () => {
    setLoading(true)
    
    try {
      // Upload files to S3
      let paymentProofUrl = ""
      let ieeeProofUrl = ""

      if (formData.paymentProof) {
        const paymentResult = await uploadToS3(
          formData.paymentProof, 
          `payment-${Date.now()}-${formData.participantName}`
        )
        paymentProofUrl = paymentResult.url
      }

      if (formData.ieeeProof) {
        const ieeeResult = await uploadToS3(
          formData.ieeeProof, 
          `ieee-${Date.now()}-${formData.participantName}`
        )
        ieeeProofUrl = ieeeResult.url
      }

      // Create order
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: calculatedFee,
          currency,
          receipt: `reg_${Date.now()}`,
          registrationData: {
            ...formData,
            paymentProofUrl,
            ieeeProofUrl,
            calculatedFee,
            currency
          }
        })
      })

      const orderData = await orderResponse.json()

      if (!orderResponse.ok) {
        throw new Error(orderData.error || 'Failed to create order')
      }

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "ResGenXAI 2025",
        description: "Conference Registration",
        order_id: orderData.id,
        handler: async (response: any) => {
          try {
            // Verify payment
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                registrationData: {
                  ...formData,
                  paymentProofUrl,
                  ieeeProofUrl,
                  calculatedFee,
                  currency
                }
              })
            })

            const verifyData = await verifyResponse.json()

            if (verifyResponse.ok) {
              toast({
                title: "Success!",
                description: "Registration completed successfully. Confirmation email sent!"
              })
              router.push('/registration/success')
            } else {
              throw new Error(verifyData.error || 'Payment verification failed')
            }
          } catch (error) {
            console.error('Payment verification error:', error)
            toast({
              title: "Error",
              description: "Payment verification failed. Please contact support.",
              variant: "destructive"
            })
          }
        },
        prefill: {
          name: formData.participantName,
          email: formData.email,
          contact: formData.mobileNumber
        },
        theme: {
          color: "#E65100"
        }
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()

    } catch (error) {
      console.error('Payment error:', error)
      toast({
        title: "Error",
        description: "Failed to initiate payment. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Please provide your basic details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="participantName">Name of the Participant *</Label>
                <Input
                  id="participantName"
                  value={formData.participantName}
                  onChange={(e) => handleInputChange("participantName", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mobileNumber">Mobile Number *</Label>
                  <Input
                    id="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                    placeholder="+91 1234567890"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
                  <Input
                    id="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Your Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  placeholder="India"
                  required
                />
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Registration Category
              </CardTitle>
              <CardDescription>Select your category and membership status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Category *</Label>
                <RadioGroup
                  value={formData.category}
                  onValueChange={(value) => handleInputChange("category", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Student / Research Scholar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="academician" id="academician" />
                    <Label htmlFor="academician">Academician</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="industry" id="industry" />
                    <Label htmlFor="industry">Industry</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="attendee-student" id="attendee-student" />
                    <Label htmlFor="attendee-student">Attendee - Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="attendee-academician" id="attendee-academician" />
                    <Label htmlFor="attendee-academician">Attendee - Academician</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="attendee-industry" id="attendee-industry" />
                    <Label htmlFor="attendee-industry">Attendee - Industry</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Are you an IEEE Member? *</Label>
                <RadioGroup
                  value={formData.ieeeStatus}
                  onValueChange={(value) => handleInputChange("ieeeStatus", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="ieee-yes" />
                    <Label htmlFor="ieee-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="ieee-no" />
                    <Label htmlFor="ieee-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.ieeeStatus === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="ieeeProof">IEEE Membership Proof</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4">
                        <label htmlFor="ieeeProof" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">
                            Upload IEEE Membership Certificate
                          </span>
                          <input
                            id="ieeeProof"
                            type="file"
                            className="sr-only"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => e.target.files?.[0] && handleFileChange("ieeeProof", e.target.files[0])}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Label>Nationality *</Label>
                <RadioGroup
                  value={formData.nationality}
                  onValueChange={(value) => handleInputChange("nationality", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="national" id="national" />
                    <Label htmlFor="national">National (India)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="international" id="international" />
                    <Label htmlFor="international">International</Label>
                  </div>
                </RadioGroup>
              </div>

              {calculatedFee > 0 && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">Registration Fee</h3>
                  <p className="text-2xl font-bold text-primary">
                    {calculatedFee} {currency}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Paper Information
              </CardTitle>
              <CardDescription>Provide details about your paper submission</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="paperId">Paper ID *</Label>
                <Input
                  id="paperId"
                  value={formData.paperId}
                  onChange={(e) => handleInputChange("paperId", e.target.value)}
                  placeholder="e.g., PID001"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Have you filled the Copyright Agreement? *</Label>
                <RadioGroup
                  value={formData.copyrightAgreement}
                  onValueChange={(value) => handleInputChange("copyrightAgreement", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="copyright-yes" />
                    <Label htmlFor="copyright-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="copyright-no" />
                    <Label htmlFor="copyright-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Mode of Paper Presentation *</Label>
                <RadioGroup
                  value={formData.presentationMode}
                  onValueChange={(value) => handleInputChange("presentationMode", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online">Online Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="physical" id="physical" />
                    <Label htmlFor="physical">Physical Mode</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Payment & Confirmation
              </CardTitle>
              <CardDescription>Review your details and proceed to payment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <h3 className="font-semibold">Registration Summary</h3>
                <p><strong>Name:</strong> {formData.participantName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Category:</strong> {formData.category}</p>
                <p><strong>IEEE Member:</strong> {formData.ieeeStatus}</p>
                <p><strong>Nationality:</strong> {formData.nationality}</p>
                <p><strong>Paper ID:</strong> {formData.paperId}</p>
                <p className="text-lg font-bold text-primary">
                  <strong>Total Fee: {calculatedFee} {currency}</strong>
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentProof">Upload Payment Proof (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <label htmlFor="paymentProof" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-gray-900">
                          Upload Payment Screenshot
                        </span>
                        <input
                          id="paymentProof"
                          type="file"
                          className="sr-only"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => e.target.files?.[0] && handleFileChange("paymentProof", e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 4 && (
                      <div
                        className={`w-12 h-1 mx-2 ${
                          currentStep > step ? "bg-primary" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Conference Registration - Step {currentStep} of 4
                </h2>
              </div>
            </div>

            {/* Form Content */}
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 max-w-2xl mx-auto">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(prev => prev - 1)}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button onClick={handleNextStep}>
                  Next
                </Button>
              ) : (
                <Button onClick={handlePayment} disabled={loading}>
                  {loading ? "Processing..." : `Pay ${calculatedFee} ${currency}`}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}