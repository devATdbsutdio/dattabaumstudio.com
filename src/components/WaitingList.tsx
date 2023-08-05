import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import XIcon from "./icons/XIcon";
import Button from "./Button";

interface WaitingListProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function WaitingList({ isOpen, toggle }: WaitingListProps) {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-30" onClose={toggle}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
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
                <Dialog.Panel className="flex min-h-screen w-screen transform flex-col overflow-hidden bg-white px-4 py-6 text-left align-middle shadow-xl transition-all md:min-h-fit md:w-full md:max-w-5xl md:rounded-3xl md:px-14 md:py-14">
                  <button
                    className="mb-4 ml-auto inline-flex items-center gap-2 self-start p-2 transition-colors hover:bg-neutral-50"
                    onClick={toggle}
                  >
                    Close
                    <XIcon className="text-black" />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="mb-4 max-w-3xl text-3xl uppercase md:text-5xl"
                  >
                    BE the first to get one. We only have 200 pieces for now!
                  </Dialog.Title>
                  <p className="mb-7 text-lg">
                    We’ll keep you updated on the watch’s progress and the let
                    you know when shop’s open.
                  </p>
                  <form className="flex flex-grow flex-col">
                    <input
                      name="firstName"
                      placeholder="First name"
                      type="text"
                      className="mb-5 h-12 border-b border-b-black py-5 text-lg placeholder:text-black focus-visible:border-b-2 focus-visible:outline-none md:mb-6 md:h-16"
                      required
                    />
                    <input
                      name="lastName"
                      placeholder="Last name"
                      type="text"
                      className="mb-5 h-12 border-b border-b-black py-5 text-lg placeholder:text-black focus-visible:border-b-2 focus-visible:outline-none md:mb-6 md:h-16"
                      required
                    />
                    <input
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="mb-10 h-12 border-b border-b-black py-5 text-lg placeholder:text-black focus-visible:border-b-2 focus-visible:outline-none md:mb-14 md:h-16"
                      required
                    />
                    <Button
                      type="submit"
                      className="mt-auto text-center md:mt-0"
                      variant="primary-light"
                    >
                      Join the waiting list
                    </Button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
