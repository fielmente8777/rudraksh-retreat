import { SectionWithContainer } from "@/components/sectionComponants";
import { landingPageData } from "./pageData";
import LinkButton from "@/components/buttons/LinkButton";

export default function JourneySection() {
  const { journeySection } = landingPageData;

  return (
    <SectionWithContainer
      containerClassName="max-md:px-0!"
      sectionClassName="bg-background"
    >
      {/* HEADING */}
      <div className="mx-auto max-w-[600px] text-center">
        <p className="text-xs tracking-[4px] text-p22">
          {journeySection.subtitle}
        </p>

        <h2 className="font-primary mt-4 text-4xl font-light text-secondary md:text-6xl">
          {journeySection.title.normal}{" "}
          <span className="italic text-p22">
            {journeySection.title.highlighted}
          </span>{" "}
          {journeySection.title.end}
        </h2>
      </div>

      {/* TABLE ROWS */}
      <div className="mt-8 lg:mt-20 border-y border-[#D8D0C4]">
        {journeySection.journeys.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-6 border-b border-[#D8D0C4] px-4 py-8 md:grid-cols-[1.4fr_1fr] md:gap-10 md:px-2"
          >
            <div className="flex items-center gap-2.5 lg:gap-12 pt-1">
              {item.icon && (
                <span className="">
                  <item.icon />
                </span>
              )}
              {/* TITLE */}
              <h3 className="font-primary text-xl lg:text-2xl text-secondary">
                {item.title}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className=" text-[15px] text-tertiary ">{item.description}</p>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      {/* BUTTONS */}
      <div className=" mt-8 lg:mt-16 flex flex-wrap justify-center gap-4  max-md:px-4">
        {journeySection.buttons.map((button, index) => (
          <LinkButton
            key={index}
            {...button}
            target="_blank"
            rel="noopener noreferrer"
            arrowIcon={index !== 0 && true}
            whatsAppIcon={index === 0 && true}
            className={`rounded-sm justify-center max-md:w-full gap-2! uppercase tracking-widest max-md:text-sm ${index === 0 ? "text-white bg-primary border-primary" : "text-primary bg-transparent border border-primary"}`}
          />
        ))}
      </div>
    </SectionWithContainer>
  );
}
