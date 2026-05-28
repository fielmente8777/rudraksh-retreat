interface BannerSectionProps {
  image: string;
}

const BannerSection = ({ image }: BannerSectionProps) => {
  return (
    <section
      className="
        h-[500px]
        bg-cover
        bg-center
        md:bg-fixed
      "
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
};

export default BannerSection;
