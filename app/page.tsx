import Navbar from '@/components/layout/navbar';
import FAQ from '@/components/sections/faq';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import OurServices from '@/components/sections/OurServices';
import PropertyGallery from '@/components/sections/PropertyGallery';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <HowItWorks />
      <PropertyGallery />
      <FAQ />
    </>
  );
};

export default page;
