'use client'
import { useState } from "react"
import AdditionalOptions from "./AdditionalOptions"
import Cart from "./Cart"
import PackageBasic from "./ui/PackageBasic"
import PackageEngineer from "./ui/PackageEngineer"
import PackageRecruiter from "./ui/PackageRecruiter"
import { SelectedPackage } from "@/types/types"
import packages from "@/data/packages"
import addOptions from "@/data/additionals"

const Propositions = () => {

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage | null>(null);

  const handleChoosePackage = (packageName: string) => {
  if (selectedPackage?.name === packageName) {
    setSelectedPackage(null);
    return;
  }

  const pkg = packages.find(p => p.name === packageName);
  if (!pkg) return;

  const included = addOptions
    .filter(opt => pkg.features.includes(opt.name))
    .map(opt => opt.name);

  setSelectedPackage({
    name: pkg.name,
    includedServices: included,
  });
};


  const handleChooseService = (serviceName: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(name => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  const allSelectedServices = [
    ...(selectedPackage?.includedServices || []),
    ...selectedServices,
  ]

  return (
    <section className="mt-10 mb-70">
        <div className="container">
            <h1 className='uppercase font-black text-4xl text-bec mb-10 text-center'>Пропозиції</h1>
            <PackageBasic />
            <div className="flex justify-around">
              <PackageRecruiter onChoose={handleChoosePackage} selectedPackageName={selectedPackage?.name}/>
              <PackageEngineer onChoose={handleChoosePackage} selectedPackageName={selectedPackage?.name}/>
            </div>
            <p className="mt-7 max-w-[500px] text-start text-base mx-auto"><span className="text-bec font-bold">10%</span> отриманих коштів будуть передані на підтримку ЗСУ.Оплата буде здійснюватись за курсом НБУ Після завершення змагань кожна компанія–партнер отримає повну звітність з усіма фотографіями компанії та aftermovie</p>
            <AdditionalOptions 
              selectedServices={allSelectedServices} 
              onToggleService={handleChooseService}
              selectedPackageServices={selectedPackage?.includedServices || []}
            />
        </div>
        <Cart 
          // selectedPackage={selectedPackage}
          // customServices={customServices}
        />
    </section>
  )
}
export default Propositions