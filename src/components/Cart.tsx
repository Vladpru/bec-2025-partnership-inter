'use client'
import { Audiowide } from 'next/font/google'
import React from 'react'

type CartProps = {
  selectedPackages: {
    name: string
    includedServices: string[]
  }[]
  customServices: string[]
  servicesPrice: { [key: string]: number }
  packagesPrice: { [key: string]: number }
}

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const Cart = ({ selectedPackages, customServices, servicesPrice, packagesPrice, }: CartProps) => {

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
      <h2 className="text-center text-4xl text-bec font-black mb-8 uppercase">Кошик</h2>
      <div className="flex justify-center mt-10 p-6 gap-30">
        <div className="mb-4 w-[600px]">
          <div className="">
            <h3 className="text-orange-500 font-bold mb-2">Пакети</h3>
            <div className="flex justify-between mb-1 border-b border-becwhite pl-2 pr-8">
              <span>{basicPackageName}</span>
              <span>{basicPackagePrice}$</span>
            </div>
            {/* Додатковий пакет — опціональний */}
            {selectedPackages
              .filter(pkg => pkg.name !== basicPackageName)
              .map(pkg => (
                <div key={pkg.name} className="flex justify-between mb-1">
                  <span>{pkg.name}</span>
                  <span>{packagesPrice[pkg.name]}$</span>
                </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="text-orange-500 font-bold mb-2">Додаткові пропозиції</h3>
            {customServices.length ? (
              customServices.map(name => (
                <div key={name} className="flex justify-between mb-1">
                  <span>{name}</span>
                  <span>{servicesPrice[name]}$</span>
                </div>
              ))
            ) : (
              <div className="text-gray-400">Немає</div>
            )}
          </div>
          <div className="flex justify-between text-lg font-bold  pt-3 mt-3">
            <span className="text-orange-500">TOTAL:</span>
            <span>{total}$</span>
          </div>
        </div>
        <div className="max-w-[400px]">
          <form className="mt-6">
            <input
              type="email"
              placeholder="Введіть пошту"
              className="w-full p-2 mb-2 rounded bg-black border border-gray-500 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Введіть назву компанії"
              className="w-full p-2 mb-2 rounded bg-black border border-gray-500 text-white placeholder-gray-400"
            />
            <button className="w-full p-2 bg-gray-300 text-black rounded hover:bg-white">
              Оформити
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-400">
            <h4 className="text-orange-400 font-semibold">Акції</h4>
            <ul className="pl-4 mt-2">
              <li><span className="text-orange-500">-10%</span> при купівлі 3-х пакетів.</li>
              <li><span className="text-orange-500">-5%</span> для партнерів EBEC'2021/2023 (по узгодженню).</li>              <li><span className="text-orange-500">-10%</span> для military/military-tech (по узгодженню).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
