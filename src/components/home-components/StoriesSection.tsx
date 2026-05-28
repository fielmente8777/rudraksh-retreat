import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";
import Link from "next/link";

interface StoriesSectionProps {
  title: string;
  reviews: {
    title: string;
    description: string;
    href: string;
    author: string;
    image: string;
  }[];
  button: {
    label: string;
    link: string;
  };
}
const StoriesSection: React.FC<StoriesSectionProps> = ({
  title,
  reviews,
  button,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-14 space-y-10">
      <SectionHeading title={title} textCenter titleClassName="uppercase" />
      <div className="flex flex-wrap justify-center  gap-6 w-full">
        {reviews.map((review, index) => (
          <Link
            href={review.href}
            className="relative max-w-[32.1%] w-full aspect-4/3 lg:aspect-4/3.25 group"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={review.image}
              alt={review.author}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/35 to-black/30" />
            <div className="absolute inset-0 p-4 flex flex-col justify-center text-center">
              <h3 className="text-white text-2xl lg:text-4xl font-primary font-semibold">
                {review.title}
              </h3>
              <div className="max-w-md mx-auto mt-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out translate-y-full opacity-0">
                <p className="text-white lg:text-lg">{review.description}</p>
                <p className="text-white text-2xl mt-2">{review.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mx-auto mt-10 w-56 relative aspect-[4/2.6]">
        <Image
          src="/home/tripadvisor.png"
          alt="Tripadvisor Logo"
          fill
          sizes="224px"
          className="object-cover"
        />
      </div>
    </SectionWithContainer>
  );
};

export default StoriesSection;
