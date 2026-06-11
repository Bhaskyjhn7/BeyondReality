"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full opacity-70" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-teal-50 to-cyan-50 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-gradient-to-bl from-emerald-50 to-cyan-50 rounded-full opacity-40" />
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

        {/* Floating animated terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block absolute top-1/4 right-8 xl:right-16"
        >
          <div className="relative animate-float">
            <div className="w-80 xl:w-[360px] bg-slate-900 rounded-2xl shadow-2xl shadow-black/20 border border-slate-700/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-[10px] text-slate-500 font-mono">workflow.ts</span>
              </div>
              <div className="p-4 font-mono text-xs leading-relaxed">
                <div className="text-teal-300">
                  <span className="text-slate-500">1</span>  import {"{"} pipeline {"}"} from &apos;@br/ai&apos;;
                </div>
                <div className="text-slate-400">
                  <span className="text-slate-500">2</span>
                </div>
                <div className="text-slate-200">
                  <span className="text-slate-500">3</span>  const result = await pipeline({"{"})
                </div>
                <div className="text-emerald-300">
                  <span className="text-slate-500">4</span>    agents: [&apos;analyst&apos;, &apos;coder&apos;],
                </div>
                <div className="text-amber-300">
                  <span className="text-slate-500">5</span>    task: &apos;optimize checkout&apos;,
                </div>
                <motion.div
                  className="text-teal-200"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-slate-500">6</span>    status: &apos;running...&apos;
                </motion.div>
                <div className="text-slate-200">
                  <span className="text-slate-500">7</span>  {"}"});
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -left-4 px-3 py-2 bg-white rounded-xl shadow-lg border border-border flex items-center gap-2"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-text-primary">2 agents active</span>
            </motion.div>

            <motion.div
              className="absolute -top-3 -right-3 px-3 py-1.5 bg-white rounded-lg shadow-lg border border-border"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-xs font-bold text-emerald-600">+340% faster</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
