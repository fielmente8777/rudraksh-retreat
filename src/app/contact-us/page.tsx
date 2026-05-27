import React from "react";
import ContactSection from "./components/ContactSection";
import { contactPageData } from "./contactPageData";
import ImageBanner from "@/components/banners/ImageBanner";

const page = () => {
  return (
    <main>
      <ImageBanner {...contactPageData?.heroSection} />
      <ContactSection contactInfo={contactPageData?.contactInfo} />
    </main>
  );
};

export default page;
