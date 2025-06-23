'use client'
import Header from "@/components/Header";
import Hero from "@/components/Hero"
import About from "@/components/About";
import Categories from "@/components/Categories";
import WhyBec from "@/components/WhyBec";
import Statistics from "@/components/Statistics";
import Propositions from "@/components/Propositions";
import Sponsors from "@/components/Sponsors";
import Organisers from "@/components/Organisers";
import { useRef } from "react";
import Contacts from "@/components/ui/Contacts";

export default function Home() {

  const topRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const statisticsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const sposorRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <div className='scroll-m-20' ref={topRef} />
      <Header scrollToSection={scrollToSection} refs={{ topRef, statisticsRef, contactsRef, sposorRef, aboutRef }}/>
      <Hero scrollToSection={scrollToSection} sposorRef={sposorRef}/>
      <About ref={aboutRef}/>
      <Categories />
      <WhyBec />
      <Statistics ref={statisticsRef}/>
      <Propositions ref={sposorRef}/>
      <Sponsors />
      <Organisers />
      <Contacts ref={contactsRef}/>
    </>
  );
}
