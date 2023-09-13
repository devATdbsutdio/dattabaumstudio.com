import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import craft1 from "@/assets/images/craft_1.png";
import craft2 from "@/assets/images/craft_2.png";
import craft3 from "@/assets/images/craft_3.png";
import craft4 from "@/assets/images/craft_4.png";
import craftDetail1 from "@/assets/images/craft_detail_1.png";
import craftDetail2 from "@/assets/images/craft_detail_2.png";
import craftDetail3 from "@/assets/images/craft_detail_3.png";
import craftDetail4 from "@/assets/images/craft_detail_4.png";
import PlusIcon from "@/components/icons/PlusIcon";
import XIcon from "@/components/icons/XIcon";
import { cn } from "@/lib/utils";

const CRAFTS = [
  {
    title: "Unique built quality",
    description: "Coated Titanium body for ultimate strength",
    details: [
      "The whole body was partly casted and partly milled in titanium. We went for titanium because of it’s light weight yet high density and strength.",
      "Certain mechanisms like the button were shaped using EDM process as it was so small that it couldn’t be traditionally milled.",
      "Even the 4 back screws were custom casted in brass alloy as nothing off-the shelf could accommodate in our design.",
      "Because titanium is a tough material to work with, when applying colour, we chose the process of molecular bonding as it doesn’t chip away like paint. But also it is not easy to stain titanium otherwise.",
    ],
    image: craft1,
    detailImage: craftDetail1,
  },
  {
    title: "Precision",
    description: "Aerospace grade Swiss crystal",
    details: [
      "The Realtime Clock (RTC) that is used to keep track of time and date is a super low power and hyper accurate RTC. ",
      "It is an automotive, industrial and aerospace grade RTC. At the end of the day it is a Swiss crystal after all.",
      "Amongst other tricks under the sleeve, it has automatic compensation for micro deviations and automatic leap year correction.",
      "Additionally, there is a backup power cell inside the watch to keep the correct timing (without loosing a single bit). Check our FAQs for more details",
      "The crystal itself can operate  across a temperature range of -40°C to +85°C (but let’s not push the boundaries here).",
    ],
    image: craft2,
    detailImage: craftDetail2,
  },
  {
    title: "Durability",
    description: "For acceptable natural extremities",
    details: [
      "Although we suggest our customers that this is not a sports watch but rather a delicate time piece for your *special moments, we have tried our best to keep style with durability, hand in hand.",
      "We tested our samples rigorously under high & low temperatures, gave them thermal shocks under various humid conditions and found that the functional limit, in terms of temperature and relative humidity, is set between -20°C & 85°C at 85% relative humidity.",
      "We also tested for dust and liquid ingress under various pressures. The USB port for charging and programming time, is rated at IP67 for complete protection against dust and liquid over extended period time.",
    ],
    image: craft3,
    detailImage: craftDetail3,
  },
  {
    title: "Grip",
    description: "Custom design for comfort and strength",
    details: [
      "To keep up with our philosophy for being unique, usable, functional and modular, we opted for a special wrist band design; something that doesn’t exist on the shelf.",
      "We had to iterate numerously in our design process, to arrive to the final design, which we can be in peace with; minding every single mm for the thickness and negotiating between comfort, style and strength of the hold.",
      "The wrist belt, is primarily made out of high grade soft silicone material (skin friendly) with magnets embedded that offer strong hold on the wrist but is also easy to remove and clean.",
      "Given said that, you are free to use the watch creatively in various other ways. May be like a pocket watch or a pendant? After all it is a timeless piece of jewellery.",
    ],
    image: craft4,
    detailImage: craftDetail4,
  },
];

interface CraftDetailProps {
  isOpen: boolean;
  toggle: () => void;
  craft: (typeof CRAFTS)[0];
}

const renderDetail = (detail: string) => {
  const faqIndex = detail.indexOf("FAQs");
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
  const onClose = () => {
    toggle();
  };

  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative flex min-h-screen w-screen transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all md:min-h-fit md:w-full md:max-w-5xl md:rounded-3xl">
                  <img
                    className="hidden h-[calc(100vh_-_2rem)] object-cover md:block md:w-2/5"
                    src={craft.detailImage.src}
                  />
                  <div className="flex w-full flex-col bg-neutral-100 px-4 py-6 md:w-3/5 md:px-14 md:py-14">
                    <button
                      className="mb-4 ml-auto inline-flex items-center gap-2 self-start p-2 transition-colors hover:bg-neutral-50"
                      onClick={onClose}
                    >
                      Close
                      <XIcon className="text-black" />
                    </button>
                    <Dialog.Title
                      as="h3"
                      className={cn("mb-7 max-w-3xl text-3xl md:text-4xl")}
                    >
                      {craft.title}
                    </Dialog.Title>
                    {craft.details.map((detail, index) => (
                      <p
                        className={cn("mb-2 text-lg md:mb-4 md:text-xl")}
                        key={index}
                      >
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
    <>
      <div
        onClick={toggleDetail}
        className="embla__slide flex-grow-1 relative mr-5 min-w-0 max-w-md flex-shrink-0 basis-4/5 cursor-pointer overflow-clip rounded-3xl bg-white lg:max-w-lg"
      >
        <img src={craft.image.src} />
        <div className="absolute inset-5 flex flex-col justify-end md:inset-10">
          <h4 className="mb-2 text-2xl md:mb-4 md:text-4xl">{craft.title}</h4>
          <p className="text-sm font-light md:text-base">{craft.description}</p>
        </div>
        <button
          className="absolute bottom-2 right-2 p-3 md:bottom-7 md:right-7"
          onClick={toggleDetail}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </button>
      </div>
      <CraftDetail isOpen={isDetailOpen} toggle={toggleDetail} craft={craft} />
    </>
  );
};

export default function CraftCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      dragThreshold: 15,
      align: "start",
    },
    [WheelGesturesPlugin()],
  );

  return (
    <>
      <div className="embla mt-10 md:mt-16">
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
