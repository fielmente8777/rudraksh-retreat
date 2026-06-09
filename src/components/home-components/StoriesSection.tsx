"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading";
import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import ReviewsSlider from "./slider/ReviewsSlider";
import { useWebContext } from "@/context-api/WebContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
  const { current, total } = useWebContext();

  const activeReview = reviews[(current || 1) - 1] ?? reviews[0];

  const reviewImage = (
    <Image
      src={activeReview.image}
      alt={activeReview.title}
      fill
      className="object-cover transition-all duration-500"
    />
  );

  return (
    <SectionWithContainer containerClassName="md:space-y-14 space-y-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div className="hidden lg:block w-full aspect-square relative rounded-2xl overflow-hidden">
          {/* <LazyLoadedVideo
            src="/home/Property-Video.mp4"
            poster="/home/Property-Video.png"
            loop
            muted
            autoPlay
            controls={false}
          /> */}
          {reviewImage}
        </div>
        <div className="flex flex-col  gap-8">
          <div className="relative w-20 aspect-4/4">
            <Image
              src="/TripAdvisor-Badge.png"
              alt="Rudraksh Logo"
              fill
              sizes="215px"
              className="object-cover"
            />
          </div>
          <SectionHeading title={title} titleClassName="" />
          <div className="lg:hidden w-full aspect-square relative rounded-2xl overflow-hidden">
            {reviewImage}
          </div>
          <ReviewsSlider cards={reviews} />
          <div className="flex items-center gap-4">
            <button className="text-secondary border flex items-center justify-center gap-2 testimonials-prev w-8 aspect-square text-2xl active:scale-95 pointer-events-auto">
              <span className="sr-only">Previous</span>
              <MdKeyboardArrowLeft />
            </button>
            <span className="text-secondary">
              0{current} - 0{total}
            </span>
            <button className="text-secondary border flex items-center justify-center gap-2 testimonials-next w-8 aspect-square text-2xl active:scale-95 pointer-events-auto">
              <span className="sr-only">Next</span>
              <MdKeyboardArrowRight />
            </button>
          </div>
          <LinkButton
            label={button.label}
            href={button.link}
            target="_blank"
            arrowIcon={false}
            rel="noopener noreferrer"
            className="mt-6 text-primary border-primary hover:bg-primary/10 hover:text-primary  duration-300 rounded-sm uppercase tracking-widest"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StoriesSection;
