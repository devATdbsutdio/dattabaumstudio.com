import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import XIcon from './icons/XIcon';
import Button from './Button';
import Spinner from './Spinner';
import useProduct from '@/hooks/useProduct';
import useCart from '@/hooks/useCart';
import { cn } from '@/lib/utils';

interface BandSizeProps {
	isOpen: boolean;
	toggle: () => void;
}

export default function BandSize({ isOpen, toggle }: BandSizeProps) {
	const { status, variants } = useProduct();
	const { updateSelectedVariants } = useCart();

	const isLoading = status === 'loading';

	const [selectedVariant, setSelectedVariant] = React.useState<number>(-1);

	const onClose = () => {
		toggle();
	};

	return (
		<Transition appear show={isOpen} as={React.Fragment}>
			<Dialog as="div" className="relative z-50" onClose={onClose}>
				<Transition.Child
					as={React.Fragment}
					enter="ease-out duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="bg-modal fixed inset-0" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center text-center md:p-4">
						<Transition.Child
							as={React.Fragment}
							enter="ease-out duration-100"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<Dialog.Panel className="relative min-h-screen w-screen transform flex-col overflow-hidden bg-white px-4 py-6 text-left align-middle shadow-xl transition-all only:flex md:min-h-fit md:w-full md:max-w-5xl md:rounded-3xl md:px-14 md:py-14">
								<button
									className="ml-auto inline-flex items-center gap-2 self-start transition-colors"
									onClick={onClose}
									aria-label="Close">
									Close
									<XIcon className="text-black" />
								</button>
								<Dialog.Title as="h3" className={'my-4 text-center text-base font-normal text-gray-900 md:text-base'}>
									Please select the appropriate wristband size first and add it to your cart
								</Dialog.Title>
								{isLoading ? (
									<div className="flex h-full items-center justify-center pt-32 pb-40">
										<Spinner className="h-16 w-16" />
									</div>
								) : (
									<div className="flex grow flex-col">
										<div className={`grid grid-cols-1 place-items-center gap-6 text-center lg:grid-cols-2`}>
											{variants?.map((_d: any) => (
												<div
													key={_d.id}
													className={`extralight relative h-full w-full gap-6 rounded border-2 border-gray-300 px-4 pt-32 pb-28 ${
														selectedVariant === _d.id ? 'border-gray-950' : 'opacity-75'
													} ${_d.disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'}`}
													onClick={() => {
														if (!_d.disabled) setSelectedVariant(_d.id);
													}}>
													<h2
														className={`text-3xl uppercase md:text-5xl ${
															selectedVariant === _d.id ? 'font-medium' : 'font-light'
														}`}>
														{_d.label}
													</h2>
													<p className="mx-auto my-2 w-[55%] text-sm md:text-base">{_d.description}</p>
													<p className="mx-auto w-[55%] text-sm md:text-base">{_d.sizeDescription}</p>
												</div>
											))}
										</div>
										<Button
											disabled={selectedVariant === -1}
											className={cn(`mt-6 text-center`)}
											variant="primary-light"
											ariaLabel="Add to Cart"
											onClick={() => {
												updateSelectedVariants(selectedVariant, 'add');
												window.location.href = `/cart`;
											}}>
											Add to Cart
										</Button>
									</div>
								)}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
