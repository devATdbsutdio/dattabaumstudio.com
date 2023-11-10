// import type { APIRoute } from "astro";
// import Shopify from "shopify-api-node";

// const shopify = new Shopify({
//   shopName: "shaukat-store2",
//   apiKey: "6291b6425621aab471a14ed6985fe14b",
//   accessToken: "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",
//   apiVersion: "2023-10",
//   password: "",
// });

// // const shopify = shopifyApi({
// //   apiKey: "6291b6425621aab471a14ed6985fe14b",
// //   apiSecretKey: "297aff440f935defa61c92782b638124",
// //   scopes: ["read_products"],
// //   hostName: "ngrok-tunnel-address",
// //   apiVersion: ApiVersion.October23,
// //   isEmbeddedApp: false,
// //   adminApiAccessToken: "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",
// //   // restResources: {
// //   //   apiKey: "6291b6425621aab471a14ed6985fe14b",
// //   //   apiSecretKey: "297aff440f935defa61c92782b638124",
// //   //   scopes: ["read_products"],
// //   //   hostName: "ngrok-tunnel-address",
// //   //   apiVersion: ApiVersion.October23,
// //   //   isEmbeddedApp: false,
// //   // },
// // });

// export const GET: APIRoute = async () => {
//   try {
//     let products = await shopify.checkout.create();
//     console.log({ products });
//     return new Response(JSON.stringify(products), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error fetching products", error);
//     return new Response(
//       JSON.stringify({
//         msg: error,
//       }),
//     );
//   }
// };
