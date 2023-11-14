import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import XIcon from "./icons/XIcon";
import Button from "./Button";
import { cn } from "@/lib/utils";

const DATA = [
  {
    id: "1",
    size: "Standard Stretch",
    description: `For the not-too-big, not-too-small wrists \n.\n
       Belt length = 24 cm`,
  },
  {
    id: "2",
    size: "Extended Edition",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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

  const onClose = () => {
    toggle();
    setStatus("idle");
  };

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
                      "mb-7 text-center text-sm font-light md:text-base ",
                      isSuccess && "text-center ",
                    )}
                  >
                    Select the wristband size that you think would fit your
                    wrist best, and then add it to your cart.
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
                    <form
                      className="flex flex-grow flex-col "
                      // onSubmit={onSubmit}
                    >
                      <div className="grid grid-cols-1 place-items-center gap-6 pb-4 text-center sm:grid-cols-2">
                        {DATA.map((_d) => (
                          <div className="extralight min-h-full w-full  gap-6 border-2 border-gray-300 px-11 pb-16 pt-32 ">
                            <h2 className="text-4xl font-light uppercase lg:px-11">
                              {_d.size}
                            </h2>
                            <p className="min-h-full gap-4 text-sm">
                              {_d.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="mt-auto text-center md:mt-0"
                        variant="primary-light"
                        ariaLabel="Add to Cart"
                      >
                        Add to Cart
                      </Button>
                      {isError && (
                        <small className="mt-2 text-red-500">
                          Something went WRONG. Please Try again!
                        </small>
                      )}
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
