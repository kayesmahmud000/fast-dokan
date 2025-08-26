import Image from 'next/image';
import React from 'react';

const ExcitingPrices = () => {
  return (
    <section className="px-4 py-5 md:px-14 ">
      <Image
        src="/images/excitingprices/BannerImage-Cg8h1pDo.jpg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100vw', height: '90vh' }}
        className="rounded"
      />
    </section>
  );
};

export default ExcitingPrices;
