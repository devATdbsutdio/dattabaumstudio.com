import { useEffect, useMemo, useState } from "react";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import Watch from "@/assets/images/craft_detail_4.png";
import Dropdown from "@/components/Dropdown";
import Spinner from "./Spinner";
import { formatPrice } from "@/lib/utils";

const CartComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [productData, setProductData] = useState<any>(null);

  const [selectedVariant, setSelectedVariant] = useState<{
    label: string;
    value: string;
    quantity: number;
    price: number;
  } | null>(null);

  const price = selectedVariant?.price || 0;
  const total = quantity * price;

  const minusSignDisabled = quantity === 0;
  const plusSignDisabled = selectedVariant?.quantity === quantity;

  const { title, image, variants, color } = useMemo(() => {
    let title = productData?.title;
    let image = productData?.image?.src;

    let sizeVariantIndex = productData?.options?.findIndex((option: any) => {
      return option?.name.toLowerCase() === "belt length";
    });
    console.log(sizeVariantIndex);

    let variants = productData?.variants?.map((variant: any) => {
      return {
        label: variant[`option${sizeVariantIndex + 1}`],
        value: variant.id,
        quantity: variant.inventory_quantity,
        price: Number(variant.price),
        disabled: variant.inventory_quantity === 0,
      };
    });

    setSelectedVariant(variants?.[0]);

    let colorOptions = productData?.options?.find((option: any) => {
      return option?.name?.toLowerCase() === "color";
    });

    return { title, image, variants, color: colorOptions?.values?.join(", ") };
  }, [productData]);

  useEffect(() => {
    setQuantity(1);
  }, [selectedVariant]);

  const getProduct = async () => {
    try {
      setLoading(true);
      let product = await fetch("/api/shopify/product", {
        method: "GET",
      });
      product = await product.json();
      setProductData(product);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  // const checkout = async () => {
  //   try {
  //     let checkout = await fetch("/api/shopify/checkout", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         variantId: selectedVariant?.value,
  //         quantity,
  //       }),
  //     });
  //     checkout = await checkout.json();
  //   } catch (error) {
  //     console.error("Error checkout", error);
  //   }
  // };

  useEffect(() => {
    getProduct();
  }, []);

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-100 px-6 py-12 md:px-8 md:py-20 xl:px-12">
      <div className="flex flex-col">
        <div className="flex items-end justify-between gap-6">
          <h1 className="text-5xl font-extralight md:text-6xl lg:text-7xl">
            CART
            {quantity ? ` (${quantity})` : null}
          </h1>
          <h4 className="text-base font-semibold tracking-widest lg:text-lg">
            Total: € {formatPrice(total)}
          </h4>
        </div>

        <div className="cart-table relative mt-10 overflow-x-hidden hover:overflow-x-auto">
          {loading ? (
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
                <th scope="col" className="w-[20%] pb-3">
                  Quantity
                </th>
                <th scope="col" className="w-[10%] pb-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className={loading ? "invisible" : "visible"}>
              {/* !!! */}
              <tr className="flex flex-col align-top lg:table-row">
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
                      <button className="ml-1 text-start text-xs font-medium text-black md:text-sm">
                        Color : {color}
                      </button>
                    </div>

                    <h4 className="flex w-full justify-end text-base font-medium lg:hidden">
                      € {formatPrice(price)}
                    </h4>
                  </div>
                </td>
                <td className="m-auto w-full max-w-[400px] py-4 pr-0 align-top lg:w-fit lg:translate-x-[-12px] lg:py-8 lg:pr-6">
                  <Dropdown
                    options={variants}
                    selected={selectedVariant}
                    setSelected={setSelectedVariant}
                  />
                </td>
                <td className="m-auto w-full max-w-[400px] pb-8 pt-4 align-top lg:py-8">
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
                <td className="hidden py-10 align-top text-base font-medium lg:flex">
                  € {formatPrice(price)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-8 flex flex-col-reverse items-center justify-between gap-6 lg:flex-row-reverse ">
          <Button
            className="initial w-full max-w-[400px] gap-6 bg-black text-lg font-light text-white hover:bg-gray-900 lg:max-w-[250px]"
            disabled={quantity === 0}
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
