import Button from '../Button';

export default function AddToCartButton({ className }: { className?: string }) {
	return (
		<Button
			variant="primary-dark"
			className={className}
			ariaLabel="Add To Cart"
			onClick={() => (window.location.href = '/cart')}>
			Add To Cart
		</Button>
	);
}
