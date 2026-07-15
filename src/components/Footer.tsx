import { GithubIcon, LinkedinIcon, FacebookIcon, YoutubeIcon, MusicIcon, DiscordIcon } from "./SocialIcons";
import Logo from "./Logo";

const footerLinks = {
  "Quick Links": [
    { href: "#about", label: "About" },
    { href: "#vision", label: "Vision & Mission" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#projects", label: "Projects" },
  ],
  Resources: [
    { href: "#learning", label: "Learning Hub" },
    { href: "#blog", label: "Blog" },
    { href: "#community", label: "Community" },
    { href: "#events", label: "Events" },
  ],
  Connect: [
    { href: "#contact", label: "Contact" },
    { href: "https://github.com/GOHIX", label: "GitHub" },
    { href: "https://discord.com/channels/1526071067616084038", label: "Discord" },
    { href: "https://www.linkedin.com/company/142877855/", label: "LinkedIn" },
  ],
};

const socialLinks = [
  { href: "https://github.com/GOHIX", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/company/142877855/", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://www.facebook.com/profile.php?id=61592002973901", icon: FacebookIcon, label: "Facebook" },
  { href: "https://discord.com/channels/1526071067616084038", icon: DiscordIcon, label: "Discord" },
  { href: "https://www.youtube.com/@GOHIX", icon: YoutubeIcon, label: "YouTube" },
  { href: "https://www.tiktok.com/@gohixajjx40", icon: MusicIcon, label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-xs">
              Building intelligent technologies for the future through learning, collaboration, research, and innovation.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} GOHIX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
