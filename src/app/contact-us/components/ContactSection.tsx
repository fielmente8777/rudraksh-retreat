import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Container, Section } from "@/components/sectionComponants";
import Link from "next/link";

interface ContactSectionProps {
  contactInfo: {
    title: string;
    address: string;
    email: string;
    phone: string;
    mapEmbedUrl: string;
  };
}

const enquiryForm = {
  subtitle: "ENQUIRE NOW",
  title: "Let's Plan your Stay at The Rudraksh",
  buttonText: "GET A CALL BACK ↗",
  fields: [
    {
      name: "name",
      placeholder: "Full Name*",
      type: "text",
    },
    {
      name: "phone",
      placeholder: "Phone Number*",
      type: "tel",
    },
    {
      name: "email",
      placeholder: "Email Address",
      type: "email",
    },
    {
      name: "city",
      placeholder: "City",
      type: "text",
    },
    {
      name: "message",
      placeholder: "Tell us something about your enquiry!",
      type: "textarea",
    },
  ],
};

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  return (
    <Section className="bg-primary/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl mb-8">
              Contact <span className="text-[#C68642]">Details!</span>
            </h2>

            <div className="space-y-6 text-lg">
              <div className="flex gap-4">
                <MapPin size={20} className="mt-1" />
                <p>{contactInfo.address}</p>
              </div>

              <div className="flex gap-4">
                <Mail size={20} className="" />

                <Link href={contactInfo.email}>
                  info@therudrakshretreat.com
                </Link>
              </div>

              <div className="flex gap-4">
                <Phone size={20} className="" />

                <Link href={contactInfo.phone}>+91 8826652343</Link>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="250"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Side */}
          <div className=" border border-primary/40 bg-primary/10 rounded-2xl p-8 max-w-xl w-full">
            <p className="uppercase tracking-[3px] text-[#C68642] text-sm">
              {enquiryForm.subtitle}
            </p>

            <h3 className="text-3xl mt-2 mb-8">{enquiryForm.title}</h3>

            <form className="space-y-4">
              {enquiryForm.fields.map((field) =>
                field.type === "textarea" ? (
                  <textarea
                    key={field.name}
                    placeholder={field.placeholder}
                    rows={4}
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none"
                  />
                ) : (
                  <input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none"
                  />
                ),
              )}

              <button
                type="submit"
                className="w-full bg-[#C8A25A] text-white py-4 rounded-md uppercase"
              >
                {enquiryForm.buttonText}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
