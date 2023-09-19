import * as React from "react";
import { Disclosure } from "@headlessui/react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { cn } from "@/lib/utils";

export default function FaqItem({
  title,
  children,
  showBottomBorder = false,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  showBottomBorder?: boolean;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={cn(
            "w-full",
            showBottomBorder && "border-b border-black/30",
          )}
        >
          <Disclosure.Button
            className={cn(
              "flex w-full items-center justify-between gap-5 rounded-none py-6 text-left text-lg font-light md:py-10 md:text-4xl",
            )}
          >
            <span className="max-w-3xl">{title}</span>
            <ChevronDownIcon
              className={cn("h-10 w-10 transform", open && "rotate-180")}
            />
          </Disclosure.Button>
          <Disclosure.Panel
            className={cn("max-w-3xl pb-6 font-light md:pb-10 md:text-2xl")}
          >
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
