import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "About Us | Beyond Reality",
  description:
    "A 5-person team with 27+ years of combined expertise in business analysis, AI, and software engineering. We build what others can't scope.",
};

const values = [
  {
    title: "Understand First, Build Second",
    description:
      "We invest heavily in understanding your business before writing code. This costs less upfront and saves 10x in rework.",
  },
  {
    title: "Radical Transparency",
    description:
      "You see working software every two weeks. No black boxes, no surprises, no invoices for work you can't verify.",
  },
  {
    title: "Own the Outcome",
    description:
      "We don't just deliver code — we care whether it solves the actual problem. If it doesn't, we fix it.",
  },
  {
    title: "Stay Small, Think Big",
    description:
      "A tight team means every person on your project is senior. No juniors learning on your dime.",
  },
];

const team = [
  {
    name: "Founder",
    role: "CEO & Business Lead",
    bio: "27 years of business analysis and technology consulting. Expert in translating complex business needs into technical solutions that deliver measurable ROI.",
  },
  {
    name: "Tech Lead",
    role: "CTO & Architect",
    bio: "Full-stack architect with deep expertise in cloud-native systems, AI/ML infrastructure, and scalable application design.",
  },
  {
    name: "Engineer",
    role: "Full-Stack Developer",
    bio: "React, Node.js, and Python specialist. Obsessed with clean code, performance, and delightful user experiences.",
  },
  {
    name: "AI Engineer",
    role: "AI/ML Engineer",
    bio: "Machine learning and GenAI specialist. Builds production ML systems that are reliable, explainable, and continuously improving.",
  },
  {
    name: "Creative Ops",
    role: "Designer & DevOps",
    bio: "Dual-threat: crafts intuitive interfaces AND builds the infrastructure to deploy them reliably at scale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              About Beyond Reality
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Small Team.{" "}
              <span className="gradient-text">Serious Capability.</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              We&apos;re a 5-person studio that punches above our weight. Every
              team member is senior. Every project gets our full attention. And
              with 27 years of business analysis experience at the helm, we
              understand your problem before we start solving it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-primary rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">The Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.role}
                className="p-6 border border-border rounded-xl hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-sm">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-text-primary font-semibold">
                  {member.name}
                </h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
