import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Attend ResGenXAI 2025 | Conference Information",
  description: "Join us in Bhubaneswar for ResGenXAI 2025. Information about registration, venue, accommodation, and conference code of conduct for the International Conference on Responsible, Generative and Explainable AI.",
  keywords: [
    "conference registration", 
    "AI conference attendance", 
    "venue information", 
    "accommodation options", 
    "Bhubaneswar conference", 
    "code of conduct", 
    "IEEE conference registration",
    "AI conference fees",
    "conference transportation",
    "academic conference attendance"
  ],
  openGraph: {
    title: "Attend ResGenXAI 2025 | Conference Information",
    description: "Join us in Bhubaneswar for ResGenXAI 2025. Information about registration, venue, accommodation, and conference code of conduct.",
    url: "https://www.resgenxai.co.in/attend",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Attend ResGenXAI 2025 Conference",
      }
    ],
  },
  alternates: {
    canonical: "https://www.resgenxai.co.in/attend",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When and where is ResGenXAI 2025 being held?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ResGenXAI 2025 will take place from September 10-12, 2025, at Centurion University of Technology and Management in Bhubaneswar, Odisha, India."
      }
    },
    {
      "@type": "Question",
      "name": "How do I register for the conference?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Registration can be completed online through the conference website. Different registration rates are available for students, academicians, and industry professionals, with special discounts for IEEE members."
      }
    },
    {
      "@type": "Question",
      "name": "What are the registration fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Registration fees vary by category. IEEE member students/research scholars: 6,500 INR (350 USD); Non-member students/research scholars: 7,500 INR (450 USD); IEEE member academicians: 7,500 INR (450 USD); Non-member academicians: 8,500 INR (550 USD); IEEE member industry professionals: 8,500 INR (450 USD); Non-member industry professionals: 9,500 INR (550 USD). Attendee-only rates are also available."
      }
    },
    {
      "@type": "Question",
      "name": "Are there accommodations available near the conference venue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Special rates have been arranged at several hotels near the conference venue. Registered participants will receive information about accommodation options and booking instructions. For accommodation-related queries, please contact the conference secretariat."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get to the conference venue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bhubaneswar is well-connected by air, rail, and road. The Biju Patnaik International Airport (BBI) is approximately 20 km from the conference venue. Shuttle services will be provided from selected hotels to the conference venue."
      }
    }
  ]
};

const venueJsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Centurion University of Technology and Management",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jatni Campus",
    "addressLocality": "Bhubaneswar",
    "addressRegion": "Odisha",
    "postalCode": "752050",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "20.1759234",
    "longitude": "85.7036737"
  },
  "telephone": "+91 7978029866",
  "url": "https://cutm.ac.in"
};

export default function AttendLayout({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venueJsonLd) }}
      />
      {children}
    </>
  )
}