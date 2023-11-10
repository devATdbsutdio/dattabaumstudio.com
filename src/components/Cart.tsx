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

// const YOUR_SHOPIFY_STORE_NAME = "shaukat-store2";
// const PRODUCT_ID = "8189178904828";
// const API_VERSION = "2023-10";
// const API_URL =
//   "https://shaukat-store2.myshopify.com/admin/api/2023-10/products/8189178904828.json";

 const CartComponent = (props: CartType) => {
  const { itemNumber = 1 } = props;

  // const [disable, setDisable] = useState<Boolean | undefined>();
  const [quantity, setQuantity] = useState<number>(0);
  const [productData, setProductData] = useState<any>(null);
  const [productVariants, setProductVariants] = useState<any>(null);
  const [image, setImage] = useState<any>("");
  const price = productData?.variants[0].price;

  const minusSignDisabled = quantity === 0;



  const getProducts = async() => {
    try {
     let response = await fetch("/api/shopify/product" , {
      method:"GET"
     })
     response = await response.json()
      console.log("Products:", response);
    } catch (error) {
      console.error("Error fetching products", error);  
    }  };
  
  useEffect(() => {
    console.log("WORKING!!!")
    getProducts()

  }, []);

  const decreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
 
  };


  return (
    <div className="bg-gray-100 px-3 py-12">
      <div className="w-full">
        <div className="flex flex-col">
          <h1 className="mx-0 text-5xl font-extralight sm:mx-5 sm:text-7xl">
            CART ({itemNumber})
          </h1>
          <div className="my-2 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden    ">
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
                        className="w-2/12 px-4 py-3 text-left text-xs font-bold tracking-wider sm:px-3 sm:text-sm"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="w-4/12 px-4 py-3 text-left text-xs font-bold tracking-wider sm:px-3 sm:text-sm"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="w-1/12 px-4 py-3 text-left text-xs font-bold tracking-wider sm:px-3 sm:text-sm"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4">
                        <div className="items-center">
                          <img
                            src={image || craftDetail4.src}
                            alt="demoImage"
                            className="h-20 w-6 object-fill"
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
                        <Dropdown variants={productVariants} />
                      </td>
                      <td className="p-2 sm:p-3 ">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <button
                            className={
                              minusSignDisabled
                                ? "cursor-not-allowed border border-gray-100 p-2 opacity-50 "
                                : "border border-gray-500 p-2 text-black "
                            }
                            onClick={() => decreaseQuantity()}
                            disabled={minusSignDisabled}
                          >
                            <MinusIcon className="h-2  text-black sm:h-3 sm:w-3" />
                          </button>
                          <h1 className={"text-black"}>{quantity}</h1>
                          <button
                            className="border border-gray-500 p-2"
                            aria-label="View details"
                            onClick={() => increaseQuantity()}
                          >
                            <PlusIcon className="h-2  text-black sm:h-3 sm:w-3" />
                          </button>
                        </div>
                      </td>
                      <td className="flex p-2 sm:p-3 "> £ {price || 62.5} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="my-6 flex flex-col items-center justify-between gap-5 px-1">
            <h1>Shipping will be calculated during checkout</h1>
            <Button className="gap-6 bg-black font-extralight text-white hover:bg-black">
              Check Out
              <ArrowRightIcon className="stroke-white stroke-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
 

export default CartComponent