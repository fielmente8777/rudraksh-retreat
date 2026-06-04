import Form1 from "@/components/forms/Form1";
import { SectionWithContainer } from "@/components/sectionComponants";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import HeroSection from "./components/heroSection";
import JourneySection from "./components/journeySection";
import NutritionSection from "./components/nutritionSection";
import { landingPageData } from "./components/pageData";
import PillarSection from "./components/pillarSection";
import RoomSection from "./components/roomSection";
import StorySection from "./components/storySection";
import ViewSection from "./components/viewSection";
import WellnessSection from "./components/wellnessSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SlidingTitle items={landingPageData.titles} />

      <SectionWithContainer
        sectionClassName="bg-background"
        containerClassName="md:rounded-2xl md:py-3 py-4 bg-secondary"
      >
        <Form1 />
      </SectionWithContainer>
      <StorySection />
      <PillarSection />
      <RoomSection />
      <WellnessSection />
      <JourneySection />
      <NutritionSection />
      <ViewSection />
    </main>
  );
}
