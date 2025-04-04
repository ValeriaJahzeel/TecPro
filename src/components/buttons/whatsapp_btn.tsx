"use client";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export const BtnWhatsapp = () => {
  const message = encodeURIComponent("Hola, estoy interesado en sus servicios de impresión 3D.");
  
  return (
    <a 
      href={`https://wa.me/2462514265?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-whatsapp text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 flex-grow-0"
    >
      <IconBrandWhatsapp size={18} className="mr-2" />
      <span className="hidden xs:inline">Contactar por WhatsApp</span>
      <span className="xs:hidden">WhatsApp</span>
    </a>
  );
};