"use client"

import { useInView } from "react-intersection-observer"
import { Cpu } from "lucide-react"

export default function TechnicalCommittee() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technicalCommitteeMembers = [
    // International Members
    {
      name: "Prof. Rajkumar Buyya",
      affiliation: "University of Melbourne, Australia",
      category: "international",
    },
    {
      name: "Prof. Dipankar Dasgupta",
      affiliation: "University of Memphis, USA",
      category: "international",
    },
    {
      name: "Prof. Vincenzo Piuri",
      affiliation: "University of Milan, Italy",
      category: "international",
    },
    {
      name: "Prof. Witold Pedrycz",
      affiliation: "University of Alberta, Canada",
      category: "international",
    },
    {
      name: "Prof. Ajith Abraham",
      affiliation: "Machine Intelligence Research Labs, USA",
      category: "international",
    },
    {
      name: "Prof. Nikola Kasabov",
      affiliation: "Auckland University of Technology, New Zealand",
      category: "international",
    },
    {
      name: "Prof. Janusz Kacprzyk",
      affiliation: "Polish Academy of Sciences, Poland",
      category: "international",
    },
    {
      name: "Prof. Xin-She Yang",
      affiliation: "Middlesex University, UK",
      category: "international",
    },

    // National Members
    {
      name: "Prof. Bidyut K. Patra",
      affiliation: "IIT Bhubaneswar, India",
      category: "national",
    },
    {
      name: "Prof. Pabitra Mitra",
      affiliation: "IIT Kharagpur, India",
      category: "national",
    },
    {
      name: "Prof. Sriparna Saha",
      affiliation: "IIT Patna, India",
      category: "national",
    },
    {
      name: "Prof. Partha Pratim Roy",
      affiliation: "IIT Roorkee, India",
      category: "national",
    },
    {
      name: "Prof. Debasis Samanta",
      affiliation: "IIT Kharagpur, India",
      category: "national",
    },
    {
      name: "Prof. Santanu Chaudhury",
      affiliation: "IIT Jodhpur, India",
      category: "national",
    },
    {
      name: "Prof. Plaban Kumar Bhowmick",
      affiliation: "IIT Kharagpur, India",
      category: "national",
    },
    {
      name: "Prof. Chetan Arora",
      affiliation: "IIT Delhi, India",
      category: "national",
    },
  ]

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
              <span className="bg-white px-6 text-2xl font-bold text-primary flex items-center">
                <Cpu className="w-6 h-6 mr-2" />
                Technical Program Committee
              </span>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">International Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalCommitteeMembers
                .filter((member) => member.category === "international")
                .map((member, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-primary/10 ${
                      inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.affiliation}</p>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">National Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalCommitteeMembers
                .filter((member) => member.category === "national")
                .map((member, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-primary/10 ${
                      inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 50 + 400}ms` }}
                  >
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.affiliation}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
