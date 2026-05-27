import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface AboutUsSectionProps {
  title: string;
  cards: {
    description: string;
    image: string;
  }[];
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ title, cards }) => {
  return (
    <SectionWithContainer>
      <SectionHeading title={title} textCenter />
      <div className="space-y-10 mt-6 md:mt-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center max-w-6xl mx-auto"
          >
            <div className={`w-full relative aspect-4/4 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
              <Image
                src={card.image}
                alt="card"
                fill
                className="object-cover"
              />
            </div>
            <p className="md:text-xl">{card.description}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default AboutUsSection;
