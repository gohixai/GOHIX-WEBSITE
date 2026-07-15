import { motion } from "framer-motion";
import { Lightbulb, Heart, Globe, Rocket } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";

const aboutItems = [
  {
    icon: Lightbulb,
    title: "Who We Are",
    description:
      "GOHIX is a technology initiative rooted in curiosity and a passion for building. We are a collective of learners, builders, and researchers exploring the frontiers of artificial intelligence, software engineering, and open-source technology.",
  },
  {
    icon: Heart,
    title: "Why We Exist",
    description:
      "Technology has the potential to solve some of humanity's most pressing challenges. GOHIX exists to contribute meaningfully to this mission — through learning, collaboration, research, and the development of intelligent systems that empower people.",
  },
  {
    icon: Globe,
    title: "Our Approach",
    description:
      "We believe in open collaboration and knowledge sharing. Every project, every line of code, and every research finding is an opportunity to learn and to help others learn. We are committed to transparency, integrity, and responsible growth.",
  },
  {
    icon: Rocket,
    title: "Looking Forward",
    description:
      "We are building for the long term. Our focus is on creating a strong foundation of knowledge, community, and technological capability that will enable us to tackle increasingly complex and impactful challenges in the years ahead.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Building with purpose, for the long term"
          description="GOHIX is more than a technology initiative — it's a commitment to learning, innovation, and the open pursuit of knowledge."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {aboutItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-8 lg:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 card-hover"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gohix-50 dark:bg-gohix-950 flex items-center justify-center group-hover:bg-gohix-100 dark:group-hover:bg-gohix-900/50 transition-colors duration-300">
                <item.icon className="h-6 w-6 text-gohix-600 dark:text-gohix-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 font-display">
                {item.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
