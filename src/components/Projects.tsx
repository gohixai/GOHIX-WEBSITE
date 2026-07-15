import { motion } from "framer-motion";
import { ExternalLink, Clock, Tag } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./SocialIcons";
import { projects } from "../data/siteData";

const statusStyles: Record<string, string> = {
  "In Development": "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50",
  "Planning": "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/50",
  "Upcoming": "bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/50",
  "Live": "bg-gohix-50 dark:bg-gohix-950/30 text-gohix-700 dark:text-gohix-300 border-gohix-200 dark:border-gohix-800/50",
  "Beta": "bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50",
};

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="What we're building"
          description="A growing portfolio of projects spanning artificial intelligence, developer tools, open source, and education. Each project is open and accessible."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/10 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium border backdrop-blur-sm bg-white/90 dark:bg-neutral-900/90",
                      statusStyles[project.status]
                    )}
                  >
                    <Clock className="h-3 w-3" />
                    {project.status}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-gohix-500 text-white">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="h-3.5 w-3.5 text-gohix-500" />
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 font-display">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            More projects are in the pipeline. Follow us on{" "}
            <a href="https://github.com/GOHIX" target="_blank" rel="noopener noreferrer" className="text-gohix-500 hover:text-gohix-600 underline underline-offset-2">
              GitHub
            </a>{" "}
            to stay updated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
