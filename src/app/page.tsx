import Header from "@/components/Header";
import Hero from "@/components/Hero"
import About from "@/components/About";
import Categories from "@/components/Categories";
import WhyBec from "@/components/WhyBec";
import Statistics from "@/components/Statistics";
import Propositions from "@/components/Propositions";
import Sponsors from "@/components/Sponsors";
import Organisers from "@/components/Organisers";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Categories />
      <WhyBec />
      <Statistics />
      <Propositions />
      <Sponsors />
      <Organisers />
    </>
  );
}
