import React from "react";
import IntroSection from "./components/IntroSection";
import { experiencePageData } from "./pageData";
import BannerSection from "./components/BannerSection";
import ExperiencesSection from "./components/ExperienceSection";
import VideoBanner from "@/components/banners/VideoBanner";

const page = () => {
  return (
    <main>
      <VideoBanner {...experiencePageData?.heroSection} />
      <IntroSection {...experiencePageData?.introSection} />
      <BannerSection {...experiencePageData?.bannerSection} />
      <ExperiencesSection {...experiencePageData?.experiencesSection} />
    </main>
  );
};

export default page;
