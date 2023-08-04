import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import MenuIcon from "@/components/icons/MenuIcon";
import XIcon from "@/components/icons/XIcon";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((o) => !o);
  };

  return (
    <>
      <header className="absolute left-0 right-0 top-0 bg-transparent p-5 xl:px-7">
        <div className="relative flex items-center text-white">
          <button
            className="p-2 transition-colors hover:bg-neutral-950 md:hidden"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </button>
          <a
            href="/watch"
            className="hidden p-5 transition-colors hover:bg-neutral-950 md:block xl:text-lg"
          >
            Product/Watch
          </a>
          <a
            href="/about"
            className="hidden p-5 transition-colors hover:bg-neutral-950 md:block xl:text-lg"
          >
            About
          </a>
          <a
            href="/"
            className="p-2 font-medium md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 md:transform md:p-5 md:text-xl xl:text-2xl"
          >
            DATTA + BAUM
          </a>
          <a
            href="/about"
            className="ml-auto p-2 transition-colors hover:bg-neutral-950 md:p-5 xl:text-lg"
          >
            Join the waiting list
          </a>
        </div>
      </header>
      <Transition
        appear
        enter="ease-out duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={isOpen}
        as={React.Fragment}
      >
        <Dialog as="div" className="relative z-10" onClose={toggleMenu}>
          <Dialog.Panel className="fixed inset-0 flex flex-col bg-black p-5 text-3xl text-white">
            <button
              className="mb-4 self-start p-2 transition-colors hover:bg-neutral-950"
              onClick={toggleMenu}
            >
              <XIcon />
            </button>
            <a
              href="/watch"
              className="px-3 py-5 transition-colors hover:bg-neutral-950"
              onClick={toggleMenu}
            >
              Product/Watch
            </a>
            <a
              href="/about"
              className="px-3 py-5 transition-colors hover:bg-neutral-950"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="/about"
              className="px-3 py-5 transition-colors hover:bg-neutral-950"
              onClick={toggleMenu}
            >
              Join the waiting list
            </a>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}
