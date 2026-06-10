import Link from "next/link";

export const metadata = {
  title: "Careers | Beyond Reality",
  description: "Join a small team doing big things. We're always looking for talented engineers and designers who want to build what's next.",
};

export default function CareersPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Build the <span className="gradient-text">Future With Us</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            We&apos;re a small team that punches above our weight. No politics,
            no middle management, no busy work. Just hard problems, smart
            people, and work that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Work on real problems",
              description: "Every project is different. You'll work across industries, technologies, and problem domains.",
            },
            {
              title: "Senior-only team",
              description: "Everyone here is experienced. You'll learn from peers, not manage juniors.",
            },
            {
              title: "Autonomy & ownership",
              description: "We trust you to make decisions. Take ownership of your work from design to deployment.",
            },
            {
              title: "Remote-friendly",
              description: "Work from wherever you do your best work. We care about output, not hours.",
            },
          ].map((perk) => (
            <div key={perk.title} className="p-6 border border-border rounded-xl">
              <h3 className="text-text-primary font-semibold mb-2">{perk.title}</h3>
              <p className="text-text-secondary text-sm">{perk.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary p-8 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
          <p className="text-text-secondary mb-8">
            We don&apos;t always have formal openings, but we&apos;re always
            interested in meeting talented people. If you&apos;re a great fit,
            we&apos;ll make room.
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-5 bg-primary rounded-xl border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-text-primary font-medium">
                  Senior Full-Stack Developer
                </h3>
                <p className="text-text-muted text-sm">
                  React, Node.js, TypeScript &middot; Remote
                </p>
              </div>
              <Link
                href="/contact"
                className="px-4 py-2 bg-accent/10 text-accent text-sm rounded-lg hover:bg-accent/20 transition-colors whitespace-nowrap"
              >
                Apply
              </Link>
            </div>
            <div className="p-5 bg-primary rounded-xl border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-text-primary font-medium">
                  AI/ML Engineer
                </h3>
                <p className="text-text-muted text-sm">
                  Python, PyTorch, LLMs &middot; Remote
                </p>
              </div>
              <Link
                href="/contact"
                className="px-4 py-2 bg-accent/10 text-accent text-sm rounded-lg hover:bg-accent/20 transition-colors whitespace-nowrap"
              >
                Apply
              </Link>
            </div>
          </div>

          <p className="text-text-muted text-sm">
            Don&apos;t see your role?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Reach out anyway
            </Link>{" "}
            — we&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
