import Image from "next/image";

interface HeroSectionProps {
  tag: string;
  symbol: string;
  title: string;
  paragraphs: string[];
  cards: {
    paragraphs: string[];
    image: string;
  }[];
}

const HeroSection = ({
  tag,
  symbol,
  title,
  paragraphs,
  cards,
}: HeroSectionProps) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* <p className="text-xs uppercase tracking-[3px] text-primary">{tag}</p> */}

          <p className="mt-4 text-primary lg:text-4xl text-xl">{symbol}</p>

          <h1 className="mt-3 text-4xl md:text-5xl font-medium text-secondary" dangerouslySetInnerHTML={{ __html: title }}/>
           
        </div>
        {cards.map((card, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center max-w-6xl mx-auto mt-6 md:mt-12"
          >
            <div
              className={`w-full relative aspect-4/4 ${index % 2 !== 0 ? "md:order-2" : ""}`}
            >
              <Image
                src={card.image}
                alt="card"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-4">
              {card.paragraphs.map((paragraph, index) => (
                <p key={index} className="md:text-xl">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
