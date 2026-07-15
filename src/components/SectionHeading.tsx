import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000",
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-gohix-600 dark:text-gohix-400 mb-4"
        >
          {label}
        </motion.span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base lg:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
