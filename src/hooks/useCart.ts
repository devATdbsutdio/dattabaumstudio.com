import React from 'react';
import useLocalStorage from './useLocalStorage';

function useCart() {
	const [selectedVariants, setSelectedVariants] = useLocalStorage<any>('CART_SELECTED_VARIANTS', '');

	const { selectedTotalQuantity, selectedVariantsDetails } = React.useMemo(() => {
		let variantArr = selectedVariants?.split('<,>') || [];
		variantArr = variantArr.filter(Boolean);

		let selectedVariantsDetails = variantArr.reduce((acc: any, curr: any) => {
			return {
				...acc,
				[curr]: (acc[curr] || 0) + 1,
			};
		}, {});

		return {
			selectedTotalQuantity: variantArr.length,
			selectedVariantsDetails,
		};
	}, [selectedVariants]);

	const updateSelectedVariants = (variantId: any, operation: 'add' | 'remove') => {
		let varId = String(variantId);
		let variantArr: any[] = selectedVariants?.split('<,>') || [];
		variantArr = variantArr.filter(Boolean);

		if (operation === 'add') variantArr.push(varId);
		else if (variantArr.indexOf(varId) !== -1) variantArr.splice(variantArr.indexOf(varId), 1);

		setSelectedVariants(variantArr.join('<,>'));
	};

	return {
		selectedVariants,
		updateSelectedVariants,
		selectedTotalQuantity,
		selectedVariantsDetails,
	};
}

export default useCart;
