"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Users } from "lucide-react"

export default function OrganizingCommittee() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const committeeMembers = [
    {
      name: "Prof. Sanjay Kumar Jena",
      role: "General Chair",
      affiliation: "Centurion University of Technology and Management",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Prof. Debabrata Swain",
      role: "Program Chair",
      affiliation: "Centurion University of Technology and Management",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Amiya Kumar Dash",
      role: "Publication Chair",
      affiliation: "Centurion University of Technology and Management",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Satyabrata Dash",
      role: "Finance Chair",
      affiliation: "Centurion University of Technology and Management",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Sujata Dash",
      role: "Publicity Chair",
      affiliation: "Centurion University of Technology and Management",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Subhashree Mishra",
      role: "Registration Chair",
      affiliation: "Centurion University of Technology and Management",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-16 bg-orange-50" ref={ref}>
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
              <span className="bg-orange-50 px-6 text-2xl font-bold text-primary flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Organizing Committee
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 pattachitra-border ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-1">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-primary/10 pattachitra-border">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Local Organizing Committee</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Dr. Rajesh Kumar Sahoo",
                "Dr. Sasmita Mishra",
                "Dr. Srikanta Patnaik",
                "Dr. Prasant Kumar Pattnaik",
                "Dr. Sujata Mohanty",
                "Dr. Biswajit Sahoo",
                "Dr. Sujit Kumar Dash",
                "Dr. Sanjay Kumar Padhi",
                "Dr. Sanjay Kumar Sahoo",
              ].map((name, index) => (
                <div
                  key={index}
                  className="bg-orange-50 rounded-lg p-4 hover:bg-orange-100 transition-colors duration-300"
                >
                  <p className="text-gray-800">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
