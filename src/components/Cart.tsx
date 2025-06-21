'use client'
import { Audiowide } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

type CartProps = {
  selectedPackages: {
    name: string
    includedServices: string[]
  }[]
  customServices: string[]
  servicesPrice: { [key: string]: number }
  packagesPrice: { [key: string]: number }
  onRemovePackage: (name: string) => void
  onRemoveService: (name: string) => void
}

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const Cart = ({ selectedPackages, customServices, servicesPrice, packagesPrice, onRemovePackage, onRemoveService }: CartProps) => {

  const basicPackageName = "Basic";
  const basicPackagePrice = packagesPrice[basicPackageName] || 0;

  const selectedPackage = selectedPackages[0];
  const selectedPackagePrice = selectedPackage?.name ? packagesPrice[selectedPackage.name] || 0 : 0;

  const totalServicesPrice = customServices.reduce(
    (sum, name) => sum + (servicesPrice[name] || 0),
    0
  );

  const total = basicPackagePrice + selectedPackagePrice + totalServicesPrice;

  return (
    <div className="container pt-10">
      <h2 className="text-center text-5xl text-bec font-bold mb-8 uppercase">Кошик</h2>
      <div className="relative flex justify-center mt-10 p-16 gap-20 z-10">
        <div className="flex justify-center absolute top-0">
          <Image 
            src="/images/propositions/bg-cart.png"
            alt=""
            width={1200}
            height={200}
            className="object-cover -z-10"
          />
        </div>
        <div className="mb-4 w-[600px]">
          <div className="">
            <h3 className="text-bec font-extrabold mb-2 text-3xl uppercase">Пакети</h3>
            <div className="flex justify-between mb-5 border-b border-becwhite pl-2 pr-10">
              <span className='font-bold text-2xl'>{basicPackageName}</span>
              <span className={`${awide.className}`}>{basicPackagePrice}$</span>
            </div>
            {/* Додатковий пакет — опціональний */}
            {selectedPackages
              .filter(pkg => pkg.name !== basicPackageName)
              .map(pkg => (
                <div key={pkg.name} className="relative flex justify-between mb-5 border-b border-becwhite pl-2 pr-10">
                  <span className='font-bold'>{pkg.name}</span>
                  <span className={`${awide.className}`}>{packagesPrice[pkg.name]}$</span>
                  <button
                    onClick={() => onRemovePackage(pkg.name)}
                    className="absolute bottom-[-1px] right-1 text-white text-4xl cursor-pointer font-light hover:scale-125 transition-all ease-in"
                  >
                    ×
                  </button>
                </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="text-bec font-extrabold mb-2 mt-15 text-3xl uppercase">Додаткові пропозиції</h3>
            {customServices.length ? (
              customServices.map(name => (
                <div key={name} className="relative flex justify-between mb-5 border-b border-becwhite pl-2 pr-10">
                  <span>{name}</span>
                  <span className={`${awide.className}`}>{servicesPrice[name]}$</span>
                  <button
                    onClick={() => onRemoveService(name)}
                    className="absolute bottom-[-1px] right-1 text-white text-4xl cursor-pointer font-light hover:scale-125 transition-all ease-in"
                  >
                    ×
                  </button>
                </div>
              ))
            ) : (
              <div className="pl-2 text-becwhite">Немає</div>
            )}
          </div>
          <div className="flex justify-end gap-7 text-3xl font-extrabold  pt-3 mt-3">
            <span className="text-bec">TOTAL:</span>
            <span className={`${awide.className} text-shadow-lg shadow-bec`}>{total}$</span>
          </div>
        </div>
        <div className="max-w-[350px]">
          <form className="mt-6">
            <input
              type="email"
              placeholder="Введіть пошту"
              className="text-xl w-full py-3 px-2 mb-2 bg-transparent border-2 border-becwhite text-becwhite placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Введіть назву компанії"
              className="mt-2 text-xl w-full py-3 px-2 mb-2 bg-transparent border-2 border-becwhite text-becwhite placeholder-gray-400"
            />
            <button className='w-full mt-4 text-center py-3 font-medium text-xl bg-[#5A5A58] text-[#CFCFCF] border border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)] cursor-pointer
              hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out'>
              Оформити
            </button>
          </form>

          <div className="mt-6 text-sm text-becwhite">
            <h4 className="text-bec font-extrabold text-3xl uppercase">Акції</h4>
            <ul className="mt-2">
              <li><span className="text-bec">-10%</span> при купівлі 3-х пакетів.</li>
              <li><span className="text-bec">-5%</span> для компаній–партнерів EBEC’2021 та/або BEC’2023 (застосовується після узгодження з організаторами).</li>              
              <li><span className="text-orange-500">-10%</span>для всіх партнерів, що працюють у сфері military та military–tech (застосовується після узгодження з організаторами).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
