import Link from "next/link";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const caseStudies = [
  {
    title: "AI-Powered Customer Service Platform",
    client: "Regional Retail Chain",
    result: "85% faster response times",
    metric: "-40%",
    metricLabel: "Support costs",
    tags: ["AI/ML", "NLP", "Automation"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Legacy ERP to Cloud-Native",
    client: "Manufacturing Company",
    result: "Zero-downtime migration",
    metric: "60%",
    metricLabel: "Cost reduction",
    tags: ["Cloud", "Architecture", "Migration"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Predictive Demand Forecasting",
    client: "Distribution Company",
    result: "89% forecast accuracy",
    metric: "$380K",
    metricLabel: "Annual savings",
    tags: ["ML", "Data", "Analytics"],
    color: "from-amber-500 to-orange-500",
  },
];

export function CaseStudyPreview() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Results that matter
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-accent font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
          >
            View all projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimateIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <Link
                href="/case-studies"
                className="group block h-full bg-white rounded-2xl border border-border overflow-hidden card-hover"
              >
                {/* Colored top bar */}
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-surface text-text-secondary text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-6">{study.client}</p>

                  <div className="pt-5 border-t border-border-light">
                    <div className="text-3xl font-bold text-text-primary mb-1">
                      {study.metric}
                    </div>
                    <div className="text-text-muted text-sm">{study.metricLabel}</div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
