import VideoBanner from "@/components/banners/VideoBanner";
import AboutUsSection from "./components/AboutUsSection";
import CardSection from "./components/CardSection";
import NatureWalks from "./components/NatureWalks";
import { wellnessPageData } from "./components/pageData";
import Packages from "./components/Packages";

export default function HolisticWellness() {
  return (
    <main>
      <VideoBanner {...wellnessPageData.heroSection} />
      <AboutUsSection {...wellnessPageData.AboutUsSection} />
      <CardSection cards={wellnessPageData.cards.slice(0, 3)} />
      <Packages packages={wellnessPageData.packages} />
      <section
        className={`max_screen_width bg-fixed w-full lg:aspect-16/7 aspect-video bg-cover bg-center bg-no-repeat flex items-center justify-center`}
        style={{
          backgroundImage: `url(/wellness/holistic-prlx.jpg)`,
        }}
      />
      <CardSection cards={wellnessPageData.cards.slice(3)} />
      <NatureWalks {...wellnessPageData.natureWalks} />
    </main>
  );
}
