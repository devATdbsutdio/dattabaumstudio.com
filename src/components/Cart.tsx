import Layout from "@/layouts/Layout.astro";
import React, { useEffect, useState } from "react";
import DemoPic from "@/assets/images/craft_4.png";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import craftDetail4 from "@/assets/images/craft_detail_4.png";
import Dropdown from "@/components/Dropdown";

const YOUR_SHOPIFY_STORE_NAME = "shaukat-store2";
const PRODUCT_ID = "8189178904828";
const API_VERSION = "2023-10";
const API_URL =
  "https://shaukat-store2.myshopify.com/admin/api/2023-10/products/8189178904828.json";

const CartComponent = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [productData, setProductData] = useState<any>(null);
  const [productVariants, setProductVariants] = useState<any>(null);
  const [image, setImage] = useState<any>("");
  // const price = productData?.variants[0].price;

  const price = quantity * 350;

  const minusSignDisabled = quantity === 0;
  const plusSignDisabled = false;

  const getProducts = async () => {
    try {
      let response = await fetch("/api/shopify/product", {
        method: "GET",
      });
      response = await response.json();
      console.log("Products:", response);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    console.log("WORKING!!!");
    getProducts();
  }, []);

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  console.log("QUANTITY: ", quantity, quantity === 0);

  return (
    <div className="bg-gray-100 px-6 py-12 md:px-8 md:py-20 xl:px-12">
      <div className="flex flex-col">
        <h1 className="text-5xl font-extralight md:text-6xl lg:text-7xl">
          CART
          {/* {quantity ? ` (${quantity})` : null} */}
        </h1>
        <div className="mt-10 overflow-x-auto">
          <table className="min-h-[350px] w-full divide-y-2 divide-gray-400">
            <thead className="text-left text-base font-bold tracking-wider lg:text-lg">
              <tr>
                <th scope="col" className="w-6/12 min-w-[400px] pb-3">
                  Products
                </th>
                <th scope="col" className="w-2/12 min-w-[200px] pb-3">
                  Size
                </th>
                <th scope="col" className="w-3/12 min-w-[200px] pb-3">
                  Quantity
                </th>
                <th scope="col" className="w-1/12 min-w-[75px] pb-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="py-8">
                  <div className="flex gap-6">
                    <img
                      src={image || craftDetail4.src}
                      alt="demoImage"
                      className="h-44 w-44 rounded-2xl border border-gray-200 object-cover object-bottom"
                    />
                    <div>
                      <h1 className="flex-1 text-3xl font-light md:text-4xl">
                        watch
                      </h1>
                      {/* <button className="text-sm underline ">Remove</button> */}
                    </div>
                  </div>
                </td>
                <td className="translate-x-[-12px] py-8 align-top">
                  <Dropdown variants={productVariants} />
                </td>
                <td className="py-8 align-top">
                  <div className="flex items-center gap-6">
                    <button
                      className={`border border-gray-400 p-3 ${
                        minusSignDisabled
                          ? "cursor-not-allowed opacity-60"
                          : "opacity-100"
                      }`}
                      onClick={() => decreaseQuantity()}
                      disabled={minusSignDisabled}
                    >
                      <MinusIcon className="h-4 w-4 text-black" />
                    </button>
                    <h1 className={"font-medium text-black"}>{quantity}</h1>
                    <button
                      className={`border border-gray-400 p-3 ${
                        plusSignDisabled
                          ? "cursor-not-allowed opacity-60"
                          : "opacity-100"
                      }`}
                      onClick={() => increaseQuantity()}
                      disabled={plusSignDisabled}
                    >
                      <PlusIcon className="h-4 w-4 text-black" />
                    </button>
                  </div>
                </td>
                <td className="py-10 align-top text-base font-medium">
                  € {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-6 mt-6 flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:gap-12">
          <h4 className="text-base">
            Shipping will be calculated during checkout
          </h4>
          <Button className="initial gap-6 bg-black text-lg font-light text-white hover:bg-black">
            Check Out
            <ArrowRightIcon className="stroke-white stroke-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
