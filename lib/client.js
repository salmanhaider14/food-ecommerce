import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "700tnhzi",
  dataset: "production",
  apiVersion: "2022-07-19",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
