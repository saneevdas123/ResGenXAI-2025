"use client"

import { useInView } from "react-intersection-observer"

export default function PaperSubmissionGuidelines() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Camera-Ready Paper Submissions</h2>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-6 rounded-xl shadow-md my-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900">Final Submission Deadline:</h4>
                  <p>
                    The final camera-ready manuscript must be submitted no later than June 30, 2025. Late submissions
                    may not be included in the conference proceedings.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">IEEE Copyright Form:</h4>
                  <p>
                    A signed IEEE Copyright Form is required for each accepted paper. This form must be completed and
                    submitted along with the final paper. The ResGenXAI 2025 conference will use the IEEE Electronic
                    Copyright (eCF) service for this process. The form can be accessed via the link provided after
                    submitting your final paper.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">Publication Requirements:</h4>
                  <p>
                    An accepted paper will be published in the conference proceedings and included in IEEE Xplore only
                    if:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The final camera-ready version is submitted.</li>
                    <li>The corresponding IEEE Copyright Form is completed.</li>
                    <li>At least one author registers for the conference at the full member or non-member rate.</li>
                    <li>The paper is presented at the conference.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
