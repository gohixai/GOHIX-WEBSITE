import { motion } from "framer-motion";
import { Shield, Lightbulb, GraduationCap, Users, Heart, Compass, Timer, Repeat, Telescope } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We do what's right, even when no one is watching. Honesty and transparency guide every decision.",
    gradient: "from-gohix-500 to-emerald-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We question the status quo and explore creative solutions to complex challenges.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    description: "Growth comes from curiosity. We embrace every opportunity to learn, unlearn, and relearn.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Great things are built together. Collaboration amplifies our individual strengths.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Heart,
    title: "Respect",
    description: "Every voice matters. We create spaces where diverse perspectives are valued and heard.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Compass,
    title: "Curiosity",
    description: "The drive to explore the unknown fuels our creativity and pushes us beyond our comfort zones.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Timer,
    title: "Discipline",
    description: "Consistent effort compounds over time. We show up, do the work, and stay the course.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Repeat,
    title: "Consistency",
    description: "Small, deliberate actions repeated daily create extraordinary results over the long term.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Telescope,
    title: "Long-term Thinking",
    description: "We play the infinite game. Every decision considers not just today, but decades ahead.",
    gradient: "from-rose-500 to-orange-500",
  },
];

export default function CoreValues() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Core Values"
          title="The principles that define us"
          description="Our values are not just words on a page — they are the foundation of every project, every collaboration, and every decision we make."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 card-hover overflow-hidden"
            >
              {/* Gradient accent line */}
              <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500", value.gradient)} />

              <div className={cn("mb-4 h-11 w-11 rounded-xl bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-300", value.gradient)}>
                <value.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 font-display">
                {value.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
