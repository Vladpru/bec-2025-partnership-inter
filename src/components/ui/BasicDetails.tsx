import { useRef } from "react";
import { DetailsProps, Package } from "@/types/types";
import { Audiowide } from "next/font/google";

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const BasicDetails = ({ onClose, pack }: DetailsProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50" onClick={handleClickOutside}>
      <div className="info_bg border-4 border-becwhite p-4 max-w-[600px] relative" ref={modalRef}>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-4xl cursor-pointer font-light hover:scale-125 transition-all ease-in"
        >
          ×
        </button>
        <h2 className={`text-3xl font-bold text-white mb-2 leading-[1.3] ${awide.className}`}>Basic 350$</h2>
        <div className="text-white space-y-3">
          {pack.descriptions.map((desc, index) => (
            <div key={index}>
              <h3 className={`text-base font-bold leading-[1.3]`}>{pack.features[index]}</h3>
              <p className="text-[15px] font-extralight">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;