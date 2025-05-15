"use client"

import { useInView } from "react-intersection-observer"

export default function AuthorInstructions() {
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Instructions for Authors</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              All papers must be submitted electronically in PDF format through the conference submission system by the
              specified deadlines. The submission process includes multiple stages, from initial submission to final
              camera-ready paper. Authors must adhere to the guidelines below to ensure their paper is eligible for
              review and publication.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Paper Submission Guidelines</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900">Manuscript Templates:</h4>
                  <p>
                    Authors must use the IEEE conference templates to ensure correct formatting. Templates are available
                    in both LaTeX and Microsoft Word formats for U.S. Letter Size. These templates can be found at:
                    <a href="https://www.ieee.org/conferences/publishing/templates" className="text-primary hover:text-primary/80 ml-1">
                      IEEE Templates
                    </a>
                    .
                  </p>
                  <p className="text-sm text-gray-600 italic mt-1">
                    Note: The LaTeX template does not support keywords. If using LaTeX, do not include keywords in your
                    paper.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">Paper Length:</h4>
                  <p>The paper should be up to 6 pages in length, including figures, tables, and references.</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">Formatting Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Paper Size: U.S. Letter (8.5" x 11").</li>
                    <li>Font and Spacing: Use 10-point Times New Roman font, double-column, single-spaced.</li>
                    <li>
                      Margins: Top: 1" (25mm) on the first page, 0.75" (19mm) thereafter; Left, Right, and Bottom: 0.75"
                      (19mm).
                    </li>
                    <li>
                      No Page Numbers: Do not include page numbers; they will be added by the conference organizers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">Plagiarism Check:</h4>
                  <p>
                    All submissions will be checked for plagiarism using the IEEE CrossCheck system. Papers with
                    significant overlap with the authors' previous work or other publications will be rejected.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">Important Submission Checks:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The paper is in U.S. Letter format (A4 or other formats are not accepted).</li>
                    <li>The paper is within the 6-page limit.</li>
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
