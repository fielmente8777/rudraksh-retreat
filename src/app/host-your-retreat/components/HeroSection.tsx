interface HeroSectionProps {
  tag: string;
  symbol: string;
  title: string;
  paragraphs: string[];
}

const HeroSection = ({ tag, symbol, title, paragraphs }: HeroSectionProps) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[3px] text-primary">{tag}</p>

          <p className="mt-4 text-primary text-xl">{symbol}</p>

          <h1 className="mt-3 text-4xl md:text-5xl font-light text-primary">
            {title}
          </h1>

          <div className="mt-12 space-y-6 text-neutral-700 leading-8">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
