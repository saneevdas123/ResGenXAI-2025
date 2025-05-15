import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ResGenXAI 2025",
  description:
    "Join us at the 2025 International Conference on Responsible, Generative and Explainable AI (ResGenXAI) in Bhubaneswar, Odisha from September 10-12, 2025. Featuring keynotes, workshops, and research presentations on AI ethics, generative models, and interpretability.",
  generator: 'Next.js',
  applicationName: 'ResGenXAI 2025 Conference',
  authors: [{ name: 'ResGenXAI Organizing Committee' }],
  keywords: ['AI conference', 'responsible AI', 'generative AI', 'explainable AI', 'Bhubaneswar', 'IEEE conference', 'AI ethics', 'AI research'],
  publisher: 'IEEE',
  robots: 'index, follow',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    url: 'https://www.resgenxai.co.in/',
    title: 'ResGenXAI 2025 Conference',
    description: 'International Conference on Responsible, Generative and Explainable AI, September 10-12, 2025 in Bhubaneswar, Odisha',
    siteName: 'ResGenXAI 2025',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ResGenXAI 2025 Conference',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResGenXAI 2025 Conference',
    description: 'International Conference on Responsible, Generative and Explainable AI, September 10-12, 2025 in Bhubaneswar, Odisha',
    images: ['/twitter-image.jpg'],
    creator: '@resgenxai',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://resgenxai2025.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}