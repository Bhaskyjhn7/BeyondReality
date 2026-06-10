import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with deep listening. Understanding your business, users, and constraints before proposing any solution.",
    detail: "Free 30-min strategy call",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture, UX, and technical planning. We map the entire solution before writing a single line of code.",
    detail: "Wireframes, architecture docs, and timeline",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    description:
      "Agile delivery in 2-week sprints. You see working software every two weeks with full transparency.",
    detail: "Demo every Friday, direct Slack access",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "Deployment, monitoring, and ongoing evolution. We stay with you to optimize and scale as your needs grow.",
    detail: "Ongoing support & quarterly roadmap reviews",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export function HowWeWork() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How we bring ideas to life
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Transparent, iterative, and always focused on delivering value
            at every stage.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative h-full p-8 bg-white rounded-2xl border border-border card-hover">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 text-border z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <div className="w-12 h-12 bg-accent-subtle rounded-xl flex items-center justify-center text-accent mb-5">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-accent mb-2">{step.number}</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <p className="text-accent text-xs font-semibold">
                  {step.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
