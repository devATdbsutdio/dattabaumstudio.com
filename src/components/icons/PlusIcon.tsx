import { cn } from "@/lib/utils";

export default function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("h-6 w-6 text-white", className)}
    >
      <path d="M12 4L12 20" />
      <path d="M20 12L4 12" />
    </svg>
  );
}
