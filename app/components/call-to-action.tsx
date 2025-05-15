"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { useState, useEffect } from "react"

// Client-only component for animated background
function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const [bubbles, setBubbles] = useState<Array<{
    width: number;
    height: number;
    top: number;
    left: number;
    animationDuration: number;
    animationDelay: number;
  }>>([])

  useEffect(() => {
    setMounted(true)
    
    const newBubbles = Array(10).fill(0).map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 20 + 15,
      animationDelay: Math.random() * 5
    }))
    
    setBubbles(newBubbles)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-float"
          style={{
            width: `${bubble.width}px`,
            height: `${bubble.height}px`,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.animationDelay}s`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default function CallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden" ref={ref}>
      {/* Odisha art-inspired pattern overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-repeat opacity-5"></div>

      {/* Client-only animated background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-blue-300 font-medium tracking-wider">JOIN US IN BHUBANESWAR</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">Be Part of the Future of AI Research</h2>
          <p className="text-xl text-blue-100 mb-10">
            Register for the conference and join the global community of AI researchers advancing responsible,
            generative, and explainable AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="https://forms.zohopublic.in/saneevdas061995gm1/form/ReviewerRequestForm/formperma/mJGeeXTvBB656ZOOzWxFvXH4kLheJXg6rDNAI6myrsQ?zf_rszfm=1" >
            <Button
              size="lg"
              className="bg-white hover:bg-blue-50 text-primary px-8 rounded-full group transition-all duration-300"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
             </Link>
            <Link href="/call-for-papers">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/20 rounded-full">
                View Call for Papers
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-2">Attend Sessions</h3>
              <p className="text-blue-100">Engage with cutting-edge research in responsible and explainable AI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-2">Network & Collaborate</h3>
              <p className="text-blue-100">Connect with leading researchers and industry professionals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-2">Explore Bhubaneswar</h3>
              <p className="text-blue-100">Experience the rich culture and heritage of Odisha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}