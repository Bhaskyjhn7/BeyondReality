"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeWritingAnimation } from "@/components/animations/CodeWritingAnimation";
import { MultiAgentAnimation } from "@/components/animations/MultiAgentAnimation";
import { AIWorkflowAnimation } from "@/components/animations/AIWorkflowAnimation";
import { AnimateIn } from "@/components/ui/AnimateIn";

const tabs = [
  { id: "code", label: "Code Generation", icon: "⌨️" },
  { id: "agents", label: "Multi-Agent AI", icon: "🤖" },
  { id: "workflow", label: "AI Workflows", icon: "⚡" },
];

export function TechShowcase() {
  const [activeTab, setActiveTab] = useState("code");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-teal-50 to-transparent rounded-full opacity-60" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-50 to-transparent rounded-full opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimateIn className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
            What We Build
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Intelligent systems in action
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From autonomous agents to production AI pipelines — see the kind of
            technology we ship for our clients.
          </p>
        </AnimateIn>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface rounded-xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 gradient-bg rounded-lg"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            {activeTab === "code" && <CodeWritingAnimation />}
            {activeTab === "agents" && <MultiAgentAnimation />}
            {activeTab === "workflow" && <AIWorkflowAnimation />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
