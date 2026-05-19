import Link from "next/link";
import { Container } from "../sectionComponants";
import Image from "next/image";
import { footerData } from "./footerdata";
import LazyLoadedMap from "../map/LazyLoadedMap";
import LinkButton from "../buttons/LinkButton";
import { contact } from "@/utils/constent";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";

const LandingFooter = () => {
  return (
    <footer className="w-full bg-[#2C1F17] text-white">
      <Container>
        {/* MAIN GRID BLOCK: Tuned grid fraction tracks to mirror design placement metrics */}
        <div className="grid py-12 md:py-16 grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_1.3fr] gap-10 lg:gap-14 items-center">

          {/* COLUMN 1: LOGO & BUTTON ACTIONS */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-full max-w-[200px] aspect-[4/2]">
              <Image
                src={footerData.logo}
                alt="The Rudraksh Logo"
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-contain"
              />
            </div>


            <div className="flex flex-col lg:flex-row items-center gap-3 w-full justify-center lg:justify-start">
              <LinkButton
                href={footerData.cta.bookHref}
                label="Call Now"
                target="_blank"
                rel="noopener noreferrer"
                whatsAppIcon={true}
                arrowIcon={false}
                className="px-5 py-2.5 text-[11px] max-md:w-full justify-center font-medium tracking-wider bg-[#C5A880] text-white uppercase rounded-[4px] hover:bg-opacity-90 transition-all border-none"
              />

              <LinkButton
                href={footerData.cta.callHref}
                label="Book Your Stay"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-[11px] max-md:w-full justify-center font-medium tracking-wider border border-[#C5A880] text-[#C5A880] uppercase rounded-[4px] hover:bg-[#C5A880] hover:text-[#2C1F17] transition-all"
              />
            </div>
          </div>


          <div className="flex flex-col gap-4 text-center lg:text-left self-center lg:pl-6">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C5A880] font-semibold">
              Contact
            </p>

            <div className="space-y-3 text-sm text-white/80 font-light max-w-[360px] mx-auto lg:mx-0 leading-relaxed">
              {/* ADDRESS */}
              <div className="flex items-start justify-center lg:justify-start gap-2.5">
                <span className="text-[#C5A880] mt-0.5"><FillLocationIcon /></span>
                <p className="text-[16px]">
                  Address: Selur Village, Tehri Garhwal, Uttarakhand 249122, India. 2.5 hrs from Rishikesh.
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <span className="text-[#C5A880]"><FillCallIcon /></span>
                <p className="text-[16px]">Call Us: +91 00000 00000</p>
              </div>

              {/* EMAIL */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <span className="text-[#C5A880]"><FillMailIcon /></span>
                <p className="text-[16px]">Email: info@domainmail.com</p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: MAP CONTAINER ACCENT FRAME */}
          <div className="w-full lg:w-[373px] h-[252px] rounded-[4px] overflow-hidden border border-white/10 relative mx-auto lg:mx-0">
            <LazyLoadedMap src={contact.mapUrl} />
          </div>

        </div>
      </Container>

      {/* BOTTOM BASEBAR CONTAINER */}
      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 tracking-wide">
          <p>
            © {new Date().getFullYear()} The Rudraksh Retreat. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <Link
              href="https://www.fielmente.com/"
              className="text-white/70 hover:text-[#C5A880] transition-colors font-medium"
              target="_blank"
            >
              Fielmente
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default LandingFooter;