import React, { useEffect } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Marcas from '../components/Marcas';
import BannerCompleto from '../components/BannerCompleto/BannerCompleto';
import HomeHeroSection from '../features/home/HomeHeroSection';
import HomeAboutSection from '../features/home/HomeAboutSection';
import HomeServicesCardsSection from '../features/home/HomeServicesCardsSection';
import HomePanelsBenefitsSection from '../features/home/HomePanelsBenefitsSection';
import HomePromoSection from '../features/home/HomePromoSection';
import HomeCountersSection from '../features/home/HomeCountersSection';

function Home() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top',
    });
  }, []);
  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeServicesCardsSection />
      <hr />
      <HomePanelsBenefitsSection />
      <Marcas />
      <BannerCompleto data-aos='fade-up' />
      <HomePromoSection />
      <HomeCountersSection />
    </>
  );
}

export default Home;
