import { cn } from "@/lib/utils";

export default function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      className={cn("h-6 w-6 stroke-white", className)}
    >
      <path d="M20 6L20 26" />
      <path d="M32 33.9844H8" />
      <path d="M10 16.6563L20 26.6562L30 16.6562" />
    </svg>
  );
}
