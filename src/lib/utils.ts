import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
	if (!price) return `€ 0.00`;
	const formattedPrice = price.toLocaleString('en-US', {
		style: 'currency',
		currency: 'EUR',
	});
	return formattedPrice.replace('€', '€ ');
};
