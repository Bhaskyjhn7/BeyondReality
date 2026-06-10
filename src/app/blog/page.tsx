"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const posts = [
  {
    slug: "why-most-software-projects-fail",
    title: "Why Most Software Projects Fail (And How to Prevent It)",
    excerpt:
      "80% of software projects miss their deadline or budget. Here are the 3 root causes we see repeatedly — and none of them are technical.",
    date: "Jun 10, 2026",
    readTime: "5 min read",
    category: "Strategy",
    color: "bg-blue-50 text-blue-700",
  },
  {
    slug: "ai-for-smbs-whats-real",
    title: "AI for SMBs: What's Real and What's Hype",
    excerpt:
      "You don't need a data science team or million-dollar budget to benefit from AI. Here's what's actually achievable today for businesses with 10-500 employees.",
    date: "Jun 8, 2026",
    readTime: "7 min read",
    category: "AI",
    color: "bg-violet-50 text-violet-700",
  },
  {
    slug: "true-cost-of-bad-requirements",
    title: "The True Cost of Bad Requirements",
    excerpt:
      "A $50K feature built from vague requirements becomes $200K after 3 rounds of rework. Here's how proper discovery saves you 4x on every project.",
    date: "Jun 5, 2026",
    readTime: "4 min read",
    category: "Process",
    color: "bg-amber-50 text-amber-700",
  },
];

export default function BlogPage() {
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
            Insights
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Ideas & <span className="gradient-text">perspectives</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Practical thinking on AI, software development, and making the
            right technology decisions. No fluff, no jargon.
          </p>
        </motion.div>

        <StaggerContainer className="space-y-6">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-8 md:p-10 bg-white rounded-2xl border border-border card-hover"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 ${post.color} text-xs font-semibold rounded-lg`}>
                    {post.category}
                  </span>
                  <span className="text-text-muted text-sm">{post.date}</span>
                  <span className="text-text-muted text-sm">&middot; {post.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-text-secondary leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                  Read article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
