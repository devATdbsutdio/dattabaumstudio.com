import { cn } from "@/lib/utils";

export default function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      className={cn("h-6 w-6 text-black", className)}
    >
      <path d="M10 15L20 25L30 15" />
    </svg>
  );
}
