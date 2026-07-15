import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 grid-pattern dark:grid-pattern-dark" />
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[10rem] lg:text-[14rem] font-extrabold text-neutral-100 dark:text-neutral-900 leading-none font-display select-none">
            404
          </h1>
          <div className="-mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">
              Page not found
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 mt-4 text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
