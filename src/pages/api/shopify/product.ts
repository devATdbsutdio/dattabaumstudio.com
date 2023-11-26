import type { APIRoute } from "astro";
import Shopify from "shopify-api-node";

// Development
// const PRODUCT_ID = 8189178904828;
// const SHOP_NAME = "shaukat-store2";
// const ACCESS_TOKEN = "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"

// Production
const PRODUCT_ID = import.meta.env.SHOPIFY_PRODUCT_ID; // DBS
const SHOP_NAME = import.meta.env.PUBLIC_SHOPIFY_SHOP_NAME; // DBS
const ACCESS_TOKEN = import.meta.env.SHOPIFY_ACCESS_TOKEN;

const shopify = new Shopify({
  shopName: SHOP_NAME,
  accessToken: ACCESS_TOKEN,
});

export const config = {
  runtime: "edge",
};

export const GET: APIRoute = async () => {
  try {
    let product = await shopify.product.get(Number(PRODUCT_ID));
    let response = new Response(JSON.stringify(product), {
      status: 200,
    });
    response.headers.set("Cache-Control", "public, s-maxage=1");
    return response;
  } catch (error) {
    console.error("Error fetching product", error);
    return new Response(
      JSON.stringify({
        msg: error,
      }),
    );
  }
};
