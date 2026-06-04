import Link from "next/link";

interface CTASectionProps {
  description: string;

  button: {
    label: string;
    href: string;
  };
}

const CTASection = ({ description, button }: CTASectionProps) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="leading-8 text-neutral-700">{description}</p>

          <Link
            href={button.href}
            className="
              inline-flex
              mt-10
              border
              border-primary
              px-8
              py-3
              text-primary
              transition
              hover:bg-primary
              hover:text-white
            "
          >
            {button.label}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
