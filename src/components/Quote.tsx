import React from 'react'
import Image from 'next/image';
import heroImage from '../../public/svg/hero/hero-image.svg';
function Quote() {
  return (
    <section className="w-screen bg-[#E9CDFF]">
      <div
        className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center
      lg:px-25 lg:py-30 px-4 py-20 mt-5"
      >
        <div className="max-w-100">
          <small className="text-lg">Buffet, Warren &#40;1930&#41;</small>
          <h1 className="text-3xl lg:text-4xl font-semibold mt-10">
            "Do not save what is left after spending, but spend what is left
            after saving."
          </h1>
        </div>
        <Image
          src={heroImage}
          alt="hero-image"
          className="mt-10 lg:mt-0 sm:max-lg:max-w-100
        lg:max-w-150
        "
        />
      </div>
    </section>
  );
}

export default Quote