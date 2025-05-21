import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conference Agenda | ResGenXAI 2025",
  description: "Detailed schedule of keynotes, paper presentations, workshops, and special sessions for ResGenXAI 2025, the International Conference on Responsible, Generative and Explainable AI.",
  keywords: [
    "conference agenda", 
    "conference schedule", 
    "AI keynote speakers", 
    "paper presentations", 
    "conference workshops", 
    "special sessions", 
    "technical sessions",
    "AI conference events",
    "conference program",
    "scientific sessions"
  ],
  openGraph: {
    title: "Conference Agenda | ResGenXAI 2025",
    description: "Detailed schedule of keynotes, paper presentations, workshops, and special sessions for ResGenXAI 2025.",
    url: "https://www.resgenxai.co.in/agenda",
    images: [
      {
        url: "/rs.png",
        width: 1200,
        height: 630,
        alt: "ResGenXAI 2025 Conference Agenda",
      }
    ],
  },
  alternates: {
    canonical: "https://www.resgenxai.co.in/agenda",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Schedule",
  "name": "ResGenXAI 2025 Conference Agenda",
  "description": "Schedule of events for the International Conference on Responsible, Generative and Explainable AI (ResGenXAI 2025).",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Centurion University of Technology and Management",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jatni Campus",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "752050",
      "addressCountry": "IN"
    }
  },
  "startDate": "2025-09-10T09:00",
  "endDate": "2025-09-12T18:00",
  "about": {
    "@type": "Thing",
    "name": "Responsible, Generative and Explainable Artificial Intelligence",
    "description": "Recent advancements in artificial intelligence focused on responsible development, generative capabilities, and explainability."
  },
  "subEvent": [
    {
      "@type": "Event",
      "name": "Conference Day 1",
      "startDate": "2025-09-10T09:00",
      "endDate": "2025-09-10T18:00",
      "location": {
        "@type": "Place",
        "name": "Centurion University of Technology and Management",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@type": "Event",
      "name": "Conference Day 2",
      "startDate": "2025-09-11T09:00",
      "endDate": "2025-09-11T18:00",
      "location": {
        "@type": "Place",
        "name": "Centurion University of Technology and Management",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@type": "Event",
      "name": "Conference Day 3",
      "startDate": "2025-09-12T09:00",
      "endDate": "2025-09-12T18:00",
      "location": {
        "@type": "Place",
        "name": "Centurion University of Technology and Management",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "addressCountry": "IN"
        }
      }
    }
  ]
};

export default function AgendaLayout({
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