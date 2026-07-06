import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface ImagineYourRetreatProps {
  image: string;
  title: string;
  list: string[];
  note: string;
  button: {
    label: string;
    href: string;
  };
}

const ImagineYourRetreat: React.FC<ImagineYourRetreatProps> = ({
  image,
  title,
  list,
  note,
  button,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div className="relative w-full aspect-4/3 lg:block hidden">
          <Image
            src={image}
            alt="Image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="space-y-4">
          <SectionHeading title={title} />
          <div className="relative w-full aspect-4/3 lg:hidden block">
            <Image
              src={image}
              alt="Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-4 mt-8 max-w-6xl mx-auto">
            {list.map((item, index) => (
              <p key={index} className="flex text-lg">
                <span className="mr-2">
                  <Foo />
                </span>

                {item}
              </p>
            ))}
          </div>
          <p
            className="text-primary mt-8 md:text-lg"
            dangerouslySetInnerHTML={{ __html: note }}
          />
          <LinkButton
            {...button}
            className="mt-8 text-primary rounded-md uppercase font-primary font-semibold"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ImagineYourRetreat;

export const Foo = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3751 13.1253C20.6251 16.8753 17.7978 20.4057 13.8291 21.1951C9.86043 21.9846 5.83311 20.1385 3.84055 16.6167C1.848 13.0949 2.33991 8.69208 5.06059 5.69685C7.78128 2.70161 12.3751 1.87529 16.1251 3.37529"
      stroke="#C9A96F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.625 11.625L12.375 15.375L21.375 5.625"
      stroke="#C9A96F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
