import { Container, Section } from "@/components/sectionComponants";
import React from "react";

interface IntroSectionProps {
  title: string;
  subTitle: string;
  description: string;
}

const IntroSection = ({ title, subTitle, description }: IntroSectionProps) => {
  return (
    <Section className="space-y-6">
      <div className="bg-secondary p-8">
        <div className="max-w-85 w-full mx-auto">
          <h1 className="md:text-4xl/snug text-white text-2xl">{title}</h1>
        </div>
      </div>
      <Container>
        <div className="space-y-6">
          <h2 className="md:text-3xl text-center text-primary">{subTitle}</h2>
          <p className="text-center text-xl/loose">{description}</p>
        </div>
      </Container>
    </Section>
  );
};

export default IntroSection;
