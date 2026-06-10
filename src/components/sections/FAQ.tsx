"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do you price your services?",
    answer:
      "We offer flexible pricing: fixed-price for well-scoped projects, time & materials for evolving requirements, and monthly retainers for ongoing support. Every engagement starts with a free 30-minute consultation where we scope the work and provide a transparent estimate.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "MVPs typically take 6-10 weeks. Full product builds range from 3-6 months depending on complexity. We work in 2-week sprints so you see progress early and often — no surprises at the end.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "Both. We help startups validate ideas quickly with MVPs, and we help established companies modernize systems and integrate AI. Our consulting background means we're equally comfortable in boardrooms and standups.",
  },
  {
    question: "What makes you different from other dev shops?",
    answer:
      "27 years of business analysis experience. Most agencies start coding immediately. We start by understanding your problem deeply — the business context, user needs, and constraints. This means fewer pivots, less waste, and solutions that actually solve the right problem.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We can augment your team with specific expertise (AI/ML, architecture, frontend), lead a project end-to-end, or provide strategic consulting to guide your internal team's work.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface/50 transition-colors"
          >
            <span className="text-text-primary font-medium text-sm pr-4">
              {faq.question}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`text-text-muted shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-text-secondary text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
