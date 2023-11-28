import { useEffect, useMemo, useState } from "react";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import Watch from "@/assets/images/craft_detail_4.png";
import Dropdown from "@/components/Dropdown";
import Spinner from "./Spinner";
import { formatPrice } from "@/lib/utils";
import useProduct from "@/hooks/useProduct";
import useParams from "@/hooks/useParams";
import useLocalStorage from "@/hooks/useLocalStorage";

export const prerender = true;

const CartComponent = () => {
  const { quantity: quantityParam, variant: variantParam } = useParams();
  const [quantityLocalStorage, setQuantity] = useLocalStorage<number>(
    "CART_QUANTITY",
    0,
  );

  const quantity = quantityLocalStorage || 0;

  const { title, image, variants, color, status } = useProduct();

  const isLoading = status === "loading";

  const [selectedVariant, setSelectedVariant] = useLocalStorage<any>(
    "CART_SELECTED_VARIANT",
    null,
  );

  const price = selectedVariant?.price || 0;
  const total = quantity * price;

  const minusSignDisabled = quantity === 0;
  const plusSignDisabled = selectedVariant?.quantity === quantity;

  useEffect(() => {
    if (variants?.length) {
      let selectedVariantFromParam = variants?.find(
        (variant: any) => variant.value == variantParam,
      );
      let selectedVariantLocalStorage = variants?.find(
        (variant: any) => variant.value == selectedVariant?.value,
      );
      setSelectedVariant(
        selectedVariantFromParam || selectedVariantLocalStorage || variants[0],
      );
      if (quantityParam) {
        setQuantity(
          Number(quantityParam) > selectedVariantFromParam?.quantity
            ? selectedVariantFromParam?.quantity
            : Number(quantityParam),
        );
      }
    }
    // eslint-disable-next-line
  }, [variants, variantParam, quantityParam]);

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-gray-100 px-6 py-12 md:px-8 md:py-20 xl:px-12">
      <div className="flex flex-col">
        <div className="flex items-end justify-between gap-6">
          <h1 className="text-4xl font-extralight md:text-6xl lg:text-7xl">
            CART
            {!isLoading && quantity ? ` (${quantity})` : null}
          </h1>
          {isLoading ? null : (
            <h4 className="text-xs font-semibold tracking-widest md:text-base lg:text-lg">
              Total: {formatPrice(total)}
            </h4>
          )}
        </div>
        <div className="cart-table relative mt-10 overflow-x-hidden hover:overflow-x-auto">
          {isLoading ? (
            <div className="absolute inset-0 z-50 h-full w-full">
              <div className="flex h-full items-center justify-center">
                <Spinner className="h-16 w-16" />
              </div>
            </div>
          ) : null}
          <table className="w-full divide-y-2 divide-black  border-b-2 border-b-black">
            <thead className="hidden text-left text-base font-bold tracking-wider lg:table-header-group lg:text-lg">
              <tr>
                <th scope="col" className="w-[50%] pb-3">
                  Products
                </th>
                <th scope="col" className="w-[20%] pb-3">
                  Band Size
                </th>
                <th scope="col" className="w-[22.5%] pb-3">
                  Quantity
                </th>
                <th scope="col" className="w-[7.5%] pb-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className={isLoading ? "invisible" : "visible"}>
              <tr className="flex flex-col align-top lg:table-row">
                {quantity === 0 && !isLoading ? (
                  <td
                    className="py-32 text-center text-base font-medium lg:py-24"
                    colSpan={4}
                  >
                    Your cart is empty
                  </td>
                ) : (
                  <>
                    <td className="pb-4 pt-8 lg:py-8">
                      <div className="flex gap-4">
                        <img
                          src={image}
                          alt={title}
                          className="h-32 w-32 rounded-2xl border border-gray-200 object-cover object-bottom sm:h-44 sm:w-44"
                        />

                        <div className="flex flex-col ">
                          <h1 className="text-2xl font-light lg:text-4xl">
                            {title}
                          </h1>
                          <p className="ml-1 text-start text-xs font-light text-black md:text-sm">
                            Color : {color}
                          </p>
                        </div>

                        <h4 className="flex w-full justify-end text-base font-medium lg:hidden">
                          {formatPrice(price)}
                        </h4>
                      </div>
                    </td>
                    <td className="m-auto w-full max-w-[400px] py-4 pr-0 align-top lg:w-fit lg:translate-x-[-12px] lg:py-8 lg:pr-6">
                      <Dropdown
                        options={variants}
                        selected={selectedVariant}
                        setSelected={(value: any) => {
                          setSelectedVariant(value);
                          setQuantity(1);
                        }}
                      />
                    </td>
                    <td className="m-auto w-full max-w-[400px] pb-8 pt-4 align-top lg:w-fit lg:py-8">
                      <div className="flex items-center justify-between gap-6 lg:justify-normal">
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
                        <span className={"font-medium text-black"}>
                          {quantity}
                        </span>
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
                    <td className="hidden py-10 align-top text-base font-medium lg:flex">
                      {formatPrice(price)}
                    </td>
                  </>
                )}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-8 flex flex-col-reverse items-center justify-between gap-6 lg:flex-row-reverse ">
          <Button
            className="initial w-full max-w-[400px] gap-6 bg-black text-lg font-light text-white hover:bg-gray-900 lg:max-w-[250px]"
            disabled={quantity === 0 || isLoading}
            onClick={() => {
              window.location.href = `https://${
                import.meta.env.PUBLIC_SHOPIFY_SHOP_NAME
              }.myshopify.com/cart/${selectedVariant?.value}:${quantity}`;
            }}
          >
            Check Out
            <ArrowRightIcon className=" stroke-white stroke-2" />
          </Button>
          <h4 className="text-base">
            Shipping will be calculated during checkout
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
