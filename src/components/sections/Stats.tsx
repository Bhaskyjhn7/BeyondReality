"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimateIn } from "@/components/ui/AnimateIn";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", description: "Across 12+ industries" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Based on post-project surveys" },
  { value: 5, suffix: "x", label: "Average ROI", description: "Return on technology investment" },
];

export function Stats() {
  return (
    <section className="section-padding bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Numbers that speak for themselves
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Proven results across industries, technologies, and business challenges.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <AnimateIn key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-slate-500 text-sm">{stat.description}</div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
