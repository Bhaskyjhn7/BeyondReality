"use client";

import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";

const values = [
  {
    title: "Understand First",
    description: "We invest in understanding your business before writing code. This saves 10x in rework and builds the right thing the first time.",
    icon: "🎯",
  },
  {
    title: "Radical Transparency",
    description: "Working software every two weeks. Real-time access to progress. No black boxes, no surprises, no hidden costs.",
    icon: "🔍",
  },
  {
    title: "Own the Outcome",
    description: "We don't ship code — we solve problems. If it doesn't achieve the goal, we iterate until it does.",
    icon: "🏆",
  },
  {
    title: "Senior Only",
    description: "Every person on your project is experienced. No juniors learning on your budget. Small team, big capability.",
    icon: "⚡",
  },
];

const team = [
  {
    name: "Founder & CEO",
    role: "Business Strategy & Client Lead",
    bio: "Deep expertise translating complex business needs into technology solutions. Expert in requirements engineering, stakeholder management, and delivering ROI.",
    initials: "BR",
  },
  {
    name: "Tech Lead",
    role: "Architecture & Engineering",
    bio: "Full-stack architect specializing in cloud-native systems, scalable APIs, and modern frontend. Ships clean, maintainable code.",
    initials: "TL",
  },
  {
    name: "AI Engineer",
    role: "Machine Learning & AI",
    bio: "Builds production ML systems — from custom models to GenAI integrations. Focused on reliability, explainability, and real-world performance.",
    initials: "AI",
  },
  {
    name: "Full-Stack Developer",
    role: "Product Development",
    bio: "React, Node.js, and TypeScript expert. Obsessed with performance, accessibility, and user experience that delights.",
    initials: "FD",
  },
  {
    name: "Designer & DevOps",
    role: "Design & Infrastructure",
    bio: "Dual expertise: crafts intuitive interfaces AND builds the CI/CD pipelines and infrastructure to ship them reliably.",
    initials: "DD",
  },
];

export default function AboutPage() {
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
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              A small team with{" "}
              <span className="gradient-text">big ambition</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              We&apos;re five senior professionals who chose to work together
              because we believe small, focused teams build better software.
              With deep business analysis expertise at the helm, we
              understand your problem before we start solving it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-3xl font-bold">What drives us</h2>
          </AnimateIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 bg-white rounded-2xl border border-border card-hover h-full">
                  <span className="text-3xl mb-4 block">{value.icon}</span>
                  <h3 className="text-lg font-bold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
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
            <h2 className="text-3xl font-bold mb-4">The team</h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Small enough to be agile, experienced enough to be reliable.
            </p>
          </AnimateIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.initials}>
                <div className="p-8 bg-white rounded-2xl border border-border card-hover h-full">
                  <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-5">
                    <span className="text-white font-bold text-sm">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {member.bio}
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
