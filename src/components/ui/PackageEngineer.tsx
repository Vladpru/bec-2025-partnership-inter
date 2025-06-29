'use client'
import packages from '@/data/packages';
import { useState } from 'react';
import { Audiowide } from 'next/font/google';
import Image from 'next/image';
import EngineerDetails from './EngineerDetails';
import { PackageProps } from '@/types/types';

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const PackageEngineer = ({ onChoose, selectedPackageName }: PackageProps) => {

  const pack1 = packages[2];
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const isSelected = selectedPackageName === pack1.name;

  const handleChooseClick = () => {
    if (!isTooltipVisible) {
      onChoose(pack1.name);
    }
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTooltipVisible(tl => !tl);
  };

  return (
    <div
      className={`py-5 440px:py-10 pl-6 pr-30 mt-10 relative w-[360px] 440px:w-[420px] 580px:w-[490px] 3xl:max-w-[540px] 4xl:max-w-[620px] info_bg border-bec border-3 cursor-pointer transition-all duration-300 ease-in-out
        ${isSelected ? 'border_is' : 'border_not'} hover:scale-103
        `}
      onClick={handleChooseClick}
    >
      <h2 className={`pl-5 text-3xl 440px:text-4xl 4xl:text-5xl font-bold text-becwhite mb-4 text-start ${awide.className} leading-[1.3]`}>
        Engineer
      </h2>

      <ul className="mb-6">
        {pack1.features.map((feature, index) => (
          <li key={index} className="text-base 440px:text-lg flex font-extralight justify-start">
            <Image
              src="/images/propositions/checkbox-line.svg"
              alt="participant"
              width={40}
              height={40}
              className="440px:w-[40px] w-[35px]"
            />
            <span className="flex items-center 4xl:text-[22px]">{feature}</span>
          </li>
        ))}
      </ul>

      <p className="text-base 4xl:text-xl font-extralight text-center text-becwhite mb-4 py-2 border-1 border-becwhite px-3 max-w-[250px]">
        Залишилось 2
      </p>

      <div className={`text-start ${awide.className} leading-[1.3]`}>
        <div
          className="inline-block text-center px-12 py-3 text-3xl bg-[#5A5A58] text-[#CFCFCF] border-2 border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)]
          hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out"
        >
          {pack1.price}
        </div>
      </div>

      <div className="absolute top-6 right-4">
        <span
          className="flex items-center justify-center text-sm font-bold text-becblack bg-becwhite rounded-full w-5 h-5 4xl:w-7 4xl:h-7 4xl:text-base cursor-pointer hover:scale-125 transition-all ease-in"
          onClick={e => handleInfoClick(e)}
        >
          i
        </span>
      </div>

      {isTooltipVisible && (
        <EngineerDetails onClose={() => setIsTooltipVisible(false)} pack={pack1} />
      )}
    </div>
  );
};

export default PackageEngineer;
