import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionHeading from "./SectionHeading";

export default function OurStory() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Story"
          title="From curiosity to creation"
        />

        <div
          ref={ref}
          className="mt-16 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed"
          >
            <p className="text-lg">
              GOHIX began with a simple question: <span className="text-neutral-800 dark:text-neutral-100 font-medium">
              what if we could bring together people who are passionate about technology, learning, and building — 
              and create something meaningful?</span>
            </p>

            <p>
              Like many great initiatives, it started small — with conversations, ideas, and a shared belief that 
              technology, when built thoughtfully and collaboratively, can have a profound positive impact. 
              The name &ldquo;GOHIX&rdquo; represents this spirit: a forward-looking identity rooted in the 
              pursuit of knowledge and the desire to contribute to the technological landscape.
            </p>

            <p>
              Our journey is driven by genuine curiosity about artificial intelligence, software engineering, 
              and open-source development. We are not defined by where we have been, but by where we are going. 
              Each project, each line of code, and each collaboration brings us closer to building technologies 
              that are intelligent, accessible, and designed for real-world impact.
            </p>

            <p>
              Today, GOHIX is laying the groundwork for something bigger — a community of learners and builders, 
              a portfolio of meaningful projects, and a commitment to sharing knowledge openly. 
              The story is just beginning, and we invite you to be part of it.
            </p>
          </motion.div>

          {/* Timeline hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 p-6 rounded-2xl bg-gohix-50 dark:bg-gohix-950/50 border border-gohix-100 dark:border-gohix-900/50 text-center"
          >
            <p className="text-sm text-gohix-700 dark:text-gohix-300 font-medium">
              This is only the beginning. The most exciting chapters are yet to be written.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
