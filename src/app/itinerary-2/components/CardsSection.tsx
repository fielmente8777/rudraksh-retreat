import { SectionWithContainer } from "@/components/sectionComponants";

export interface CardsSectionProps {
  cards: {
    day: number;
    title: string;
    description: string;
  }[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ cards }) => {
  return (
    <SectionWithContainer containerClassName="space-y-10 relative py-4">
      {cards.map((card) => (
        <div
          className={`relative flex ${card.day % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
          key={card.day}
        >
          <CardsComponent {...card} />
        </div>
      ))}
      <div className="absolute h-full bg-primary w-2 rounded-2xl z-10 top-0 left-8 lg:left-1/2 lg:-translate-x-1/2"></div>
    </SectionWithContainer>
  );
};

export default CardsSection;

export const CardsComponent = ({
  day,
  title,
  description,
}: CardsSectionProps["cards"][0]) => {
  return (
    <div className="lg:w-1/2 flex flex-col lg:items-center items-end">
      <div className="relative space-y-4 lg:w-[80%] w-[75%] bg-white border-x-[0.2px] border-y-3 shadow-lg border-primary rounded-2xl md:p-8 p-4">
        <p className="lg:text-3xl text-2xl text-primary text-center">{title}</p>
        <p className="text-lg text-center">{description}</p>
        <div
          className={`w-10 h-10 absolute top-12 bg-primary rotate-45 -z-10 ${
            day % 2 !== 0 ? "lg:-right-5 max-lg:-left-5" : "-left-5"
          }`}
        />
      </div>
      <div className="absolute top-10 -left-2 lg:left-1/2 lg:-translate-x-1/2 z-20 bg-white w-14 aspect-square rounded-full border-4 border-primary flex items-center justify-center">
        <i className="text-primary font-semibold">day {day}</i>
      </div>
    </div>
  );
};
