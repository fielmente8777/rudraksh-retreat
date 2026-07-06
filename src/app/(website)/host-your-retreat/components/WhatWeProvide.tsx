import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

export interface WhatWeProvideProps {
  title: string;
  cards: {
    image: string;
    title: string;
    items: string[];
  }[];
}

const WhatWeProvide: React.FC<WhatWeProvideProps> = ({ title, cards }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-secondary"
      containerClassName="space-y-16"
    >
      <SectionHeading title={title} textCenter titleColor="white" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <WhatWeProvideCard key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default WhatWeProvide;

export const WhatWeProvideCard = ({
  image,
  title,
  items,
}: WhatWeProvideProps["cards"][0]) => {
  return (
    <div className="flex flex-col gap-4 border-x-[0.5px] border-b border-primary rounded-2xl">
      <div className="w-full aspect-4/3 relative">
        <Image
          src={image}
          alt="card"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-2xl"
        />
      </div>
      <div className=" p-4">
        <p className="text-white text-xl font-medium font-primary capitalize">
          {title}
        </p>
        <ul className="space-y-2 text-white mt-4">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span>
                <Foo />
              </span>

              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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
