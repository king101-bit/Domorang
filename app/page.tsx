import Navbar from '@/components/layout/navbar';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import OurServices from '@/components/sections/OurServices';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <HowItWorks />
    </>
  );
};

export default page;
