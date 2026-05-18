"use client";
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import TestimonialCard from "../cards/TestimonialCard";
import SwiperCarousel from "./SwiperCarousel";
import { TestimonialType } from "@/@types/type";

interface TestimonialsSliderProps {
  cards: TestimonialType["testimonials"];
}
const TestimonialsSlider: FC<TestimonialsSliderProps> = ({ cards }) => {
  return (
    <div className="max-lg:px-4">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        autoplay={{ delay: 2500 }}
        speed={1000}
        className="w-full"
        renderSlide={(card) => <TestimonialCard {...card} />}
      />
    </div>
  );
};

export default TestimonialsSlider;
