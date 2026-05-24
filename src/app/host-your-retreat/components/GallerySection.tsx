import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";

interface GallerySectionProps {
  images: {
    src: string;
    alt: string;
  }[];

  description: string;
}

const GallerySection = ({ images, description }: GallerySectionProps) => {
  return (
    <Section className="pb-24">
      <Container className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative w-full aspect-4/4.5">
              <Image
                fill
                src={image.src}
                alt={image.alt}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="leading-8 text-neutral-700">{description}</p>
        </div>
      </Container>
    </Section>
  );
};

export default GallerySection;
