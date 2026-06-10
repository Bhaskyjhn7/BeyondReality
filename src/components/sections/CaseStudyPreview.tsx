import Link from "next/link";

const caseStudies = [
  {
    title: "AI-Powered Customer Service Platform",
    client: "Regional Retail Chain",
    challenge:
      "Manual support processes causing 48-hour response times and customer churn.",
    result: "85% reduction in response time, 40% cost savings",
    tags: ["AI/ML", "Automation", "NLP"],
  },
  {
    title: "Legacy System Modernization",
    client: "Manufacturing Company",
    challenge:
      "20-year-old ERP system blocking digital initiatives and costing $200K/yr in maintenance.",
    result: "Cloud-native rebuild in 4 months, 60% lower operating costs",
    tags: ["Cloud", "Migration", "Architecture"],
  },
];

export function CaseStudyPreview() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {caseStudies.map((study) => (
        <div
          key={study.title}
          className="p-8 bg-primary rounded-2xl border border-border hover:border-accent/30 transition-colors"
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
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            {study.title}
          </h3>
          <p className="text-text-muted text-sm mb-3">{study.client}</p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {study.challenge}
          </p>
          <div className="pt-4 border-t border-border">
            <p className="text-accent font-medium text-sm">{study.result}</p>
          </div>
        </div>
      ))}
      <div className="md:col-span-2 text-center mt-4">
        <Link
          href="/case-studies"
          className="text-accent hover:text-accent-light text-sm font-medium transition-colors"
        >
          View all case studies &rarr;
        </Link>
      </div>
    </div>
  );
}
