import { TestimonialType } from "@/@types/type";
import LinkButton from "../buttons/LinkButton";
import TestimonialsSlider from "../sliders/TestimonialsSlider";
import { SectionHeading } from "../typography";
import Section from "./Section";
import ImageSlider from "../sliders/ImageSlider";
import { BtnNext, BtnPrevIcon } from "@/utils/icons";

const Testimonial: React.FC<TestimonialType> = ({
  testimonials,
  title,
  cta,
  images,
}) => {
  return (
    <Section defaultPadding={false} className="relative border-y border-primary">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className=" lg:block hidden">
          <ImageSlider images={images} />
        </div>
        <div className="flex flex-col lg:gap-10 max-md:py-6 gap-6 lg:p-6 lg:ml-10 max-w-2xl">
          <SectionHeading title={title} wrapperClassName="px-4" />
          <div className=" lg:hidden">
            <ImageSlider images={images} />
          </div>
          {testimonials && <TestimonialsSlider cards={testimonials} />}

          <div className="flex items-center justify-between w-full max-md:px-4">
            <LinkButton
              href={cta.href}
              label={cta.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-secondary uppercase rounded-full flex justify-center"
            />
            <div className="flex items-center gap-4">
              <button className="testimonials-prev text-primary border px-5 py-2 rounded-full hover:bg-white active:scale-95">
                <BtnPrevIcon />
                <span className="sr-only">Previous</span>
              </button>
              <button className="testimonials-next text-primary border px-5 py-2 rounded-full hover:bg-white active:scale-95">
                <BtnNext />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
