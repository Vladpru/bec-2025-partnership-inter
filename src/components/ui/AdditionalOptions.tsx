'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Audiowide } from 'next/font/google';
import addOptions from '../../data/additionals';
import { AdditionalOptionsProps } from '@/types/types';
import Modal from './Modal';

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const AdditionalOptions = ({
  selectedServices,
  onToggleService,
  selectedPackageServices,
}: AdditionalOptionsProps) => {
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpenTooltipId(null);
    }
  };

  return (
    <div className="mt-25 relative">
      <h2 className="text-bec text-center mb-15 text-3xl font-black 3xl:text-[42px] 4xl:text-5xl">
        ДОДАТКОВІ ПРОПОЗИЦІЇ
      </h2>

      <div className="max-w-[1200px] 4xl:max-w-[1400px] flex flex-col mx-auto">
        {addOptions.map(service => {
          const isDisabled = selectedPackageServices.includes(service.name);
          const isSelected = selectedServices.includes(service.name);

          const handleToggleTooltip = (id: string, e: React.MouseEvent) => {
            e.stopPropagation();
            setOpenTooltipId(prev => (prev === id ? null : id));
          };

          return (
            <div
              key={service.id}
              className={`relative flex items-center p-3 4xl:p-5 mb-4 transition-colors info_bg cursor-pointer
                ${isSelected ? 'border_is' : 'border_not'}`}
              onClick={() => {
                if (!isDisabled && openTooltipId !== service.id) {
                  onToggleService(service.name);
                }
              }}
            >
              <input
                type="checkbox"
                checked={isSelected}
                disabled={isDisabled}
                onChange={e => {
                  e.stopPropagation();
                  onToggleService(service.name);
                }}
                className="mr-2 w-9 h-9 border-2 border-becwhite rounded-[5px] appearance-none 
                  checked:bg-[url('/images/propositions/checkbox-line.svg')] 
                  checked:bg-center checked:bg-no-repeat checked:bg-contain cursor-pointer"
              />
              <span className="flex-grow 4xl:text-2xl 4xl:pl-3">{service.name}</span>
              {service.available !== 0 && (
                <p className="text-sm font-extralight text-center bg-[#585856] text-becwhite py-1 px-6 4xl:py-2 4xl:px-8 4xl:text-lg mr-5 border-1 border-becwhite max-w-[250px]">
                  Залишилось {service.available}
                </p>
              )}
              <button
                className={`text-center px-7 py-1 text-xl bg-[#5A5A58] text-becwhite border-2 border-[#CFCFCF] 
                  shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
                  hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] 
                  transition-all duration-400 ease-out ${awide.className} w-[120px] 4xl:w-[150px] 4xl:text-2xl`}
                onClick={e => {
                  e.stopPropagation();
                  onToggleService(service.name);
                }}
              >
                {service.price}
              </button>
              <span
                className="ml-4 flex items-center justify-center text-sm font-bold text-becblack bg-becwhite rounded-full w-5 h-5 
                cursor-pointer hover:scale-125 transition-all ease-in 4xl:w-6 4xl:h-6"
                onClick={e => {
                  e.stopPropagation();
                  handleToggleTooltip(service.id, e)
                }}
              >
                i
              </span>
              {openTooltipId === service.id && (
                <Modal onClose={() => setOpenTooltipId(null)}>
                  <div
                    className="extra_bg text-becwhite text-sm border-3 border-becwhite p-6 max-w-md w-full shadow-lg relative z-[100] rounded-md"
                  >
                    <button
                      onClick={() => setOpenTooltipId(null)}
                      className="absolute top-1 right-3 text-white text-4xl cursor-pointer font-extralight hover:scale-125 transition-all ease-in"
                      aria-label="Close tooltip"
                    >
                      ×
                    </button>
                    <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
                    <p className="text-lg">{service.description}</p>
                  </div>
                </Modal>
              )}
            </div>
          );
        })}
      </div>
      <Image
        height={60}
        width={600}
        alt="Decorative line right"
        src="/images/elipses/about_right.png"
        className="absolute -top-40 -right-15 -z-1"
        draggable={false}
      />
      <Image
        height={60}
        width={600}
        alt="Decorative line left"
        src="/images/elipses/about_left.png"
        className="absolute top-10 -left-15 -z-1"
        draggable={false}
      />
    </div>
  );
};

export default AdditionalOptions;
