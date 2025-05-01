import React from 'react'
import Image from 'next/image';
import cta from '../../public/svg/cta/cta.svg';

function CTA() {
  return (
    <section className="mt-40 w-screen">
      <div className="max-w-[1440px] mx-auto relative h-50">
        <div
          className="hidden lg:block
        lg:h-200 lg:w-2/4
        lg:bg-white lg:skew-x-40 lg:absolute lg:-bottom-250 lg:-left-70 lg:z-10"
        ></div>
        <Image
          src={cta}
          alt="cta"
          className="absolute lg:-bottom-250 lg:w-1/2 lg:z-30 bottom-20"
        />
        <div
          className="bg-[#FFEC88] lg:w-19/20 right-0 -bottom-140 lg:-bottom-250 absolute h-150
        flex justify-end items-center w-full px-4
        "
        >
          <div>
            <h1
              className="text-3xl lg:text-5xl font-bold lg:text-left max-w-150 lg:pr-10
          "
            >
              Secure your future by growing wealth, achieving goals, and gaining
              peace through saving and investing.
            </h1>
            <div className='max-w-80 flex gap-x-4'>
              <button className="bg-black text-base py-4 w-30 rounded-lg text-white mt-4">
                Get Started
              </button>
              <button className="bg-black text-base py-4 w-30 rounded-lg text-white mt-4">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA