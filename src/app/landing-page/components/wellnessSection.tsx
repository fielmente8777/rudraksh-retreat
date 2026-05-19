"use client";

import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { landingPageData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SliderNextIcon, SliderPrevIcon } from "@/utils/icons";

export default function WellnessSection() {
  const { wellnessSection } = landingPageData;

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-background "
       containerClassName="!max-w-full !px-0"
    >

      {/* TOP CONTENT */}
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

        {/* LEFT */}
        <div className="px-10 max-w-[700px]">

          <p className="text-[12px] tracking-[4px] text-p22">
            {wellnessSection.subtitle}
          </p>

          <h2 className="font-primary mt-4 text-4xl font-light leading-tight text-secondary md:text-6xl">

            {wellnessSection.title.normal}{" "}

            <span className="italic text-p22">
              {wellnessSection.title.highlighted}
            </span>

          </h2>

        </div>

        {/* RIGHT */}
        <p className="py-10 max-w-[690px] text-[16px] leading-6 text-tertiary pr-10">
          {wellnessSection.description}
        </p>

      </div>

      {/* SLIDER */}
      <div className="relative mt-14 overflow-hidden ">

        <SwiperCarousel
          data={[
            wellnessSection.image,
            wellnessSection.image,
            wellnessSection.image,
          ]}
          slidesPerView={1}
          loop
          speed={900}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".wellness-prev",
            nextEl: ".wellness-next",
          }}
          autoplay={{ delay: 3500 }}
          className="w-full"
          renderSlide={(src) => (
            <div className="relative h-[800px] w-full">

              <Image
                src={src}
                alt="Wellness"
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10" />

            </div>
          )}
        />

        {/* CTA BUTTONS */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-wrap justify-center gap-4">

          {wellnessSection.buttons.map((button, index) => {
            const Icon = button.icon;

            return (
              <button
                key={index}
                className={`rounded-md px-8 py-4 text-xs tracking-[3px] transition-all

                  ${
                    button.variant === "primary"
                      ? "bg-primary text-white hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-white"
                  }
                `}
              >

                <div className="flex items-center gap-2">

                  {button.variant === "primary" &&
                    Icon && <Icon />}

                  <span>{button.label}</span>

                  {button.variant === "secondary" &&
                    Icon && <Icon />}

                </div>

              </button>
            );
          })}

        </div>

        {/* NAVIGATION */}
        <div className="absolute bottom-8 right-8 z-20 hidden gap-3 md:flex">

          <button className="wellness-prev flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary transition-all hover:scale-105">

            < SliderPrevIcon/>

          </button>

          <button className="wellness-next flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary transition-all hover:scale-105">

            < SliderNextIcon/>

          </button>

        </div>

      </div>

    </SectionWithContainer>
  );
}