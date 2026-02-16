import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import CTA from '@/components/sections/CTA';
import Faqs from '@/components/sections/Faqs';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Problems from '@/components/sections/Problems';
import Roadmap from '@/components/sections/Roadmap';
import Stats from '@/components/sections/Stats';
import WhyUs from '@/components/sections/WhyUs';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <Stats />
      <HowItWorks />
      <WhyUs />
      <Roadmap />
      <Faqs />
      <CTA />
      <Footer />
    </>
  );
};

export default page;
