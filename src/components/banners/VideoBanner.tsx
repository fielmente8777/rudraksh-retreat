import { Section } from "@/components/sectionComponants";
import { LazyLoadedVideo } from "@/components/Video";

interface VideoBannerProps {
  title: string;
  video: string;
  videoPoster: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({
  title,
  video,
  videoPoster,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-[16/7.56] aspect-4/3.75 overflow-hidden"
    >
      <LazyLoadedVideo src={video} poster={videoPoster} />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-black/30 to-black/10" />
        <h1 className="absolute z-20 text-white text-3xl text-center md:text-6xl tracking-widest font-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" dangerouslySetInnerHTML={{__html : title}} />
          
    </Section>
  );
};

export default VideoBanner;
