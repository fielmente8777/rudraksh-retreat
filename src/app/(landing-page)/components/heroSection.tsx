"use client";

import { LazyLoadedVideo } from "@/components/Video";
import { SectionWithContainer } from "@/components/sectionComponants";
import { landingPageData } from "./pageData";

export default function HeroSection() {
  const { heroSection } = landingPageData;

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-background"
      containerClassName="max-w-[1440px] mx-auto"
    >

      <div className="relative h-[800px] overflow-hidden rounded-xl">

        {/* VIDEO */}
        
          <LazyLoadedVideo src={heroSection.video} />

        {/* OVERLAY */}
        <div className="absolute inset-0 z-10 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-20 flex h-full items-center px-6 md:px-12">

          <div className="max-w-[650px] text-white space-y-6">

            {/* HEADING */}
            <h1 className="font-primary text-5xl font-light md:text-7xl">

              <div>
                {heroSection.title.first.normal}{" "}

                <span className="italic text-primary">
                  {heroSection.title.first.highlighted}
                </span>
              </div>

              <div>
                {heroSection.title.second}
              </div>

              <div className="italic text-primary">
                {heroSection.title.third.highlighted}
              </div>

            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-[580px] text-[14px]  text-white/80">
              {heroSection.description}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              {heroSection.buttons.map((button, index) => {
                const Icon = button.icon;

                return (
                  <button
                    key={index}
                    className={`rounded-md px-8 py-4 text-xs tracking-[3px] transition-all
                      
                      ${
                        button.variant === "primary"
                          ? "bg-primary text-white hover:opacity-90"
                          : "border border-white text-white hover:bg-white hover:text-black"
                      }
                    `}
                  >

                    <div className="flex items-center gap-2">

                      {button.variant === "primary" &&
                        Icon && <Icon />}

                      <span>{button.label}</span>

                      {button.variant === "secondary" &&
                        Icon && <Icon />}

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