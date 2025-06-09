import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useEmblaCarousel from 'embla-carousel-react';
import PlusIcon from '@/components/icons/PlusIcon';
import XIcon from '@/components/icons/XIcon';
import { cn } from '@/lib/utils';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import { mediaPath } from '@/constants';

type Craft = {
	title: string;
	description: string;
	details: string[];
	image: { src: string };
	detailImage: { src: string };
};

const CRAFTS: Array<Craft> = [
	{
		title: 'Unique built quality',
		description: 'Coated Titanium body for ultimate strength',
		details: [
			'The entire body was partly cast and partly milled in titanium. We chose titanium because of its lightweight yet high density and strength.',
			"Certain mechanisms, like the button, were shaped using the EDM process as it was so small that it couldn't be traditionally milled.",
			'Even the 4 back screws were custom cast in a brass alloy as nothing off-the-shelf could fit our design.',
			'Due to the challenges of working with titanium, we use molecular bonding to apply color instead of traditional painting methods. This prevents color from chipping.',
		],
		image: { src: `${mediaPath}/craft_1.png?alt=media` },
		detailImage: { src: `${mediaPath}/craft_detail_1.png?alt=media` },
	},
	{
		title: 'Precision',
		description: 'Aerospace grade Swiss crystal',
		details: [
			'The Realtime Clock (RTC), a Swiss crystal, is used here to track time and date. It is highly accurate with very low power consumption and is primarily used for automotive, industrial, and aerospace applications.',
			'The crystal itself can operate in a temperature range of -40°C to +85°C. However, it is recommended not to push the boundaries too much.',
			'Among other tricks up its sleeve, it has automatic compensation for micro-deviations and automatic leap year correction.',
			'Additionally, the watch also includes a backup power cell to ensure accurate timekeeping without any loss.',
			'Check our FAQs for more details',
		],
		image: { src: `${mediaPath}/craft_2.png?alt=media` },
		detailImage: { src: `${mediaPath}/craft_detail_2.png?alt=media` },
	},
	{
		title: 'Durability',
		description: 'For acceptable natural extremities',
		details: [
			'Although we suggest our customers that this is not a sports watch but rather a delicate time piece for your *special moments, we have tried our best to keep style with durability, hand in hand.',
			'We tested our samples rigorously under high & low temperatures, gave them thermal shocks under various humid conditions and found that the functional limit, in terms of temperature and relative humidity, is set between -20°C & 85°C at 85% relative humidity.',
			'We also tested for dust and liquid ingress under various pressures. The USB port for charging and programming is rated IP65, providing complete protection against dust and liquid over an extended period of time.',
		],
		image: { src: `${mediaPath}/craft_3.png?alt=media` },
		detailImage: { src: `${mediaPath}/craft_detail_3.png?alt=media` },
	},
	{
		title: 'Grip',
		description: 'Custom design for comfort and strength',
		details: [
			'To align with our philosophy of uniqueness, usability, functionality, and modularity, we have decided to create a wristband that is distinct and built from the ground up.',
			'After multiple iterations, we finalized a design that optimally balances comfort, style, and grip strength. Every millimeter was meticulously considered.',
			'The wristband is primarily made of high-grade soft silicone material that is skin-friendly. It is embedded with magnets that provide a strong hold on the wrist, while also being easy to remove and clean.',
			'That being said, you are free to use the watch creatively in various other ways, such as a pocket watch or a pendant. After all, it is a timeless piece of jewelry.',
		],
		image: { src: `${mediaPath}/craft_4.png?alt=media` },
		detailImage: { src: `${mediaPath}/craft_detail_4.png?alt=media` },
	},
];

interface CraftDetailProps {
	isOpen: boolean;
	toggle: () => void;
	craft: (typeof CRAFTS)[0];
}

const renderDetail = (detail: string) => {
	const faqIndex = detail.indexOf('FAQs');
	if (faqIndex === -1) {
		return detail;
	}

	return (
		<>
			{detail.slice(0, faqIndex)}
			<a href="/watch/faq" className="text-primary-500 underline">
				FAQs
			</a>
			{detail.slice(faqIndex + 4)}
		</>
	);
};

