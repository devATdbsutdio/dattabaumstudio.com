import { cn } from '@/lib/utils';

export default function ArrowRightIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 40 40"
			fill="none"
			className={cn('h-6 w-6 stroke-white', className)}>
			<path d="M5 20L35 20" />
			<path d="M24.625 30L34.625 20L24.625 10" />
		</svg>
	);
}
