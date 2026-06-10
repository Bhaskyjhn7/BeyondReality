import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Build Something{" "}
          <span className="gradient-text">Beyond?</span>
        </h2>
        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
          Start with a free 30-minute Technology Assessment. We&apos;ll discuss
          your challenges, explore what&apos;s possible, and outline a clear
          path forward. No commitment, no sales pitch.
        </p>
        <Link
          href="/contact"
          className="inline-flex px-8 py-3.5 bg-accent hover:bg-accent-glow text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          Book Your Free Consultation
        </Link>
        <p className="mt-4 text-text-muted text-sm">
          Usually respond within 2 hours during business days
        </p>
      </div>
    </section>
  );
}
