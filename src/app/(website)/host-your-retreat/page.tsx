import { homePageData } from "@/components/home-components/pageData";
import StoriesSection from "@/components/home-components/StoriesSection";
import SlidingTitle2 from "@/components/sliders/SlidingTitle2";
import { Metadata } from "next";
import Banner from "./components/Banner";
import BannerSection from "./components/BannerSection";
import { hostRetretPageData } from "./hostRetretPageData";
import WhyChooseUs from "./components/WhyChooseUs";
import ImagineYourRetreat from "./components/ImagineYourRetreat";
import WhatWeProvide from "./components/WhatWeProvide";

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
      <Banner {...hostRetretPageData.banner} />
      <SlidingTitle2 items={hostRetretPageData.slidingTitleSection.items} useIcon className="text-white! py-3.5 bg-secondary uppercase tracking-wider" />
      <WhyChooseUs {...hostRetretPageData.whyChooseUs} />
      <ImagineYourRetreat {...hostRetretPageData.imagineYourRetreat} />
      <WhatWeProvide {...hostRetretPageData.whatWeProvide} />
      <BannerSection {...hostRetretPageData.bannerSection} />
      <SlidingTitle2 items={hostRetretPageData.byTheNumbersSection} useIcon className="text-white! py-3.5 bg-secondary" />
      <StoriesSection {...homePageData.storiesSection} />
    </main>
  );
};

export default page;

