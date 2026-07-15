import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";
import { events } from "../data/siteData";

export default function Events() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="events" className="relative py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Events"
          title="Learn, build, connect"
          description="Join our upcoming events and be part of a growing community of technology enthusiasts. All events are open to members."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 max-w-3xl mx-auto space-y-6 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative pl-8 pb-8 border-l-2 border-neutral-200 dark:border-neutral-800 last:pb-0 last:border-l-transparent"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-gohix-500 bg-white dark:bg-neutral-950 group-hover:scale-125 transition-transform duration-300" />

              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 card-hover">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-gohix-50 dark:bg-gohix-950/50 text-gohix-600 dark:text-gohix-400">
                    {event.type}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400">
                    Coming Soon
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 font-display">
                  {event.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-neutral-400 dark:text-neutral-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {event.participants}
                  </span>
                </div>

                {event.registrationUrl && (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gohix-600 dark:text-gohix-400 hover:text-gohix-700 dark:hover:text-gohix-300"
                  >
                    Register interest
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 text-center text-sm text-neutral-400 dark:text-neutral-500"
        >
          Event dates and details will be announced on our{" "}
          <a href="#community" className="text-gohix-500 hover:text-gohix-600 underline underline-offset-2">
            community channels
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
