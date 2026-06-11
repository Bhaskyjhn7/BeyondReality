"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const codeLines = [
  { text: "import { Agent } from '@br/ai-core';", color: "text-teal-300" },
  { text: "", color: "" },
  { text: "const analyst = new Agent({", color: "text-slate-200" },
  { text: "  model: 'gpt-4-turbo',", color: "text-emerald-300" },
  { text: "  role: 'data-analyst',", color: "text-emerald-300" },
  { text: "  tools: [queryDB, generateChart],", color: "text-amber-300" },
  { text: "});", color: "text-slate-200" },
  { text: "", color: "" },
  { text: "const insights = await analyst.run({", color: "text-slate-200" },
  { text: "  task: 'Analyze Q3 revenue trends',", color: "text-teal-200" },
  { text: "  context: salesData,", color: "text-teal-200" },
  { text: "});", color: "text-slate-200" },
  { text: "", color: "" },
  { text: "// 3.2x faster than manual analysis", color: "text-slate-500" },
];

export function CodeWritingAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    setIsTyping(true);

    let lineIndex = 0;
    let charIndex = 0;
    const typeSpeed = 30;

    const interval = setInterval(() => {
      if (lineIndex >= codeLines.length) {
        clearInterval(interval);
        setIsTyping(false);
        return;
      }

      const currentLine = codeLines[lineIndex];
      if (charIndex >= currentLine.text.length) {
        lineIndex++;
        charIndex = 0;
        setVisibleLines(lineIndex);
        setCurrentChar(0);
      } else {
        charIndex++;
        setCurrentChar(charIndex);
      }
    }, typeSpeed);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg"
    >
      <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs text-slate-500 font-mono">agent.ts</span>
        </div>
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[340px]">
          {codeLines.map((line, i) => {
            if (i > visibleLines) return null;
            const displayText =
              i < visibleLines
                ? line.text
                : line.text.slice(0, currentChar);
            return (
              <div key={i} className="flex">
                <span className="text-slate-600 select-none w-7 text-right mr-4 text-xs leading-relaxed">
                  {i + 1}
                </span>
                <span className={line.color || "text-slate-300"}>
                  {displayText}
                  {i === visibleLines && isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-teal-400 ml-0.5 -mb-0.5"
                    />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
