export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gohix-500 to-emerald-600 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-32 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="h-3 w-24 rounded-full bg-neutral-100 dark:bg-neutral-900 animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  );
}
