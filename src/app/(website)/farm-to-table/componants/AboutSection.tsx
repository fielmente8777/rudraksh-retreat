import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface AboutSectionProps {
  title: string;
  description: string[];
  images: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-14 space-y-10" sectionClassName="bg-image bg-left-bottom bg-w-small">
      <div className="flex flex-col items-center justify-center gap-4">
        {description.slice(2).map((desc, index) => (
          <p key={index} className="md:text-4xl font-semibold text-3xl text-center text-secondary" dangerouslySetInnerHTML={{__html: desc}}/>
           
        ))}
        <div className="grid grid-cols-2 gap-8">
          {images.slice(2, 4).map((image, index) => (
            <div key={index} className="w-24 relative aspect-4/4">
              <Image
                fill
                src={image}
                alt="Image"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center">
        <div className="w-full relative md:aspect-4/4.25 aspect-4/3.5">
          <Image
            fill
            src={images[0]}
            alt="Image"
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="text-center flex flex-col gap-4 lg:gap-10">
          <SectionHeading
            title={title}
            textCenter
            titleColor="primary"
            titleClassName="md:text-4xl!"
          />
          {description.slice(0, 2).map((desc, index) => (
            <p key={index} className="md:text-lg">
              {desc}
            </p>
          ))}
        </div>
        <div className="w-full relative md:aspect-4/4.25 aspect-4/3.5">
          <Image
            fill
            src={images[1]}
            alt="Image"
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
