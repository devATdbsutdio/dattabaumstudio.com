import { cn } from "lib/utils";

export default function XIcon({ className }: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("h-5 w-5 text-white", className)}
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
