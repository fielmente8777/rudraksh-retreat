import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function WellnessSection() {
  const { wellnessSection } = landingPageData;

  return (
    <SectionWithContainer sectionClassName="bg-background py-24">
      {/* TOP CONTENT */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* LEFT */}
        <div className="max-w-[600px]">
          <p className="text-[12px] tracking-[4px] text-p22">
            {wellnessSection.subtitle}
          </p>

          <h2 className="font-primary mt-4 text-4xl font-light text-secondary md:text-6xl">
            {wellnessSection.title.normal}{" "}
            <span className="italic text-p22">
              {wellnessSection.title.highlighted}
            </span>
          </h2>
        </div>

        {/* RIGHT */}
        <p className="max-w-[620px] text-[16px] text-tertiary">
          {wellnessSection.description}
        </p>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative mt-14 overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={wellnessSection.image}
            alt="Wellness"
            fill
            className="object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* BUTTONS */}
        <div className="absolute bottom-8 left-8 z-10 flex flex-wrap gap-4">
          {wellnessSection.buttons.map((button, index) => {
            const Icon = button.icon;
            return (
              <button
                key={index}
                className={`rounded-md px-8 py-4 text-xs tracking-[3px] transition-all
                  ${
                    button.variant === "primary"
                      ? "bg-primary text-white hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-black"
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

        {/* SLIDER BUTTONS */}
        <div className="absolute bottom-8 right-8 z-10 flex gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary transition-all hover:scale-105">
            <ChevronLeft size={18} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary transition-all hover:scale-105">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </SectionWithContainer>
  );
}
