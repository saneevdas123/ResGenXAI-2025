"use client"

import { useInView } from "react-intersection-observer"
import { Shield, AlertTriangle, Users, Heart } from "lucide-react"

export default function CodeOfConduct() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Code of Conduct</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              ResGenXAI-2025 is dedicated to fostering an environment that promotes the free exchange of ideas and
              respects the rights of all participants. All attendees of ResGenXAI-2025 events, including workshops,
              tutorials, exhibitions, and poster sessions, are expected to enjoy a welcoming and harassment-free
              atmosphere.
            </p>

            <div className="pattachitra-border bg-orange-50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-primary mr-2" />
                Harassment Policy
              </h3>
              <p>
                Harassment of any kind is strictly prohibited, including but not limited to actions based on gender,
                gender identity and expression, sexual orientation, disability, physical appearance, race, age,
                religion, or any other protected status under the laws applicable in the host location. Prohibited
                conduct includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Abusive, offensive, or degrading language.</li>
                <li>Intimidation, stalking, or harassing photography/recording.</li>
                <li>Inappropriate physical contact, sexual imagery, or unwelcome sexual advances.</li>
              </ul>
              <p className="mt-4">
                Violations will be addressed promptly. Participants must cease any inappropriate behavior immediately
                upon request.
              </p>
            </div>

            <div className="pattachitra-border bg-blue-50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 text-secondary mr-2" />
                Expectations for Exhibitors and Speakers
              </h3>
              <p>
                Exhibitors are prohibited from displaying sexualized images, activities, or materials in their booths
                and must avoid sexualized clothing or environments. Speakers should refrain from using sexual language
                or imagery unless it serves a clear scientific purpose and must avoid language or visuals that
                constitute harassment.
              </p>
            </div>

            <div className="pattachitra-border bg-orange-50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-primary mr-2" />
                Reporting Violations
              </h3>
              <p>
                Any instances of harassment or violations should be reported to the conference ombud via email at{" "}
                <a href="mailto:resgenxai2025@cutm.ac.in" className="text-primary hover:text-primary-700">
                  resgenxai2025@cutm.ac.in
                </a>
                . Reports will be treated with confidentiality. The ombud will investigate and determine findings based
                on a preponderance of evidence. Recommended sanctions, if violations are proven, will be reviewed by the
                conference standards committee, whose decision will be final.
              </p>
              <p className="mt-4">Sanctions may include:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Exclusion from specific or all conference events.</li>
                <li>Removal of material from the online conference record.</li>
                <li>Referrals to the violator's institution or employer.</li>
                <li>Referral to law enforcement.</li>
              </ul>
              <p className="mt-4">
                Please note that registration fees and expenses will not be refunded in cases of proven violations.
              </p>
            </div>

            <div className="pattachitra-border bg-blue-50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 text-secondary mr-2" />
                Commitment to Equity, Diversity, and Inclusion
              </h3>
              <p>
                Our goal is to ensure every participant enjoys equal opportunities to engage in ResGenXAI-2025
                activities, free from discrimination or harassment. We encourage diverse representation in all
                conference roles, including technical committees, steering groups, and organizational teams.
              </p>
            </div>

            <div className="pattachitra-border bg-orange-50 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                Event Conduct and Safety
              </h3>
              <p>
                ResGenXAI-2025 aligns with a commitment to providing safe, productive, and welcoming environments for
                all participants. Discrimination, harassment, or bullying in any form will not be tolerated.
              </p>
              <p className="mt-4">
                Reports of unsafe or inappropriate behavior can be directed to on-site staff, security personnel, venue
                management, or via email to{" "}
                <a href="mailto:resgenxai2025@cutm.ac.in" className="text-primary hover:text-primary-700">
                  resgenxai2025@cutm.ac.in
                </a>
                .
              </p>
              <p className="mt-4">
                ResGenXAI-2025 remains committed to advancing knowledge in AI while ensuring respect, diversity, and
                inclusion in every aspect of the conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
