import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";
import AboutSection from "@/components/home-components/AboutSection";
import { homePageData } from "@/components/home-components/pageData";
import VideoBanner from "../../components/banners/VideoBanner";
import GettingHereSection from "@/components/home-components/GettingHereSection";
import StoriesSection from "@/components/home-components/StoriesSection";
import GlampsSection from "@/components/home-components/GlampsSection";
import { SectionHeading } from "@/components/typography";
import LinkButton from "@/components/buttons/LinkButton";

export default function LandingPage() {
  return (
    <main>
      <VideoBanner {...homePageData.heroSection} />
      <AboutSection {...homePageData.about} />
      <Section
        className={`relative bg-fixed object-bottom w-full lg:aspect-16/7 aspect-video bg-cover bg-center bg-no-repeat flex items-center justify-center`}
        style={{
          backgroundImage: `url(${homePageData.wisdom.image})`,
        }}
      >
        <Container className="flex lg:max-w-5xl! flex-col items-center gap-8">
          <div className="w-35 relative aspect-square">
            <Image
              src={homePageData.wisdom.logo}
              alt="Rudraksh Logo"
              fill
              sizes="140px"
              className="object-contain"
            />
          </div>
          <p className="text-white text-center lg:text-2xl  text-lg">
            {homePageData.wisdom.description}
          </p>
        </Container>
      </Section>
      <GlampsSection {...homePageData.beginYourJourney} />
      <GettingHereSection {...homePageData.gettingHereSection} />
      <StoriesSection {...homePageData.storiesSection} />
      <Section
        className={`relative bg-fixed w-full  lg:aspect-16/7 aspect-4/4.25 bg-cover bg-center bg-no-repeat flex items-center justify-center`}
        style={{
          backgroundImage: `url(${homePageData.enquirySection.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <Container className="flex lg:max-w-5xl! flex-col items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="">
            {/* <p className="text-primary uppercase text-center">
              {homePageData.enquirySection.title}
            </p> */}
            <SectionHeading
              title={homePageData?.enquirySection?.subtitle}
              textCenter
              titleColor="white"
            />
          </div>
          <p className="text-white text-center lg:max-w-xl!">
            {homePageData.enquirySection.description}
          </p>
          <div className="flex flex-col gap-2 max-w-sm w-full">
            {homePageData.enquirySection.buttons.map((button, index) => (
              <LinkButton
                key={index}
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                arrowIcon={false}
                className={`rounded-sm justify-center w-full uppercase tracking-widest max-md:text-sm ${index === 0 ? "text-white bg-primary border-primary" : "text-primary bg-transparent border border-primary"}`}
              />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
