import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "tm102wd0",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk9cXuj5a7gTQMOMUHjPotHo5y0Sk6MC1xuZfb71hrOjfCASm6rfCt0oiq9d48aN0d0qXja6TZX56jcA5Ven1DT2tMGEcmutztESlvOfxFnm4j8AA7w1YS6bvt88E5oG2ltckiOM7grwgrvvErMgQbjhVCxzrfSJ5uIIrLzOCjwNnTQQi8o3",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
