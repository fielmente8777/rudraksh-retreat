import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
interface CardSectionProps {
  cards: {
    image?: string;
    title: string;
    subtitle?: string;
    description: string[];
    description2?: string[];
    listTitle?: string;
    list?: string[];
  }[];
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-20 space-y-10">
      {cards.map((card, index) => (
        <div className="md:space-y-8 space-y-4" key={index}>
          <SectionHeading title={card.title} />
          <div
            className={`${card.image && !card.list ? "grid md:grid-cols-2 grid-cols-1 gap-4 items-center" : ""}`}
          >
            <div className="space-y-4">
              {card.description?.map((text, index) => (
                <p key={index} className="mb-4 text-lg text-gray-700">
                  {text}
                </p>
              ))}
            </div>
            {card.image && !card.list && (
              <div className="w-full relative aspect-4/3">
                <Image
                  src={card.image}
                  alt="card"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="space-y-4">
            {card.subtitle && (
              <h2 className="text-2xl font-semibold font-primary text-secondary">
                {card.subtitle}
              </h2>
            )}
            {card.description2?.map((text, index) => (
              <p key={index} className="mb-4 text-lg text-gray-700">
                {text}
              </p>
            ))}
            {card.listTitle && (
              <p className="text-xl font-semibold font-primary text-secondary">
                {card.listTitle}
              </p>
            )}
            {card.list && (
              <div
                className={`w-full ${card.image ? "grid md:grid-cols-2 grid-cols-1 gap-4" : ""}`}
              >
                <ul className="space-y-4 ps-4">
                  {card.list.map((item, index) => (
                    <li
                      key={index}
                      className="lg:text-lg text-gray-700 flex gap-2"
                    >
                      <span>
                        <FaStar className="text-yellow-600 " />
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                {card.image && card.list && (
                  <div className="w-full relative aspect-4/3">
                    <Image
                      src={card.image}
                      alt="card"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </SectionWithContainer>
  );
};

export default CardSection;
