'use client'
import { forwardRef, useState } from "react"
import Image from "next/image"
import AdditionalOptions from "./ui/AdditionalOptions"
import Cart from "./Cart"
import PackageBasic from "./ui/PackageBasic"
import PackageEngineer from "./ui/PackageEngineer"
import PackageRecruiter from "./ui/PackageRecruiter"
import packages from "@/data/packages"
import addOptions from "@/data/additionals"
import { SelectedPackage } from "@/types/types"

const Propositions = forwardRef<HTMLDivElement, {}>((props, ref) => {

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

  // for Cart.tsx
  // 120$ → 120
  const extractPrice = (priceStr: string): number => parseInt(priceStr.replace("$", ""));
  // { "Recruiter": 350, ... }
  const packagesPrice = Object.fromEntries(
    packages.map(pkg => [pkg.name, extractPrice(pkg.price)])
  );
  // { "Відео-представлення компанії": 120, ... }
  const servicesPrice = Object.fromEntries(
    addOptions.map(opt => [opt.name, extractPrice(opt.price)])
  );
  const handleRemovePackage = (name: string) => {
    setSelectedPackages(prev => prev.filter(pkg => pkg.name !== name));
  };

  const handleRemoveService = (name: string) => {
    setSelectedServices(prev => prev.filter(service => service !== name));
  };

  return (
    <section className="mt-10 mb-50 scroll-m-28 relative" ref={ref}>
        <div className="container relative">
          <h1 className='uppercase font-black text-4xl text-bec mb-10 text-center'>Пропозиції</h1>
          <PackageBasic />
          <div className="flex justify-around z-10">
            <PackageRecruiter onChoose={handleChoosePackage} selectedPackageName={selectedPackages.find(p => p.name === "Explorer")?.name}/>
            <PackageEngineer onChoose={handleChoosePackage} selectedPackageName={selectedPackages.find(p => p.name === "Engineer")?.name}/>
          </div>
          <p className="mt-7 max-w-[500px] text-start text-base mx-auto"><span className="text-bec font-bold">10%</span> отриманих коштів будуть передані на підтримку ЗСУ.Оплата буде здійснюватись за курсом НБУ Після завершення змагань кожна компанія–партнер отримає повну звітність з усіма фотографіями компанії та aftermovie</p>
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
            className="absolute top-100 -left-15 z-1"
          />
          <Image
            height={60}
            width={250}
            alt="Decorative line 3"
            src="/images/propositions/top-right.svg" 
            className="absolute top-0 -right-15 -z-10"
          />
          <Image
            height={60}
            width={130}
            alt="Decorative line 3"
            src="/images/propositions/right.svg" 
            className="absolute top-120 -right-15 -z-10"
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
        <Image
          height={60}
          width={600}
          alt="Decorative line 3"
          src="/images/elipses/left_propos.png" 
          className="absolute -top-100 -left-15 -z-1"
        />
    </section>
  )
})
export default Propositions
