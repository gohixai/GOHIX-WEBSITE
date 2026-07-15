import { cn } from "../utils/cn";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: "h-8 w-8", text: "text-base" },
    md: { icon: "h-10 w-10", text: "text-lg" },
    lg: { icon: "h-12 w-12", text: "text-2xl" },
    xl: { icon: "h-16 w-16 sm:h-20 sm:w-20", text: "text-2xl sm:text-3xl" },
  };

  return (
    <a href="#top" className={cn("flex items-center gap-2.5 group", className)}>
      <div className={cn("relative flex-shrink-0", sizes[size].icon)}>
        <img
          src="/logo.png"
          alt="GOHIX"
          className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
        />
      </div>
      {showText && (
        <span
          className={cn(
            "font-bold tracking-tight font-display text-neutral-900 dark:text-white group-hover:text-gohix-600 dark:group-hover:text-gohix-400 transition-colors",
            sizes[size].text
          )}
        >
          GOHIX
        </span>
      )}
    </a>
  );
}
