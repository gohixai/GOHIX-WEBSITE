import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";
import { galleryItems } from "../data/siteData";
import { X } from "lucide-react";

const filters = ["All", "AI Research", "Technology", "Hardware", "Development", "Innovation", "Infrastructure"];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Gallery"
          title="Visual journey"
          description="A curated collection of imagery representing the world of technology, AI, and innovation that inspires our work."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200",
                  activeFilter === filter
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Gallery */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                onClick={() => setLightbox(item.id)}
                className="block w-full break-inside-avoid rounded-2xl overflow-hidden group relative cursor-pointer"
              >
                <div className="relative w-full bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-left">
                    <p className="text-white text-sm font-semibold font-display">{item.title}</p>
                    <p className="text-white/70 text-xs mt-0.5">{item.category}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            className="absolute top-6 right-6 h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          {(() => {
            const item = galleryItems.find((g) => g.id === lightbox);
            if (!item) return null;
            return (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-white text-xl font-bold font-display">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            );
          })()}
        </motion.div>
      )}
    </section>
  );
}
