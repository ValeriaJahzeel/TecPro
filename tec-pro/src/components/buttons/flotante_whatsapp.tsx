import { IconBrandWhatsapp } from "@tabler/icons-react";

export const Btn_flotante = () =>  {
  return (
    <div>
      
      <a 
        href="https://wa.me/2462514265/?text=¡Hola! Quiero más información de sus servicios por favor."
        className="fixed bottom-6 right-6 bg-whatsapp p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <IconBrandWhatsapp size={32} color="white" />
      </a>
    </div>
  );
}