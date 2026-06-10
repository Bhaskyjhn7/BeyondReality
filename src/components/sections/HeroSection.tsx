"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 to-violet-50 rounded-full opacity-70" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50 to-cyan-50 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-gradient-to-bl from-violet-50 to-pink-50 rounded-full opacity-40" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-subtle rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium">
                Accepting new projects for Q3 2026
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            We build software
            <br />
            that moves your
            <br />
            <span className="gradient-text">business forward</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
          >
            From AI-powered products to full-stack platforms, we partner with
            ambitious companies to design, build, and scale technology solutions
            that deliver real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-primary text-center">
              Start a Project
            </Link>
            <Link href="/case-studies" className="btn-secondary text-center">
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block absolute top-1/3 right-12 xl:right-24"
        >
          <div className="relative">
            <div className="w-72 h-72 xl:w-80 xl:h-80 bg-white rounded-3xl shadow-2xl shadow-black/5 border border-border p-6 animate-float">
              <div className="w-full h-full rounded-2xl gradient-bg-subtle flex flex-col items-center justify-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-violet-500" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500" />
                </div>
                <div className="space-y-2 w-full px-6">
                  <div className="h-2.5 bg-accent/20 rounded-full w-full" />
                  <div className="h-2.5 bg-violet-200 rounded-full w-3/4" />
                  <div className="h-2.5 bg-cyan-200 rounded-full w-1/2" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 w-full px-6">
                  <div className="h-12 bg-accent/10 rounded-lg" />
                  <div className="h-12 bg-violet-100 rounded-lg" />
                  <div className="h-12 bg-cyan-100 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-xl shadow-black/5 border border-border flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
