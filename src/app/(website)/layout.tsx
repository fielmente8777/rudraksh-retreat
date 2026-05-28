import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import WebsiteFooter from "@/components/footer/WebsiteFooter";
import { contact } from "@/utils/constent";

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
