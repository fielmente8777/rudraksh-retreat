import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

export interface WhyChooseUsProps {
  title: string;
  cards: {
    icon: string;
    title: string;
    description: string;
  }[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, cards }) => {
  return (
    <SectionWithContainer containerClassName="space-y-16" defaultPadding={false} sectionClassName="md:py-20 py-10">
      <SectionHeading title={title} textCenter />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <WhyChooseUsCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default WhyChooseUs;

export const WhyChooseUsCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="space-y-2 text-center max-w-2xl mx-auto">
      <Image
        src={icon}
        alt={title}
        width={88}
        height={88}
        className="mx-auto"
      />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
