import VideoBanner from "@/components/banners/VideoBanner";
import { itineraryPageData } from "./components/pagedata";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import CardsSection from "./components/CardsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "Unique Experiences | Adventure & Wellness at Rudraksh Retreat",
  description:
    "From yoga and meditation to nature walks and adventure, The Rudraksh Retreat offers unforgettable experiences in the heart of Uttarakhand.",

  alternates: {
    canonical: "https://therudrakshretreat.com/itinerary-2/",
  },

  openGraph: {
    title: "Unique Experiences | Adventure & Wellness at Rudraksh Retreat",
    description:
      "From yoga and meditation to nature walks and adventure, The Rudraksh Retreat offers unforgettable experiences in the heart of Uttarakhand.",
    url: "https://therudrakshretreat.com/itinerary-2/",
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

export default function Itinerary() {
  return (
    <main>
      <VideoBanner {...itineraryPageData.heroSection} />
      <SectionWithContainer containerClassName="md:space-y-14 space-y-10">
        <div>
          <p className="text-xl text-secondary text-center uppercase mb-4">
            {itineraryPageData?.about?.title}
          </p>
          <SectionHeading
            title={itineraryPageData?.about?.subTitle}
            textCenter
            wrapperClassName="max-w-2xl mx-auto"
          />
          <div className="text-center max-w-6xl mx-auto space-y-4 mt-6">
            {itineraryPageData?.about?.description?.map((text, index) => (
              <p key={index} className="mb-4 text-lg text-gray-700">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading
            title={itineraryPageData?.wanderer?.title}
            textCenter
          />
          <div className="text-center max-w-6xl mx-auto space-y-4 mt-6">
            {itineraryPageData?.wanderer?.description?.map((text, index) => (
              <p key={index} className="mb-4 text-lg text-gray-700">
                {text}
              </p>
            ))}
          </div>
        </div>
      </SectionWithContainer>

      <CardsSection cards={itineraryPageData?.cards} />
    </main>
  );
}
