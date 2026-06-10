import Link from "next/link";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-glow-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="animate-fade-in-up">
            <p className="text-accent-light text-sm font-medium tracking-wide uppercase mb-6">
              AI Solutions &middot; Custom Software &middot; Strategic Consulting
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              Engineering{" "}
              <span className="gradient-text">What&apos;s Next</span>
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We turn complex ideas into production-ready products. From AI
              strategy to full-stack delivery, we help businesses move beyond
              what they thought possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-accent hover:bg-accent-glow text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-3.5 border border-surface-light hover:border-accent text-text-primary font-medium rounded-lg transition-all"
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "27+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5x", label: "Avg ROI for Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We Build
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Three core capabilities. One team that understands your business
              before writing a single line of code.
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A proven process refined over 27 years. We understand the problem
              first — then we build the right solution.
            </p>
          </div>
          <HowWeWork />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real problems. Real solutions. Real results.
            </p>
          </div>
          <CaseStudyPreview />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Common Questions
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
