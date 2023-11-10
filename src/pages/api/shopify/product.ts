import type { APIRoute } from "astro";
import Shopify from "shopify-api-node";

const shopify = new Shopify({
  shopName: "shaukat-store2",
  // apiKey: "ce669bd2c7865a2a01636bee81d63e2e",
  accessToken: "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",
  // apiVersion: "2023-10",
  // password: "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",
});

// const shopify = shopifyApi({
//   apiKey: "6291b6425621aab471a14ed6985fe14b",
//   apiSecretKey: "5418016a5291b0b3fdf8c1b9e192cb3c",
//   scopes: ["read_products"],
//   hostName: "ngrok-tunnel-address",
//   apiVersion: ApiVersion.October23,
//   isEmbeddedApp: false,
//   adminApiAccessToken: "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",
//   // restResources: {
//   //   apiKey: "6291b6425621aab471a14ed6985fe14b",
//   //   apiSecretKey: "297aff440f935defa61c92782b638124",
//   //   scopes: ["read_products"],
//   //   hostName: "ngrok-tunnel-address",
//   //   apiVersion: ApiVersion.October23,
//   //   isEmbeddedApp: false,
//   // },
// });

export const GET: APIRoute = async () => {
  try {
    let products = await shopify.product.list();
    console.log({ products });
    return new Response(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching products", error);
    return new Response(
      JSON.stringify({
        msg: error,
      }),
    );
  }
};
