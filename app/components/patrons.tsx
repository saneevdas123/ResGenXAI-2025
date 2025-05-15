"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Patrons() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 text-2xl font-bold text-primary">Chief Patron</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 pattachitra-border">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/MK.webp"
                    alt="Prof. (Dr.) Mukti Kanta Mishra"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Prof. (Dr.) Mukti Kanta Mishra</h3>
                <p className="text-gray-600">Founder, President</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 pattachitra-border">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/DN.jpg"
                    alt="Prof. D. Narsimha Rao"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Prof. D. Narsimha Rao</h3>
                <p className="text-gray-600">Founder, Vice-President</p>
              </div>
            </div>
          </div>

          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 text-2xl font-bold text-primary">Patron</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 pattachitra-border">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/SP.jpg"
                    alt="Prof. (Dr.) Supriya Pattanayak"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Prof. (Dr.) Supriya Pattanayak</h3>
                <p className="text-gray-600">Vice-Chancellor</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 pattachitra-border">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/AP.jpg"
                    alt="Prof. (Dr.) Anita Patra"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Prof. (Dr.) Anita Patra</h3>
                <p className="text-gray-600">Registrar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
