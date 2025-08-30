import ProductDetailsNav from "@/components/custom/productPage/productDetailsPage/ProductDetailsNav";

export default async function ProductDetailsPage({ params }) {
  const productId = (await params).productId;
  console.log(productId);

  return (
    <>
      {productId}
      <ProductDetailsNav />
    </>
  );
}
