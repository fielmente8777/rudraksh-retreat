"use client";

import { LazyLoadedVideo } from "@/components/Video";
import { SectionWithContainer } from "@/components/sectionComponants";
import { landingPageData } from "./pageData";
import LinkButton from "@/components/buttons/LinkButton";

export default function HeroSection() {
  const { heroSection } = landingPageData;

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative  h-[75vh] md:h-screen overflow-hidden"
      containerClassName="!max-w-full !px-0"
    >
      <div className="relative h-screen overflow-hidden rounded-xl">
        {/* VIDEO */}

        <LazyLoadedVideo
          src={heroSection.video}
          poster={heroSection.videoPoster}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-20 flex h-full items-center -mt-10 px-6 md:mt-0 md:px-12">
          <div className="max-w-[650px] text-white space-y-6">
            {/* HEADING */}
            <h1
              className="font-primary text-4xl font-light md:text-7xl"
              dangerouslySetInnerHTML={{ __html: heroSection.title }}
            ></h1>

            {/* DESCRIPTION */}
            <p className="max-w-[580px] text-[14px]  text-white/80">
              {heroSection.description}
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 max-lg:flex-col">
              {heroSection.buttons.map((button, index) => (
                <LinkButton
                  key={index}
                  {...button}
                  target={index === 1 ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  arrowIcon={false}
                  whatsAppIcon={index === 0 && true}
                  className={`rounded-sm justify-center max-md:w-full gap-2! uppercase tracking-widest max-md:text-sm ${index === 0 ? "text-white bg-primary border-primary" : "text-primary bg-transparent border border-primary"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
