import React from "react";
import HeroSection from "./components/HeroSection";
import { hostRetretPageData } from "./hostRetretPageData";
import GallerySection from "./components/GallerySection";
import BannerSection from "./components/BannerSection";
import CTASection from "./components/CTASection";
import ImageBanner from "@/components/banners/ImageBanner";

const page = () => {
  return (
    <main>
      <ImageBanner {...hostRetretPageData.banner} />
      <HeroSection {...hostRetretPageData.heroSection} />
      <GallerySection {...hostRetretPageData.gallerySection} />
      <BannerSection {...hostRetretPageData.bannerSection} />
      <CTASection {...hostRetretPageData.ctaSection} />
    </main>
  );
};

export default page;
