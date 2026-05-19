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

        <div className="relative aspect-[620/775] ">
          <Image
            src={nutritionSection.image}
            alt="Garden to plate"
            fill
            className="object-cover rounded-[4px]"
          />
          <div className="w-30 lg:w-50 aspect-square border-[#C9A96F]  lg:border-l-[20px] lg:border-t-[20px] absolute -left-5 -top-5 z-10">
            {/* <SquareIcon /> */}
          </div>
          <div className="w-30 lg:w-50 aspect-square border-[#C9A96F]  lg:border-r-[20px] lg:border-b-[20px] absolute -right-5 -bottom-5 z-10">
            {/* <SquareIcon /> */}
          </div>
        </div>

        {/* CONTENT */}
        <div className="mx-auto max-w-[500px] text-center lg:mx-0 lg:text-left">
          {/* SUBTITLE */}
          <p className="text-[12px] tracking-[px] text-primary">
            {nutritionSection.subtitle}
          </p>

          {/* TITLE */}
          <h2 className="font-primary mt-4 text-4xl font-light text-white md:text-6xl">
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
                    flex items-center justify-center max-md:w-full gap-2 rounded-md px-8 py-4
                    text-[11px] tracking-[3px] transition-all
                    ${button.variant === "primary"
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
