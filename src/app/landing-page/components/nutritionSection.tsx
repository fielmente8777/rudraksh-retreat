import Image from "next/image";

import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SquareIcon } from "@/utils/icons";

export default function NutritionSection() {
  const { nutritionSection } = landingPageData;

  return (
    <SectionWithContainer sectionClassName="bg-secondary">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -left-5 -top-5 z-0">
            <SquareIcon />
          </div>
          <div className="absolute -bottom-5 -right-5 z-0">
            <SquareIcon />
          </div>
          <div className="relative aspect-[620/775] overflow-hidden rounded-[4px]">
            <Image
              src={nutritionSection.image}
              alt="Garden to plate"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-[560px]">
          {/* SUBTITLE */}
          <p className="text-[12px] tracking-[4px] text-primary">
            {nutritionSection.subtitle}
          </p>

          {/* TITLE */}
          <h2 className="font-primary text-5xl font-light text-white md:text-6xl">
            {nutritionSection.title.normal}{" "}
            <span className="italic text-primary">
              {nutritionSection.title.highlighted}
            </span>{" "}
            {nutritionSection.title.end}
          </h2>

          {/* QUOTE */}
          <div className="mt-8 border-l border-primary pl-5">
            <p className="font-primary text-[20px] italic text-white/80">
              "{nutritionSection.quote}"
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-8 text-[16px]  text-white/70">
            {nutritionSection.description}
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            {nutritionSection.buttons.map((button, index) => {
              const Icon = button.icon;

              return (
                <button
                  key={index}
                  className={`
                    flex items-center gap-2 rounded-md px-8 py-4
                    text-[11px] tracking-[3px] transition-all
                    ${
                      button.variant === "primary"
                        ? "bg-primary text-white hover:opacity-90"
                        : "border border-primary text-primary hover:bg-primary hover:text-white"
                    }
                  `}
                >
                  {/* LEFT ICON */}
                  {button.variant === "primary" && Icon && (
                    <Icon className="text-black" />
                  )}

                  <span>{button.label}</span>

                  {/* RIGHT ICON */}
                  {button.variant === "secondary" && Icon && (
                    <Icon className="text-primary transition-colors group-hover:text-black" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
