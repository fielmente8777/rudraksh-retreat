"use client";
import { usePathname } from "next/navigation";
// import LandingFooter from "./LandingFooter";

const Footer = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/landing-page/":
      return null ;

    default:
      return null ;
  }
};

export default Footer;
