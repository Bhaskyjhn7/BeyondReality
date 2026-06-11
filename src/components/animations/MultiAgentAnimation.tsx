"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const agents = [
  { id: "planner", label: "Planner", x: 50, y: 15, icon: "🧠" },
  { id: "researcher", label: "Researcher", x: 15, y: 55, icon: "🔍" },
  { id: "coder", label: "Coder", x: 50, y: 55, icon: "💻" },
  { id: "reviewer", label: "Reviewer", x: 85, y: 55, icon: "✓" },
  { id: "deployer", label: "Deployer", x: 50, y: 90, icon: "🚀" },
];

const connections = [
  { from: "planner", to: "researcher" },
  { from: "planner", to: "coder" },
  { from: "planner", to: "reviewer" },
  { from: "researcher", to: "coder" },
  { from: "coder", to: "reviewer" },
  { from: "reviewer", to: "deployer" },
];

function getAgentPos(id: string) {
  const agent = agents.find((a) => a.id === id);
  return agent ? { x: agent.x, y: agent.y } : { x: 0, y: 0 };
}

export function MultiAgentAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg"
    >
      <div className="bg-white rounded-2xl border border-border shadow-xl p-6 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
            Multi-Agent System — Live
          </span>
        </div>

        <div className="relative w-full aspect-square max-h-[320px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {connections.map((conn, i) => {
              const from = getAgentPos(conn.from);
              const to = getAgentPos(conn.to);
              return (
                <g key={i}>
                  <motion.line
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="#99f6e4"
                    strokeWidth="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                  />
                  <motion.circle
                    r="1"
                    fill="#0f766e"
                    initial={{ opacity: 0 }}
                    animate={
                      isInView
                        ? {
                            opacity: [0, 1, 1, 0],
                            cx: [from.x, from.x, to.x, to.x],
                            cy: [from.y, from.y, to.y, to.y],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      delay: 1.5 + i * 0.4,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              className="absolute flex flex-col items-center"
              style={{
                left: `${agent.x}%`,
                top: `${agent.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 flex items-center justify-center shadow-sm"
                animate={isInView ? { y: [0, -3, 0] } : {}}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-lg">{agent.icon}</span>
              </motion.div>
              <span className="mt-1.5 text-[10px] font-semibold text-text-secondary">
                {agent.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-text-muted border-t border-border pt-3">
          <span>5 agents coordinating</span>
          <span className="text-emerald-600 font-medium">Task: Complete</span>
        </div>
      </div>
    </motion.div>
  );
}
