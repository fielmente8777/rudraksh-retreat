import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface AboutSectionProps {
  image: string;
  title: string;
  description: string[];
}
const AboutSection: React.FC<AboutSectionProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <SectionHeading title={title} />
          <div className="relative w-full md:aspect-4/2 aspect-4/3 md:hidden">
            <Image
              src={image}
              alt="Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
        <div className="relative w-full md:aspect-4/2 aspect-4/3 md:block hidden">
          <Image
            src={image}
            alt="Image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
