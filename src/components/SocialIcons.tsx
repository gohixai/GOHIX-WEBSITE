import { cn } from "../utils/cn";

function IconWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
    >
      {children}
    </svg>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </IconWrapper>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </IconWrapper>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </IconWrapper>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </IconWrapper>
  );
}

export function MusicIcon({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </IconWrapper>
  );
}

export function DiscordIcon({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M14.5 10.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      <path d="M9.5 10.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      <path d="M18.5 5.5c-1.5-.7-3.1-1.1-4.8-1.3-.2 0-.4.1-.5.3l-.3 1.2c-1.8-.3-3.7-.3-5.5 0l-.3-1.2c-.1-.2-.3-.3-.5-.3-1.7.2-3.3.6-4.8 1.3-.1 0-.2.1-.3.2-3.2 4.8-3.5 10.4-.3 15.5.1.2.3.3.5.3 1.9 1.4 3.9 2.3 6 2.8.2.1.5 0 .6-.2l.8-1.5c.1-.2.1-.4-.1-.6-1-.6-1.8-1.3-2.6-2.1-.2-.2-.2-.5 0-.7.1-.1.3-.1.5-.1.1 0 .3 0 .4.1 4.4 2.6 9.2 2.6 13.6 0 .1 0 .3-.1.4-.1.2 0 .4.1.5.3.1.2.1.5-.1.7-.8.8-1.6 1.5-2.6 2.1-.2.1-.2.4-.1.6l.8 1.5c.1.2.4.3.6.2 2.1-.5 4.1-1.4 6-2.8.2-.1.4-.2.5-.3 3.2-5.1 2.9-10.7-.3-15.5-.1-.1-.2-.2-.3-.2z" />
    </IconWrapper>
  );
}
