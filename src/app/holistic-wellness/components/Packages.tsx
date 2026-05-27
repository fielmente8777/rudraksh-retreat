import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Link from "next/link";

interface Props {
  packages: {
    link: string;
    description: string;
  }[];
}
const Packages: React.FC<Props> = ({ packages }) => {
  return (
    <section>
      <SectionWithContainer sectionClassName="bg-secondary">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
          {packages.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Link
                download={true}
                href={item.link}
                className="text-lg font-semibold lg:text-2xl text-primary "
              >
                {item.description}
              </Link>
            </div>
          ))}
        </div>
      </SectionWithContainer>
      <div className="py-16 flex items-center justify-center">
        <LinkButton label="Begin Your Journey" href="/contact-us" className="rounded-md bg-primary text-white justify-center gap-2 lg:text-2xl" arrowIcon={false} />
      </div>
    </section>
  );
};

export default Packages;
