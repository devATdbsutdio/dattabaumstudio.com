import { cn } from '@/lib/utils';

export default function MinusIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth={1.5}
			stroke="currentColor"
			className={cn('h-6 w-6 text-white', className)}>
			<path d="M4 12L20 12" />
		</svg>
	);
}
