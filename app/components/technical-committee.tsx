"use client"

import { useInView } from "react-intersection-observer"
import { Cpu, Building } from "lucide-react"
import { useEffect, useState } from "react"

export default function TechnicalCommittee() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    console.log("TechnicalCommittee mounted")
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

 const internationalTpcMembers = [
  { name: "AMAR, SINHA", affiliation: "IIIT Naya Raipur" },
  { name: "ANSHUMAN, GUHA", affiliation: "Freshworks" },
  { name: "Abhishek, Agrawal", affiliation: "Indian statistical Institute, Amazon.com" },
  { name: "Aishwarya, Badlani", affiliation: "Walmart" },
  { name: "Amey, Pophali", affiliation: "Credit Acceptance Corporation" },
  { name: "Anila, Gogineni", affiliation: "Google" },
  { name: "Anusha, Musunuri", affiliation: "University of Texas at Dallas" },
  { name: "Arjun, Bali", affiliation: "Rocket Mortgage" },
  { name: "Ashutosh, Rana", affiliation: "Cherryroad Technologies" },
  { name: "Avinash, Terala", affiliation: "Wipfli LLP" },
  { name: "Ayanabha, Ghosh", affiliation: "p23iot002@iitj.ac.in" },
  { name: "Bhushan, Balkrishna, Chaudhari", affiliation: "Individual Researcher" },
  { name: "Damodhar Reddy, Mutayalwad", affiliation: "DevCare Solutions" },
  { name: "Gaurav, Naresh, Mittal", affiliation: "Nordstrom" },
  { name: "Gautam, Tripathi", affiliation: "Amazon Web Services" },
  { name: "Gokulkumar, Selvanathan", affiliation: "Super Technology Solutions Inc" },
  { name: "Harshal, Tripathi", affiliation: "Working in Walmart Global Tech" },
  { name: "Hirak, Mazumdar", affiliation: "Adamas University, Kolkata, India" },
  { name: "Jagadesh, Balasubramani", affiliation: "L&T Technology Services(USA)" },
  { name: "Jesus, F., Cevallos M.", affiliation: "Università degli studi dell'Insubria" },
  { name: "Jihan, Zhang", affiliation: "The Chinese University of Hong Kong" },
  { name: "KRISHNA CHAITANYA RAO, KATHALA", affiliation: "University of Massachusetts Amherst" },
  { name: "Krishna, Gandhi", affiliation: "Independent Researcher" },
  { name: "Lavanya, Gupta", affiliation: "JPMorgan Chase" },
  { name: "Manas, Sharma", affiliation: "Google Inc." },
  { name: "Mrugendrasinh, Laxmansinh, Rahevar", affiliation: "Charotar University of Science and Technology0000-0002-0551-9229" },
  { name: "Naveen Kumar, Pedada", affiliation: "COGNIZANT TECHNOLOGY SOLUTIONS US CORP" },
  { name: "Pankaj, Verma", affiliation: "Independent researcher" },
  { name: "RAMAN, Vasikarla", affiliation: "Rivier University" },
  { name: "Rahul, Ameria", affiliation: "Meta Platforms Inc" },
  { name: "Rahul, Mahajan", affiliation: "Independent Researcher" },
  { name: "Rahul, Singh", affiliation: "Amazon" },
  { name: "Raja, Chattopadhyay", affiliation: "Capital One" },
  { name: "Rajendra, Prasad, Sola", affiliation: "Independent Researcher" },
  { name: "Ramamohan, Kummara", affiliation: "IIT Hyderabad" },
  { name: "Rohan, Gopal, Kulkarni", affiliation: "Meta" },
  { name: "Rohit, Taneja", affiliation: "PetSmart" },
  { name: "SRINIVASAN, PAKKIRISAMY", affiliation: "SPL Consulting Inc" },
  { name: "Sadia, Afrin", affiliation: "University of Texas at San Antonio" },
  { name: "Sagar Bharat, Shah", affiliation: "University of Cincinnati" },
  { name: "Sahil, Yadav", affiliation: "Harvard University" },
  { name: "Sai Krishna, Gurram", affiliation: "Visa Inc." },
  { name: "Satish, Kabade", affiliation: "IT company" },
  { name: "Seetaram Rao, rao, Rayarao", affiliation: "JP Morgan Chase" },
  { name: "Shivam, Shivam Aditya", affiliation: "Conga" },
  { name: "Shubhra, Naresh, Mittal", affiliation: "Microsoft" },
  { name: "Siva RamaKrishna Reddy, Venna", affiliation: "Circana LLC." },
  { name: "Surya Rao, Rayarao", affiliation: "University of Texas at Austin" },
  { name: "Vaishnav, Yerram", affiliation: "KIK IT" },
  { name: "Vasuki, Shankar", affiliation: "Nvidia Corporation" },
  { name: "Venkata, Satish, Polu", affiliation: "The Andersons, Inc." },
  { name: "Venkata, Satya Sureshkumar, Kondeti", affiliation: "T-Mobile USA Inc" },
  { name: "Vijaya Bhaskara Reddy, SOPERLA", affiliation: "Intellibee inc" },
  { name: "Vinay Siva Kumar, Bhemireddy", affiliation: "ADT LLC" },
  { name: "Vinaya, Surya", affiliation: "Nokia US" },
  { name: "Viswakanth, Ankireddi", affiliation: "INTEL" },
  { name: "Vivek sai, Ramagiri", affiliation: "IBM" },
  { name: "Yashasvi, makin", affiliation: "Meta Platform Inc" },
  { name: "karthikram, r, M", affiliation: "SASTRA Deemed to be University" },
  { name: "rand, Obeidat", affiliation: "Bowie State University" },
];



  return (
    <section className="py-16 bg-white overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 transform ${
            inView || isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 text-2xl font-bold text-primary flex items-center">
                <Cpu className="w-6 h-6 mr-2" />
                International TPC
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
            {internationalTpcMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  inView || isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                <div className="border-t-4 border-primary"></div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{member.name}</h4>
                  <div className="flex items-start gap-2 mb-2">
                    <Building className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{member.affiliation}</p>
                  </div>
                  <div className="flex items-start gap-2">
                   
                  </div>
                </div>
                <div className="border-2 border-primary/10 absolute inset-0 rounded-xl pointer-events-none"></div>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
                <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
                <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
                <div className="absolute -right-1 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <noscript>
        <style>
          {`.opacity-0 { opacity: 1 !important; transform: none !important; }`}
        </style>
      </noscript>
    </section>
  )
}