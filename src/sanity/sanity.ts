import { createClient } from "next-sanity";

//...

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID || process.env.SANITY_PROJECTID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET,
  apiVersion: "2023-09-24",
  useCdn: true,
  token: process.env.SANITY_SECRET_TOKEN || process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN,
});
