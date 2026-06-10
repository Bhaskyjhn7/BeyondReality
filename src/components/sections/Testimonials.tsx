import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const testimonials = [
  {
    quote:
      "Beyond Reality didn't just build our AI platform — they fundamentally changed how we think about customer service. The ROI was visible within weeks.",
    name: "Sarah Chen",
    role: "COO, Regional Retail Group",
    avatar: "SC",
  },
  {
    quote:
      "What sets them apart is the discovery phase. They asked questions no other agency had asked, and the solution they designed was exactly what we needed — not what we thought we wanted.",
    name: "Michael Torres",
    role: "CTO, Manufacturing Co.",
    avatar: "MT",
  },
  {
    quote:
      "Fast, transparent, and genuinely invested in our success. Their consulting alone saved us from a $200K mistake. Now they're our permanent technology partner.",
    name: "Priya Patel",
    role: "Founder, ScaleUp Labs",
    avatar: "PP",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What our clients say
          </h2>
        </AnimateIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="h-full p-8 bg-white rounded-2xl border border-border card-hover">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#f59e0b"
                      stroke="none"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-text-secondary text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-border-light">
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="text-text-primary text-sm font-semibold">{t.name}</div>
                    <div className="text-text-muted text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
