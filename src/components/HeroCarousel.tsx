import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel({ images }: { images: string[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 5000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    ],
  );

  return (
    <div className="embla ">
      <div
        className="embla__viewport absolute inset-0 -z-10 overflow-hidden"
        ref={emblaRef}
      >
        <div
          className="embla__container flex"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {images.map((imgSrc, index) => (
            <div
              className="embla__slide flex-grow-1 relative min-w-0 flex-shrink-0 basis-full"
              key={index}
            >
              <picture className="block h-screen w-screen object-cover">
                <img
                  alt=""
                  src={imgSrc}
                  className="h-screen w-screen object-cover object-center"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
