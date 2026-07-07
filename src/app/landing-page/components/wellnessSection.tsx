"use client";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

import LinkButton from "@/components/buttons/LinkButton";
import {
  Container,
  Section
} from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SliderNextIcon, SliderPrevIcon } from "@/utils/icons";
import { landingPageData } from "./pageData";

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
        <div className="grid md:gap-14 gap-4 lg:grid-cols-2 grid-cols-1 items-end lg:gap-20">
          {/* LEFT */}
          <div className="">
            <p className="text-xs tracking-[4px] text-p22">
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
          <p className="text-tertiary">{wellnessSection.description}</p>
        </div>
      </Container>

      {/* SLIDER */}
      <div className="relative md:mt-14 mt-4 overflow-hidden ">
        <SwiperCarousel
          data={[
            ...wellnessSection.images,
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
            <div className="relative aspect-4/4.25 lg:aspect-[16/7.6] w-full">
              <Image src={src} alt="Wellness" fill className="object-cover" />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 z-10" />
            </div>
          )}
        />

        {/* CTA BUTTONS */}
        <div className="absolute bottom-8 inset-x-0 z-20 flex flex-col lg:flex-row lg:justify-center max-md:px-4 gap-4">
          {wellnessSection.buttons.map((button, index) => (
            <LinkButton
              key={index}
              {...button}
              target="_blank"
              rel="noopener noreferrer"
              arrowIcon={index !== 0 && true}
              whatsAppIcon={index === 0 && true}
              className={`rounded-sm justify-center max-md:w-full gap-2! uppercase tracking-widest max-md:text-sm ${index === 0 ? "text-white bg-primary border-primary" : "text-primary bg-transparent border border-primary"}`}
            />
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="absolute bottom-8 right-8 z-20 hidden gap-3 md:flex">
          <button className="wellness-prev flex h-8 w-14 items-center justify-center rounded-2xl bg-white text-secondary transition-all hover:scale-105">
            <SliderPrevIcon />
          </button>

          <button className="wellness-next flex h-8 w-14 items-center justify-center rounded-2xl bg-white text-secondary transition-all hover:scale-105">
            <SliderNextIcon />
          </button>
        </div>
      </div>
    </Section>
  );
}
