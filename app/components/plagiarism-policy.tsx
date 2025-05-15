"use client"

import { useInView } from "react-intersection-observer"
import { AlertTriangle } from "lucide-react"

export default function PlagiarismPolicy() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Policy on Plagiarism</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 my-4">
              <p>
                All papers submitted to ResGenXAI-2025 will be checked for plagiarism through the IEEE CrossCheck
                system. Papers with high similarity, including self-plagiarism, will be automatically rejected and will
                not be reviewed. Even if accepted, papers found to have plagiarism issues may be excluded from the
                proceedings. For further details, refer to the
                <a href="https://www.ieee.org/publications/rights/" className="text-primary hover:text-primary/80 ml-1">
                  IEEE Plagiarism Information Center
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
