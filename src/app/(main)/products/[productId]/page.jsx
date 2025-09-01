import ProductDetailsContents from "@/components/custom/productPage/productDetailsPage/ProductDetailsContents";
import ProductDetailsHero from "@/components/custom/productPage/productDetailsPage/ProductDetailsHero";

export default async function ProductDetailsPage({ params }) {
  const productId = (await params).productId;
  console.log(productId);

  return (
    <>
      <ProductDetailsHero />
      <ProductDetailsContents />
    </>
  );
}
