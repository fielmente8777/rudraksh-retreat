import VideoBanner from "@/components/banners/VideoBanner";
import { itineraryPageData } from "./components/pagedata";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import CardsSection from "./components/CardsSection";

export default function Itinerary() {
  return (
    <main>
      <VideoBanner {...itineraryPageData.heroSection} />
      <SectionWithContainer containerClassName="md:space-y-14 space-y-10">
        <div>
          <SectionHeading title={itineraryPageData?.about?.title} textCenter />
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
