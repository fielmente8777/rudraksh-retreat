import ImageBanner from "@/components/banners/ImageBanner";
import { RoomsPageData } from "./components/pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import RoomsSection from "./components/RoomsSection";

export default function RefinedLivingSpaces() {
  return (
    <main>
      <ImageBanner {...RoomsPageData?.heroSection} />
      <SectionWithContainer>
        <SectionHeading
          title={RoomsPageData?.aboutUsSection?.title}
          textCenter
        />
        <div className="space-y-4 mt-8 text-center max-w-6xl mx-auto">
          {RoomsPageData?.aboutUsSection?.description?.map((text, index) => (
            <p key={index} className="mb-4 text-lg text-gray-700">
              {text}
            </p>
          ))}
        </div>
      </SectionWithContainer>
      <RoomsSection {...RoomsPageData?.roomsSection} />
    </main>
  );
}
