import Link from "next/link";

const services = [
  {
    title: "AI-Powered Solutions",
    description:
      "Custom AI models, intelligent automation, and GenAI integrations that transform how your business operates. From chatbots to predictive analytics.",
    href: "/services/ai-solutions",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M12 11v4" />
        <path d="M8 15h8" />
        <circle cx="9" cy="18" r="2" />
        <circle cx="15" cy="18" r="2" />
        <path d="M9 20v2" />
        <path d="M15 20v2" />
      </svg>
    ),
    features: [
      "Custom AI/ML Models",
      "GenAI & LLM Integration",
      "Intelligent Automation",
      "Predictive Analytics",
    ],
  },
  {
    title: "Custom Software Development",
    description:
      "Full-stack web and mobile applications built to scale. We ship production-ready software with clean architecture and robust testing.",
    href: "/services/custom-development",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <path d="M14.5 4l-5 16" />
      </svg>
    ),
    features: [
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "API Development",
      "Cloud-Native Architecture",
    ],
  },
  {
    title: "Technology Consulting",
    description:
      "27 years of solving complex business problems with technology. We help you make the right decisions before you invest in building.",
    href: "/services/technology-consulting",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    features: [
      "Architecture Reviews",
      "AI Readiness Assessment",
      "Digital Strategy",
      "Technical Due Diligence",
    ],
  },
];

export function ServiceCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service) => (
        <Link
          key={service.title}
          href={service.href}
          className="group p-8 bg-primary rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/5"
        >
          <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-3">
            {service.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {service.description}
          </p>
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="text-text-muted text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-6 text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
            Learn more &rarr;
          </div>
        </Link>
      ))}
    </div>
  );
}
