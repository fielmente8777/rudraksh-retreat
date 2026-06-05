import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { itineraryPageData } from "./pagedata";

export interface CardsSectionProps {
  cards: {
    day: number;
    title: string;
    subtitle: string;
    description: string;
  }[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ cards }) => {
  return (
    <SectionWithContainer containerClassName="space-y-10 " defaultPadding={false} sectionClassName="pb-16">
      <div className="">
        <p className="text-xl text-secondary text-center uppercase mb-4">
          {itineraryPageData?.dayByDay?.title}
        </p>
        <SectionHeading
          title={itineraryPageData?.dayByDay?.subTitle}
          textCenter
          wrapperClassName="max-w-2xl mx-auto"
        />
      </div>
      <div className="relative py-4 space-y-10 ">
        {cards.map((card) => (
          <div
            className={`relative flex ${card.day % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
            key={card.day}
          >
            <CardsComponent {...card} />
          </div>
        ))}
        <div className="absolute h-full bg-primary w-1 rounded-2xl z-10 top-0 left-4.5 lg:left-1/2 lg:-translate-x-1/2"></div>
      </div>
    </SectionWithContainer>
  );
};

export default CardsSection;

export const CardsComponent = ({
  day,
  title,
  description,
  subtitle,
}: CardsSectionProps["cards"][0]) => {
  return (
    <div className="lg:w-1/2 flex flex-col lg:items-center items-end">
      <div className="relative space-y-4 lg:w-[80%] w-[75%] bg-[#fffcf6] border-x-[0.2px] border-y-3 shadow-lg border-p22 rounded-2xl md:p-8 p-4">
        <p
          className={`text-lg text-p22 max-md:text-center ${day % 2 !== 0 ? "lg:text-right" : ""}`}
        >
          {subtitle}
        </p>
        <p
          className={`text-[#626262] max-md:text-center uppercase  ${day % 2 !== 0 ? "lg:text-right" : ""}`}
        >
          day {day}
        </p>
        <p
          className={`lg:text-3xl text-2xl text-secondary max-md:text-center ${day % 2 !== 0 ? "lg:text-right" : ""}`}
        >
          {title}
        </p>
        <p
          className={`text-lg max-md:text-center text-secondary ${day % 2 !== 0 ? "lg:text-right" : ""}`}
        >
          {description}
        </p>
        {/* <div
          className={`w-10 h-10 absolute top-12 bg-primary rotate-45 -z-10 ${
            day % 2 !== 0 ? "lg:-right-5 max-lg:-left-5" : "-left-5"
          }`}
        /> */}
      </div>
      <div className="absolute top-10 -left-2 lg:left-1/2 lg:-translate-x-1/2 z-20 bg-white w-14 aspect-square rounded-full border-4 border-primary flex items-center justify-center">
        <i className="text-primary font-semibold">0{day}</i>
      </div>
    </div>
  );
};
