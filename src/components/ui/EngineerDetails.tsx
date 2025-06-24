import { useEffect, useRef, useState } from "react";
import { DetailsProps } from "@/types/types";
import { Audiowide } from "next/font/google";

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const EngineerDetails = ({ onClose, pack }: DetailsProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const closeWithAnimation = () => {
    setShow(false);
    setTimeout(onClose, 200); // дає завершити анімацію
  };

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  return (
    <div
      onClick={handleClickOutside}
      className={`fixed inset-0 z-50 p-4 flex items-center justify-center transition-opacity duration-300 
        ${show ? 'opacity-100' : 'opacity-0'} 
        backdrop-blur-[2px] bg-black/40`}
    >
      <div
        ref={modalRef}
        className={`extra_bg border-4 border-becwhite p-8 max-w-[600px] w-full max-h-[90vh] overflow-y-auto relative rounded-md custom-scroll-md
        transform transition-all duration-300 ease-out 
        ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-4xl cursor-pointer font-light hover:scale-125 transition-all ease-in"
        >
          ×
        </button>
        <h2 className={`text-3xl font-bold text-white mb-4 leading-[1.2] ${awide.className}`}>
          Engineer 700$
        </h2>
        <p className="text-base font-extralight text-center text-becwhite mb-4 py-2 border-1 border-becwhite px-3 max-w-[200px]">Залишилось 2</p>
        <div className="text-white space-y-8">
          {pack.descriptions.map((desc, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-2xl font-bold leading-[1.3]">{pack.features[index]}</h3>
              <p className="text-[16px] font-extralight leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineerDetails;
