import Layout from "@/layouts/Layout.astro";
import React, { useEffect, useState } from "react";
import DemoPic from "@/assets/images/craft_4.png";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import craftDetail4 from "@/assets/images/craft_detail_4.png";
import Dropdown from "@/components/Dropdown";

type CartType = {
  itemNumber?: number;
  image?: string;
  quantity?: string;
};

const YOUR_SHOPIFY_STORE_NAME = "shaukat-store2";
const PRODUCT_ID = "8189178904828";
const API_VERSION = "2023-10";
const API_URL = "https://shaukat-store2.myshopify.com/admin/api/2023-10/products/8189178904828.json";

export const CartComponent = (props: CartType) => {
  const { itemNumber = 1, image } = props;

  const [disable, setDisable] = useState<Boolean | undefined>();
  const [quantity, setQuantity] = useState<number>(0);

  const [productData, setProductData] = useState<any>(null);

 

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            "X-Shopify-Access-Token": "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",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProductData(data);
          console.log(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProductData();
  }, []);

  console.log(productData);

  const decreaseQuantity = () => {
    if (quantity <= 0) {
      setDisable(true);
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
    setDisable(false);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setDisable(false);
  };

  return (
    <div className="bg-gray-100 px-3 py-12 sm:px-5 sm:py-24 ">
      <div className="w-full">
        <div className="flex flex-col">
          <h1 className="mx-0 text-5xl font-extralight sm:mx-5 sm:text-7xl">
            CART ({itemNumber})
          </h1>
          <div className="my-2 overflow-x-auto sm:mx-6 lg:mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden border-b border-gray-400  ">
                <table className="min-w-full divide-y divide-gray-400">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="w-5/12 py-3 text-left text-xs font-bold tracking-wider text-black sm:text-sm"
                      >
                        Products
                      </th>
                      <th
                        scope="col"
                        className="w-2/12 px-4 py-3 text-left text-xs   font-bold tracking-wider sm:px-3 sm:text-sm"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="w-4/12 px-4 py-3 text-left text-xs font-bold  tracking-wider sm:px-3 sm:text-sm"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="w-1/12 px-4 py-3 text-left text-xs font-bold  tracking-wider sm:px-3 sm:text-sm"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    <tr>
                      <td className="py-4 sm:py-6 ">
                        <div className="items-center sm:flex sm:gap-2 ">
                          <img
                            src={craftDetail4.src}
                            alt="demoImage"
                            className="h-20 w-4/6 object-fill sm:h-32 sm:w-3/6  md:w-1/6"
                          />
                          <div className="flex flex-col text-center sm:space-y-14 sm:text-start">
                            <h1 className="text-lg sm:text-2xl ">watch</h1>
                            <button className="text-xs underline sm:text-sm ">
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="flex p-2 sm:p-3">
                        <Dropdown />
                      </td>
                      <td className="p-2 sm:p-3 ">
                        <div className="flex  items-center  gap-2 sm:gap-5   ">
                          <button
                            className={
                              disable
                                ? "border border-gray-100 p-2 sm:p-3"
                                : "  border border-gray-500 p-2 text-black sm:p-3"
                            }
                            onClick={() => decreaseQuantity()}
                            disabled={!!disable}
                          >
                            <MinusIcon className="h-2 w-2 text-black sm:h-3 sm:w-3" />
                          </button>
                          <h1
                            className={disable ? "text-gray-300" : "text-black"}
                          >
                            {quantity}
                          </h1>
                          <button
                            className="border border-gray-500 p-2 sm:p-3"
                            aria-label="View details"
                            onClick={() => increaseQuantity()}
                          >
                            <PlusIcon className="h-2 w-2 text-black sm:h-3 sm:w-3" />
                          </button>
                        </div>
                      </td>
                      <td className="flex p-2 sm:p-3">$625.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="my-6 flex flex-col items-center justify-between gap-5  px-1 sm:my-10 sm:flex-row sm:gap-0  sm:px-7">
            <h1>Shipping will be calculated during checkout</h1>
            <Button className="gap-6 bg-black font-extralight text-white hover:bg-black">
              Check Out
              <ArrowRightIcon className="h-6 w-6 stroke-white stroke-1 sm:h-7 sm:w-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
