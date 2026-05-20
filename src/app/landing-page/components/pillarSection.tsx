import { MoblieOhmIcon, OhmIcon } from "@/utils/icons";
import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import LinkButton from "@/components/buttons/LinkButton";

export default function PillarSection() {
  const { pillarSection } = landingPageData;

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative min-h-screen overflow-hidden bg-secondary "
      containerClassName=""
    >
      <div className="pointer-events-none absolute -right-[70px] top-[170px] md:hidden w-[260px]">
        <MoblieOhmIcon />
      </div>
      <div className="pointer-events-none max-md:hidden absolute right-0 top-0 ">
        <OhmIcon />
      </div>

      <div className="relative z-10 py-10 md:px-16 md:py-20">
        {/* HEADING */}
        <div className="text-center">
          <p className="text-[12px] tracking-[4px] text-primary">
            {pillarSection.subtitle}
          </p>

          <h2 className="font-primary mt-6 text-[32px] font-light text-white md:text-5xl">
            {pillarSection.title}{" "}
            <span className="italic text-primary">
              {pillarSection.highlightedText}
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="pl-4 md:pl-0 mt-16 grid grid-cols-1 md:mt-20 md:grid-cols-3">
          {pillarSection.cards.map((card, index) => (
            <div
              key={index}
              className="border-[#4B392D] py-8  border-b md:border-b-0 md:px-8 md:border-r last:border-r-0 "
            >
              <h3 className="text-6xl text-primary">{card.hindi}</h3>

              <h4 className="mt-10 font-primary text-3xl text-white">
                {card.title}
              </h4>

              <p className="mt-2 text-[10px] tracking-[3px] text-white/60">
                — {card.tag}
              </p>

              <p className="mt-6 max-w-[280px] text-sm leading-7 text-white/70">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}

        <div className="mt-10 flex flex-wrap justify-center gap-4 md:mt-20">
          {pillarSection.buttons.map((button, index) => (
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
      </div>
    </SectionWithContainer>
  );
}
