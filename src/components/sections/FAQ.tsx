"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do you price your services?",
    answer:
      "We offer flexible pricing tailored to each project: fixed-price for well-scoped work, time & materials for evolving requirements, and monthly retainers for ongoing partnerships. Every engagement starts with a free strategy call where we scope the work and provide a transparent estimate — no surprises.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "MVPs typically ship in 6-10 weeks. Full product builds range from 3-6 months depending on complexity. We work in 2-week sprints with demos every Friday, so you see real progress from week one.",
  },
  {
    question: "Do you work with startups or established companies?",
    answer:
      "Both. We help startups validate ideas quickly with lean MVPs, and we help established companies modernize systems and integrate AI. Our deep business analysis expertise means we're equally effective in boardrooms and standups.",
  },
  {
    question: "What makes Beyond Reality different?",
    answer:
      "Most agencies start coding immediately. We start by understanding your business deeply — identifying the right problem before building the right solution. This means fewer pivots, less waste, and software that actually moves the needle.",
  },
  {
    question: "Can you augment our existing team?",
    answer:
      "Absolutely. We can embed with your team to provide AI/ML expertise, lead architecture decisions, or run an entire project end-to-end. We adapt to your workflow, not the other way around.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We pick the right tools for each problem. Our core expertise spans React/Next.js, Node.js, Python, PyTorch, cloud platforms (AWS/GCP), and modern DevOps. But technology choices are always driven by your business needs, never by preference.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimateIn>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Questions? We&apos;ve got answers.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              If you don&apos;t find what you&apos;re looking for, book a free
              call and we&apos;ll discuss your specific situation.
            </p>
            <a href="/contact" className="btn-primary inline-flex text-sm">
              Book a Free Call
            </a>
          </AnimateIn>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <AnimateIn key={index} delay={index * 0.05}>
                <div
                  className={`border rounded-xl overflow-hidden transition-colors ${
                    openIndex === index
                      ? "border-accent/30 bg-accent-subtle"
                      : "border-border bg-white"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-text-primary font-medium text-sm pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                        openIndex === index
                          ? "bg-accent text-white rotate-45"
                          : "bg-surface text-text-muted"
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-5">
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
