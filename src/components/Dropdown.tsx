import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

type variant = {
  [key: string]: string;
};

export default function Dropdown(props: any) {
  const { variants } = props;
  const [selected, setSelected] = useState(people[0]);
  const options = variants || people;

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="z-50 w-44">
        <Listbox.Button className="relative w-full cursor-default rounded-[0.25rem] border border-gray-400 px-3 py-2 text-left">
          <span className="block truncate text-base">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-[8px] flex items-center">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute !z-[10000000000] mt-1 max-h-60 w-44 overflow-auto rounded-[0.25rem] bg-gray-100 py-1 text-sm shadow-lg">
            {options.map((variant: any, variantIdx: number) => (
              <Listbox.Option
                key={variantIdx}
                className={({ active }) =>
                  `relative z-50 cursor-default select-none px-3 py-2 ${
                    active ? "bg-gray-300" : "text-gray-900"
                  }`
                }
                value={variant.name}
              >
                {({ selected }) => (
                  <span
                    className={`z-50 block truncate ${
                      selected ? "font-bold" : "font-normal"
                    }`}
                  >
                    {variant.name}
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
