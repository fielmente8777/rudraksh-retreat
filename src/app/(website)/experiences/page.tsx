import React from "react";
import IntroSection from "./components/IntroSection";
import { experiencePageData } from "./pageData";
import BannerSection from "./components/BannerSection";
import ExperiencesSection from "./components/ExperienceSection";
import VideoBanner from "@/components/banners/VideoBanner";
import { SectionWithContainer } from "@/components/sectionComponants";
import Form1 from "@/components/forms/Form1";

const page = () => {
  return (
    <main>
      <VideoBanner {...experiencePageData?.heroSection} />
      <IntroSection {...experiencePageData?.introSection} />
      <BannerSection {...experiencePageData?.bannerSection} />
      <ExperiencesSection {...experiencePageData?.experiencesSection} />
      <SectionWithContainer
        containerClassName="md:rounded-2xl md:py-3 py-4 bg-secondary"
      >
        <Form1 />
      </SectionWithContainer>
    </main>
  );
};

export default page;
