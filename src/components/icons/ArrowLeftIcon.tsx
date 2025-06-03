import { cn } from '@/lib/utils';

export default function ArrowLeftIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 40 40"
			fill="none"
			className={cn('h-6 w-6 stroke-white', className)}>
			<path d="M35 20L5 20" />
			<path d="M15.375 10L5.375 20L15.375 30" />
		</svg>
	);
}
