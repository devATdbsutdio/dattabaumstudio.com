import type { APIRoute } from "astro";
import Shopify from "shopify-api-node";

const shopify = new Shopify({
  shopName: "shaukat-store2",
  accessToken: "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",
});

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { variantId, quantity } = body;

  // {
  //   lineItems: [
  //     {
  //       variantId,
  //       quantity,
  //     },
  //   ],
  // }

  let checkout = await shopify.accessScope.list();

  console.log("Checkout", checkout);

  return new Response(JSON.stringify(checkout), {
    status: 200,
  });
};
