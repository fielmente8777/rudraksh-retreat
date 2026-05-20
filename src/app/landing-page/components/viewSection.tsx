"use client";

import { LazyLoadedVideo } from "@/components/Video";
import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import LinkButton from "@/components/buttons/LinkButton";

export default function ViewSection() {
  const { viewSection } = landingPageData;

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative h-[75vh] md:h-screen overflow-hidden bg-secondary"
      containerClassName="!max-w-full !px-0"
    >
      {/* VIDEO ← missing */}
      <LazyLoadedVideo src={viewSection.video} />

      {/* OVERLAY ← missing */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 pt-8 text-center md:px-6 md:pt-0">
        <div className="w-full max-w-[380px] md:max-w-[700px]">
          <p className="text-xs tracking-[4px] text-primary">
            {viewSection.subtitle}
          </p>

          <h2 className="font-primary mt-4 text-[28px] leading-[1.15] font-light text-white md:mt-5 md:text-6xl md:leading-tight">
            {viewSection.title.normal}{" "}
            <span className="italic text-primary">
              {viewSection.title.highlighted}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[300px] text-[13px] leading-6 text-white/80 md:mt-6 md:max-w-[520px] md:text-base md:leading-6">
            {viewSection.description}
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 md:mt-10 md:gap-4">
            {viewSection.buttons.map((button, index) => (
              <LinkButton
                key={index}
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                arrowIcon={false}
                whatsAppIcon={false}
                className={`rounded-sm justify-center max-md:w-full gap-2! uppercase tracking-widest max-md:text-sm ${index === 0 ? "text-white bg-primary border-primary" : "text-primary bg-transparent border border-primary"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
