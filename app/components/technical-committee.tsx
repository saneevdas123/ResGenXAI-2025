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
  { name: "Adapa Chandra Sekhara Reddy", affiliation: "LabCorp", email: "adapachandrasekharareddy@gmail.com" },
  { name: "Aerathu Mathew Thomas", affiliation: "Lululemon", email: "thomakutty@gmail.com" },
  { name: "Afrin Sadia", affiliation: "University of Texas at San Antonio", email: "sadia.afrin2@my.utsa.edu" },
  { name: "Agrawal Abhishek", affiliation: "Indian Statistical Institute, Amazon.com", email: "abhishek.agrawal.ms@gmail.com" },
  { name: "Ameria Rahul", affiliation: "Meta Platforms Inc", email: "ameriarahul5@gmail.com" },
  { name: "Ankireddi Viswakanth", affiliation: "Intel", email: "mail2viswakanth@gmail.com" },
  { name: "Badlani Aishwarya", affiliation: "Walmart", email: "aishwarya08badlani@gmail.com" },
  { name: "Balasubramani Jagadesh", affiliation: "L&T Technology Services (USA)", email: "jagadeshbme@gmail.com" },
  { name: "Bali Arjun", affiliation: "Rocket Mortgage", email: "arjun.bali2012@gmail.com" },
  { name: "Bhemireddy Vinay Siva Kumar", affiliation: "ADT LLC", email: "vinayskb9@gmail.com" },
  { name: "Boggavarapu Venkateswarlu", affiliation: "JPMorgan Chase", email: "mailtoboggavarapu@gmail.com" },
  { name: "Bolla Shranya Geetha", affiliation: "Infostretch Corporation/Apexon", email: "geethasbolla@gmail.com" },
  { name: "Cevallos M. F. Jesus", affiliation: "Università degli studi dell'Insubria", email: "jf.cevallosmoreno@uninsubria.it" },
  { name: "Chappidi Sai Ram", affiliation: "Salesforce Inc", email: "sairamchappidi.src@gmail.com" },
  { name: "Chattopadhyay Raja", affiliation: "Capital One", email: "raja.chattopadhyay@gmail.com" },
  { name: "Chaudhari Balkrishna Bhushan", affiliation: "Individual Researcher", email: "bhushan.bbc1081@gmail.com" },
  { name: "Chowhan Giridhar Raj Singh", affiliation: "Microsoft", email: "giridharrajchowhan@gmail.com" },
  { name: "Duvvuri Janardhan Reddy", affiliation: "DFS Corporate Services LLC", email: "janardhanreddyduvvuri@gmail.com" },
  { name: "Gandhi Krishna", affiliation: "Independent Researcher", email: "gandhikrishna0404@gmail.com" },
  { name: "Garg Arpit", affiliation: "CGI", email: "arpitgarg01@gmail.com" },
  { name: "Ghosh Ayanabha", affiliation: "IIT Jodhpur", email: "ag.cs@ieee.org" },
  { name: "Gogineni Anila", affiliation: "Google", email: "gogineaa@gmail.com" },
  { name: "Guha Anshuman", affiliation: "Freshworks", email: "guha.anshuman@gmail.com" },
  { name: "Gupta Lavanya", affiliation: "JPMorgan Chase", email: "lavanya181194@gmail.com" },
  { name: "Gupta Siddharth", affiliation: "Coupang", email: "reachsiddharthgupta.sg@gmail.com" },
  { name: "Gurram Sai Krishna", affiliation: "Visa Inc.", email: "reachsaigurram@gmail.com" },
  { name: "Gurram Srikanth", affiliation: "Salesforce Inc", email: "reachsrikanthgurram@gmail.com" },
  { name: "Hamsaneni Gopalaswamy Dileep Kumar", affiliation: "SPL Consulting Inc", email: "hamsanenid@gmail.com" },
  { name: "Kabade Satish", affiliation: "Independent Researcher", email: "hikabade@gmail.com" },
  { name: "Karanam Pradeep", affiliation: "Four Color Technologies", email: "pradeepkaranam.pk@gmail.com" },
  { name: "Kathala Krishna Chaitanya Rao", affiliation: "University of Massachusetts Amherst", email: "kkathala@umass.edu" },
  { name: "Kondeti Satya Sureshkumar Venkata", affiliation: "T-Mobile USA Inc", email: "kondetivenkata.eee@gmail.com" },
  { name: "Kulkarni Gopal Rohan", affiliation: "Meta", email: "rohan.kulkarni1998@gmail.com" },
  { name: "Kummara Ramamohan", affiliation: "IIT Hyderabad", email: "emailramamohan@gmail.com" },
  { name: "M R Karthikram", affiliation: "SASTRA Deemed to be University", email: "karthikram@mba.sastra.edu" },
  { name: "Maddela Srinivas", affiliation: "Wilmington University", email: "reachsrinivasms@gmail.com" },
  { name: "Mahajan Rahul", affiliation: "Independent Researcher", email: "rpm.mahajan@gmail.com" },
  { name: "Makin Yashasvi", affiliation: "Meta Platform Inc", email: "yashasvimakin@gmail.com" },
  { name: "Mazumdar Hirak", affiliation: "Adamas University, Kolkata, India", email: "hirakm.tech.ece@gmail.com" },
  { name: "Mittal Naresh Gaurav", affiliation: "Nordstrom", email: "gauravnareshmittal@gmail.com" },
  { name: "Mittal Naresh Shubhra", affiliation: "Microsoft", email: "shubhra.goel@gmail.com" },
  { name: "Mittana Ramprasad Reddy", affiliation: "NSF International", email: "reachmittana@gmail.com" },
  { name: "Musunuri Anusha", affiliation: "University of Texas at Dallas", email: "anu9anusha@gmail.com" },
  { name: "Mutayalwad Damodhar Reddy", affiliation: "DevCare Solutions", email: "damodharreddymutayalwad@gmail.com" },
  { name: "Muthurajan Caleb Derek Asir", affiliation: "Broadcom Inc", email: "derekasircaleb@gmail.com" },
  { name: "Obeidat Rand", affiliation: "Bowie State University", email: "robeidat@bowiestate.edu" },
  { name: "Pakkam Isaac Clement Praveen Xavier", affiliation: "Deloitte", email: "pakkamisaac@gmail.com" },
  { name: "Pakkirisamy Srinivasan", affiliation: "SPL Consulting Inc", email: "srini.p@splcg.com" },
  { name: "Palraj Kaarthikshankar", affiliation: "Dropbox", email: "kaarthikpalraj@gmail.com" },
  { name: "Pedada Naveen Kumar", affiliation: "Cognizant Technology Solutions US Corp", email: "naveenkumar.pedada1@gmail.com" },
  { name: "Polu Satish Venkata", affiliation: "The Andersons, Inc.", email: "venkatasatishp3@gmail.com" },
  { name: "Pophali Amey", affiliation: "Credit Acceptance Corporation", email: "reachameypophali@gmail.com" },
  { name: "Rahevar Laxmansinh Mrugendrasinh", affiliation: "Charotar University of Science and Technology", email: "mrugendrarahevar.ce@charusat.ac.in" },
  { name: "Ramagiri Vivek Sai", affiliation: "IBM", email: "viveksai30534@gmail.com" },
  { name: "Rana Ashutosh", affiliation: "Cherryroad Technologies", email: "ranaashu2321@gmail.com" },
  { name: "Rayarao Rao Seetaram Rao", affiliation: "JP Morgan Chase", email: "seetaram.r@gmail.com" },
  { name: "Rayarao Surya Rao", affiliation: "University of Texas at Austin", email: "suryarao.r@utexas.edu" },
  { name: "Sabbineni Himaja", affiliation: "Expedia Group", email: "himasabbineni@gmail.com" },
  { name: "Sarabu Anup Raja", affiliation: "T-Mobile USA Inc", email: "sarabuanupraja@gmail.com" },
  { name: "Selvanathan Gokulkumar", affiliation: "Super Technology Solutions Inc", email: "gokulkumarselvanathan@gmail.com" },
  { name: "Shah Rutvij", affiliation: "Independent", email: "connect@rutvijshah.com" },
  { name: "Shah Sagar Bharat", affiliation: "University of Cincinnati", email: "sagarshah8087@gmail.com" },
  { name: "Shaik Nawazpasha", affiliation: "Humana Inc", email: "reachnawazshaik@gmail.com" },
  { name: "Shankar Vasuki", affiliation: "Nvidia Corporation", email: "vasukishankarb@gmail.com" },
  { name: "Sharma Manas", affiliation: "Google Inc.", email: "manassharmaasu@gmail.com" },
  { name: "Shewale Vilas", affiliation: "Energy Transfer", email: "vilasshewale33@gmail.com" },
  { name: "Shivam Aditya Shivam", affiliation: "Conga", email: "shivamaditya.v@gmail.com" },
  { name: "Singh Harpreet", affiliation: "University of Chicago", email: "shsinghharpreet0@gmail.com" },
  { name: "Singh Rahul", affiliation: "Amazon", email: "singlrah@amazon.com" },
  { name: "Sinha Amar", affiliation: "IIIT Naya Raipur", email: "amar@iiitnr.edu.in" },
  { name: "Sola Prasad Rajendra", affiliation: "Independent Researcher", email: "Rajendra.Prasad.Sola@gmail.com" },
  { name: "Soperla Vijaya Bhaskara Reddy", affiliation: "Intellibee Inc", email: "vijayasoperla@gmail.com" },
  { name: "Subbanarasimhaiah Shashidhara Narendra", affiliation: "University of Pennsylvania (Alumnus)", email: "narendrashashidhara@gmail.com" },
  { name: "Surendra Babu Thilak Raj", affiliation: "Zscaler", email: "thilakraj.surendrababu@gmail.com" },
  { name: "Surya Vinaya", affiliation: "Nokia US", email: "reachvinayasurya@gmail.com" },
  { name: "Talluri Durvasulu Mohan Babu", affiliation: "ADP - Automatic Data Processing Inc", email: "mohanbabutd@gmail.com" },
  { name: "Taneja Rohit", affiliation: "PetSmart", email: "rohittaneja@gmail.com" },
  { name: "Tejpal Karan", affiliation: "Massachusetts Department of Public Health", email: "ktp1221995@gmail.com" },
  { name: "Terala Avinash", affiliation: "Wipfli LLP", email: "teralaavin@gmail.com" },
  { name: "Tripathi Gautam", affiliation: "Amazon Web Services", email: "gautam.b.tripathi@gmail.com" },
  { name: "Tripathi Harshal", affiliation: "Walmart Global Tech", email: "harshal25.tripathi@gmail.com" },
  { name: "Varanasi Kumar Sampath", affiliation: "Microsoft", email: "sampathvaranasi530@gmail.com" },
  { name: "Vasikarla Raman", affiliation: "Rivier University", email: "ramanvasikarla6@gmail.com" },
  { name: "Velur Nagaraju", affiliation: "Wipro Ltd", email: "nagarajuvelur@gmail.com" },
  { name: "Venna Siva Ramakrishna Reddy", affiliation: "Circana LLC.", email: "sivarvenna@gmail.com" },
  { name: "Verma Pankaj", affiliation: "Independent Researcher", email: "pankajverma02912@gmail.com" },
  { name: "Yadav Sahil", affiliation: "Harvard University", email: "sahilyd@outlook.com" },
  { name: "Yerram Vaishnav", affiliation: "KIK IT", email: "vaishnavy413@gmail.com" },
  { name: "Zhang Jihan", affiliation: "The Chinese University of Hong Kong", email: "jhzhangcu@link.cuhk.edu.hk" }
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