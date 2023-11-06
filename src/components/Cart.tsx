import Layout from "@/layouts/Layout.astro";
import React from "react";
import DemoPic from "@/assets/images/craft_4.png";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import craftDetail4 from "@/assets/images/craft_detail_4.png";
type CartType = {
  itemNumber?: number;
  image?: string;
  quantity?: string;
};

export const Cart = (props: CartType) => {
  const { itemNumber = 1, image, quantity = 2 } = props;

  const [disable, setDisable] = React.useState();

  return (
    <div className="bg-gray-100 px-5 py-24 ">
      <div className="w-full">
        <div className="flex flex-col">
          <h1 className="mx-0 text-5xl font-extralight sm:mx-5 sm:text-7xl">
            CART ({itemNumber})
          </h1>
          <div className="my-2 overflow-x-auto sm:mx-6 lg:mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden border-b border-gray-400  ">
                <table className="min-w-full divide-y divide-gray-400">
                  <thead className="items-start">
                    <tr>
                      <th
                        scope="col"
                        className="w-2/6 py-3 text-left text-xs font-semibold tracking-wider text-black sm:text-sm"
                      >
                        Products
                      </th>
                      <th
                        scope="col"
                        className="w-1/6 px-4 py-3 text-left text-xs font-medium tracking-wider sm:px-6 sm:text-sm"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="w-3/6 px-4 py-3 text-left text-xs font-medium tracking-wider sm:px-6 sm:text-sm"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="w-1/6 px-4 py-3 text-left text-xs font-medium tracking-wider sm:px-6 sm:text-sm"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    <tr>
                      <td className="p-4 sm:p-6">
                        <div className="flex items-center gap-2">
                          <img
                            src={craftDetail4.src}
                            alt="demoImage"
                            className="h-32  object-bottom "
                          />
                          <div className="flex flex-col space-y-14">
                            <h1 className="text-lg sm:text-2xl">watch</h1>
                            <button className="underline sm:text-sm">
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 sm:px-6 sm:py-6">Dropdown</td>
                      <td className="px-4 py-4 sm:px-6 sm:py-6">
                        <div className="flex items-center gap-2 sm:gap-5">
                          <button className="border border-gray-500 p-2 text-black sm:p-3">
                            <MinusIcon className="h-2 w-2 text-black sm:h-3 sm:w-3" />
                          </button>
                          {quantity}
                          <button
                            className="border border-gray-500 p-2 sm:p-3"
                            aria-label="View details"
                          >
                            <PlusIcon className="h-2 w-2 text-black sm:h-3 sm:w-3" />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4 sm:px-6 sm:py-6">$625.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="my-6 flex flex-col justify-between gap-5 sm:my-10  sm:flex-row sm:gap-0">
                <h1>Shipping will be calculated during checkout</h1>
                <Button className="gap-6 bg-black font-extralight text-white hover:bg-black">
                  Check Out
                  <ArrowRightIcon className="h-6 w-6 stroke-white stroke-1 sm:h-8 sm:w-10" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
