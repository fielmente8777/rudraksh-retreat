import Image from "next/image";

import { SectionWithContainer } from "@/components/sectionComponants";
import { landingPageData } from "./pageData";
import LinkButton from "@/components/buttons/LinkButton";

export default function NutritionSection() {
  const { nutritionSection } = landingPageData;

  return (
    <SectionWithContainer sectionClassName="bg-secondary">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* IMAGE */}

        <div className="relative aspect-4/4.5 w-full max-md:w-[90%] mx-auto">
          <Image
            src={nutritionSection.image}
            alt="Garden to plate"
            fill
            className="object-cover rounded-sm"
          />
          <div className="w-30 lg:w-37.25 lg:h-38 rounded-sm border-primary  lg:border-l-20 lg:border-t-20 border-t-lg border-l-lg absolute -left-5 -top-5 max-md:-left-30 z-10">
            {/* <SquareIcon /> */}
          </div>
          <div className="w-30 lg:w-37.25 lg:h-38 rounded-sm border-primary  lg:border-r-20 lg:border-b-20 border-b-lg border-r-lg absolute -right-5 -bottom-5 z-10">
            {/* <SquareIcon /> */}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-4">
          {/* SUBTITLE */}
          <p className="text-xs text-primary">{nutritionSection.subtitle}</p>

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
              &quot;{nutritionSection.quote}&quot;
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-8 text-[16px]  text-white/70">
            {nutritionSection.description}
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex max-md:flex-col md:gap-4 gap-3 items-center ">
            {nutritionSection.buttons.map((button, index) => (
              <LinkButton
                key={index}
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                arrowIcon={index !== 0 && true}
                whatsAppIcon={index === 0 && true}
                className={`rounded-sm justify-center max-md:w-full gap-2! uppercase tracking-widest ${index === 0 ? "text-white bg-primary max-md:text-sm border-primary" : "text-primary bg-transparent border border-primary"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
