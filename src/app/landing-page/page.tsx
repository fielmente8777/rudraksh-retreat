import Form1 from "@/components/forms/Form1";
import HeroSection from "./components/heroSection";
import JourneySection from "./components/journeySection";
import NutritionSection from "./components/nutritionSection";
import PillarSection from "./components/pillarSection";
import RoomSection from "./components/roomSection";
import ViewSection from "./components/viewSection";
import WellnessSection from "./components/wellnessSection";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import { landingPageData } from "./components/pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SlidingTitle items={landingPageData.titles} />
       <SectionWithContainer
        defaultPadding={false}
        sectionClassName="bg-background"
      >
      <div className="md:rounded-3xl md:py-3 py-6 bg-secondary px-0">
        <Form1 />
      </div>
      </SectionWithContainer>
      <PillarSection />
      <RoomSection />
      <WellnessSection />
      <JourneySection />
      <NutritionSection />
      <ViewSection />
    </main>
  );
}
