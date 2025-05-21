"use client"

import { useInView } from "react-intersection-observer"
import { Award } from "lucide-react"

export default function HonoraryCommittee() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

 const committeeMembers = [
  {
    name: "Prof.(Dr.) Pradipta Kishore Dash",
    role: "Honorary Advisory",
    affiliation: "SoA University, Bhubaneswar, Odisha, India",
  },
  {
    name: "Prof.(Dr.) Ganapati Panda",
    role: "Honorary Advisory",
    affiliation: "CV Raman Global University, Bhubaneswar, Odisha, India",
  },
  {
    name: "Prof. Deepak Mathur",
    role: "Honorary Advisory",
    affiliation: "IEEE Vice President, Member and Geographic Activities",
  },
  {
    name: "Prof.(Dr.) Subhransu Ranjan Samantaray",
    role: "Honorary Advisory",
    affiliation: "IIT Bhubaneswar, Odisha, India",
  },
  {
    name: "Prof. Ashok Kumar Tripathy",
    role: "Honorary Advisory",
    affiliation: "Retired, Director General, CPRI, Professor at Silicon Institute of Technology, Bhubaneswar, Odisha, India",
  },
  {
    name: "Shri Hare Krishna Ratha",
    role: "Honorary Advisory",
    affiliation: "ITR, DRDO, Chandipur, Odisha, India",
  },
  {
    name: "Prof.(Dr.) Bansidhar Majhi",
    role: "Honorary Advisory",
    affiliation: "CV Raman Global University, Bhubaneswar, Odisha, India",
  },
  {
    name: "Prof.(Dr.) Pradipta Kumar Nanda",
    role: "Honorary Advisory",
    affiliation: "SoA University, Bhubaneswar, Odisha, India",
  },
  {
    name: "Prof.(Dr.) Pramod Kumar Meher",
    role: "Honorary Advisory",
    affiliation: "CV Raman Global University, Bhubaneswar, Odisha, India",
  },
  {
    name: "Prof.(Dr.) Suparna Kar Chowdhury",
    role: "Honorary Advisory",
    affiliation: "Jadavpur University, Kolkata, India",
  },
  {
    name: "Prof.(Dr.) Tridibesh Nag",
    role: "Honorary Advisory",
    affiliation: "Netaji Subhash Engineering College, Ranabhutia, West Bengal, India",
  },
  {
    name: "Prof.(Dr.) Prerna Gaur",
    role: "Honorary Advisory",
    affiliation: "Netaji Subhas University of Technology, Delhi, India",
  },
  {
    name: "Prof.(Dr.) Celiya Shehnaaz",
    role: "Honorary Advisory",
    affiliation: "Bangladesh University of Engineering and Technology, Bangladesh",
  },
  {
    name: "Prof.(Dr.) Durga Prasad Mohapatra",
    role: "Honorary Advisory",
    affiliation: "NIT Rourkela, Odisha, India",
  },
  {
    name: "Prof.(Dr.) Amiya Kumar Ratha",
    role: "Honorary Advisory",
    affiliation: "B.P.U.T., Rourkela, Odisha, India",
  },
];

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
                <Award className="w-6 h-6 mr-2" />
                Honorary Advisory Board
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-8">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 pattachitra-border ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-1">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
