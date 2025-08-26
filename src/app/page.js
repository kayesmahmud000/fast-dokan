import ExcitingPrices from '@/components/custom/ExcitingPrices';
import Hero from '@/components/custom/Hero';
import Navbar from '@/components/custom/Navbar';
import NewArrivals from '@/components/custom/NewArrivals';
import PopularProducts from '@/components/custom/PopularProducts';
import ProductCategory from '@/components/custom/ProductCategory';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCategory />
      <NewArrivals />
      <ExcitingPrices />
      <PopularProducts />
    </>
  );
}
