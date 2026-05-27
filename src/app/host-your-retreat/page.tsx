import React from "react";
import HeroSection from "./components/HeroSection";
import { hostRetretPageData } from "./hostRetretPageData";
import GallerySection from "./components/GallerySection";
import BannerSection from "./components/BannerSection";
import CTASection from "./components/CTASection";

const page = () => {
  return (
    <main>
      <HeroSection {...hostRetretPageData.heroSection} />
      <GallerySection {...hostRetretPageData.gallerySection} />
      <BannerSection {...hostRetretPageData.bannerSection} />
      <CTASection {...hostRetretPageData.ctaSection} />
    </main>
  );
};

export default page;
