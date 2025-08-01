'use client'
import { forwardRef, useEffect, useState } from "react"
import Image from "next/image"
import AdditionalOptions from "./ui/AdditionalOptions"
import Cart from "./Cart"
import PackageBasic from "./ui/PackageBasic"
import PackageEngineer from "./ui/PackageEngineer"
import PackageRecruiter from "./ui/PackageRecruiter"
import packages from "@/data/packages"
import addOptions from "@/data/additionals"
import { SelectedPackage } from "@/types/types"
import { useCountdown } from '../hooks/useCountDown'
import { Audiowide } from "next/font/google"

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const Propositions = forwardRef<HTMLDivElement, object>((props, ref) => {

  const [days, hours, minutes, seconds] = useCountdown(new Date('2025-08-11T00:00:00'));

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<SelectedPackage[]>([]);

  const handleChoosePackage = (packageName: string) => {
    const pkg = packages.find(p => p.name === packageName);
    if (!pkg) return;

    const included = addOptions
      .filter(opt => pkg.features.includes(opt.name))
      .map(opt => opt.name);

    const isAlreadySelected = selectedPackages.some(p => p.name === packageName);

    if (isAlreadySelected) {
      setSelectedPackages(prev => prev.filter(p => p.name !== packageName));
    } else {
      setSelectedPackages(prev => [...prev, { name: pkg.name, includedServices: included }]);
      setSelectedServices(prev =>
        prev.filter(service => !included.includes(service))
      );
    }
  };

  const handleChooseService = (serviceName: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(name => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  const selectedPackageServices = selectedPackages.flatMap(p => p.includedServices);
  const allSelectedServices = [...selectedPackageServices, ...selectedServices];

  const extractPrice = (priceStr: string): number => parseInt(priceStr.replace("$", ""));
  const packagesPrice = Object.fromEntries(
    packages.map(pkg => [pkg.name, extractPrice(pkg.price)])
  );
  const servicesPrice = Object.fromEntries(
    addOptions.map(opt => [opt.name, extractPrice(opt.price)])
  );

  const handleRemovePackage = (name: string) => {
    setSelectedPackages(prev => prev.filter(pkg => pkg.name !== name));
  };

  const handleRemoveService = (name: string) => {
    setSelectedServices(prev => prev.filter(service => service !== name));
  };

  const checkEnding = (num: number, titles: [string, string, string]) => titles[ (num % 10) === 1 ? 0 
                                                                                : (num % 10 >= 2 && num % 10 <= 4) ? 1 : 2 ];

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);                                                                        
  return (
    <section className="mt-10 mb-10 940px:mb-20 1140px:mb-50 scroll-m-28 relative" ref={ref}>
      {isClient && (
        <div className="container flex flex-col items-center gap-3 pb-24">
          <h1 className='uppercase font-black text-2xl mb-3 700px:text-4xl text-bec mt-3 text-center 3xl:text-[42px] 4xl:text-5xl'>ЗАЛИШИЛОСЬ</h1>
          <div className="flex justify-center gap-3 490px:gap-6 p-2">
            <div className="flex flex-col items-center text-becwhite">
              <div className={`border border-white 490px:px-6 px-5 py-4 490px:py-5 w-[85px] 490px:w-[100px] 700px:w-[150px] flex items-center justify-center text-3xl 490px:text-4xl 700px:text-6xl font-mono text-bec ${awide.className}`}>
                <span>{String(days).padStart(2, '0')}</span>
              </div>
              <div className="mt-2 text-xl font-semibold">{checkEnding(days, ['День', 'Дні', 'Днів'])}</div>
            </div>
            <div className="flex flex-col items-center text-becwhite">
              <div className={`border border-white 490px:px-6 px-5 py-4 490px:py-5 w-[85px] 490px:w-[100px] 700px:w-[150px] flex items-center justify-center text-3xl 490px:text-4xl 700px:text-6xl font-mono text-bec ${awide.className}`}>
                <span>{String(hours).padStart(2, '0')}</span>
              </div>
              <div className="mt-2 text-xl font-semibold">{checkEnding(hours, ['Година', 'Години', 'Годин'])}</div>
            </div>
            <div className="flex flex-col items-center text-becwhite">
              <div className={`border border-white 490px:px-6 px-5 py-4 490px:py-5 w-[85px] 490px:w-[100px] 700px:w-[150px] flex items-center justify-center text-3xl 490px:text-4xl 700px:text-6xl font-mono text-bec ${awide.className}`}>
                <span>{String(minutes).padStart(2, '0')}</span>
              </div>
              <div className="mt-2 text-xl font-semibold">{checkEnding(minutes, ['Хвилина', 'Хвилин', 'Хвилин'])}</div>
            </div>
            <div className="flex flex-col items-center text-becwhite">
              <div className={`border border-white 490px:px-6 px-5 py-4 490px:py-5 w-[85px] 490px:w-[100px] 700px:w-[150px] flex items-center justify-center text-3xl 490px:text-4xl 700px:text-6xl font-mono text-bec ${awide.className}`}>
                <span>{String(seconds).padStart(2, '0')}</span>
              </div>
              <div className="mt-2 text-xl font-semibold">Секунд</div>
            </div>
          </div>
          <h1 className='uppercase font-bold text-xl 700px:text-3xl text-whitebec mt-3 text-center 3xl:text-[42px] 4xl:text-5xl'>Акція &quot;рання пташка&quot;</h1>
          <p className="text-base text-center 700px:text-lg"><span className="text-bec"> -5% </span>для партнерів, які куплять та оплатять пакети у перший місяць пропозиції.</p>
        </div>
      )}
      <div className="container relative">
        <h1 className='uppercase font-black text-2xl 700px:text-4xl text-bec mb-10 text-center 3xl:text-[42px] 4xl:text-5xl'>Пакети пропозицій</h1>
        <PackageBasic />
        <div className="flex flex-col items-center 1070px:flex-row justify-around z-10 relative">
          <PackageRecruiter
            onChoose={handleChoosePackage}
            selectedPackageName={selectedPackages.find(p => p.name === "Explorer")?.name}
          />
          <PackageEngineer
            onChoose={handleChoosePackage}
            selectedPackageName={selectedPackages.find(p => p.name === "Engineer")?.name}
          />
        </div>
        <p className="mt-7 w-[360px] 440px:w-[420px] 580px:w-[500px] text-start text-base mx-auto 4xl:text-xl 4xl:max-w-[600px]">
          <span className="text-bec font-bold">10%</span> отриманих коштів будуть передані на підтримку ЗСУ.
          Оплата буде здійснюватись за курсом НБУ. Після завершення змагань кожна компанія–партнер
          отримає повну звітність з усіма фотографіями компанії та aftermovie.
        </p>
        <AdditionalOptions
          selectedServices={allSelectedServices} 
          onToggleService={handleChooseService}
          selectedPackageServices={selectedPackages.flatMap(p => p.includedServices)}
        />
        <Image
          height={60}
          width={120}
          alt="Decorative line 3"
          src="/images/propositions/left.svg" 
          className="absolute -z-1 top-100 -left-13 1240px:-left-25 1340px:-left-30 1440px:-left-15 3xl:w-[180px] 4xl:w-[250px]"
        />
        <Image
          height={60}
          width={250}
          alt="Decorative line 3"
          src="/images/propositions/top-right.svg" 
          className="absolute top-0 490px:w-[250px] w-[200px] -right-23 490px:-right-30 1440px:-right-20 -z-1 3xl:w-[300px] 4xl:w-[350px]"
        />
        <Image
          height={60}
          width={130}
          alt="Decorative line 3"
          src="/images/propositions/right.svg" 
          className="absolute top-120 -right-13 1240px:-right-23 1340px:-right-30 1440px:-right-15 -z-1 3xl:w-[180px] 4xl:w-[250px]"
        />
      </div>
      <Cart 
        selectedPackages={selectedPackages}
        customServices={selectedServices}
        servicesPrice={servicesPrice}
        packagesPrice={packagesPrice}
        onRemovePackage={handleRemovePackage}
        onRemoveService={handleRemoveService}
      />
      <img
        height={60}
        width={600}
        alt="Decorative line 3"
        src="/images/elipses/left_propos.png" 
        className="absolute -top-[200px] -left-30 1440px:-left-15 -z-1 3xl:w-[750px]" 
      />
    </section>
  );
});

Propositions.displayName = 'Propositions';

export default Propositions;
