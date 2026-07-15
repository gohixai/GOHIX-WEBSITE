import { motion } from "framer-motion";
import { Users, BookOpen, Share2, FlaskConical, Calendar, HandshakeIcon } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";
import { GithubIcon, DiscordIcon } from "./SocialIcons";

const waysToParticipate = [
  {
    icon: BookOpen,
    title: "Learn Together",
    description: "Join study groups, access curated resources, and grow your skills alongside a community of curious learners.",
  },
  {
    icon: Share2,
    title: "Open Source",
    description: "Contribute to meaningful projects, collaborate on code, and help build tools that benefit everyone.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description: "Participate in research initiatives, explore AI and software engineering topics, and share findings.",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Attend workshops, meetups, and hackathons. Connect with like-minded technologists.",
  },
  {
    icon: HandshakeIcon,
    title: "Collaboration",
    description: "Partner on projects, share ideas, and build together. Everyone has something to contribute.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with developers, researchers, and technology enthusiasts from diverse backgrounds.",
  },
];

export default function Community() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="community" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Community"
          title="Join the movement"
          description="GOHIX thrives on community participation. Whether you're a seasoned developer or just starting your journey, there's a place for you here."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {waysToParticipate.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 card-hover"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://discord.com/invite/SusB3shF5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#5865F2] rounded-2xl hover:bg-[#4752C4] transition-all duration-300 shadow-lg shadow-[#5865F2]/25"
          >
            <DiscordIcon className="h-5 w-5" />
            Join Discord
          </a>
          <a
            href="https://github.com/GOHIX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-2xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 shadow-lg shadow-neutral-900/20 dark:shadow-white/10"
          >
            <GithubIcon className="h-5 w-5" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
