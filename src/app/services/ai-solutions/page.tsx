"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";

const capabilities = [
  {
    title: "Custom AI/ML Models",
    description: "Purpose-built models trained on your data for classification, prediction, recommendation, and anomaly detection.",
    icon: "🧠",
  },
  {
    title: "GenAI & LLM Integration",
    description: "Integrate large language models into workflows — chatbots, document processing, content generation, and intelligent search.",
    icon: "💬",
  },
  {
    title: "Intelligent Automation",
    description: "Automate complex processes with AI that handles exceptions, learns from feedback, and improves continuously.",
    icon: "⚡",
  },
  {
    title: "Predictive Analytics",
    description: "Turn historical data into forward-looking insights — demand forecasting, churn prediction, pricing optimization.",
    icon: "📊",
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis for quality inspection, document digitization, object detection, and monitoring.",
    icon: "👁️",
  },
  {
    title: "AI Strategy & Readiness",
    description: "Not sure where AI fits? We assess your data maturity, identify high-ROI opportunities, and build a practical roadmap.",
    icon: "🗺️",
  },
];

export default function AISolutionsPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 rounded-full mb-6">
              <span className="text-sm">🤖</span>
              <span className="text-accent text-sm font-medium">AI Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              AI that solves{" "}
              <span className="gradient-text">real problems</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Not AI for the sake of AI. We build intelligent systems that
              deliver measurable business outcomes — reducing costs, increasing
              revenue, or eliminating manual work that&apos;s holding you back.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Discuss Your AI Project
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
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our AI process</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From opportunity identification to production deployment — a proven path to AI value.
            </p>
          </AnimateIn>
          <StaggerContainer className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", detail: "Identify highest-ROI AI opportunities" },
              { step: "02", title: "Prototype", detail: "Working proof-of-concept in 2-4 weeks" },
              { step: "03", title: "Productionize", detail: "Scale with proper MLOps & monitoring" },
              { step: "04", title: "Evolve", detail: "Continuous improvement with new data" },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center p-6 bg-white rounded-2xl border border-border card-hover">
                  <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xs font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.detail}</p>
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
