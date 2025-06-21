'use client'
import { useState } from "react"
import AdditionalOptions from "./ui/AdditionalOptions"
import Cart from "./Cart"
import PackageBasic from "./ui/PackageBasic"
import PackageEngineer from "./ui/PackageEngineer"
import PackageRecruiter from "./ui/PackageRecruiter"
import { SelectedPackage } from "@/types/types"
import packages from "@/data/packages"
import addOptions from "@/data/additionals"

const Propositions = () => {

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
    <section className="mt-10 mb-50">
        <div className="container">
            <h1 className='uppercase font-black text-4xl text-bec mb-10 text-center'>Пропозиції</h1>
            <PackageBasic />
            <div className="flex justify-around">
              <PackageRecruiter onChoose={handleChoosePackage} selectedPackageName={selectedPackages.find(p => p.name === "Recruiter")?.name}/>
              <PackageEngineer onChoose={handleChoosePackage} selectedPackageName={selectedPackages.find(p => p.name === "Engineer")?.name}/>
            </div>
            <p className="mt-7 max-w-[500px] text-start text-base mx-auto"><span className="text-bec font-bold">10%</span> отриманих коштів будуть передані на підтримку ЗСУ.Оплата буде здійснюватись за курсом НБУ Після завершення змагань кожна компанія–партнер отримає повну звітність з усіма фотографіями компанії та aftermovie</p>
            <AdditionalOptions 
              selectedServices={allSelectedServices} 
              onToggleService={handleChooseService}
              selectedPackageServices={selectedPackages.flatMap(p => p.includedServices)}
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
    </section>
  )
}
export default Propositions
