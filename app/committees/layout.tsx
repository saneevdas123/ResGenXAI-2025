import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conference Committees | ResGenXAI 2025",
  description: "Meet the distinguished team of professionals organizing ResGenXAI 2025. Patrons, honorary advisors, organizing committee, and technical program committee members.",
  keywords: [
    "conference committees", 
    "organizing committee", 
    "technical program committee", 
    "honorary advisors", 
    "conference patrons", 
    "AI conference organizers", 
    "ResGenXAI committee",
    "Centurion University faculty",
    "IEEE committee members",
    "international TPC members"
  ],
  openGraph: {
    title: "Conference Committees | ResGenXAI 2025",
    description: "Meet the distinguished team of professionals organizing ResGenXAI 2025. Patrons, honorary advisors, organizing committee, and technical program committee members.",
    url: "https://www.resgenxai.co.in/committees",
    images: [
      {
        url: "/rs.png",
        width: 1200,
        height: 630,
        alt: "ResGenXAI 2025 Conference Committees",
      }
    ],
  },
  alternates: {
    canonical: "https://www.resgenxai.co.in/committees",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ResGenXAI 2025 Conference Committees",
  "description": "The distinguished team of professionals organizing the ResGenXAI 2025 conference.",
  "url": "https://www.resgenxai.co.in/committees",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Organization",
        "name": "Chief Patrons",
        "member": [
          {
            "@type": "Person",
            "name": "Prof. (Dr.) Mukti Kanta Mishra",
            "jobTitle": "Founder, President",
            "affiliation": "Centurion University of Technology and Management"
          },
          {
            "@type": "Person",
            "name": "Prof. D. Narsimha Rao",
            "jobTitle": "Founder, Vice-President",
            "affiliation": "Centurion University of Technology and Management"
          }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Organization",
        "name": "Patrons",
        "member": [
          {
            "@type": "Person",
            "name": "Prof. (Dr.) Supriya Pattanayak",
            "jobTitle": "Vice-Chancellor",
            "affiliation": "Centurion University of Technology and Management"
          },
          {
            "@type": "Person",
            "name": "Prof. (Dr.) Anita Patra",
            "jobTitle": "Registrar",
            "affiliation": "Centurion University of Technology and Management"
          }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Organization",
        "name": "General Chairs",
        "member": [
          {
            "@type": "Person",
            "name": "Prof.(Dr.) Sujata Chakravarty",
            "jobTitle": "General Chair",
            "affiliation": "Centurion University of Technology and Management"
          },
          {
            "@type": "Person",
            "name": "Prof.(Dr.) Debi Prosad Dogra",
            "jobTitle": "General Chair",
            "affiliation": "IIT Bhubaneswar"
          }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Organization",
        "name": "Organizing Secretaries",
        "member": [
          {
            "@type": "Person",
            "name": "Saneev Kumar Das",
            "jobTitle": "Organizing Secretary",
            "affiliation": "Centurion University of Technology and Management"
          },
          {
            "@type": "Person",
            "name": "Sujit Bebortta",
            "jobTitle": "Organizing Secretary",
            "affiliation": "Ravenshaw University"
          }
        ]
      }
    }
  ]
};

export default function CommitteesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}