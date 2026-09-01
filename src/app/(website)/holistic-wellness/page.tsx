import VideoBanner from "@/components/banners/VideoBanner";
import AboutUsSection from "./components/AboutUsSection";
import CardSection from "./components/CardSection";
import NatureWalks from "./components/NatureWalks";
import { wellnessPageData } from "./components/pageData";
import Packages from "./components/Packages";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "Best Wellness Resort and retreat in Tehri Garhwal, Uttarakhand",
  description:
    "Find the best wellness resort and retreat in Tehri Garhwal, Uttarakhand, offering peaceful stays, holistic wellness, nature and rejuvenation.",

  alternates: {
    canonical: "https://therudrakshretreat.com/holistic-wellness/",
  },

  openGraph: {
    title: "Best Wellness Resort and retreat in Tehri Garhwal, Uttarakhand",
    description:
      "Find the best wellness resort and retreat in Tehri Garhwal, Uttarakhand, offering peaceful stays, holistic wellness, nature and rejuvenation.",
    url: "https://therudrakshretreat.com/holistic-wellness/",
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
