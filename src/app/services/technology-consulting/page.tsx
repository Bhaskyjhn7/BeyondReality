import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Technology Consulting | Beyond Reality",
  description:
    "27 years of solving complex business problems with technology. Architecture reviews, AI strategy, digital transformation, and technical due diligence.",
};

const services = [
  {
    title: "Architecture Review",
    description:
      "Independent assessment of your current system architecture. We identify bottlenecks, risks, and opportunities for improvement before they become expensive problems.",
  },
  {
    title: "AI Readiness Assessment",
    description:
      "Is AI right for your business? We evaluate your data maturity, infrastructure, team capabilities, and identify the highest-ROI AI opportunities.",
  },
  {
    title: "Digital Strategy & Roadmap",
    description:
      "A clear, prioritized technology roadmap aligned with your business goals. No jargon — just actionable steps with timelines and investment estimates.",
  },
  {
    title: "Technical Due Diligence",
    description:
      "Evaluating an acquisition or partnership? We assess code quality, architecture decisions, technical debt, and team capability objectively.",
  },
  {
    title: "Process Automation Assessment",
    description:
      "Map your manual processes, calculate the cost of inefficiency, and design an automation roadmap that delivers ROI within months.",
  },
  {
    title: "Vendor & Platform Selection",
    description:
      "Build vs. buy decisions backed by data. We evaluate options against your specific requirements, not generic feature checklists.",
  },
];

export default function TechnologyConsultingPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              Technology Consulting
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Make the Right Decision{" "}
              <span className="gradient-text">Before You Build</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              The most expensive software is the wrong software. With 27 years
              of translating business needs into technical solutions, we help you
              invest in the right thing — the first time.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-accent hover:bg-accent-glow text-white font-medium rounded-lg transition-colors"
            >
              Book a Free Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">How We Help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-primary rounded-xl border border-border"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">
            Why Work With a Consultant?
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "You're about to make a big technology investment",
                a: "An independent review can save 10x the consulting fee by catching misaligned assumptions early.",
              },
              {
                q: "You have a technical team but need strategic direction",
                a: "We provide the business-technology bridge — translating board-level goals into engineering roadmaps.",
              },
              {
                q: "You're unsure if AI is hype or opportunity for your business",
                a: "We cut through the noise with a practical assessment based on your actual data and workflows.",
              },
            ].map((item) => (
              <div key={item.q} className="p-6 border border-border rounded-xl">
                <h3 className="text-text-primary font-medium mb-2">
                  {item.q}
                </h3>
                <p className="text-text-secondary text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
