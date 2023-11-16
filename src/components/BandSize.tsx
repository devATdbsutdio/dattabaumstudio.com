import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import XIcon from "./icons/XIcon";
import Button from "./Button";
import { cn } from "@/lib/utils";

const DATA = [
  {
    id: "1",
    size: "Standard Stretch",
    description: "For the not-too-big, not-too-small wrists.",
    sizeDescription: "Belt length = 24 cm",
  },
  {
    id: "2",
    size: "Extended Edition",
    description: "For those who like a little extra around their wrist",
    sizeDescription: "Belt length = 27 cm",
  },
];

interface BandSizeProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function BandSize({ isOpen, toggle }: BandSizeProps) {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  const onClose = () => {
    toggle();
    setStatus("idle");
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-30" onClose={onClose}>
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
              <Dialog.Panel className="relative min-h-screen w-screen transform flex-col overflow-hidden bg-white px-4 py-6 text-left align-middle shadow-xl transition-all only:flex md:min-h-fit md:w-full md:max-w-5xl md:rounded-3xl md:px-14 md:py-14">
                <button
                  className="mb-4 ml-auto inline-flex items-center gap-2 self-start p-2 transition-colors"
                  onClick={onClose}
                  aria-label="Close"
                >
                  Close
                  <XIcon className="text-black" />
                </button>
                <Dialog.Title
                  as="h3"
                  className={cn(
                    "mb-4 max-w-3xl text-3xl uppercase md:text-5xl",
                    isSuccess && "mx-auto md:text-center",
                  )}
                >
                  {/* {title} */}
                </Dialog.Title>
                <h4
                  className={cn(
                    "mb-5 text-center text-base font-normal text-gray-900 md:text-base ",
                    isSuccess && "text-center ",
                  )}
                >
                  Please select the appropriate wristband size first and add it
                  to your cart
                </h4>
                {isSuccess ? (
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="mt-auto text-center"
                    variant="primary-light"
                    onClick={onClose}
                    ariaLabel="Close"
                  >
                    Close
                  </Button>
                ) : (
                  <div
                    className="flex flex-grow flex-col "
                    // onSubmit={onSubmit}
                  >
                    <div
                      className={`grid grid-cols-1 place-items-center gap-10 pb-4 text-center sm:grid-cols-2 `}
                    >
                      {DATA.map((_d, idx) => (
                        <div
                          key={idx}
                          className={`extralight min-h-full w-full justify-center gap-6 rounded border-2 border-gray-300 px-11 pb-20 pt-36   ${
                            idx !== activeIndex
                              ? "opacity-75"
                              : "border-2 border-gray-950 opacity-100"
                          }`}
                          onClick={() => {
                            setActiveIndex(idx);
                          }}
                        >
                          <h2
                            className={`text-3xl uppercase lg:px-11 lg:text-5xl ${
                              idx !== activeIndex ? "font-light" : "font-medium"
                            }`}
                          >
                            {_d.size}
                          </h2>
                          <p className="mx-0  mt-4 min-h-full w-full justify-center gap-6 text-sm  lg:mx-2 lg:text-base">
                            {_d.description}
                          </p>
                          <p className="mt-2 min-h-full w-full gap-6 text-sm lg:text-base   ">
                            {_d.sizeDescription}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button
                      // type="submit"
                      disabled={activeIndex === -1}
                      className={`mt-2 text-center`}
                      variant="primary-light"
                      ariaLabel="Add to Cart"
                      onClick={() => (window.location.href = "/cart")}
                    >
                      Add to Cart
                    </Button>

                    {isError && (
                      <small className="mt-2 text-red-500">
                        Something went WRONG. Please Try again!
                      </small>
                    )}
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
