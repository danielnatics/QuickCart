import { assets } from "@/assets/assets";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348130123588" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-5 z-50"
    >
      <img
        src="/whatsapp.png" // Put whatsapp.png in your public/ folder
        alt="WhatsApp"
        className="w-[90px] rounded-sm hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
}
