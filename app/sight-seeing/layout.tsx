import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Explore Odisha | ResGenXAI 2025 Tourist Attractions",
  description: "Discover the rich cultural heritage and breathtaking attractions of Odisha during your visit to ResGenXAI 2025. Konark Sun Temple, Jagannath Temple, Udayagiri and Khandagiri Caves, and more tourist destinations near Bhubaneswar.",
  keywords: [
    "Odisha tourism", 
    "Bhubaneswar attractions", 
    "Konark Sun Temple", 
    "Jagannath Temple Puri", 
    "Udayagiri Caves", 
    "tourist places in Odisha", 
    "conference tourism",
    "Odisha heritage sites",
    "UNESCO sites India",
    "cultural tourism"
  ],
  openGraph: {
    title: "Explore Odisha | ResGenXAI 2025 Tourist Attractions",
    description: "Discover the rich cultural heritage and breathtaking attractions of Odisha during your visit to ResGenXAI 2025.",
    url: "https://www.resgenxai.co.in/sight-seeing",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Tourist Attractions in Odisha",
      }
    ],
  },
  alternates: {
    canonical: "https://www.resgenxai.co.in/sight-seeing",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Tourist Attractions in Odisha",
  "description": "Popular tourist destinations near Bhubaneswar, Odisha for ResGenXAI 2025 conference attendees.",
  "touristType": [
    "Cultural tourism",
    "Heritage tourism",
    "Temple tourism"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Odisha",
    "addressCountry": "IN"
  },
  "includesAttraction": [
    {
      "@type": "TouristAttraction",
      "name": "Konark Sun Temple",
      "description": "A 13th-century UNESCO World Heritage site, famous for its architectural grandeur and intricate stone carvings depicting various aspects of life, culture, and mythology.",
      "url": "https://www.resgenxai.co.in/sight-seeing",
      "touristType": [
        "Heritage tourism",
        "Temple tourism",
        "Cultural tourism"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Konark",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      },
      "isAccessibleForFree": false,
      "image": "/knk.jpeg"
    },
    {
      "@type": "TouristAttraction",
      "name": "Jagannath Temple, Puri",
      "description": "One of the Char Dham pilgrimage sites for Hindus, this 12th-century temple is dedicated to Lord Jagannath, a form of Vishnu, and is famous for its annual Rath Yatra (chariot festival).",
      "url": "https://www.resgenxai.co.in/sight-seeing",
      "touristType": [
        "Religious tourism",
        "Heritage tourism",
        "Cultural tourism"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Puri",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      },
      "isAccessibleForFree": false,
      "image": "/puri.jpeg"
    },
    {
      "@type": "TouristAttraction",
      "name": "Udayagiri and Khandagiri Caves",
      "description": "These ancient Jain rock-cut caves date back to the 1st-2nd century BCE and feature intricate carvings and inscriptions that provide insights into early Indian art and architecture.",
      "url": "https://www.resgenxai.co.in/sight-seeing",
      "touristType": [
        "Heritage tourism",
        "Archaeological tourism",
        "Cultural tourism"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      },
      "isAccessibleForFree": false,
      "image": "/knd.jpg"
    }
  ]
};

export default function SightSeeingLayout({
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