"use client";

import Image from "next/image";

import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function StorySection() {
  const { storySection } = landingPageData;

  return (
    <SectionWithContainer sectionClassName="bg-background py-24">
      <div className="grid gap-5 lg:grid-cols-2">
        {/* LEFT STICKY */}
        <div className="h-fit lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[3.5px] text-p22">
            {storySection.subtitle}
          </p>

          <h2 className="font-primary mt-4 text-[32px] font-light text-secondary md:text-[60px]">
            {storySection.title.normal}{" "}
            <span className="italic text-p22">
              {storySection.title.highlighted}
            </span>{" "}
            {storySection.title.end}
          </h2>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            {storySection.buttons.map((button, index) => {
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
                    {button.variant === "primary" && Icon && <Icon />}

                    <span>{button.label}</span>

                    {button.variant === "secondary" && Icon && <Icon />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-14">
          {/* QUOTE */}
          <div className="border-b border-primary pb-8">
            <p className="font-primary text-[24px] italic text-tertiary md:text-2xl">
              “{storySection.quote}”
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-[700px] text-base text-tertiary">
            {storySection.description}
          </p>

          {/* CARDS */}
          <div className="grid gap-8 md:grid-cols-2">
            {storySection.points.map((point, index) => (
              <div key={index} className={`${index === 1 ? "md:pt-20" : ""}`}>
                <h3 className="font-primary text-2xl text-secondary">
                  {point.title}
                </h3>

                <p className="mt-4 text-base text-tertiary">
                  {point.description}
                </p>

                {/* IMAGE */}
                <div className="relative mt-6 overflow-hidden">
                  <div className="relative h-[420px] w-full">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
