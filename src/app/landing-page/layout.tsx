import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import LandingFooter from "@/components/footer/LandingFooter";
import { contact } from "@/utils/constent";
import { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title:
    "The Rudraksh Retreat | Luxury Himalayan Wellness Retreat in Tehri Garhwal",
  description:
    "Escape to The Rudraksh Retreat, an exclusive 11-suite luxury wellness sanctuary in Selur Village, Tehri Garhwal. Enjoy Himalayan yoga, Ayurvedic healing, Tehri Lake views, and farm-to-table Sattvic cuisine.",
  keywords: [
    "The Rudraksh Retreat",
    "Luxury retreat Uttarakhand",
    "Wellness retreat Tehri Garhwal",
    "Yoga retreat near Rishikesh",
    "Ayurvedic retreat Himalayas",
    "Boutique hotel Tehri Lake",
    "Sattvic food retreat",
  ],

  openGraph: {
    title: "The Rudraksh Retreat | A Himalayan Sanctuary Above the Clouds",
    description:
      "A family-run eleven-suite retreat in the Garhwal Himalayas featuring yoga, Ayurvedic healing, Tehri Lake panoramas, and organic Sattvic dining.",
    // url: "https://therudrakshretreat.com",
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

      <LandingFooter />
      <Call callNumber={contact.phone[0]} />
      <Whatsapp whatsAppNumber={contact.phone[0]} />
    </>
  );
}
