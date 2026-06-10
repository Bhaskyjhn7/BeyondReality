import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "AI-Powered Solutions | Beyond Reality",
  description:
    "Custom AI models, GenAI integrations, intelligent automation, and predictive analytics that transform how your business operates.",
};

const capabilities = [
  {
    title: "Custom AI/ML Models",
    description:
      "Purpose-built models trained on your data for classification, prediction, recommendation, and anomaly detection.",
  },
  {
    title: "GenAI & LLM Integration",
    description:
      "Integrate large language models into your workflows — chatbots, document processing, code generation, and content creation.",
  },
  {
    title: "Intelligent Automation",
    description:
      "Automate complex business processes with AI that handles exceptions, learns from feedback, and improves over time.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Turn historical data into forward-looking insights — demand forecasting, churn prediction, pricing optimization.",
  },
  {
    title: "Computer Vision",
    description:
      "Image and video analysis for quality inspection, document digitization, security monitoring, and more.",
  },
  {
    title: "AI Strategy & Readiness",
    description:
      "Not sure where AI fits? We assess your data maturity, identify high-ROI opportunities, and build a practical roadmap.",
  },
];

export default function AISolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              AI-Powered Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              AI That Solves <span className="gradient-text">Real Problems</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Not AI for the sake of AI. We build intelligent systems that
              deliver measurable business outcomes — reducing costs, increasing
              revenue, or eliminating manual work that&apos;s holding you back.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-accent hover:bg-accent-glow text-white font-medium rounded-lg transition-colors"
            >
              Discuss Your AI Project
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
          <h2 className="text-2xl font-bold mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Assess",
                detail: "Identify where AI creates the most value for your specific business",
              },
              {
                step: "2",
                title: "Prototype",
                detail: "Build a working proof-of-concept in 2-4 weeks to validate feasibility",
              },
              {
                step: "3",
                title: "Productionize",
                detail: "Scale the solution with proper MLOps, monitoring, and reliability",
              },
              {
                step: "4",
                title: "Evolve",
                detail: "Continuously improve with new data, feedback, and model updates",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
