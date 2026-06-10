import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-16 lg:p-20 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to build something great?
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Start with a free 30-minute strategy call. We&apos;ll discuss
                your challenge, explore what&apos;s possible, and outline a
                clear path forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-white text-accent font-semibold rounded-xl hover:shadow-lg transition-all text-center"
                >
                  Book Free Strategy Call
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-3.5 border-2 border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-center"
                >
                  See Our Work
                </Link>
              </div>
              <p className="mt-6 text-blue-200 text-sm">
                No commitment required &middot; Response within 2 hours
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
