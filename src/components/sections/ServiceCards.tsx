import Link from "next/link";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const services = [
  {
    title: "AI Solutions",
    description:
      "Custom AI models, GenAI integrations, and intelligent automation that transforms operations and creates competitive advantage.",
    href: "/services/ai-solutions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 18h6" />
        <path d="M12 18v4" />
      </svg>
    ),
    color: "from-teal-600 to-emerald-500",
    bgColor: "bg-teal-50",
    features: ["Custom ML Models", "LLM Integration", "Process Automation", "Predictive Analytics"],
  },
  {
    title: "Custom Development",
    description:
      "Full-stack web and mobile applications built with modern architecture, designed to scale with your business.",
    href: "/services/custom-development",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Architecture"],
  },
  {
    title: "Technology Consulting",
    description:
      "Strategic guidance backed by deep industry experience. We help you make the right technology decisions before you invest.",
    href: "/services/technology-consulting",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    features: ["Architecture Review", "AI Strategy", "Digital Roadmap", "Technical Due Diligence"],
  },
];

export function ServiceCards() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Three pillars of expertise
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We combine deep technical skill with strategic thinking to deliver
            solutions that truly move the needle.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href={service.href}
                className="group block h-full p-8 bg-white rounded-2xl border border-border hover:border-transparent card-hover hover:shadow-2xl hover:shadow-black/5"
              >
                <div
                  className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <div className={`bg-gradient-to-br ${service.color} bg-clip-text`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
