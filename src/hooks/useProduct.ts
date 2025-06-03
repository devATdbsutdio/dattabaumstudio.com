import React from 'react';

const VARIANTS_DATA = [
	{
		size: 'Standard Stretch',
		description: 'For the not-too-big, not-too-small wrists.',
		sizeDescription: 'Belt length = 24 cm',
	},
	{
		size: 'Extended Edition',
		description: 'For those who like a little extra around their wrist',
		sizeDescription: 'Belt length = 27 cm',
	},
];

function useProduct() {
	const [productData, setProductData] = React.useState<any>(null);
	const [status, setStatus] = React.useState<'idle' | 'loading'>('loading');

	const { title, image, variants, color } = React.useMemo(() => {
		const title = productData?.title;
		const image = productData?.image?.src;

		const sizeVariantIndex = productData?.options?.findIndex((option: any) => {
			return option?.name.toLowerCase() === 'belt length';
		});
		const variants = productData?.variants?.map((variant: any) => {
			const label = variant[`option${sizeVariantIndex + 1}`];
			const descriptionDetails = VARIANTS_DATA.find((v) => v.size === label) as any;
			return {
				label,
				value: variant.id,
				quantity: variant.inventory_quantity,
				price: Number(variant.price),
				disabled: variant.inventory_quantity === 0,
				description: descriptionDetails?.description,
				sizeDescription: descriptionDetails?.sizeDescription,
				id: variant.id,
			};
		});

		const colorOptions = productData?.options?.find((option: any) => {
			return option?.name?.toLowerCase() === 'color';
		});

		return { title, image, variants, color: colorOptions?.values?.join(', ') };
	}, [productData]);

	React.useEffect(() => {
		getProduct();
	}, []);

	const getProduct = async () => {
		try {
			setStatus('loading');
			let product = await fetch('/api/shopify/product', {
				method: 'GET',
			});
			product = await product.json();
			setProductData(product);
		} catch (error) {
			console.error('Error fetching products', error);
		} finally {
			setStatus('idle');
		}
	};

	return {
		title,
		image,
		variants,
		color,
		status,
	};
}

export default useProduct;
