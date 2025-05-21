import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Call For Papers | ResGenXAI 2025",
  description: "Submit your research on Responsible, Generative, and Explainable AI for ResGenXAI 2025. Paper submission deadline: June 20, 2025. IEEE Conference #64788.",
  keywords: [
    "call for papers", 
    "AI conference submissions", 
    "research papers", 
    "responsible AI research", 
    "generative AI papers", 
    "explainable AI research", 
    "IEEE paper submission",
    "AI ethics papers",
    "human-centered AI",
    "IoT and AI papers",
    "image processing AI",
    "signal processing AI"
  ],
  openGraph: {
    title: "Call For Papers | ResGenXAI 2025",
    description: "Submit your research on Responsible, Generative, and Explainable AI for ResGenXAI 2025. IEEE Conference #64788.",
    url: "https://www.resgenxai.co.in/call-for-papers",
    images: [
      {
        url: "/rs.png",
        width: 1200,
        height: 630,
        alt: "ResGenXAI 2025 Call For Papers",
      }
    ],
  },
  alternates: {
    canonical: "https://www.resgenxai.co.in/call-for-papers",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Call For Papers | ResGenXAI 2025",
  "description": "Submit your research on Responsible, Generative, and Explainable AI for ResGenXAI 2025. IEEE Conference #64788.",
  "url": "https://www.resgenxai.co.in/call-for-papers",
  "mainEntity": {
    "@type": "Event",
    "name": "ResGenXAI 2025 - International Conference on Responsible, Generative and Explainable AI",
    "description": "Research paper submission opportunity for the International Conference on Responsible, Generative and Explainable AI.",
    "startDate": "2025-09-10T09:00",
    "endDate": "2025-09-12T18:00",
    "location": {
      "@type": "Place",
      "name": "Centurion University of Technology and Management",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "752050",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Centurion University of Technology and Management",
      "url": "https://cutm.ac.in"
    },
    "subEvent": [
      {
        "@type": "BusinessEvent",
        "name": "Paper Submission Deadline",
        "startDate": "2025-06-20"
      },
      {
        "@type": "BusinessEvent",
        "name": "Acceptance Notification",
        "startDate": "2025-07-20"
      },
      {
        "@type": "BusinessEvent",
        "name": "Camera-ready Submission Deadline",
        "startDate": "2025-08-10"
      }
    ]
  }
};

export default function CallForPapersLayout({
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