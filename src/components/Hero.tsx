import React from 'react'
import GSAPLetters from './letters';
import ladyOne from '../../public/png/hero/lady-one.png';
import Image from 'next/image';

function Hero() {
  
  return (
    <section className="w-screen mb-20 bg-[#F6FFBC]">
      <div
        className="max-w-[1440px] mx-auto lg:px-25 lg:py-30 px-4 py-20 
      relative flex flex-col justify-between items-center lg:flex-row gap-y-4
      "
      >
        <div>
          <small className="text-base">Hello, welcome to:</small>
          <h1 className="text-4xl">AL Market</h1>
        </div>
        <div className="flex flex-col items-center">
          <GSAPLetters />
          <button className="bg-black text-3xl p-6 rounded-lg text-white mt-4">
            Get Started
          </button>
        </div>
        <Image src={ladyOne} alt="lady-one" className="w-5/6 lg:w-2/4" />
      </div>
    </section>
  );
}

export default Hero