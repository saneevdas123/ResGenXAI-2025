"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function AboutUniversity() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-primary font-medium tracking-wider">HOST INSTITUTION</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">About Centurion University</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 transform ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Image
              src="cp.png"
              alt="Centurion University Campus"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold">Centurion University Campus</h3>
              <p className="text-sm">Bhubaneswar, Odisha</p>
            </div>
          </div>
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 transform ${
              inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Shaping lives and empowering communities through education
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Centurion University of Technology and Management (CUTM), located in Jatni near Bhubaneswar, Odisha, was
              established in 2005 by a group of academics aiming to provide high-quality education. Initially acquiring
              and transforming the ailing Jagannath Institute for Technology and Management (JITM), CUTM became the
              first Multi-Sector State Private University in Odisha in August 2010.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The university focuses on "Shaping lives and empowering communities" by creating opportunities through
              education, research, and training, especially in rural areas of southern Odisha and northern Andhra
              Pradesh. With a vision to become a globally recognized center for excellence, CUTM's mission is to offer
              top-tier, accredited programs in technology and management, foster entrepreneurship, and provide
              employability training while emphasizing social justice and sustainable development.
            </p>
            <Link href="https://cutm.ac.in/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Learn More About CUTM
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
