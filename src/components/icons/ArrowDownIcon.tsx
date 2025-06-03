import { cn } from '@/lib/utils';

export default function ArrowDownIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 40 40"
			fill="none"
			className={cn('h-6 w-6 stroke-white', className)}>
			<path d="M20 5L20 35" />
			<path d="M10 24.625L20 34.625L30 24.625" />
		</svg>
	);
}
