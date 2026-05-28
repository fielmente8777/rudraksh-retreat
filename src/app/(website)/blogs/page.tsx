import { SectionWithContainer } from "@/components/sectionComponants";
import { blogsPageData } from "./components/pageData";
import Link from "next/link";
import Image from "next/image";

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
