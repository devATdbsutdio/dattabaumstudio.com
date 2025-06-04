import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import XIcon from './icons/XIcon';
import Button from './Button';
import { cn } from '@/lib/utils';

interface WaitingListProps {
	isOpen: boolean;
	toggle: () => void;
}

export default function WaitingList({ isOpen, toggle }: WaitingListProps) {
	const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

	const isLoading = status === 'loading';
	const isSuccess = status === 'success';
	const isError = status === 'error';

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStatus('loading');
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());
		try {
			const response = await fetch('/api/join', {
				method: 'POST',
				body: JSON.stringify(data),
			});
			if (!response.ok) {
				throw new Error('Something went wrong');
			}
			setStatus('success');
		} catch (_) {
			setStatus('error');
		}
	};

	const onClose = () => {
		toggle();
		setStatus('idle');
	};

	const title = isSuccess
		? 'Thank you for joining THE waiting list!'
		: 'BE the first to get one. We only have 200 pieces for now!';

	const description = isSuccess
		? 'You will be hearing from us soon. :)'
		: 'We will keep you updated on the progress of the watch and inform you when the shop is open.';

	return (
		<>
			<Transition appear show={isOpen} as={React.Fragment}>
				<Dialog as="div" className="relative z-30" onClose={onClose}>
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
										className="mb-4 ml-auto inline-flex items-center gap-2 self-start p-2 transition-colors"
										onClick={onClose}
										aria-label="Close">
										Close
										<XIcon className="text-black" />
									</button>
									<Dialog.Title
										as="h3"
										className={cn(
											'mb-4 max-w-3xl text-3xl uppercase md:text-5xl',
											isSuccess && 'mx-auto md:text-center'
										)}>
										{title}
									</Dialog.Title>
									<p className={cn('mb-7 text-lg', isSuccess && 'md:text-center')}>{description}</p>
									{isSuccess ? (
										<Button
											type="submit"
											disabled={isLoading}
											className="mt-auto text-center"
											variant="primary-light"
											onClick={onClose}
											ariaLabel="Close">
											Close
										</Button>
									) : (
										<form className="flex grow flex-col" onSubmit={onSubmit}>
											<input
												name="firstName"
												placeholder="First name"
												type="text"
												className="mb-5 h-12 border-b border-b-black py-5 text-lg placeholder:text-black focus-visible:border-b-2 focus-visible:outline-none disabled:opacity-50 md:mb-6 md:h-16"
												required
												disabled={isLoading}
											/>
											<input
												name="lastName"
												placeholder="Last name"
												type="text"
												className="mb-5 h-12 border-b border-b-black py-5 text-lg placeholder:text-black focus-visible:border-b-2 focus-visible:outline-none disabled:opacity-50 md:mb-6 md:h-16"
												required
												disabled={isLoading}
											/>
											<input
												name="email"
												placeholder="Email"
												type="email"
												className="mb-10 h-12 border-b border-b-black py-5 text-lg placeholder:text-black focus-visible:border-b-2 focus-visible:outline-none disabled:opacity-50 md:mb-14 md:h-16"
												required
												disabled={isLoading}
											/>
											<Button
												type="submit"
												disabled={isLoading}
												className="mt-auto text-center md:mt-0"
												variant="primary-light"
												ariaLabel="Join the waiting list">
												Join the waiting list
											</Button>
											{isError && <small className="mt-2 text-red-500">Something went WRONG. Please Try again!</small>}
										</form>
									)}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
