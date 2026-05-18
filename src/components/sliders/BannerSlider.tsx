"use client";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import Image from "next/image";

const BannerSlider = ({ images }: { images: string[] }) => {
  return (
    <div>
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation,Autoplay]}
        loop
        speed={800}
        autoplay={{ delay: 3500 }}
        
        navigation={{
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        }}
        className="w-full"
        renderSlide={(src) => (
          <div className="w-full relative md:aspect-[4/1.9] aspect-4/4.5">
            <Image src={src} alt="Image" fill className="object-cover" />
          </div>
        )}
      />
    </div>
  );
};

export default BannerSlider;
