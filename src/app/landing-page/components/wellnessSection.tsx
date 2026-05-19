"use client";

import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { landingPageData } from "./pageData";
import { Container, Section, SectionWithContainer } from "@/components/sectionComponants";
import { SliderNextIcon, SliderPrevIcon } from "@/utils/icons";

export default function WellnessSection() {
  const { wellnessSection } = landingPageData;

  return (


    <Section
      defaultPadding={false}
      className="bg-background "
    // containerClassName="max-md:px-0!"
    >

      <Container>

        {/* TOP CONTENT */}
        <div className="flex flex-col md:gap-8 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT */}
          <div className="md:px-10 max-w-[700px]">

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
          <p className="py-10 max-w-[690px] text-[16px] leading-6 text-tertiary md:pr-10">
            {wellnessSection.description}
          </p>

        </div>

      </Container>

      {/* SLIDER */}
      <div className="relative md:mt-14 overflow-hidden ">

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
            <div className="relative aspect-4/4 lg:aspect-16/7 w-full">

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
        <div className="absolute bottom-8 inset-x-0 z-20 flex flex-col lg:flex-row lg:justify-center max-md:px-4 gap-4">

          {wellnessSection.buttons.map((button, index) => {
            const Icon = button.icon;

            return (
              <button
                key={index}
                className={`rounded-md px-8 py-4 max-md:w-full flex justify-center text-xs tracking-[3px] transition-all

                  ${button.variant === "primary"
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

          <button className="wellness-prev flex h-8 w-14 items-center justify-center rounded-2xl bg-white text-secondary transition-all hover:scale-105">

            < SliderPrevIcon />

          </button>

          <button className="wellness-next flex h-8 w-14 items-center justify-center rounded-2xl bg-white text-secondary transition-all hover:scale-105">

            < SliderNextIcon />

          </button>

        </div>

      </div>

    </Section>
  );
}