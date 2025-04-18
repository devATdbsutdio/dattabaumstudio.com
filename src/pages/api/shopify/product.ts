import type { APIRoute } from "astro";
import Shopify from "shopify-api-node";

export const prerender = false;

// Production
const PRODUCT_ID = import.meta.env.SHOPIFY_PRODUCT_ID; // DBS
const SHOP_NAME = import.meta.env.PUBLIC_SHOPIFY_SHOP_NAME; // DBS
const ACCESS_TOKEN = import.meta.env.SHOPIFY_ACCESS_TOKEN;

const shopify = new Shopify({
  shopName: SHOP_NAME,
  accessToken: ACCESS_TOKEN,
});

export const GET: APIRoute = async () => {
  try {
    let product = await shopify.product.get(Number(PRODUCT_ID));
    return new Response(JSON.stringify(product), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching product", error);
    return new Response(
      JSON.stringify({
        msg: error,
      }),
    );
  }
};
