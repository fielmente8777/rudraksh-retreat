"use client";

import { LazyLoadedVideo } from "@/components/Video";
import { SectionWithContainer } from "@/components/sectionComponants";
import { landingPageData } from "./pageData";

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

        <LazyLoadedVideo src={heroSection.video} />

        {/* OVERLAY */}
        <div className="absolute inset-0 z-10 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-20 flex h-full items-center -mt-10 px-6 md:mt-0 md:px-12">
          <div className="max-w-[650px] text-white space-y-6">
            {/* HEADING */}
            <h1 className="font-primary text-4xl font-light md:text-7xl">
              <div>
                {heroSection.title.first.normal}{" "}
                <span className="italic text-primary">
                  {heroSection.title.first.highlighted}
                </span>
              </div>

              <div>{heroSection.title.second}</div>

              <div className="italic text-primary">
                {heroSection.title.third.highlighted}
              </div>
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-[580px] text-[14px]  text-white/80">
              {heroSection.description}
            </p>

            {/* BUTTONS */}
           <div className="flex flex-nowrap gap-3 overflow-x-auto">
              {heroSection.buttons.map((button, index) => {
                const Icon = button.icon;

                return (
                  <button
                    key={index}
                    className={`rounded-md px-4 py-2.5 md:px-8 md:py-4 text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] transition-all
                      
                      ${
                        button.variant === "primary"
                          ? "bg-primary text-white hover:opacity-90"
                          : "border border-white text-white hover:bg-primary hover:text-white"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      {button.variant === "primary" && Icon && <Icon />}

                      <span>{button.label}</span>

                      {button.variant === "secondary" && Icon && <Icon />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
