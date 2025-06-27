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

const Propositions = forwardRef<HTMLDivElement, object>((props, ref) => {
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

  return (
    <section className="mt-10 mb-50 scroll-m-28 relative" ref={ref}>
      <div className="container relative">
        <h1 className='uppercase font-black text-2xl 700px:text-4xl text-bec mb-10 text-center 3xl:text-[42px] 4xl:text-5xl'>Пропозиції</h1>
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
          <Image
          height={60}
          width={420}
          alt="Decorative line 3"
          src="/images/elipses/left_contacts.png" 
          className="absolute top-0 -left-15 1070px:hidden"
        />
        </div>
        <p className="mt-7 w-[420px] 580px:w-[500px] text-start text-base mx-auto 4xl:text-xl 4xl:max-w-[600px]">
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
          className="absolute top-0 -right-30 1440px:-right-15 -z-10 3xl:w-[300px] 4xl:w-[350px]"
        />
        <Image
          height={60}
          width={130}
          alt="Decorative line 3"
          src="/images/propositions/right.svg" 
          className="absolute top-120 -right-13 1240px:-right-23 1340px:-right-30 1440px:-right-15 -z-10 3xl:w-[180px] 4xl:w-[250px]"
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
        className="absolute -top-100 -left-30 1440px:-left-15 -z-1 3xl:w-[750px]" 
      />
    </section>
  );
});

Propositions.displayName = 'Propositions';

export default Propositions;
