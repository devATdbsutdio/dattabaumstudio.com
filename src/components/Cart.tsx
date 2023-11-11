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
  const [quantity, setQuantity] = useState<number>(0);
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

  const { title, image, variants } = useMemo(() => {
    let title = productData?.title;
    let image = productData?.image?.src;

    let variants = productData?.variants?.map((variant: any) => {
      return {
        label: variant.title,
        value: variant.id,
        quantity: variant.inventory_quantity,
        price: Number(variant.price),
        disabled: variant.inventory_quantity === 0,
      };
    });

    setSelectedVariant(variants?.[0]);

    return { title, image, variants };
  }, [productData]);

  useEffect(() => {
    setQuantity(0);
  }, [selectedVariant]);

  const getProducts = async () => {
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
  //     console.log("checkout", checkout);
  //   } catch (error) {
  //     console.error("Error checkout", error);
  //   }
  // };

  useEffect(() => {
    getProducts();
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
            {/* {quantity ? ` (${quantity})` : null} */}
          </h1>
          <h4 className="font-semibold tracking-widest">
            Total: € {formatPrice(total)}
          </h4>
        </div>

        <div className="relative mt-10 overflow-x-auto">
          {loading ? (
            <div className="absolute inset-0 z-50 h-full w-full">
              <div className="flex h-full items-center justify-center">
                <Spinner className="h-16 w-16" />
              </div>
            </div>
          ) : null}
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
            <tbody className={loading ? "invisible" : "visible"}>
              <tr className="align-top">
                <td className="py-8 pr-4">
                  <div className="flex gap-6">
                    <img
                      src={image}
                      alt={title}
                      className="h-44 w-44 rounded-2xl border border-gray-200 object-cover object-bottom"
                    />
                    <div>
                      <h1 className="flex-1 text-3xl font-light md:text-4xl">
                        {title}
                      </h1>
                      {/* <button className="text-sm underline ">Remove</button> */}
                    </div>
                  </div>
                </td>
                <td className="translate-x-[-12px] py-8 align-top">
                  <Dropdown
                    options={variants}
                    selected={selectedVariant}
                    setSelected={setSelectedVariant}
                  />
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
                  € {formatPrice(price)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-6 mt-6 flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:gap-12">
          <h4 className="text-base">
            Shipping will be calculated during checkout
          </h4>
          <Button
            className="initial gap-6 bg-black text-lg font-light text-white hover:bg-black"
            disabled={quantity === 0}
            onClick={() => {
              window.location.href = `https://f2888f-3.myshopify.com/cart/${selectedVariant?.value}:${quantity}`;
            }}
          >
            Check Out
            <ArrowRightIcon className="stroke-white stroke-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
