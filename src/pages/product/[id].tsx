import { Product } from "@/components/product";
import { mockProducts } from "@/mocks/products";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { config } from "@/config";

export default function ProductPage() {
  const {
    query: { id },
  } = useRouter();

  const product = mockProducts.find((product) => id === product.id);

  useEffect(() => {
    if (!product) {
      return;
    }
  }, [product]);

  if (!product) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`Snowplow shoe: ${product.name}`}</title>
        <meta name="description" content={`Snowplow shoe: ${product.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Product product={product} />
    </>
  );
}
