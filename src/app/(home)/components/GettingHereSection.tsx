import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface GettingHereSectionProps {
  title: string;
  options: {
    title: string;
    img: string;
    description: string;
  }[];
}

const GettingHereSection: React.FC<GettingHereSectionProps> = ({
  title,
  options,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-secondary">
      <div className="md:space-y-14 space-y-10">
        <SectionHeading
          title={title}
          textCenter
          titleClassName="uppercase"
          titleColor="white"
        />
        <div className="flex flex-wrap justify-center lg:justify-between md:gap-10 gap-8">
          {options.map((option, index) => (
            <div key={index} className="flex flex-col items-center gap-4 w-70">
              <div className="w-40 aspect-square relative">
                <Image
                  src={option.img}
                  alt={option.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-xl font-primary font-semibold">
                {option.title}
              </h3>
              <p className="text-white text-center">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GettingHereSection;
