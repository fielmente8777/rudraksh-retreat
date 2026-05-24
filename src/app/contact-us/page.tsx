import React from "react";
import ContactSection from "./components/ContactSection";
import { contactPageData } from "./contactPageData";

const page = () => {
  return (
    <main>
      <ContactSection contactInfo={contactPageData?.contactInfo} />
    </main>
  );
};

export default page;
