import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface NatureWalksProps {
  title: string;
  image: string;
  description: string[];
}

const NatureWalks: React.FC<NatureWalksProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <>
      <section
        className={`max_screen_width bg-fixed w-full lg:aspect-16/7 aspect-video bg-cover bg-center bg-no-repeat flex items-center justify-center`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <SectionWithContainer>
        <SectionHeading title={title} textCenter wrapperClassName="max-w-md mx-auto" />
        <div className="space-y-4 mt-8 text-center max-w-6xl mx-auto">
          {description.map((text, index) => (
            <p key={index} className="mb-4 text-lg text-gray-700">
              {text}
            </p>
          ))}
        </div>
      </SectionWithContainer>
    </>
  );
};

export default NatureWalks;
