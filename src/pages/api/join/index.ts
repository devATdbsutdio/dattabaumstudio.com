import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getDatabase } from "firebase-admin/database";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { firstName, lastName, email } = body;

  if (!firstName || !lastName || !email) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  try {
    const listRef = getDatabase(app).ref("waiting-list");
    const newEntrrRef = listRef.push();
    await newEntrrRef.set({
      firstName,
      lastName,
      email,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return new Response("Success", {
    status: 200,
  });
};
