import Image from 'next/image'
const HeroBtn = () => {
  return (
    <div className="relative aspect-[655/367] w-full max-w-[270px] max-h-[98px] bg-center bg-contain bg-no-repeat cursor-pointer transition-all duration-300 hero-btn">
      <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold select-none">
        СТАТИ ПАРТНЕРОМ
      </span>
    </div>
  );
};

export default HeroBtn;