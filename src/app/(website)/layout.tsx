import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import WebsiteFooter from "@/components/footer/WebsiteFooter";
import { contact } from "@/utils/constent";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "The Rudraksh Retreat | Best Resort in Tehri Garhwal, Uttarakhand",
  description:
    "Experience The Rudraksh Retreat, the best resort in Tehri Garhwal, Uttarakhand, offering serene stays, nature, comfort and unforgettable views.",

  keywords: [
    "The Rudraksh Retreat",
    "Luxury retreat Uttarakhand",
    "Wellness retreat Tehri Garhwal",
    "Yoga retreat near Rishikesh",
    "Ayurvedic retreat Himalayas",
    "Boutique hotel Tehri Lake",
    "Sattvic food retreat",
  ],

  alternates: {
    canonical: "https://therudrakshretreat.com",
  },

  openGraph: {
    title: "The Rudraksh Retreat | Best Resort in Tehri Garhwal, Uttarakhand",
    description:
      "Experience The Rudraksh Retreat, the best resort in Tehri Garhwal, Uttarakhand, offering serene stays, nature, comfort and unforgettable views.",
    url: "https://therudrakshretreat.com",
    siteName: "The Rudraksh Retreat",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <WebsiteFooter />
      <Call callNumber={contact.phone[0]} />
      <Whatsapp whatsAppNumber={contact.phone[0]} />
    </>
  );
}
