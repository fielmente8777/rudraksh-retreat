import { SectionWithContainer } from "@/components/sectionComponants";
import { blogsPageData } from "./components/pageData";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Wellness, Yoga & Himalayan Travel Insights | The Rudraksh Retreat",
  description:
    "Explore wellness tips, yoga retreat insights, Himalayan travel guides, vegetarian dining experiences, and mindful living stories from The Rudraksh Retreat in Uttarakhand.",
  keywords: [
    "The Rudraksh Retreat blogs",
    "wellness blog India",
    "yoga retreat blog",
    "Uttarakhand travel guide",
    "Himalayan wellness",
    "meditation retreat India",
    "mindful travel India",
  ],
  alternates: {
    canonical: "https://therudrakshretreat.com/blogs/",
  },
  openGraph: {
    title: "Wellness, Yoga & Himalayan Travel Insights | The Rudraksh Retreat",
    description:
      "Discover expert insights on wellness, yoga, mindful living, Himalayan travel, and holistic retreats in Uttarakhand.",
    url: "https://therudrakshretreat.com/blogs/",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
};

export default function Blogs() {
  return (
    <main>
      <SectionWithContainer
        sectionClassName="bg-secondary"
        containerClassName="aspect-[4/.9] flex items-center"
      >
        <h1 className="text-4xl font-bold text-white font-primary text-center w-full">
          Blogs
        </h1>
      </SectionWithContainer>
      <SectionWithContainer containerClassName="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {blogsPageData.cards.map((card) => (
          <Link href={card.slug} key={card.slug}>
            <div className="block w-full relative aspect-4/3">
              <Image
                src={card.image}
                alt="Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover rounded-xl"
              />
            </div>
            <h2 className="text-xl font-semibold font-primary mt-4 text-center">{card.title}</h2>
          </Link>
        ))}
      </SectionWithContainer>
    </main>
  );
}
