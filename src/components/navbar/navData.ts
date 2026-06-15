import { contact } from "@/utils/constent";
import { ArrowUpIcons } from "@/utils/icons";

export const navData = {
  logo: "/images/logo.png",

  button: {
    label: "BOOK STAY",
    href: contact.WhatsappCta,
    icon: ArrowUpIcons,
  },
};


export const WebsiteNavData = {
  logo: "/images/logo.png",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
    { label: "Accommodations", href: "/refined-living-spaces/" },
    { label: "Wellness", href: "/holistic-wellness/" },
    { label: "Dining", href: "/farm-to-table/" },
    { label: "Host your retreat", href: "/host-your-retreat//" },
    { label: "Contact", href: "/contact-us/" },
  ],
};