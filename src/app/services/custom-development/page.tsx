import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Custom Software Development | Beyond Reality",
  description:
    "Full-stack web and mobile applications built to scale. Production-ready software with clean architecture and robust testing.",
};

const capabilities = [
  {
    title: "Web Applications",
    description:
      "Responsive, performant web apps built with modern frameworks. From complex dashboards to customer-facing platforms.",
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform iOS and Android apps with native performance. React Native for speed, native when needed.",
  },
  {
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for scale. Clean documentation, versioning, and third-party integrations.",
  },
  {
    title: "Cloud-Native Architecture",
    description:
      "Built for the cloud from day one. Auto-scaling, fault-tolerant, and cost-optimized on AWS or GCP.",
  },
  {
    title: "MVP & Rapid Prototyping",
    description:
      "Validate your idea in 6-10 weeks. Ship a working product, learn from real users, iterate fast.",
  },
  {
    title: "Legacy Modernization",
    description:
      "Migrate aging systems to modern stacks without disrupting operations. Incremental, safe, tested.",
  },
];

export default function CustomDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              Custom Software Development
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Software That{" "}
              <span className="gradient-text">Ships & Scales</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We don&apos;t just write code — we build products. From
              architecture to deployment, every decision is made with your
              business goals, users, and long-term maintainability in mind.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-accent hover:bg-accent-glow text-white font-medium rounded-lg transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">What We Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 bg-primary rounded-xl border border-border"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {cap.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
          <p className="text-text-secondary mb-8 max-w-2xl">
            We pick the right tools for your problem, not the other way around.
            Our core expertise:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React / Next.js",
              "React Native",
              "Node.js / TypeScript",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "AWS / GCP",
              "Docker / K8s",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-3 bg-surface rounded-lg text-text-secondary text-sm text-center border border-border"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
