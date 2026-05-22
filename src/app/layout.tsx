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
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          strategy="afterInteractive"
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P84ZWKJ7');`,
          }}
        />
      </head>
      <body className="">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P84ZWKJ7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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
