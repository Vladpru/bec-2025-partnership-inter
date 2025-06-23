import addOptions from '../../data/additionals'
import { Audiowide } from 'next/font/google';
import { AdditionalOptionsProps } from '@/types/types';
import { useRef, useState } from 'react';

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const AdditionalOptions = ({ selectedServices, onToggleService, selectedPackageServices }: AdditionalOptionsProps) => {

  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenTooltipId(prev => prev === id ? null : id);
  };

  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpenTooltipId(null);
    }
  };

  return (
    <div className="mt-25">
      <h2 className="text-bec text-center mb-15 text-3xl font-black">
        ДОДАТКОВІ ПРОПОЗИЦІЇ
      </h2>
      <div className="max-w-[1200px] flex flex-col mx-auto">
        {addOptions.map(service => (
          <div
            key={service.id}
            className={`relative flex items-center p-3 mb-4 transition-colors info_bg
            ${selectedServices.includes(service.name) ? 'border_is' : 'border_not'}  
            `}
          >
            <input
              type="checkbox"
              checked={selectedServices.includes(service.name)}
              disabled={selectedPackageServices.includes(service.name)}
              onChange={() => onToggleService(service.name)}
              className="mr-2 w-9 h-9 border-2 border-becwhite rounded-[5px] appearance-none checked:bg-[url('/images/propositions/checkbox-line.svg')] checked:bg-center checked:bg-no-repeat checked:bg-contain cursor-pointer"
            />
            <span className="flex-grow">{service.name}</span>
            {service.available != 0 &&
              <p className="text-sm font-extralight text-center bg-[#585856] text-becwhite py-1 px-6 mr-5 border-1 border-becwhite max-w-[250px]">Залишилось {service.available}</p>
            }
            <button className={`text-center px-7 py-1 text-xl bg-[#5A5A58] text-becwhite border-2 border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
                hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out
                ${awide.className} w-[120px]`}
                onClick={() => onToggleService(service.name)}
                >
                {service.price}
            </button>
            <span 
              className="ml-4 flex items-center justify-center text-sm font-bold text-becblack bg-becwhite rounded-full w-5 h-5 cursor-pointer hover:scale-125 transition-all ease-in"
              onClick={() => handleToggle(service.id)}
            >i</span>
            {openTooltipId === service.id && (
            <div className="fixed inset-0 flex items-center justify-center z-10" onClick={handleClickOutside}>
              <div className="relative extra_bg text-becwhite text-sm border-3 border-becwhite p-6 max-w-md w-full shadow-lg"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setOpenTooltipId(null)}
                className="absolute top-1 right-3 text-white text-4xl cursor-pointer font-extralight hover:scale-125 transition-all ease-in"
              >
                ×
              </button>
              <h2 className='text-lg font-bold'>{service.name}</h2>
              <p className='text-base'>{service.description}</p>
              </div>
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalOptions
