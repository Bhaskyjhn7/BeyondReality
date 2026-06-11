"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const workflowSteps = [
  { label: "Data Input", icon: "📥", status: "complete" },
  { label: "Pre-process", icon: "⚙️", status: "complete" },
  { label: "AI Model", icon: "🤖", status: "active" },
  { label: "Validate", icon: "✅", status: "pending" },
  { label: "Deploy", icon: "🚀", status: "pending" },
];

const dataParticles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  delay: i * 0.8,
}));

export function AIWorkflowAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-2xl border border-border shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-text-primary">
              AI Pipeline — Processing
            </span>
          </div>
          <span className="text-xs text-text-muted font-mono">run_id: br-7x92k</span>
        </div>

        <div className="p-6">
          <div className="relative flex items-center justify-between">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.label}
                className="flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg border ${
                    step.status === "complete"
                      ? "bg-teal-50 border-teal-200"
                      : step.status === "active"
                      ? "bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-300 shadow-md shadow-teal-100"
                      : "bg-slate-50 border-slate-200"
                  }`}
                  animate={
                    isInView && step.status === "active"
                      ? { scale: [1, 1.08, 1] }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {step.icon}
                </motion.div>
                <span
                  className={`mt-2 text-[11px] font-medium ${
                    step.status === "active"
                      ? "text-accent"
                      : "text-text-muted"
                  }`}
                >
                  {step.label}
                </span>
              </motion.div>
            ))}

            <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-100 -z-0" />
            <motion.div
              className="absolute top-6 left-6 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 -z-0"
              initial={{ width: 0 }}
              animate={isInView ? { width: "45%" } : {}}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            />

            {dataParticles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute top-5 left-6 w-2 h-2 rounded-full bg-teal-400"
                initial={{ opacity: 0, x: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: [0, 1, 1, 0],
                        x: [0, 80, 160, 220],
                      }
                    : {}
                }
                transition={{
                  duration: 2.5,
                  delay: 1.5 + p.delay,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <motion.div
            className="mt-8 bg-slate-50 rounded-xl p-4 border border-border"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-text-secondary">Live Logs</span>
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
            <div className="space-y-1.5 font-mono text-[11px]">
              <motion.div
                className="text-slate-500"
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.6 }}
              >
                <span className="text-teal-600">[00:01]</span> Ingested 2,847 records from source
              </motion.div>
              <motion.div
                className="text-slate-500"
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 2.0 }}
              >
                <span className="text-teal-600">[00:03]</span> Pre-processing: normalized, deduped → 2,411 clean
              </motion.div>
              <motion.div
                className="text-slate-500"
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 2.4 }}
              >
                <span className="text-emerald-600">[00:07]</span> Model inference running... confidence: 94.2%
              </motion.div>
              <motion.div
                className="text-slate-400"
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: [0, 1, 0.5, 1] } : {}}
                transition={{ delay: 2.8, duration: 1.5, repeat: Infinity }}
              >
                <span className="text-amber-500">[00:08]</span> Awaiting validation gate...
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
