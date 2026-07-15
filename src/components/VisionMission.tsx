import { motion } from "framer-motion";
import { Eye, BookOpen, Lightbulb, Share2, GraduationCap, Leaf } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";

const missionItems = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Technology evolves rapidly. We commit to being lifelong learners, constantly exploring new ideas, tools, and methodologies.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description: "Pushing the boundaries of what's possible through rigorous research and creative problem-solving in AI and software engineering.",
  },
  {
    icon: Share2,
    title: "Open Source Contribution",
    description: "Contributing to the global knowledge commons. We build in the open, share our work, and help others grow.",
  },
  {
    icon: GraduationCap,
    title: "Technology Education",
    description: "Making technology education accessible. From tutorials to workshops, we create resources that empower learners.",
  },
  {
    icon: Leaf,
    title: "Responsible Growth",
    description: "Growing deliberately and responsibly. We prioritize quality, ethics, and long-term sustainability over rapid scaling.",
  },
];

export default function VisionMission() {
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();

  return (
    <section id="vision" className="relative py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Vision */}
        <div ref={visionRef}>
          <SectionHeading
            label="Vision"
            title="A future where intelligent technology empowers everyone"
            description="We envision a world where artificial intelligence and advanced software systems are accessible, transparent, and designed to solve real-world problems — not create new ones."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative p-8 lg:p-12 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gohix-500/10 to-transparent rounded-bl-3xl" />
              <Eye className="h-8 w-8 text-gohix-500 mb-6" />
              <blockquote className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-display">
                &ldquo;We are building toward a future where technology serves humanity — 
                where intelligent systems are designed with care, deployed with integrity, 
                and accessible to communities everywhere. This is our long-term vision: 
                not just building technology, but building the right technology, the right way.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <div ref={missionRef} className="mt-32">
          <SectionHeading
            label="Mission"
            title="Our guiding commitments"
            description="Every initiative at GOHIX is driven by these core missions — the principles that guide how we learn, build, and grow together."
          />

          <div
            className={cn(
              "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000",
              missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            {missionItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={missionVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group p-6 lg:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 card-hover"
              >
                <div className="mb-4 h-10 w-10 rounded-xl bg-gohix-50 dark:bg-gohix-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-5 w-5 text-gohix-600 dark:text-gohix-400" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
