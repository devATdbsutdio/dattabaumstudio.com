import { cn } from "@/lib/utils";

export default function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      className={cn("text-stroke h-6 w-6", className)}
    >
      <path d="M20 35L20 5" />
      <path d="M30 15.375L20 5.375L10 15.375" />
    </svg>
  );
}
