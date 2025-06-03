import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
	if (!price) `€ 0.00`;
	let formattedPrice = price.toLocaleString('en-US', {
		style: 'currency',
		currency: 'EUR',
	});
	return formattedPrice.replace('€', '€ ');
};
