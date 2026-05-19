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
import StorySection from "./components/storySection";
import Navbar from "@/components/navbar/navbar";
import LandingFooter from "@/components/footer/LandingFooter";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="border-y border-[#D8D0C4] border-[0.8px]">
        <SlidingTitle items={landingPageData.titles} />
      </div>
      <SectionWithContainer
        sectionClassName="bg-background"
        containerClassName="max-md:!px-0"
      >
        <div className="md:rounded-3xl md:py-3 py-6 bg-secondary">
          <Form1 />
        </div>
      </SectionWithContainer>
      <StorySection />
      <PillarSection />
      <RoomSection />
      <WellnessSection />
      <JourneySection />
      <NutritionSection />
      <ViewSection />
      <LandingFooter />
    </main>
  );
}
