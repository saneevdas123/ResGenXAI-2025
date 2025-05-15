"use client"

import { useInView } from "react-intersection-observer"
import { Award, BookOpen, CheckCircle, Shield, Users, Heart } from "lucide-react"

export default function ReviewerQualifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const qualifications = [
    {
      title: "Expertise in AI",
      description:
        "Reviewers must possess a deep understanding of the field of Artificial Intelligence, with specific knowledge in areas related to Responsible AI, Generative AI, and Explainable AI. They should be familiar with the latest research trends, methodologies, and challenges in these domains.",
      icon: Award,
    },
    {
      title: "Academic and Professional Background",
      description:
        "Reviewers should have an advanced degree (typically a Ph.D.) in Computer Science, AI, Machine Learning, or a closely related field. Relevant academic publications, research experience, or professional work in AI are essential.",
      icon: BookOpen,
    },
    {
      title: "Research and Publication Record",
      description:
        "A strong publication record in top-tier AI conferences or journals is required. Reviewers should have experience in conducting and publishing original research, particularly in areas pertinent to the conference's themes.",
      icon: CheckCircle,
    },
    {
      title: "Previous Reviewing Experience",
      description:
        "Prior experience as a peer reviewer for academic journals or conferences is preferred. Reviewers should be familiar with the review process, including evaluating the novelty, significance, and technical quality of research papers.",
      icon: Users,
    },
    {
      title: "Ethical and Responsible AI Knowledge",
      description:
        "Given the focus on Responsible AI, reviewers should be well-versed in ethical considerations, including fairness, accountability, transparency, and the societal impact of AI technologies.",
      icon: Shield,
    },
    {
      title: "Commitment to High Standards",
      description:
        "Reviewers must demonstrate a commitment to maintaining high academic and ethical standards. They should be diligent, thorough, and unbiased in their evaluations, providing constructive feedback to authors.",
      icon: Heart,
    },
  ]

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Reviewer Qualifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {qualifications.map((qualification, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 pattachitra-border ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <qualification.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{qualification.title}</h3>
                    <p className="text-gray-600">{qualification.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
