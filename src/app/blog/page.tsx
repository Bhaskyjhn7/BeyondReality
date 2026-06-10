import Link from "next/link";

export const metadata = {
  title: "Blog | Beyond Reality",
  description: "Insights on AI, software development, and technology strategy from the Beyond Reality team.",
};

const posts = [
  {
    slug: "why-most-software-projects-fail",
    title: "Why Most Software Projects Fail (And How to Prevent It)",
    excerpt:
      "80% of software projects miss their deadline or budget. After 27 years in the industry, here are the 3 root causes — and none of them are technical.",
    date: "2026-06-10",
    readTime: "5 min read",
    category: "Strategy",
  },
  {
    slug: "ai-for-smbs-whats-real",
    title: "AI for SMBs: What's Real and What's Hype",
    excerpt:
      "You don't need a data science team or million-dollar budget to benefit from AI. Here's a practical guide to what's actually achievable today for businesses with 10-500 employees.",
    date: "2026-06-08",
    readTime: "7 min read",
    category: "AI",
  },
  {
    slug: "true-cost-of-bad-requirements",
    title: "The True Cost of Bad Requirements",
    excerpt:
      "A $50K feature built from vague requirements becomes a $200K feature after 3 rounds of rework. Here's how proper discovery saves you 4x on every project.",
    date: "2026-06-05",
    readTime: "4 min read",
    category: "Process",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Insights & <span className="gradient-text">Ideas</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Practical thinking on AI, software development, and making the right
            technology decisions. No fluff.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group p-8 bg-secondary rounded-2xl border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                  {post.category}
                </span>
                <span className="text-text-muted text-sm">{post.date}</span>
                <span className="text-text-muted text-sm">
                  &middot; {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
