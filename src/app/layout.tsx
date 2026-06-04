import Navbar from "@/components/navbar/navbar";
import { WebProvider } from "@/context-api/WebContext";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./style.scss";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Meta Pixel Code --> */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1690218598834649');
        fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            alt="Facebook Pixel"
            src="https://www.facebook.com/tr?id=1690218598834649&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K7NPSTJ47H"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-K7NPSTJ47H');`}
        </Script>
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
      <body
        className={` ${inter.variable} ${cormorant.variable} h-full antialiased `}
        style={{ scrollBehavior: "smooth" }}
        suppressHydrationWarning={true}
      >
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
        <WebProvider>
          <Navbar />
          {children}
        </WebProvider>
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
