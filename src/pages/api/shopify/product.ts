import type { APIRoute } from "astro";
import Shopify from "shopify-api-node";

// Development
// const PRODUCT_ID = 8189178904828;
// const SHOP_NAME = "shaukat-store2";
// const ACCESS_TOKEN = "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"

// Production
const PRODUCT_ID = 8736339099980; // DBS
const SHOP_NAME = "f2888f-3"; // DBS
const ACCESS_TOKEN = "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";

const shopify = new Shopify({
  shopName: SHOP_NAME,
  accessToken: ACCESS_TOKEN,
});

export const GET: APIRoute = async () => {
  try {
    let product = await shopify.product.get(PRODUCT_ID);
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
