import addOptions from '../../data/additionals'
import { Audiowide } from 'next/font/google';
import { AdditionalOptionsProps } from '@/types/types';

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const AdditionalOptions = ({ selectedServices, onToggleService, selectedPackageServices }: AdditionalOptionsProps) => {

  const services = addOptions;

  return (
    <div className="mt-25">
      <h2 className="text-bec text-center mb-15 text-3xl font-black">
        ДОДАТКОВІ ПРОПОЗИЦІЇ
      </h2>
      <div className="max-w-[1200px] flex flex-col mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
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
            <button className={`text-center px-7 py-1 text-xl bg-[#5A5A58] text-becwhite border-2 border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
                hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out
                ${awide.className} w-[120px]`}
                onClick={() => onToggleService(service.name)}
                >
                {service.price}
            </button>
            <span className="ml-4 flex items-center justify-center text-sm font-bold text-becblack bg-becwhite rounded-full w-5 h-5 cursor-pointer hover:scale-125 transition-all ease-in">i</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalOptions
