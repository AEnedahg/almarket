import React from 'react'
import processPic from '../../public/svg/process/process-pic.svg';
import Image from 'next/image';

const process = [
  {
    id: 1,
    num: "1.",
    text: "Register your account to get started.",
  },
  {
    id: 2,
    num: "2.",
    text: "Make your investment based on your preferred plan.",
  },
  {
    id: 3,
    num: "3.",
    text: "Sit back and wait for your returns to grow.",
  },
];
function Process() {
  return (
    <section className="w-screen mt-20">
      <div className="max-w-[1440px] mx-auto lg:px-25 lg:py-30 px-4 py-20 mt-5 grid grid-cols-12 grid-rows-12 relative">
        <div
          className="col-span-12 row-span-4 lg:col-span-6 lg:row-span-12 lg:absolute lg:top-0 lg:left-0
          lg:rounded-r-[60%] lg:z-10 bg-white
        "
        >
          <h2 className="text-4xl font-bold text-center mt-10">Some Process</h2>
          <Image src={processPic} alt="process-pic" className="mt-16" />
        </div>
        <div
          className="bg-[#E9CDFF] col-span-12 row-span-8 lg:col-span-6 lg:row-span-12 flex 
        justify-center flex-col gap-y-10 lg:absolute lg:top-0 lg:right-0 lg:z-0 lg:w-2/3 h-175 
        lg:pl-125 items-center lg:items-start
        "
        >
          {process.map(({ id, num, text }) => {
            return (
              <div key={id} className="max-w-70 flex flex-col gap-y-1.5 text-center lg:text-start">
                <h1 className="text-2xl font-semibold">{num}</h1>
                <p className="text-base">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process