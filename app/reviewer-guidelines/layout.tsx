import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reviewer Guidelines | ResGenXAI 2025",
  description: "Guidelines and expectations for reviewers of ResGenXAI 2025 submissions. Reviewing process, qualification requirements, and ethical standards for evaluating papers for the International Conference on Responsible, Generative and Explainable AI.",
  keywords: [
    "paper review guidelines", 
    "conference reviewer", 
    "reviewer qualifications", 
    "peer review process", 
    "reviewing standards", 
    "academic reviewing", 
    "IEEE paper review",
    "AI paper evaluation",
    "ethical reviewing",
    "reviewer registration"
  ],
  openGraph: {
    title: "Reviewer Guidelines | ResGenXAI 2025",
    description: "Guidelines and expectations for reviewers of ResGenXAI 2025 submissions. Reviewing process, qualification requirements, and ethical standards for evaluating AI research papers.",
    url: "https://www.resgenxai.co.in/reviewer-guidelines",
    images: [
      {
        url: "/rs.png",
        width: 1200,
        height: 630,
        alt: "ResGenXAI 2025 Reviewer Guidelines",
      }
    ],
  },
  alternates: {
    canonical: "https://www.resgenxai.co.in/reviewer-guidelines",
  },
}

// JSON-LD structured data for the reviewer guidelines page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Reviewer Guidelines for ResGenXAI 2025",
  "description": "Guidelines for reviewing research papers for the International Conference on Responsible, Generative and Explainable AI.",
  "totalTime": "PT4H",
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Microsoft CMT Reviewing System"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Understand Reviewer Qualifications",
      "text": "Reviewers should possess expertise in AI, have an advanced degree, publication record, previous reviewing experience, and knowledge of ethical and responsible AI considerations."
    },
    {
      "@type": "HowToStep",
      "name": "Register as a Reviewer",
      "text": "Complete the reviewer registration form to express your interest in serving as a reviewer for ResGenXAI 2025.",
      "url": "https://forms.zohopublic.in/saneevdas061995gm1/form/ReviewerRequestForm/formperma/mJGeeXTvBB656ZOOzWxFvXH4kLheJXg6rDNAI6myrsQ?zf_rszfm=1"
    },
    {
      "@type": "HowToStep",
      "name": "Evaluate Paper Quality",
      "text": "Review assigned papers based on originality, technical correctness, clarity, significance, and relevance to the conference themes."
    },
    {
      "@type": "HowToStep",
      "name": "Provide Constructive Feedback",
      "text": "Offer detailed, constructive feedback to authors, highlighting strengths and providing specific suggestions for improvement."
    },
    {
      "@type": "HowToStep",
      "name": "Submit Reviews on Time",
      "text": "Complete and submit all reviews by the specified deadline to ensure the timely notification of authors."
    },
    {
      "@type": "HowToStep",
      "name": "Maintain Ethical Standards",
      "text": "Uphold confidentiality, declare conflicts of interest, and evaluate papers objectively without personal bias."
    }
  ]
};

export default function ReviewerGuidelinesLayout({
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