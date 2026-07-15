import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon, DiscordIcon } from "./SocialIcons";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Banner Background - Responsive */}
      <div className="absolute inset-0 z-0">
        {/* Desktop banner */}
        <img
          src="/banner.png"
          alt=""
          aria-hidden="true"
          className="hidden md:block w-full h-full object-cover object-center"
        />
        {/* Tablet banner */}
        <img
          src="/banner-tablet.png"
          alt=""
          aria-hidden="true"
          className="hidden sm:block md:hidden w-full h-full object-cover object-center"
        />
        {/* Mobile fallback - use desktop with focus */}
        <img
          src="/banner.png"
          alt=""
          aria-hidden="true"
          className="block sm:hidden w-full h-full object-cover object-[70%_center]"
        />
        {/* Gradient overlay for readability - emerald/dark theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950 dark:from-neutral-950/70 dark:via-neutral-950/50 dark:to-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-[1] grid-pattern opacity-30" />

      {/* Floating particles - subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-1.5 h-1.5 rounded-full bg-gohix-400 animate-pulse-glow"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[35%] left-[10%] w-1 h-1 rounded-full bg-emerald-300 animate-pulse-glow"
        />
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[30%] right-[25%] w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse-glow"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[20%] w-1 h-1 rounded-full bg-gohix-300 animate-pulse-glow"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-28 sm:py-32 lg:py-36 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-white"
            >
              <Sparkles className="h-3.5 w-3.5 text-gohix-400" />
              <span>Intelligence · Humanity · Innovation · Impact</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-display leading-[0.95]"
            >
              GOHIX
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 font-display tracking-tight text-balance leading-tight"
            >
              Building Intelligent Technologies
              <br className="hidden sm:block" />{" "}
              <span className="sm:hidden"> </span>
              For The Future
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl leading-relaxed"
            >
              Exploring the frontiers of Artificial Intelligence, Software Development, and Open Source —
              driven by curiosity, grounded in research, and committed to building technology that matters.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-neutral-900 bg-white rounded-2xl hover:bg-gohix-50 transition-all duration-300 shadow-2xl shadow-white/10"
              >
                Explore GOHIX
                <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#community"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Join Community
              </a>
            </motion.div>

            {/* Quick social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-3 pt-4 sm:pt-6"
            >
              <span className="text-xs text-white/50 mr-1 hidden sm:inline">Find us on</span>
              <a
                href="https://github.com/GOHIX"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://discord.com/channels/1526071067616084038"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all"
                aria-label="Discord"
              >
                <DiscordIcon className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-neutral-950 z-[2] pointer-events-none" />
    </section>
  );
}
