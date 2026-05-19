import { OhmIcon } from "@/utils/icons";
import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function PillarSection() {
  const { pillarSection } = landingPageData;

  return (
    <SectionWithContainer sectionClassName="bg-background"
    containerClassName="max-w-[1440px]">
        <div className="relative overflow-hidden rounded-2xl bg-secondary">
          <div className="pointer-events-none absolute right-0 top-0 ">
            <OhmIcon />
          </div>

          <div className="relative z-10 px-6 py-16 md:px-16 md:py-20">
            {/* HEADING */}
            <div className="text-center">
              <p className="text-[12px] tracking-[4px] text-primary">
                {pillarSection.subtitle}
              </p>

              <h2 className="font-primary mt-4 text-5xl font-light text-white md:text-5xl">
                {pillarSection.title}{" "}
                <span className="italic text-primary">
                  {pillarSection.highlightedText}
                </span>
              </h2>
            </div>

            {/* CARDS */}
            <div className="mt-16 grid grid-cols-1 md:mt-20 md:grid-cols-3">
              {pillarSection.cards.map((card, index) => (
                <div
                  key={index}
                  className="border-[#4B392D] px-6 py-8 md:px-8 md:border-r last:border-r-0"
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

            <div className="mt-16 flex flex-wrap justify-center gap-4 md:mt-20">
              {pillarSection.buttons.map((button, index) => {
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
          </div>
        </div>
    </SectionWithContainer>
  );
}
