"use client";

import { LazyLoadedVideo } from "@/components/Video";
import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function ViewSection() {
  const { viewSection } = landingPageData;

  return (
   <SectionWithContainer
  defaultPadding={false}
  sectionClassName="relative h-screen overflow-hidden bg-secondary"
  containerClassName="!max-w-full !px-0"
>

  {/* VIDEO */}
  <LazyLoadedVideo src={viewSection.video} />

  {/* OVERLAY */}
  <div className="absolute inset-0 z-10 bg-black/45" />

  {/* CONTENT */}
  <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">

    <div className="max-w-[700px]">

      <p className="text-xs tracking-[4px] text-primary">
        {viewSection.subtitle}
      </p>

      <h2 className="font-primary mt-6 text-4xl font-light leading-tight text-white md:text-6xl">

        {viewSection.title.normal}{" "}

        <span className="italic text-primary">
          {viewSection.title.highlighted}
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-[520px] text-base leading-6 text-white/80">
        {viewSection.description}
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-col items-center gap-4">

        {viewSection.buttons.map((button, index) => {
          const Icon = button.icon;

          return (
            <button
              key={index}
              className={`rounded-md px-8 py-4 text-xs tracking-[3px] transition-all

                ${
                  button.variant === "primary"
                    ? "bg-primary text-white hover:opacity-90"
                    : "border border-primary text-primary hover:bg-primary hover:text-white"
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

</SectionWithContainer>
  );
}
