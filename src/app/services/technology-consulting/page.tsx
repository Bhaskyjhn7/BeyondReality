"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    title: "Architecture Review",
    description: "Independent assessment of your system architecture. Identify bottlenecks, risks, and opportunities before they become expensive problems.",
    icon: "🏗️",
  },
  {
    title: "AI Readiness Assessment",
    description: "Evaluate your data maturity, infrastructure, and team capabilities. Identify the highest-ROI AI opportunities for your business.",
    icon: "🤖",
  },
  {
    title: "Digital Strategy & Roadmap",
    description: "A clear, prioritized technology roadmap aligned with business goals. Actionable steps with timelines and investment estimates.",
    icon: "🗺️",
  },
  {
    title: "Technical Due Diligence",
    description: "Evaluating an acquisition or investment? We assess code quality, architecture decisions, technical debt, and team capability.",
    icon: "🔍",
  },
  {
    title: "Process Automation",
    description: "Map manual processes, calculate inefficiency costs, and design an automation roadmap that delivers ROI within months.",
    icon: "⚙️",
  },
  {
    title: "Vendor & Platform Selection",
    description: "Build vs. buy decisions backed by data. We evaluate options against your specific requirements, not generic checklists.",
    icon: "⚖️",
  },
];

export default function TechnologyConsultingPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full mb-6">
              <span className="text-sm">💡</span>
              <span className="text-amber-700 text-sm font-medium">Technology Consulting</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Make the right call{" "}
              <span className="gradient-text">before you build</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              The most expensive software is the wrong software. With 27 years
              of translating business needs into technical solutions, we help
              you invest in the right thing — the first time.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Book a Free Assessment
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-3xl font-bold">How we help</h2>
          </AnimateIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="h-full p-8 bg-white rounded-2xl border border-border card-hover">
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <h3 className="text-lg font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-3xl font-bold mb-4">When you need a consultant</h2>
          </AnimateIn>
          <StaggerContainer className="space-y-4">
            {[
              {
                q: "You're about to make a big technology investment",
                a: "An independent review can save 10x the consulting fee by catching misaligned assumptions early.",
              },
              {
                q: "You have a technical team but need strategic direction",
                a: "We provide the business-technology bridge — translating board-level goals into engineering roadmaps your team can execute.",
              },
              {
                q: "You're unsure if AI is hype or opportunity",
                a: "We cut through the noise with a practical assessment based on your actual data, processes, and goals.",
              },
            ].map((item) => (
              <StaggerItem key={item.q}>
                <div className="p-6 bg-white border border-border rounded-2xl card-hover">
                  <h3 className="text-text-primary font-semibold mb-2">
                    {item.q}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
