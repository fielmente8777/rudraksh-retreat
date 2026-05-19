// import { contact } from "@/utils/constent";
// import {
//   Facebook,
//   FillCallIcon,
//   FillLocationIcon,
//   FillMailIcon,
//   Instagram,
//   LinkedIn,
// } from "@/utils/icons";

// interface FooterData {
//   logo: string;
//   cta: {
//     label: string;
//     href: string;
//   };
//   lists: {
//     title?: string;
//     links: {
//       title?: string;
//       icon: React.ReactNode;
//       label: string;
//       href: string;
//       label2?: string;
//       href2?: string;
//     }[];
//   }[];
// }

// interface WebsiteFooterData {
//   logo: string;
//   description: string[];

//   lists: {
//     title?: string;
//     subtitle?: string;
//     links: {
//       title?: string;
//       icon?: React.ReactNode;
//       label: string;
//       href?: string;
//       label2?: string;
//       href2?: string;
//     }[];
//   }[];
// }

// export const footerData: FooterData = {
//   logo: "/logo.png",
//   cta: {
//     label: "Book Now",
//     href: contact.callCta,
//   },
//   lists: [
//     {
//       title: "Contact <i>Information</i>",
//       links: [
//         {
//           icon: <FillLocationIcon />,
//           label: contact.address,
//           href: contact.addressLink,
//         },
//         {
//           title: "Call: ",
//           icon: <FillCallIcon />,
//           label: contact.phone[0],
//           href: "tel:" + contact.phone[0],
//           label2: contact.phone[1],
//           href2: "tel:" + contact.phone[1],
//         },

//         {
//           title: "Email: ",
//           icon: <FillMailIcon />,
//           label: contact.email,
//           href: "mailto:" + contact.email,
//         },
//       ],
//     },
//   ],
// };

// export const websiteFooterData: WebsiteFooterData = {
//   logo: "/logo.png",
//   description: [
//     "Sign up here to get the latest news, updates and special offers delivered to your inbox.",
//     "Plus, you’ll be the first to know about our discounts!",
//   ],
//   lists: [
//     {
//       title: "Explore",
//       links: [
//         { label: "Home", href: "/" },
//         { label: "Our Therapies", href: "/therapies" },
//         { label: "Programs", href: "/experiences-at-naad" },
//         { label: "Dining", href: "/dining-cuisine" },
//         { label: "Blogs", href: "/blog" },
//       ],
//     },
//     {
//       title: "Policies",
//       links: [
//         { label: "About us", href: "/about-us" },
//         { label: "Media Coverage", href: "/media-coverage" },
//         { label: "Gallery", href: "/gallery" },
//         { label: "Terms & conditions", href: "/centre-policy" },
//         { label: "contact us", href: "/contact-us" },
//       ],
//     },
//     {
//       title: "Get help",
//       subtitle: "Contact Us",
//       links: [
//         {
//           label: "Facebook",
//           href: contact.socialMedia.facebook,
//           icon: <Facebook />,
//         },
//         {
//           label: "linkedIn",
//           href: contact.socialMedia.linkedin,
//           icon: <LinkedIn />,
//         },
//         {
//           label: "instagram",
//           href: contact.socialMedia.instagram,
//           icon: <Instagram />,
//         },
//       ],
//     },
//   ],

