import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";

interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  quote?: string;
  cta: {
    label: string;
    href: string;
  };
}

interface ExperiencesSectionProps {
  items: ExperienceItem[];
}

const ExperiencesSection = ({ items }: ExperiencesSectionProps) => {
  return (
    <Section>
      <Container>
        <div className="space-y-24">
          {items.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-secondary uppercase md:text-4xl text-2xl font-primary">
                    {item.title}
                  </h2>

                  <p className="text-lg font-light max-w-70">{item.subtitle}</p>

                  {item.quote && (
                    <blockquote className="italic text-gray-600 mb-4">
                      {item.quote}
                    </blockquote>
                  )}

                  <div className="space-y-4">
                    {item.description &&
                      item.description.map((item, index) => (
                        <p key={index} className="text-gray-600">
                          {item}
                        </p>
                      ))}
                    <LinkButton
                      label={item.cta.label}
                      href={item.cta.href}
                      className="bg-primary text-white capitalize font-primary"
                      arrowIcon={false}
                    />
                  </div>
                </div>

                {/* Image */}
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ExperiencesSection;
