import { Section } from "@/components/sectionComponants";

interface BannerSectionProps {
  image: string;
}

const BannerSection = ({ image }: BannerSectionProps) => {
  return (
    <Section>
      <div
        className="max-w-full w-full h-120 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </Section>
  );
};

export default BannerSection;
