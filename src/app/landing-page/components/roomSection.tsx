import Image from "next/image";
import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function RoomSection() {
  const { roomSection } = landingPageData;
  return (
    <SectionWithContainer sectionClassName="bg-background">
      {/* TOP CONTENT */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* LEFT */}
        <div className="max-w-[650px]">
          <p className="text-xs uppercase tracking-[3.5px] text-p22">
            {roomSection.subtitle}
          </p>

          <h2 className="font-primary mt-4 text-4xl font-light text-secondary md:text-[60px]">
            {roomSection.title.normal}{" "}
            <span className="italic text-p22">
              {roomSection.title.highlighted}
            </span>
          </h2>
        </div>
        {/* RIGHT */}
        <p className="max-w-[500px] pt-8 text-[16px] text-tertiary ">
          {roomSection.description}
        </p>
      </div>
      {/* CARDS */}
      <div className="mt-16 flex flex-col gap-8 xl:flex-row xl:justify-between">
        {roomSection.cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col xl:w-[31.5%] ${
              index === 1 ? "xl:mt-16" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <div className="relative h-[540px] w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
            {/* TEXT */}
            <div className="mt-4 space-y-4">
              {/* TAG & ID */}
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[3px] text-p22">
                  {card.tag}
                </p>
                <p className="text-xs text-tertiary">{card.id}</p>
              </div>
              {/* TITLE */}
              <h3 className="font-primary text-3xl text-secondary">
                {card.title}
              </h3>
              {/* DESCRIPTION */}
              <p className="text-sm leading-7 text-tertiary">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* buttons */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {roomSection.buttons.map((button, index) => {
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
    </SectionWithContainer>
  );
}
