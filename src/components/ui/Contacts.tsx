import Image from "next/image";


const Contacts = () => {

  const teamMembers = [
    { name: "Соломія Ногаль", role: "Відповідальна за корпоративні зв’язки", email: "Solomiia.Nohal@Best-Eu.Org", phone: "+380688828848" },
    { name: "Денис Браздецький", role: "Головний організатор", email: "Denys.Brazdetskyi@Best-Eu.Org", phone: "+380664493594" },
    { name: "Дмитро Мартинюк", role: "Відповідальний за корпоративні зв’язки", email: "Dmytro.Martyniuk@Best-Eu.Org", phone: "+380672710270" },
  ];

  return (
    <div className="mt-30 mb-30">
      <h1 className="text-center text-4xl text-bec font-black mb-10 uppercase">Контакти</h1>
      
    </div>
  )
}

export default Contacts