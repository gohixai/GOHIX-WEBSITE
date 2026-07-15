import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Command } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../utils/cn";
import Logo from "./Logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#projects", label: "Projects" },
  { href: "#community", label: "Community" },
  { href: "#blog", label: "Blog" },
  { href: "#learning", label: "Learn" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        )}
      >
        {/* Subtle gradient overlay for readability on the banner */}
        {!isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 to-transparent pointer-events-none" />
        )}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  !isScrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={cn(
                "h-9 w-9 rounded-lg flex items-center justify-center transition-all duration-200",
                !isScrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-xs rounded-lg border transition-all duration-200",
                !isScrolled
                  ? "text-white/60 border-white/20 hover:border-white/40"
                  : "text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
              )}
              aria-label="Command palette"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="text-[11px] tracking-wider">K</span>
            </button>
            <a
              href="#community"
              className={cn(
                "ml-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 shadow-lg",
                !isScrolled
                  ? "text-neutral-900 bg-white hover:bg-gohix-50 shadow-white/10"
                  : "text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-neutral-900/10"
              )}
            >
              Join Community
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={cn(
                "h-9 w-9 rounded-lg flex items-center justify-center transition-colors",
                !isScrolled
                  ? "text-white/80 hover:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              )}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "h-9 w-9 rounded-lg flex items-center justify-center transition-colors",
                !isScrolled
                  ? "text-white/80 hover:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass mx-4 rounded-2xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#community"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-xl text-center"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
