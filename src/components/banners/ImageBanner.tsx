import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import LinkButton from "../buttons/LinkButton";

interface ImageBannerProps {
  title: string;
  image: string;
  cta?: {
    label: string;
    href: string;
  };
}
const ImageBanner: React.FC<ImageBannerProps> = ({ title, image, cta }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-16/7.5 aspect-4/3.75 overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center">
        <Container>
          <h1
            className="text-white text-4xl lg:text-6xl font-semibold font-primary text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {cta && (
            <LinkButton
              {...cta}
              className="mt-6 mx-auto text-white rounded-lg lg:text-lg hover:bg-white hover:text-secondary"
              arrowIcon={false}
            />
          )}
        </Container>
      </div>
    </Section>
  );
};

export default ImageBanner;
