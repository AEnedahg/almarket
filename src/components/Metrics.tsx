import React from 'react';
import bulb from '../../public/svg/metrics/bulb.svg';
import Image from 'next/image';

const metrics = [
  {
    id: 1,
    pct: "72%",
    text: "Gain 72% of your investment monthly",
  },
  {
    id: 2,
    pct: "18%",
    text: "Earn a 18% return on your investment every week.",
  },
  {
    id: 3,
    pct: "3%",
    text: "Enjoy a 3% daily yield on your investment.",
  },
];

function Metrics() {
  return (
    <section className="w-screen">
      <header className="mt-20 w-full bg-[#FFEC88]">
        <div className="lg:px-25 lg:py-15 px-4 py-20 relative max-w-[1440px] mx-auto">
          <header className="flex justify-between h-50">
            <h4 className="text-2xl absolute lg:top-30 font-semibold">
              Metrics
            </h4>
            <Image
              src={bulb}
              alt="bulb"
              className="absolute lg:right-30 right-4 max-h-50"
            />
          </header>
        </div>
      </header>
      <div className="grid grid-cols-12 grid-rows-12 max-w-[1440px] mx-auto">
        {metrics.map(({ id, pct, text }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center 
              col-span-12 row-span-4 lg:col-span-4 lg:row-span-12 *:text-center max-w-70 mx-auto
              mt-20 gap-y-3
              "
            >
              <h1 className="text-3xl font-bold">{pct}</h1>
              <p className="text-base">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Metrics