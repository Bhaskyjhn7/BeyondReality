"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";

const capabilities = [
  {
    title: "Web Applications",
    description: "Responsive, high-performance web apps built with modern frameworks. From complex dashboards to customer-facing platforms.",
    icon: "🌐",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform iOS and Android apps with native performance. React Native for speed, native when needed.",
    icon: "📱",
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for scale. Clean documentation, versioning, and seamless third-party integrations.",
    icon: "🔗",
  },
  {
    title: "Cloud Architecture",
    description: "Built for the cloud from day one. Auto-scaling, fault-tolerant, and cost-optimized on AWS, Azure, or GCP.",
    icon: "☁️",
  },
  {
    title: "MVP & Prototyping",
    description: "Validate your idea in 6-10 weeks. Ship a working product, learn from real users, and iterate fast.",
    icon: "🚀",
  },
  {
    title: "Legacy Modernization",
    description: "Migrate aging systems to modern stacks without disrupting operations. Incremental, safe, and thoroughly tested.",
    icon: "🔄",
  },
];

const techStack = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js / TypeScript", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS / GCP", category: "Cloud" },
  { name: "Docker / K8s", category: "DevOps" },
];

export default function CustomDevelopmentPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 rounded-full mb-6">
              <span className="text-sm">⚡</span>
              <span className="text-violet-600 text-sm font-medium">Custom Development</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Software that{" "}
              <span className="gradient-text">ships & scales</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We don&apos;t just write code — we build products. Every
              architecture decision is made with your business goals, users,
              and long-term maintainability in mind.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-3xl font-bold">What we build</h2>
          </AnimateIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="h-full p-8 bg-white rounded-2xl border border-border card-hover">
                  <span className="text-3xl mb-4 block">{cap.icon}</span>
                  <h3 className="text-lg font-bold text-text-primary mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our tech stack</h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              We choose the right tools for your problem — never the other way around.
            </p>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <div className="p-5 bg-white rounded-xl border border-border card-hover text-center">
                  <div className="text-text-primary font-medium text-sm mb-1">
                    {tech.name}
                  </div>
                  <div className="text-text-muted text-xs">{tech.category}</div>
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
