"use client"

import { useInView } from "react-intersection-observer"
import { Cpu, Mail, Building } from "lucide-react"
import { useEffect, useState } from "react"

export default function TechnicalCommittee() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isVisible, setIsVisible] = useState(false)

  // Fallback to show content after 3 seconds if Intersection Observer fails
  useEffect(() => {
    console.log("TechnicalCommittee mounted")
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const internationalTpcMembers = [
    {
      name: "Damodhar Reddy Mutayalwad",
      affiliation: "DevCare Solutions",
      email: "damodharreddymutayalwad@gmail.com",
    },
    {
      name: "Sai Krishna Gurram",
      affiliation: "Visa Inc.",
      email: "reachsaigurram@gmail.com",
    },
    {
      name: "Rahul Ameria",
      affiliation: "Meta Platforms Inc",
      email: "ameriarahul5@gmail.com",
    },
    {
      name: "Shivam Aditya",
      affiliation: "Conga",
      email: "shivamaditya.v@gmail.com",
    },
    {
      name: "Manas Sharma",
      affiliation: "Google Inc.",
      email: "manassharmaasu@gmail.com",
    },
    {
      name: "Vinay Siva Kumar Bhemireddy",
      affiliation: "ADT LLC",
      email: "vinayskb9@gmail.com",
    },
    {
      name: "Amey Pophali",
      affiliation: "Credit Acceptance Corporation",
      email: "reachameypophali@gmail.com",
    },
    {
      name: "Venkata Satish Polu",
      affiliation: "The Andersons, Inc.",
      email: "venkatasatishp3@gmail.com",
    },
    {
      name: "Vivek Sai Ramagiri",
      affiliation: "IBM",
      email: "viveksai30534@gmail.com",
    },
    {
      name: "Srinivasan Pakkirisamy",
      affiliation: "SPL Consulting Inc",
      email: "srinipakkirisamy@gmail.com",
    },
    {
      name: "Vijaya Bhaskara Reddy Soperla",
      affiliation: "Intellibee inc",
      email: "vijayasoperla@gmail.com",
    },
    {
      name: "Avinash Terala",
      affiliation: "Wipfli LLP",
      email: "teralaavin@gmail.com",
    },
    {
      name: "Ashutosh Rana",
      affiliation: "Cherryroad Technologies",
      email: "ranaashu2321@gmail.com",
    },
    {
      name: "Raman Vasikarla",
      affiliation: "Rivier University",
      email: "ramanvasikarla6@gmail.com",
    },
    {
      name: "Ramamohan Kummara",
      affiliation: "IIT Hyderabad",
      email: "emailramamohan@gmail.com",
    },
    {
      name: "Vinaya Surya",
      affiliation: "Nokia US",
      email: "reachvinayasurya@gmail.com",
    },
    {
      name: "Anila Gogineni",
      affiliation: "Google",
      email: "gogineaa@gmail.com",
    },
    {
      name: "Gokulkumar Selvanathan",
      affiliation: "Super Technology Solutions Inc",
      email: "gokulkumarselvanathan@gmail.com",
    },
    {
      name: "Vaishnav Yerram",
      affiliation: "KIK IT",
      email: "vaishnavy413@gmail.com",
    },
    {
      name: "Naveen Kumar Pedada",
      affiliation: "Cognizant Technology Solutions US Corp",
      email: "naveenkumar.pedada1@gmail.com",
    },
    {
      name: "Siva RamaKrishna Reddy Venna",
      affiliation: "Circana LLC.",
      email: "sivarvenna@gmail.com",
    },
    {
      name: "Gautam Tripathi",
      affiliation: "Amazon Web Services",
      email: "gautam.b.tripathi@gmail.com",
    },
    {
      name: "Viswakanth Ankireddi",
      affiliation: "Intel",
      email: "mail2viswakanth@gmail.com",
    },
    {
      name: "Venkata Satya Sureshkumar Kondeti",
      affiliation: "T-Mobile USA Inc",
      email: "kondetivenkata.eee@gmail.com",
    },
    {
      name: "Siva RamaKrishna Reddy Venna",
      affiliation: "Circana LLC.",
      email: "vennasivaram@gmail.com",
    },
    {
      name: "Yashasvi Makin",
      affiliation: "Meta Platform Inc",
      email: "yashasvimakin@gmail.com",
    },
    {
      name: "Anshuman Guha",
      affiliation: "Freshworks",
      email: "guha.anshuman@gmail.com",
    },
    {
      name: "Aishwarya Badlani",
      affiliation: "Walmart",
      email: "aishwarya08badlani@gmail.com",
    },
    {
      name: "Vasuki Shankar",
      affiliation: "Nvidia Corporation",
      email: "vasukishankarb@gmail.com",
    },
    {
      name: "Shubhra Naresh Mittal",
      affiliation: "Microsoft",
      email: "shubhra.goel@gmail.com",
    },
    {
      name: "Jagadesh Balasubramani",
      affiliation: "L&T Technology Services (USA)",
      email: "jagadeshbme@gmail.com",
    },
    {
      name: "Mrugendrasinh Laxmansinh Rahevar",
      affiliation: "Charotar University of Science and Technology",
      email: "mrugendrarahevar.ce@charusat.ac.in",
    },
    {
      name: "Rohit Taneja",
      affiliation: "PetSmart",
      email: "rohittaneja@gmail.com",
    },
    {
      name: "Gaurav Naresh Mittal",
      affiliation: "Nordstrom",
      email: "gauravnareshmittal@gmail.com",
    },
    {
      name: "Bhushan Balkrishna Chaudhari",
      affiliation: "Individual Researcher",
      email: "bhushan.bbc1081@gmail.com",
    },
    {
      name: "Hirak Mazumdar",
      affiliation: "Adamas University, Kolkata, India",
      email: "hirakm.tech.ece@gmail.com",
    },
    {
      name: "Satish Kabade",
      affiliation: "IT company",
      email: "satishkabade25@gmail.com",
    },
    {
      name: "Sahil Yadav",
      affiliation: "Harvard University",
      email: "sahilyd@outlook.com",
    },
    {
      name: "Arjun Bali",
      affiliation: "Rocket Mortgage",
      email: "arjun.bali2012@gmail.com",
    },
    {
      name: "Lavanya Gupta",
      affiliation: "JPMorgan Chase",
      email: "lavanya181194@gmail.com",
    },
    {
      name: "Surya Rao Rayarao",
      affiliation: "University of Texas at Austin",
      email: "suryarao.r@utexas.edu",
    },
    {
      name: "Pankaj Verma",
      affiliation: "Independent researcher",
      email: "pankajverma02912@gmail.com",
    },
    {
      name: "Rahul Mahajan",
      affiliation: "Independent Researcher",
      email: "rpm.mahajan@gmail.com",
    },
    {
      name: "Krishna Gandhi",
      affiliation: "Independent Researcher",
      email: "gandhikrishna0404@gmail.com",
    },
    {
      name: "Rajendra Prasad Sola",
      affiliation: "Independent Researcher",
      email: "Rajendra.Prasad.Sola@gmail.com",
    },
    {
      name: "Sagar Bharat Shah",
      affiliation: "University of Cincinnati",
      email: "sagarshah8087@gmail.com",
    },
    {
      name: "Harshal Tripathi",
      affiliation: "Walmart Global Tech",
      email: "harshal25.tripathi@gmail.com",
    },
    {
      name: "Sadia Afrin",
      affiliation: "University of Texas at San Antonio",
      email: "sadia.afrin2@my.utsa.edu",
    },
    {
      name: "Rand Obeidat",
      affiliation: "Bowie State University",
      email: "robeidat@bowiestate.edu",
    },
    {
      name: "Jesus F. Cevallos M.",
      affiliation: "Università degli studi dell'Insubria",
      email: "jf.cevallosmoreno@uninsubria.it",
    },
    {
      name: "Raja Chattopadhyay",
      affiliation: "Capital One",
      email: "raja.chattopadhyay@gmail.com",
    },
    {
      name: "Rahul Singh",
      affiliation: "Amazon",
      email: "singlrah@amazon.com",
    },
    {
      name: "Anusha Musunuri",
      affiliation: "University of Texas at Dallas",
      email: "anu9anusha@gmail.com",
    },
    {
      name: "Ayanabha Ghosh",
      affiliation: "IIT Jodhpur",
      email: "ag.cs@ieee.org",
    },
    {
      name: "Jihan Zhang",
      affiliation: "The Chinese University of Hong Kong",
      email: "jhzhangcu@link.cuhk.edu.hk",
    },
    {
      name: "Amar Sinha",
      affiliation: "IIIT Naya Raipur",
      email: "amar@iiitnr.edu.in",
    },
    {
      name: "Karthikram R. M.",
      affiliation: "SASTRA Deemed to be University",
      email: "karthikram@mba.sastra.edu",
    },
    {
      name: "Seetaram Rao Rayarao",
      affiliation: "JP Morgan Chase",
      email: "seetaram.r@gmail.com",
    },
    {
      name: "Krishna Chaitanya Rao Kathala",
      affiliation: "University of Massachusetts Amherst",
      email: "kkathala@umass.edu",
    },
    {
      name: "Rohan Gopal Kulkarni",
      affiliation: "Meta",
      email: "rohan.kulkarni1998@gmail.com",
    },
    {
      name: "Abhishek Agrawal",
      affiliation: "Indian Statistical Institute, Amazon.com",
      email: "abhishek.agrawal.ms@gmail.com",
    },
  ]

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
                    <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="text-gray-700 text-sm hover:underline">
                      {member.email}
                    </a>
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