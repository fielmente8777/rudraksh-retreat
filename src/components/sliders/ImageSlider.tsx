"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div>
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay]}
        loop
        speed={800}
        autoplay={{ delay: 3500 }}
        className="w-full"
        renderSlide={(src) => (
          <div className="w-full relative md:aspect-4/3 aspect-4/3.5">
            <Image src={src} alt="Image" fill className="object-cover" />
          </div>
        )}
      />
    </div>
  );
};

export default ImageSlider;
