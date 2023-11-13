import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ChevronUpDownIcon from "./icons/ChevronUpDownIcon";

export default function Dropdown(props: any) {
  const { options, selected, setSelected } = props;

  if (!options?.length) return null;

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="z-50 w-full">
        <Listbox.Button className="relative w-full cursor-default rounded-[0.25rem] border border-gray-400 px-3 py-2 text-left">
          <span className="block truncate text-base">{selected.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-[8px] flex items-center">
            <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto  rounded-[0.25rem] bg-gray-100 py-1 text-sm shadow-lg">
            {options.map((option: any) => (
              <Listbox.Option
                key={option.value}
                className={({ active }) =>
                  `relative z-50 cursor-default select-none px-3 py-2 ${
                    active ? "bg-gray-300" : "text-gray-900"
                  } ${option.disabled ? "cursor-not-allowed opacity-50" : ""}`
                }
                value={option}
                disabled={option.disabled}
              >
                {({ selected }) => (
                  <span
                    className={`z-50 block truncate ${
                      selected ? "font-bold" : "font-normal"
                    }`}
                  >
                    {option.label}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
