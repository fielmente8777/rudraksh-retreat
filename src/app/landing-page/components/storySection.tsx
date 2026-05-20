"use client";

import Image from "next/image";

import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function StorySection() {
  const { storySection } = landingPageData;

  return (
    <SectionWithContainer sectionClassName="bg-background ">
      <div className="grid gap-5 lg:grid-cols-2">
        {/* LEFT STICKY */}
        <div className="h-fit lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[3.5px] text-p22">
            {storySection.subtitle}
          </p>

          <h2 className="font-primary mt-2 text-[24px] leading-[1.2] font-light text-secondary md:mt-4 md:text-[60px]">
            {storySection.title.normal}{" "}
            <span className="italic text-p22">
              {storySection.title.highlighted}
            </span>{" "}
            {storySection.title.end}
          </h2>

          {/* BUTTONS */}
          <div className="hidden md:flex mt-10 gap-4">
            {storySection.buttons.map((button, index) => {
              const Icon = button.icon;

              return (
                <button
                  key={index}
                  className={`rounded-md px-4 py-2 text-[10px] tracking-[2px] md:px-8 md:py-4 md:text-xs md:tracking-[3px] transition-all

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
        <div className="space-y-10">
          {/* QUOTE */}
          <div className="border-b border-primary pb-6 mb-6">
            <p className="font-primary text-[24px] italic text-tertiary md:text-2xl">
              “{storySection.quote}”
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-[700px] text-base text-tertiary">
            {storySection.description}
          </p>

          {/* CARDS */}
          {/* MOBILE */}
          <div className="space-y-6 md:hidden">
            {storySection.points.map((point, index) => (
              <div key={index}>
                <h3 className="italic font-primary text-2xl text-secondary">
                  {point.title}
                </h3>

                <p className="mt-3 text-base text-tertiary">
                  {point.description}
                </p>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3">
              {storySection.points.map((point, index) => (
                <div
                  key={index}
                  className={`${index === 1 ? "pt-8" : ""} relative overflow-hidden`}
                >
                  <div className="relative aspect-[179/226] w-full">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* MOBILE BUTTONS */}
            <div className="mt-5 flex flex-col gap-2 md:hidden">
              {storySection.buttons.map((button, index) => {
                const Icon = button.icon;

                return (
                  <button
                    key={index}
                    className={`rounded-md px-4 py-2 text-[10px] tracking-[2px] transition-all
        
        ${
          button.variant === "primary"
            ? "bg-primary text-white hover:opacity-90"
            : "border border-primary text-primary hover:bg-primary hover:text-white"
        }
      `}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {button.variant === "primary" && Icon && <Icon />}

                      <span>{button.label}</span>

                      {button.variant === "secondary" && Icon && <Icon />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8">
            {storySection.points.map((point, index) => (
              <div key={index}>
                <h3 className="italic font-primary text-2xl text-secondary">
                  {point.title}
                </h3>

                <p className="mt-4 text-base text-tertiary">
                  {point.description}
                </p>

                <div
                  className={`relative mt-6 overflow-hidden ${
                    index === 1 ? "md:pt-15" : ""
                  }`}
                >
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
