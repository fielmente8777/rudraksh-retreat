import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import LandingFooter from "@/components/footer/LandingFooter";
import { contact } from "@/utils/constent";

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
