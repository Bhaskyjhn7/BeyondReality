import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Case Studies | Beyond Reality",
  description: "Real problems, real solutions, real results. See how we help businesses transform with AI and custom software.",
};

const caseStudies = [
  {
    title: "AI-Powered Customer Service Platform",
    client: "Regional Retail Chain",
    industry: "Retail",
    challenge:
      "A 50-store retail chain was drowning in customer inquiries. Manual email/phone support meant 48-hour average response times, leading to 15% customer churn per quarter.",
    approach:
      "We built an AI-powered support platform combining an LLM-based chatbot for common queries, intelligent ticket routing for complex issues, and a sentiment analysis dashboard for the support team.",
    results: [
      "85% reduction in average response time (48hrs → 7hrs)",
      "40% reduction in support costs",
      "Customer satisfaction score up 32 points",
      "ROI achieved within 4 months",
    ],
    tags: ["AI/ML", "NLP", "Automation"],
    duration: "10 weeks",
  },
  {
    title: "Legacy ERP Modernization",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge:
      "A 20-year-old custom ERP system was costing $200K/year in maintenance, blocking digital initiatives, and creating security vulnerabilities. The company needed modernization without disrupting daily operations.",
    approach:
      "We designed a phased migration strategy: microservices architecture, cloud-native rebuild of critical modules first, with legacy system running in parallel until cutover. Zero-downtime migration.",
    results: [
      "60% reduction in annual operating costs",
      "3x faster feature delivery capability",
      "Zero downtime during migration",
      "New integrations that were previously impossible",
    ],
    tags: ["Cloud", "Architecture", "Migration"],
    duration: "4 months",
  },
  {
    title: "Predictive Demand Forecasting Engine",
    client: "Distribution Company",
    industry: "Logistics",
    challenge:
      "A regional distributor was losing $500K annually from overstocking slow-moving items and stockouts on high-demand products. Existing forecasting was spreadsheet-based and reactive.",
    approach:
      "We built a machine learning pipeline that ingests sales data, seasonal patterns, market signals, and supplier lead times to generate weekly demand forecasts with confidence intervals.",
    results: [
      "28% reduction in excess inventory",
      "45% fewer stockout events",
      "$380K annual savings in the first year",
      "Forecasting accuracy improved from 62% to 89%",
    ],
    tags: ["AI/ML", "Data Engineering", "Analytics"],
    duration: "8 weeks",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Proof, Not <span className="gradient-text">Promises</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Every project starts with a real business problem. Here&apos;s how
              we solved them — the challenges, our approach, and the measurable
              outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="p-8 md:p-10 bg-secondary rounded-2xl border border-border"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <span className="px-3 py-1 bg-surface text-text-muted text-xs rounded-full">
                  {study.duration}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-text-primary mb-2">
                {study.title}
              </h2>
              <p className="text-text-muted text-sm mb-6">
                {study.client} &middot; {study.industry}
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-medium text-accent mb-2">
                    Challenge
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-accent mb-2">
                    Approach
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {study.approach}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-accent mb-2">
                    Results
                  </h3>
                  <ul className="space-y-2">
                    {study.results.map((result) => (
                      <li
                        key={result}
                        className="text-text-primary text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
