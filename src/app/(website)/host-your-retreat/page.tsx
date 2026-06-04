import React from "react";
import HeroSection from "./components/HeroSection";
import { hostRetretPageData } from "./hostRetretPageData";
import GallerySection from "./components/GallerySection";
import BannerSection from "./components/BannerSection";
import CTASection from "./components/CTASection";
import ImageBanner from "@/components/banners/ImageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "Host Your Retreat | Ideal Venue for Yoga & Wellness Retreats",
  description:
    "Plan your perfect yoga, wellness, or corporate retreat at The Rudraksh Retreat. A serene, nature-filled space for transformation and relaxation.",

  alternates: {
    canonical: "https://therudrakshretreat.com/host-your-retreat/",
  },

  openGraph: {
    title: "Host Your Retreat | Ideal Venue for Yoga & Wellness Retreats",
    description:
      "Plan your perfect yoga, wellness, or corporate retreat at The Rudraksh Retreat. A serene, nature-filled space for transformation and relaxation.",
    url: "https://therudrakshretreat.com/host-your-retreat/",
    siteName: "The Rudraksh Retreat",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



const page = () => {
  return (
    <main>
      <ImageBanner {...hostRetretPageData.banner} />
      <HeroSection {...hostRetretPageData.heroSection} />
      {/* <GallerySection {...hostRetretPageData.gallerySection} /> */}
      <BannerSection {...hostRetretPageData.bannerSection} />
      <CTASection {...hostRetretPageData.ctaSection} />
    </main>
  );
};

export default page;
