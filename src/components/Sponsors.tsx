import Image from "next/image"

const logos = [
  {src: "/images/sponsors/openlab.png", alt: "openlab"},
  {src: "/images/sponsors/bestshot.png", alt: "openlab"},
  {src: "/images/sponsors/fujikura.png", alt: "fujikura"},
  {src: "/images/sponsors/renesas.png", alt: "orenesas"},
  {src: "/images/sponsors/globalologic.png", alt: "globalologic"},
  {src: "/images/sponsors/hator.png", alt: "hator"},
  {src: "/images/sponsors/kernel.png", alt: "kernel"},
  {src: "/images/sponsors/kness.png", alt: "kness"},
  {src: "/images/sponsors/startup.png", alt: "startup"},
  {src: "/images/sponsors/gorich.png", alt: "gorich"},
]

const Sponsors = () => {
  return (
    <section className="container">
      <h2 className="text-center text-bec text-4xl font-extrabold mb-10 3xl:text-[42px] 4xl:text-5xl 4xl:mb-15">
        НАС ПІДТРИМУЮТЬ
      </h2>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="grid grid-cols-2 gap-30 max-w-[400px] justify-items-center">
          {logos.slice(0, 2).map((logo, idx) => (
            <div key={idx} className="w-[220px] h-[100px] relative transition">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        <div className="flex w-full justify-around items-center">
          {logos.slice(2, 5).map((logo, idx) => (
            <div key={idx + 2} className="w-[220px] h-[100px] relative transition">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        <div className="flex w-full justify-around items-center">
          {logos.slice(5, 8).map((logo, idx) => (
            <div key={idx + 5} className="w-[220px] h-[100px] relative transition">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-30 max-w-[400px] justify-items-center">
          {logos.slice(8, 10).map((logo, idx) => (
            <div key={idx + 8} className="w-[320px] h-[100px] relative transition">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors