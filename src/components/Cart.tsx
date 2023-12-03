import { useMemo } from "react";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import Spinner from "./Spinner";
import { formatPrice } from "@/lib/utils";
import useProduct from "@/hooks/useProduct";
import useCart from "@/hooks/useCart";

export const prerender = true;

const CartComponent = () => {
  const { title, image, variants, color, status } = useProduct();
  const isLoading = status === "loading";
  const {
    selectedTotalQuantity: totalQuantity,
    selectedVariantsDetails,
    updateSelectedVariants,
  } = useCart();

  const { VARIANTS, totalPrice } = useMemo(() => {
    let _variants = variants
      ?.map((variant: any) => {
        let selectedQuantity = selectedVariantsDetails[variant.id] || 0;
        if (selectedQuantity)
          return {
            ...variant,
            selectedQuantity,
          };
        return null;
      })
      .filter(Boolean);
    let totalPrice = _variants?.reduce(
      (acc: number, variant: any) =>
        acc + variant.price * variant.selectedQuantity,
      0,
    );
    return { VARIANTS: _variants, totalPrice };
  }, [variants, selectedVariantsDetails]);

  return (
    <div className="bg-gray-100 px-6 py-12 md:px-8 md:py-20 xl:px-12">
      <div className="flex flex-col">
        <div className="flex items-end justify-between gap-6">
          <h1 className="text-4xl font-extralight md:text-6xl lg:text-7xl">
            CART
            {!isLoading && totalQuantity ? ` (${totalQuantity})` : null}
          </h1>
          {isLoading ? null : (
            <h4 className="text-xs font-semibold tracking-widest md:text-base lg:text-lg">
              Total: {formatPrice(totalPrice)}
            </h4>
          )}
        </div>
        <div className="cart-table relative mt-10 overflow-x-hidden hover:overflow-x-auto">
          <table className="w-full divide-y-2 divide-black  border-b-2 border-b-black">
            <thead className="hidden text-left text-base font-bold tracking-wider lg:table-header-group lg:text-lg">
              <tr>
                <th scope="col" className="w-[60%] pb-3">
                  Products
                </th>
                <th scope="col" className="w-[30%] pb-3">
                  Quantity
                </th>
                <th scope="col" className="w-[10%] pb-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td className="py-32 lg:py-24" colSpan={4}>
                    <Spinner className="m-auto h-16 w-16" />
                  </td>
                </tr>
              ) : totalQuantity === 0 ? (
                <tr>
                  <td
                    className="py-32 text-center text-base font-medium lg:py-28"
                    colSpan={4}
                  >
                    Your cart is empty
                  </td>
                </tr>
              ) : (
                VARIANTS?.map((variant: any) => {
                  let minusSignDisabled = variant.selectedQuantity === 0;
                  let plusSignDisabled =
                    variant.selectedQuantity >= variant.quantity;
                  return (
                    <tr
                      className="flex flex-col align-top lg:table-row"
                      key={variant.id}
                    >
                      <td className="pb-4 pt-8 lg:py-8">
                        <div className="flex gap-4">
                          <img
                            src={image}
                            alt={title}
                            className="h-32 w-32 rounded-2xl border border-gray-200 object-cover object-bottom sm:h-44 sm:w-44"
                          />
                          <div className="flex w-full flex-col gap-1">
                            <div className="flex items-center justify-between gap-1">
                              <h1 className="text-2xl font-light lg:text-4xl">
                                {title}
                              </h1>
                              <h4 className="flex w-full justify-end text-xs font-medium md:text-base lg:hidden">
                                {formatPrice(variant.price)}
                              </h4>
                            </div>
                            <p className="ml-1 text-start text-xs font-light text-black md:text-sm">
                              Color : {color}
                            </p>
                            <p className="ml-1 text-start text-xs font-light text-black md:text-sm">
                              Band Size : {variant.label}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="m-auto w-full max-w-[400px] pb-8 pt-4 align-top lg:w-fit lg:py-8">
                        <div className="flex items-center justify-between gap-6 lg:justify-normal">
                          <button
                            className={`border border-gray-400 p-3 ${
                              minusSignDisabled
                                ? "cursor-not-allowed opacity-60"
                                : "opacity-100"
                            }`}
                            onClick={() =>
                              updateSelectedVariants(variant.id, "remove")
                            }
                            disabled={minusSignDisabled}
                          >
                            <MinusIcon className="h-4 w-4 text-black" />
                          </button>
                          <span className={"font-medium text-black"}>
                            {variant.selectedQuantity}
                          </span>
                          <button
                            className={`border border-gray-400 p-3 ${
                              plusSignDisabled
                                ? "cursor-not-allowed opacity-60"
                                : "opacity-100"
                            }`}
                            onClick={() =>
                              updateSelectedVariants(variant.id, "add")
                            }
                            disabled={plusSignDisabled}
                          >
                            <PlusIcon className="h-4 w-4 text-black" />
                          </button>
                        </div>
                      </td>
                      <td className="hidden py-10 align-top text-lg font-medium lg:flex">
                        {formatPrice(variant.price)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="my-8 flex flex-col-reverse items-center justify-between gap-6 lg:flex-row-reverse ">
          <Button
            className="initial w-full max-w-[400px] gap-6 bg-black text-lg font-light text-white hover:bg-gray-900 lg:max-w-[250px]"
            disabled={totalQuantity === 0 || isLoading}
            onClick={() => {
              let checkoutVariantQuantity = VARIANTS?.reduce(
                (acc: any, variant: any) => {
                  return acc + `${variant.id}:${variant.selectedQuantity},`;
                },
                "",
              );
              if (checkoutVariantQuantity)
                window.location.href = `https://${
                  import.meta.env.PUBLIC_SHOPIFY_SHOP_NAME
                }.myshopify.com/cart/${checkoutVariantQuantity}`;
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
