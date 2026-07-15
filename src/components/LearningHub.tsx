import { motion } from "framer-motion";
import { BookOpen, Route, FileText, BookMarked, GraduationCap, Code2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";

const resources = [
  {
    icon: Route,
    title: "Learning Roadmaps",
    description: "Curated paths for mastering AI, web development, and software engineering from fundamentals to advanced topics.",
    count: "Coming Soon",
  },
  {
    icon: FileText,
    title: "Tutorials",
    description: "Step-by-step guides and hands-on tutorials covering practical topics in technology and programming.",
    count: "Coming Soon",
  },
  {
    icon: BookMarked,
    title: "Guides",
    description: "Comprehensive guides on tools, frameworks, and best practices for modern software development.",
    count: "Coming Soon",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Well-structured documentation for GOHIX projects, tools, and open-source contributions.",
    count: "Coming Soon",
  },
  {
    icon: GraduationCap,
    title: "Learning Articles",
    description: "In-depth articles exploring concepts, research findings, and insights from the technology world.",
    count: "Coming Soon",
  },
  {
    icon: Code2,
    title: "Code Examples",
    description: "Practical code snippets and sample projects to accelerate your learning and development.",
    count: "Coming Soon",
  },
];

export default function LearningHub() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="learning" className="relative py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Learning Hub"
          title="Knowledge for everyone"
          description="Free, high-quality resources to help you learn, build, and grow. Our learning hub is growing — more content is on the way."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group p-6 lg:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 card-hover cursor-pointer"
            >
              <div className="mb-4 h-11 w-11 rounded-xl bg-gohix-50 dark:bg-gohix-950 flex items-center justify-center group-hover:bg-gohix-100 dark:group-hover:bg-gohix-900/50 group-hover:scale-110 transition-all duration-300">
                <resource.icon className="h-5 w-5 text-gohix-600 dark:text-gohix-400" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 font-display">
                {resource.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                {resource.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-gohix-50 dark:bg-gohix-950/50 text-gohix-600 dark:text-gohix-400">
                {resource.count}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-gohix-50 to-emerald-50 dark:from-gohix-950/30 dark:to-emerald-950/20 border border-gohix-100 dark:border-gohix-900/30 text-center"
        >
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display mb-2">
            Start Learning Today
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-lg mx-auto">
            Our learning resources are being developed. Join the community to get notified when new content is available.
          </p>
          <a
            href="#community"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200"
          >
            Join Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
