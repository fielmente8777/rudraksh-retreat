import LinkButton from "@/components/buttons/LinkButton";
import { Section, SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface BannerProps {
  title: string;
  image: string;
  description: string;
  cta: {
    label: string;
    href: string;
  }[];
}

const Banner: React.FC<BannerProps> = ({ title, image, description, cta }) => {
  return (
    <Section defaultPadding={false}>
      <div className="relative w-full aspect-4/7 md:aspect-16/8 ">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* OVERLAY */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-20 flex h-full items-center -mt-10 px-6 md:mt-0 md:px-12">
          <div className="max-w-[650px] text-white space-y-6">
            {/* HEADING */}
            <h1
              className="font-primary text-4xl font-light md:text-7xl"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>

            {/* DESCRIPTION */}
            <p className="max-w-[580px] text-[14px]  text-white/80">
              {description}
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 max-lg:flex-col">
              {cta.map((button, index) => (
                <LinkButton
                  key={index}
                  {...button}
                  target={index === 1 ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  arrowIcon={index === 1 && true}
                  whatsAppIcon={index === 0 && true}
                  className={`rounded-sm justify-center max-md:w-full gap-2! uppercase tracking-widest  text-nowrap ${index === 0 ? "text-white bg-primary border-primary" : "text-primary bg-transparent border border-primary"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