const CraftDetail = ({ isOpen, toggle, craft }: CraftDetailProps) => {
	const nullRef = React.useRef(null);

	const onClose = () => {
		toggle();
	};

	return (
		<>
			<Transition appear show={isOpen} as={React.Fragment}>
				<Dialog as="div" className="relative z-50" onClose={onClose} initialFocus={nullRef}>
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
								<Dialog.Panel className="relative flex min-h-screen w-screen transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all md:min-h-fit md:w-full md:max-w-5xl md:rounded-3xl">
									<img
										className="hidden h-full object-cover md:block md:w-2/5"
										alt={craft.title}
										src={craft.detailImage.src}
									/>
									<div className="flex w-full flex-col bg-neutral-100 px-4 py-6 md:w-3/5 md:px-14 md:py-14">
										<button
											className="mb-4 ml-auto inline-flex items-center gap-2 self-start p-2 transition-colors"
											onClick={onClose}
											aria-label="Close">
											Close
											<XIcon className="text-black" />
										</button>
										<Dialog.Title as="h4" className={cn('mb-7 max-w-3xl text-3xl md:text-4xl')}>
											{craft.title}
										</Dialog.Title>
										{craft.details.map((detail, index) => (
											<p className={cn('mb-2 text-lg md:mb-4 md:text-xl')} key={index}>
												{renderDetail(detail)}
											</p>
										))}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

const CraftCard = ({ craft }: { craft: (typeof CRAFTS)[0] }) => {
	const [isDetailOpen, setIsDetailOpen] = React.useState(false);

	const toggleDetail = () => {
		setIsDetailOpen((v) => !v);
	};

	return (
		<div
			onClick={toggleDetail}
			className="embla__slide relative mr-5 max-w-md min-w-0 shrink-0 flex-grow-1 basis-4/5 cursor-pointer overflow-clip rounded-3xl bg-white lg:max-w-lg">
			<img src={craft.image.src} className="h-full w-full" alt={craft.title} />
			<button className="absolute right-2 bottom-2 z-10 p-3 md:right-7 md:bottom-7" aria-label="View details">
				<PlusIcon className="h-6 w-6 text-black" />
			</button>
			<div className="absolute inset-5 z-0 flex flex-col justify-end md:inset-10">
				<h3 className="mb-2 text-2xl md:mb-4 md:text-4xl">{craft.title}</h3>
				<p className="text-sm font-light md:text-base">{craft.description}</p>
			</div>
			<CraftDetail isOpen={isDetailOpen} toggle={toggleDetail} craft={craft} />
		</div>
	);
};

export default function CraftCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: false,
			dragThreshold: 15,
			align: 'start',
			containScroll: 'keepSnaps',
		},
		[]
	);

	return (
		<>
			<div className="relative mt-10 md:mt-16">
				{emblaApi && (
					<div className="dbs-container absolute -top-28 left-0 hidden justify-end gap-4 lg:flex">
						<button
							aria-label="Previous"
							className="z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-transparent p-4 text-white transition-colors hover:border-white md:left-4"
							onClick={() => {
								emblaApi.scrollPrev();
								if (emblaApi.plugins().autoplay) {
									emblaApi.plugins().autoplay?.stop();
								}
							}}>
							<ArrowLeftIcon className="h-8 w-8 md:h-10 md:w-10" />
						</button>
						<button
							aria-label="Next"
							className="z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-transparent p-4 text-white transition-colors hover:border-white md:right-4"
							onClick={() => {
								emblaApi.scrollNext();
								if (emblaApi.plugins().autoplay) {
									emblaApi.plugins().autoplay?.stop();
								}
							}}>
							<ArrowRightIcon className="h-8 w-8 md:h-10 md:w-10" />
						</button>
					</div>
				)}
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container flex touch-pan-y">
						{CRAFTS.map((craft, index) => (
							<CraftCard craft={craft} key={index} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
