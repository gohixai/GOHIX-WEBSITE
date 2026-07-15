import { motion } from "framer-motion";
import { Check, Clock, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";

const roadmapPhases = [
  {
    phase: "Phase 1",
    label: "Foundation",
    status: "current",
    description: "Building the groundwork for everything that follows.",
    items: [
      { label: "Core Team Formation", done: true },
      { label: "Learning Infrastructure", done: true },
      { label: "Initial Projects", done: true },
      { label: "Community Building", done: false },
      { label: "Research Foundation", done: false },
    ],
  },
  {
    phase: "Phase 2",
    label: "Growth",
    status: "upcoming",
    description: "Expanding our reach and deepening our capabilities.",
    items: [
      { label: "Hackathons", done: false },
      { label: "Workshops", done: false },
      { label: "Open Source Products", done: false },
      { label: "Internship Program", done: false },
      { label: "Research Programs", done: false },
    ],
  },
  {
    phase: "Phase 3",
    label: "Impact",
    status: "upcoming",
    description: "Scaling our impact through technology and collaboration.",
    items: [
      { label: "AI Solutions", done: false },
      { label: "Global Collaboration", done: false },
      { label: "Educational Platform", done: false },
      { label: "Developer Tools", done: false },
      { label: "Research Publications", done: false },
    ],
  },
];

export default function Roadmap() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="roadmap" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Roadmap"
          title="Our journey ahead"
          description="A transparent look at where we are and where we're heading. This roadmap evolves as we learn and grow."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {roadmapPhases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={cn(
                "relative p-6 lg:p-8 rounded-3xl border transition-all duration-500",
                phase.status === "current"
                  ? "bg-gohix-50 dark:bg-gohix-950/30 border-gohix-200 dark:border-gohix-800/50 shadow-lg shadow-gohix-500/5"
                  : "bg-white dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800 opacity-70 hover:opacity-100"
              )}
            >
              {/* Status badge */}
              <div className="flex items-center gap-2 mb-6">
                {phase.status === "current" ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gohix-500 text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Current
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                    <Clock className="h-3 w-3" />
                    Coming Soon
                  </span>
                )}
              </div>

              <span className="text-xs font-semibold tracking-widest uppercase text-gohix-600 dark:text-gohix-400">
                {phase.phase}
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1 mb-3 font-display">
                {phase.label}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                {phase.description}
              </p>

              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm">
                    {item.done ? (
                      <Check className="h-4 w-4 text-gohix-500 flex-shrink-0" />
                    ) : (
                      <ArrowRight className="h-4 w-4 text-neutral-300 dark:text-neutral-700 flex-shrink-0" />
                    )}
                    <span
                      className={cn(
                        item.done
                          ? "text-neutral-700 dark:text-neutral-200"
                          : "text-neutral-400 dark:text-neutral-500"
                      )}
                    >
                      {item.label}
                    </span>
                    {!item.done && phase.status === "current" && (
                      <span className="text-[10px] text-gohix-500 font-medium ml-auto">In progress</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
