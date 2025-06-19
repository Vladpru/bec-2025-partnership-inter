'use client'
import packages from '@/data/packages';
import { useState } from 'react';
import { Audiowide } from 'next/font/google';
import BasicDetails from './BasicDetails';
import Image from 'next/image';

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const PackageBasic = () => {
  
  const pack1 = packages[0];

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleInfoClick = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <div className="p-10 border-4 border-bec mx-auto mt-10 relative max-w-[600px] info_bg">
      <h2 className={`text-4xl font-bold text-becwhite mb-4 text-start ${awide.className} leading-[1.3]`}>Basic</h2>
      <p className="text-base font-extralight text-center text-becwhite mb-4 py-2 border-1 border-becwhite px-3 max-w-[250px]">Цей пакет є обов'язковим</p>
      <ul className="mb-6">
        {pack1.features.map((feature, index) => (
          <li key={index} className="text-lg flex font-extralight justify-start">
            <Image
              src="/images/propositions/checkbox-line.svg"
              alt="participant"
              width={40}
              height={40}
              className=""
            />
            <span className='flex items-center'>{feature}</span>
          </li>
        ))}
      </ul>
      <div className={`text-start ${awide.className} leading-[1.3]`}>
        <button className="text-center px-12 py-3 text-xl bg-[#5A5A58] text-[#CFCFCF] border-2 border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
                hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out">
          {pack1.price}
        </button>
      </div>
      <div className="absolute top-5 right-8">
        <span
          className="flex items-center justify-center text-sm font-bold text-becblack bg-becwhite rounded-full w-5 h-5 cursor-pointer hover:scale-125 transition-all ease-in"
          onClick={handleInfoClick}
        >
          i
        </span>
      </div>
      {isTooltipVisible &&
        <BasicDetails onClose={() => setIsTooltipVisible(false)} pack={pack1} />
      }
    </div>
  )
}

export default PackageBasic