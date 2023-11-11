import type { APIRoute } from "astro";
import Shopify from "shopify-api-node";

const shopify = new Shopify({
  shopName: "shaukat-store2",
  accessToken: "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",
});

export const GET: APIRoute = async () => {
  try {
    let product = await shopify.product.get(8189178904828);
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
