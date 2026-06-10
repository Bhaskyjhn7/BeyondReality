"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const perks = [
  { title: "Real problems", description: "Every project is different. Work across industries, technologies, and domains.", icon: "🎯" },
  { title: "Senior-only team", description: "Everyone here is experienced. Learn from peers, not manage juniors.", icon: "⚡" },
  { title: "Full autonomy", description: "We trust you to make decisions and own your work end-to-end.", icon: "🔑" },
  { title: "Remote-friendly", description: "Work from wherever you're most productive. Output over hours.", icon: "🌍" },
];

const positions = [
  { title: "Senior Full-Stack Developer", tags: "React, Node.js, TypeScript", location: "Remote" },
  { title: "AI/ML Engineer", tags: "Python, PyTorch, LLMs", location: "Remote" },
];

export default function CareersPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Build the future{" "}
            <span className="gradient-text">with us</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Small team, big problems, no politics. We&apos;re looking for
            experienced builders who want autonomy, variety, and work that
            matters.
          </p>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-20">
          {perks.map((perk) => (
            <StaggerItem key={perk.title}>
              <div className="p-6 bg-white rounded-2xl border border-border card-hover">
                <span className="text-2xl mb-3 block">{perk.icon}</span>
                <h3 className="text-text-primary font-bold mb-2">{perk.title}</h3>
                <p className="text-text-secondary text-sm">{perk.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn>
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-border">
            <h2 className="text-2xl font-bold mb-2">Open positions</h2>
            <p className="text-text-secondary mb-8">
              Don&apos;t see your role? We&apos;re always open to meeting great people.
            </p>

            <div className="space-y-4 mb-8">
              {positions.map((pos) => (
                <div
                  key={pos.title}
                  className="p-5 bg-surface rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-hover transition-colors"
                >
                  <div>
                    <h3 className="text-text-primary font-semibold">{pos.title}</h3>
                    <p className="text-text-muted text-sm">{pos.tags} &middot; {pos.location}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 bg-accent-subtle text-accent text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-all whitespace-nowrap text-center"
                  >
                    Apply
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-text-muted text-sm">
              Interested but don&apos;t see a fit?{" "}
              <Link href="/contact" className="text-accent hover:underline font-medium">
                Reach out anyway
              </Link>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
