const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by deeply understanding your business, users, and constraints. No assumptions — just the right questions asked by someone who's done this for 27 years.",
    details: "Free 30-min consultation to scope the opportunity",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Agile delivery in 2-week sprints. You see working software every two weeks. No black-box development — full transparency at every step.",
    details: "Demo every Friday, direct access to the team",
  },
  {
    number: "03",
    title: "Grow",
    description:
      "Launch is just the beginning. We stay with you to optimize, scale, and evolve your product as your business grows and the market shifts.",
    details: "Ongoing retainers, proactive monitoring & improvements",
  },
];

export function HowWeWork() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <div key={step.number} className="relative">
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-accent/50 to-transparent z-0" />
          )}
          <div className="relative p-8 rounded-2xl border border-border hover:border-accent/30 transition-colors">
            <span className="text-5xl font-bold text-accent/20">
              {step.number}
            </span>
            <h3 className="text-xl font-semibold text-text-primary mt-4 mb-3">
              {step.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {step.description}
            </p>
            <p className="text-accent text-xs font-medium">{step.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
