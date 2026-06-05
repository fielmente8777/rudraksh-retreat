import VideoBanner from "@/components/banners/VideoBanner";
import { FarmToTablePageData } from "./componants/pageData";
import AboutSection from "./componants/AboutSection";
import {
  Container,
  Section,
  SectionWithContainer,
} from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "Farm-to-Table Dining | Pure Vegetarian Cuisine in Uttarakhand",
  description:
    "Pure Vegetarian Resorts in Uttarakhand. savor fresh, organic, farm-to-table meals at The Rudraksh Retreat. Enjoy delicious veg meals.",

  alternates: {
    canonical: "https://therudrakshretreat.com/farm-to-table/",
  },

  openGraph: {
    title: "Farm-to-Table Dining | Pure Vegetarian Cuisine in Uttarakhand",
    description:
      "Pure Vegetarian Resorts in Uttarakhand. savor fresh, organic, farm-to-table meals at The Rudraksh Retreat. Enjoy delicious veg meals.",
    url: "https://therudrakshretreat.com/farm-to-table/",
    siteName: "The Rudraksh Retreat",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function FarmToTable() {
  return (
    <main>
      <VideoBanner {...FarmToTablePageData.heroSection} />
      <AboutSection {...FarmToTablePageData.aboutSection} />
      <SectionWithContainer
        sectionClassName="bg-image bg-right bg-w-small"
        containerClassName="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center"
      >
        <div className="w-full relative aspect-4/3 lg:block hidden">
          <Image
            src={FarmToTablePageData?.dine?.image}
            alt="Image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="space-y-4">
          <SectionHeading title={FarmToTablePageData?.dine?.title} />
          <div className="w-full relative aspect-4/3 lg:hidden">
            <Image
              src={FarmToTablePageData?.dine?.image}
              alt="Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-4 mt-8 max-w-6xl mx-auto">
            {FarmToTablePageData?.dine?.description?.map((text, index) => (
              <p key={index} className="mb-4 text-lg text-gray-700">
                {text}
              </p>
            ))}
          </div>
        </div>
      </SectionWithContainer>
      <Section
        className={`relative bg-fixed w-full lg:aspect-16/7 aspect-video bg-cover bg-center bg-no-repeat flex items-center justify-center`}
        style={{
          backgroundImage: `url(${FarmToTablePageData.enquirySection.image})`,
        }}
      >
        <Container className="flex lg:max-w-5xl! flex-col items-center gap-8">
          <p className="text-white text-center lg:text-2xl  text-lg">
            {FarmToTablePageData.enquirySection.description}
          </p>
        </Container>
      </Section>
    </main>
  );
}
