"use client"

import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Users, GraduationCap, Briefcase } from "lucide-react"

export default function Registration() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("student")

  const registrationData = {
    student: [
      { category: "IEEE Members - Student / Research Scholar", national: "6,500 INR", international: "250 USD" },
      { category: "Non Members - Student / Research Scholar", national: "7,500 INR", international: "350 USD" },
      { category: "Attendee - Student / Research Scholar", national: "1,000 INR", international: "100 USD" },
    ],
    academician: [
      { category: "IEEE Members - Academician", national: "7,500 INR", international: "350 USD" },
      { category: "Non Members - Academician", national: "8,500 INR", international: "400 USD" },
      { category: "Attendee - Academician", national: "1,500 INR", international: "120 USD" },
    ],
    industry: [
      { category: "IEEE Members - Industry", national: "8,500 INR", international: "350 USD" },
      { category: "Non Members - Industry", national: "9,500 INR", international: "400 USD" },
      { category: "Attendee - Industry", national: "1,500 INR", international: "150 USD" },
    ],
  }

  const tabs = [
    { id: "student", label: "Student / Research Scholar", icon: GraduationCap },
    { id: "academician", label: "Academician", icon: Users },
    { id: "industry", label: "Industry", icon: Briefcase },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute -top-20 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-20 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>

      {/* Odisha art-inspired pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-primary font-medium tracking-wider">JOIN THE CONFERENCE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Registration Information</h2>
          <p className="text-gray-600">Choose the registration category that best fits your profile and requirements</p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {registrationData[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 min-h-[3rem]">{item.category}</h3>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">National</p>
                      <p className="text-2xl font-bold text-primary">{item.national}</p>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">International</p>
                      <p className="text-2xl font-bold text-indigo-600">{item.international}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              * Registration fees include access to all conference sessions, conference materials, coffee breaks, and
              lunches during the conference days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
