"use client";

import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";

const caseStudies = [
  {
    title: "AI-Powered Customer Service Platform",
    client: "Regional Retail Chain",
    industry: "Retail",
    challenge:
      "Manual email/phone support meant 48-hour response times and 15% quarterly customer churn.",
    approach:
      "Built an LLM-based chatbot for common queries, intelligent ticket routing for complex issues, and a real-time sentiment dashboard.",
    results: [
      { metric: "85%", label: "Faster response times" },
      { metric: "40%", label: "Cost reduction" },
      { metric: "+32", label: "NPS improvement" },
      { metric: "4mo", label: "Time to ROI" },
    ],
    tags: ["AI/ML", "NLP", "Automation"],
    duration: "10 weeks",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Legacy ERP to Cloud-Native",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    challenge:
      "20-year-old ERP costing $200K/year in maintenance, blocking digital initiatives and creating security risks.",
    approach:
      "Phased microservices migration — rebuilt critical modules first, legacy running in parallel, zero-downtime cutover.",
    results: [
      { metric: "60%", label: "Lower operating costs" },
      { metric: "3x", label: "Faster feature delivery" },
      { metric: "Zero", label: "Downtime during migration" },
      { metric: "100%", label: "Data integrity maintained" },
    ],
    tags: ["Cloud", "Architecture", "Migration"],
    duration: "4 months",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Predictive Demand Forecasting Engine",
    client: "Distribution Company",
    industry: "Logistics",
    challenge:
      "Losing $500K annually from overstocking slow items and stockouts on high-demand products. Spreadsheet-based forecasting.",
    approach:
      "ML pipeline ingesting sales data, seasonal patterns, market signals, and supplier lead times for weekly forecasts with confidence intervals.",
    results: [
      { metric: "89%", label: "Forecast accuracy (was 62%)" },
      { metric: "28%", label: "Less excess inventory" },
      { metric: "45%", label: "Fewer stockouts" },
      { metric: "$380K", label: "Annual savings (year 1)" },
    ],
    tags: ["ML", "Data Engineering", "Analytics"],
    duration: "8 weeks",
    color: "from-amber-500 to-orange-500",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Proof, not{" "}
              <span className="gradient-text">promises</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Real problems. Real solutions. Measurable outcomes. Here&apos;s how
              we&apos;ve helped businesses transform with technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="space-y-8">
            {caseStudies.map((study) => (
              <StaggerItem key={study.title}>
                <article className="bg-white rounded-3xl border border-border overflow-hidden card-hover">
                  <div className={`h-1.5 bg-gradient-to-r ${study.color}`} />
                  <div className="p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-surface text-text-secondary text-xs font-medium rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-3 py-1 bg-accent-subtle text-accent text-xs font-medium rounded-lg">
                        {study.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                      {study.title}
                    </h2>
                    <p className="text-text-muted text-sm mb-8">
                      {study.client} &middot; {study.industry}
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wide mb-2">
                          Challenge
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wide mb-2">
                          Our Approach
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {study.approach}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wide mb-2">
                          Results
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {study.results.map((r) => (
                            <div key={r.label}>
                              <div className="text-xl font-bold text-text-primary">
                                {r.metric}
                              </div>
                              <div className="text-text-muted text-xs">
                                {r.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
