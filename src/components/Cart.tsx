'use client'
import { CartProps } from '@/types/types';
import { Audiowide } from 'next/font/google'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import emailjs from "@emailjs/browser";

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

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    emailjs.init("_8KlxS0-6bbPQMhDy");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        smth: customServices.join(", ") || "Немає додаткових послуг",
        company_email: email
      };

      const res = await emailjs.send(
        "service_u8kyhtg",
        "template_jti1nou",
        templateParams,
        "_8KlxS0-6bbPQMhDy"
      );

      console.log("Email sent:", res.status, res.text);
      alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
      setCompanyName("");
      setEmail("");
    } catch (error: any) {
      console.error("Email sending error:", error?.text || error);
      alert("Помилка надсилання! " + (error?.text || "Спробуйте ще раз."));
    }
  };
  return (
    <div className="container pt-40 relative">
      <h1 className="text-center text-5xl text-bec font-black mb-8 uppercase">Кошик</h1>
      <div className="relative flex justify-center mt-10 p-16 gap-20 z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1150px] 4xl:w-[1350px] -z-10">
          <Image 
            src="/images/propositions/bg-cart.png"
            alt=""
            width={1150}
            height={200}
            className="object-cover 4xl:w-[1350px]"
          />
        </div>
        <div className="mb-4 w-[600px] 4xl:w-[700px]">
          <div>
            <h3 className="text-bec font-extrabold mb-2 4xl:mb-4 text-3xl uppercase 4xl:text-4xl">Пакети</h3>
            <div className="flex justify-between mb-5 border-b border-becwhite pl-2 pr-10 4xl:text-3xl">
              <span className='font-bold text-2xl 4xl:text-3xl'>{basicPackageName}</span>
              <span className={`${awide.className}`}>{basicPackagePrice}$</span>
            </div>
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
            <h3 className="text-bec font-extrabold mb-2 4xl:mb-4 mt-15 text-3xl uppercase 4xl:text-4xl">Додаткові пропозиції</h3>
            {customServices.length ? (
              <div
                className={`overflow-y-auto pr-2 custom-scroll
                  ${selectedPackages.length >= 1 ? 'max-h-[200px] 4xl:max-h-[270px]' : 'max-h-[280px] 4xl:max-h-[350px]'}
                `}
              >
                {customServices.map(name => (
                  <div key={name} className="relative flex justify-between mb-5 border-b border-becwhite pl-2 pr-10 4xl:text-2xl">
                    <span>{name}</span>
                    <span className={`${awide.className}`}>{servicesPrice[name]}$</span>
                    <button
                      onClick={() => onRemoveService(name)}
                      className="absolute bottom-[-1px] right-1 text-white text-4xl cursor-pointer font-light hover:scale-125 transition-all ease-in"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="pl-2 text-becwhite">Немає</div>
            )}
            <div className="flex justify-end gap-7 text-3xl font-extrabold mt-3">
              <span className="text-bec">TOTAL:</span>
              <span className={`${awide.className} text-shadow-lg shadow-bec`}>{total}$</span>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] 4xl:max-w-[400px] z-2">
          <form className="mt-6" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Введіть пошту"
              className="text-xl w-full py-3 px-2 mb-2 bg-transparent border-2 border-becwhite text-becwhite placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Введіть назву компанії"
              className="mt-2 text-xl w-full py-3 px-2 mb-2 bg-transparent border-2 border-becwhite text-becwhite placeholder-gray-400"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <button
              type="submit"
              className='cursor-pointer w-full mt-4 text-center py-3 font-medium text-xl bg-[#5A5A58] text-[#CFCFCF] border border-[#CFCFCF] shadow-[inset_-3px_1px_15px_rgba(0,0,0,0.5)]
                hover:bg-[#727270] hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out'>
              Оформити
            </button>
          </form>

          <div className="mt-6 text-sm text-becwhite">
            <h4 className="text-bec font-extrabold text-3xl uppercase">Акції</h4>
            <ul className="mt-2 4xl:text-lg">
              <li><span className="text-bec">-10%</span> при купівлі 3-х пакетів.</li>
              <li><span className="text-bec">-5%</span> для компаній–партнерів EBEC’2021 та/або BEC’2023 (застосовується після узгодження з організаторами).</li>              
              <li><span className="text-orange-500">-10%</span>для всіх партнерів, що працюють у сфері military та military–tech (застосовується після узгодження з організаторами).</li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        height={60}
        width={300}
        alt="Decorative line 3"
        src="/images/propositions/cart-left.svg" 
        className="absolute top-15 -left-15 -z-1"
      />
      <Image
        height={60}
        width={350}
        alt="Decorative line 3"
        src="/images/propositions/cart-right.svg" 
        className="absolute top-15 -right-15 -z-1"
      />
      <Image
        height={60}
        width={500}
        alt="Decorative line 3"
        src="/images/elipses/about_right.png" 
        className="absolute top-10 -right-15 -z-1"
      />
      <Image
        height={60}
        width={500}
        alt="Decorative line 3"
        src="/images/elipses/about_left.png" 
        className="absolute top-30 -left-15 -z-1"
      />
    </div>
  )
}

export default Cart;
