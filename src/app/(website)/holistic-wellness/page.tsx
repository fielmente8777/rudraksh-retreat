import VideoBanner from "@/components/banners/VideoBanner";
import AboutUsSection from "./components/AboutUsSection";
import CardSection from "./components/CardSection";
import NatureWalks from "./components/NatureWalks";
import { wellnessPageData } from "./components/pageData";
import Packages from "./components/Packages";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "Holistic Wellness | Best Yoga Retreat Near Rishikesh",
  description:
    "Rejuvenate your mind and body at The Rudraksh Retreat. Experience yoga, meditation, and holistic wellness in a serene setting near Rishikesh.",

  alternates: {
    canonical: "https://therudrakshretreat.com/holistic-wellness/",
  },

  openGraph: {
    title: "Holistic Wellness | Best Yoga Retreat Near Rishikesh",
    description:
      "Rejuvenate your mind and body at The Rudraksh Retreat. Experience yoga, meditation, and holistic wellness in a serene setting near Rishikesh.",
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
