import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import Call from "@/components/ContactButton/Call";
import { contact } from "@/utils/constent";
import Whatsapp from "@/components/ContactButton/WhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} ${cormorant.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning={true}
    >
      <body className="">
        {children} <Footer />
        <Call callNumber={contact.phone[0]} />
        <Whatsapp whatsAppNumber={contact.phone[0]} />
      </body>
      {/* <!-- Eazbot Script (Next.js) --> */}
      <Script id="chatbot-config" strategy="afterInteractive">
        {`
          window.eazbotConfig = {
            ndid: "b40fa3eb-80b3-442d-a3e2-118c02a01648",
            hid: "92404272",
          };
        `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
