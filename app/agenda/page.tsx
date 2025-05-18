"use client"

import { useInView } from "react-intersection-observer"
import { Calendar, Clock } from "lucide-react"
import AttendHero from "../components/attend-hero"
import Header from "../components/header"

export default function Agenda() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main>
        <Header/>
        <AttendHero />
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Conference Agenda</h2>
          </div>

          <div className="bg-white p-12 rounded-xl shadow-lg border border-primary/10 pattachitra-border">
            <div className="flex flex-col items-center justify-center text-center py-16">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h3>
              <p className="text-xl text-gray-600 max-w-2xl">
                The detailed conference agenda is being finalized and will be published here shortly. Please check back
                later for the complete schedule of keynotes, paper presentations, and special sessions.
              </p>
              <div className="mt-8 text-primary font-medium">
                
                <p>Centurion University of Technology and Management, Bhubaneswar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}
