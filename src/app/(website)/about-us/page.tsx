import ImageBanner from "@/components/banners/ImageBanner";
import { aboutUsPageData } from "./components/pageData";
import { Container, Section, SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import PillarSection from "../../landing-page/components/pillarSection";
import LinkButton from "@/components/buttons/LinkButton";

export default function AboutUsPage() {
  return (
    <main>
      <ImageBanner {...aboutUsPageData?.heroSection} />
      <SectionWithContainer>
        <SectionHeading
          title={aboutUsPageData?.aboutUsSection?.title}
          textCenter
        />
        <div className="space-y-4 mt-8 text-center max-w-6xl mx-auto">
          {aboutUsPageData?.aboutUsSection?.description?.map((text, index) => (
            <p key={index} className="mb-4 text-lg text-gray-700">
              {text}
            </p>
          ))}
        </div>
      </SectionWithContainer>

      <PillarSection />
      <Section
        className={`relative bg-fixed w-full lg:aspect-16/7 aspect-video bg-cover bg-center bg-no-repeat flex items-center justify-center`}
        style={{
          backgroundImage: `url(${aboutUsPageData.enquirySection.image})`,
        }}
      >
        <Container className="flex lg:max-w-5xl! flex-col items-center gap-8">
          <p className="text-white text-center lg:text-2xl  text-lg">
            {aboutUsPageData.enquirySection.description}
          </p>
          <LinkButton
            href={aboutUsPageData.enquirySection.button.link}
            label={aboutUsPageData.enquirySection.button.label}
            className="mt-8 bg-primary text-white border-none rounded-md px-6 py-3 hover:bg-primary/90 transition"
          />
        </Container>
      </Section>
    </main>
  );
}
