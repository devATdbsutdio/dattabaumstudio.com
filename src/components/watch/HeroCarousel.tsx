import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import { cn } from '@/lib/utils';

interface ImageSource {
	src: string;
	// Add other properties if needed (e.g., alt, srcSet)
}

interface HeroCarouselProps {
	images: {
		desktop: ImageSource;
		mobile: ImageSource;
	}[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
		},
		[
			Autoplay({
				delay: 4000,
				rootNode: (emblaRoot) => emblaRoot.parentElement,
			}),
		]
	);

	return (
		<>
			<div className="embla pointer-events-auto absolute inset-0 -z-0 overflow-hidden">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container pointer-events-auto flex">
						{images.map((img, index) => (
							<div className="embla__slide relative min-w-0 shrink-0 flex-grow-1 basis-full" key={index}>
								<picture className="block h-screen w-screen object-cover">
									<source media="(max-width: 480px)" srcSet={img.mobile.src} />
									<img
										alt="carousel image"
										src={img.desktop.src}
										className="h-screen w-screen object-cover object-center"
									/>
								</picture>
							</div>
						))}
					</div>
				</div>
			</div>
			{emblaApi && (
				<div className="absolute top-1/2 right-0 left-0 mx-3 my-5 hidden -translate-y-1/2 text-white md:block xl:mx-7">
					<div className="dbs-container relative">
						<button
							aria-label="Previous"
							className={cn(
								'absolute top-1/2 left-0 z-10 flex -translate-y-1/2 items-center justify-center rounded-full! border border-white/30 bg-transparent p-4 text-white transition-colors hover:border-white md:left-4'
							)}
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
							className={cn(
								'absolute top-1/2 right-0 z-10 flex -translate-y-1/2 items-center justify-center rounded-full! border border-white/30 bg-transparent p-4 text-white transition-colors hover:border-white md:right-4'
							)}
							onClick={() => {
								emblaApi.scrollNext();
								if (emblaApi.plugins().autoplay) {
									emblaApi.plugins().autoplay?.stop();
								}
							}}>
							<ArrowRightIcon className="h-8 w-8 md:h-10 md:w-10" />
						</button>
					</div>
				</div>
			)}
		</>
	);
}
