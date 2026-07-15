import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, Globe } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get in touch"
          description="Have questions, ideas, or want to collaborate? We'd love to hear from you."
        />

        <div
          ref={ref}
          className={cn(
            "mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {/* Contact Info + Map */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display mb-6">
                Contact Information
              </h3>

              <div className="space-y-3">
                <a
                  href="mailto:gohixofficial@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-gohix-200 dark:hover:border-gohix-800/50 transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-gohix-50 dark:bg-gohix-950 flex items-center justify-center flex-shrink-0 group-hover:bg-gohix-100 dark:group-hover:bg-gohix-900/50 transition-colors">
                    <Mail className="h-5 w-5 text-gohix-600 dark:text-gohix-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate">
                      gohixofficial@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+9779763784476"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-gohix-200 dark:hover:border-gohix-800/50 transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-gohix-50 dark:bg-gohix-950 flex items-center justify-center flex-shrink-0 group-hover:bg-gohix-100 dark:group-hover:bg-gohix-900/50 transition-colors">
                    <Phone className="h-5 w-5 text-gohix-600 dark:text-gohix-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 mb-0.5">Phone</p>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      +977 9763784476
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                  <div className="h-10 w-10 rounded-xl bg-gohix-50 dark:bg-gohix-950 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-gohix-600 dark:text-gohix-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 mb-0.5">Location</p>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <a
                  href="https://discord.com/channels/1526071067616084038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-gohix-200 dark:hover:border-gohix-800/50 transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-gohix-50 dark:bg-gohix-950 flex items-center justify-center flex-shrink-0 group-hover:bg-gohix-100 dark:group-hover:bg-gohix-900/50 transition-colors">
                    <Globe className="h-5 w-5 text-gohix-600 dark:text-gohix-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 mb-0.5">Community</p>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Join our Discord
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Real Google Map of Kathmandu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 shadow-sm"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28262.528599928027!2d85.3000860743164!3d27.708954300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e0a0b8c8a5%3A0x4b0e5b6a8e0e0e0e!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GOHIX - Kathmandu, Nepal"
                className="w-full grayscale-[20%] contrast-110"
              />
              <div className="px-4 py-2.5 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <MapPin className="h-3.5 w-3.5 text-gohix-500" />
                Kathmandu, Nepal — South Asia
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gohix-500/20 focus:border-gohix-300 dark:focus:border-gohix-700 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gohix-500/20 focus:border-gohix-300 dark:focus:border-gohix-700 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gohix-500/20 focus:border-gohix-300 dark:focus:border-gohix-700 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gohix-500/20 focus:border-gohix-300 dark:focus:border-gohix-700 transition-all resize-none"
                  placeholder="Tell us about your ideas, questions, or how you'd like to collaborate..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300",
                  submitted
                    ? "bg-gohix-500 text-white"
                    : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-lg shadow-neutral-900/10 dark:shadow-white/5"
                )}
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
