import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import MenuIcon from "@/components/icons/MenuIcon";
import XIcon from "@/components/icons/XIcon";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import WaitingList from "./WaitingList";

interface HeaderProps {
  solidBg?: boolean;
}

export default function Header({ solidBg }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isWaitingListOpen, setIsWaitingListOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
  };

  const toggleWaitingList = () => {
    setIsWaitingListOpen((v) => !v);
  };

  return (
    <>
      <header
        className={cn(
          "absolute left-0 right-0 top-0 z-10 px-3 py-5 text-white xl:px-7",
          solidBg ? "bg-black" : "bg-transparent mix-blend-difference",
        )}
      >
        <div className="dbs-container relative flex items-center md:py-5">
          <button
            className="p-2 transition-colors hover:bg-neutral-950 md:hidden"
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <MenuIcon />
          </button>
          <Button
            variant="tertiary-dark"
            href="/watch"
            className="hidden md:block md:text-lg"
            ariaLabel="Product/Watch"
          >
            Product/Watch
          </Button>

          <Button
            variant="tertiary-dark"
            href="/about"
            className="hidden md:block md:text-lg"
            ariaLabel="About"
          >
            About
          </Button>
          <a
            href="/"
            className="p-2 font-medium md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 md:transform md:p-5 md:text-xl xl:text-2xl"
          >
            DATTA + BAUM
          </a>
          <Button
            variant="tertiary-dark"
            className="ml-auto text-sm sm:text-base md:block md:text-lg"
            onClick={toggleWaitingList}
            ariaLabel="Add to Cart"
          >
            Add to Cart
          </Button>
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
        show={isMenuOpen}
        as={React.Fragment}
      >
        <Dialog as="div" className="relative z-20" onClose={toggleMenu}>
          <Dialog.Panel className="fixed inset-0 flex flex-col bg-black px-4 py-6 text-3xl font-light text-white">
            <button
              className="mb-4 ml-auto self-start p-2 transition-colors hover:bg-neutral-950"
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
            <button
              className="px-3 py-5 text-left transition-colors hover:bg-neutral-950"
              onClick={() => {
                toggleMenu();
                toggleWaitingList();
              }}
            >
             Add to Cart
            </button>
          </Dialog.Panel>
        </Dialog>
      </Transition>
      <WaitingList isOpen={isWaitingListOpen} toggle={toggleWaitingList} />
    </>
  );
}
