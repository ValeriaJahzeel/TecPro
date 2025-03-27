"use client"
import React from 'react';
import MapComponent from '../../components/mapa/mapa';
import ContactoCards from "@/components/contacto/dictionary";
import { IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
    IconBrandWhatsapp,
    IconMail
   } from '@tabler/icons-react';

export default function Contacto() {
  const defaultCenter = {
    lat: 19.47899904755389, 
    lng: -99.10572499113043  
  };

  const markers = [
    {
      position: defaultCenter,
      title: "Nuestra Oficina"
    }
  ];

  return (
    <div id="contacto" className="container mx-auto px-6 md:px-8 lg:px-12 bg-white text-black pt-6">
      <h1 className="text-3xl md:text-4xl font-bold text-azul-oscuro mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-azul-medio after:mt-2 pb-3">
        Contacto
      </h1>
      
      <div className="mb-4 mx-6">
        <ContactoCards/>
      </div>

      <div className="flex items-center justify-center w-full gap-4 mb-6 mx-6">
      <div className="flex items-center gap-6 text-sm">
            <a href="https://www.facebook.com/tecpro.impresion3d?locale=es_LA" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandFacebook size={18} />
              <span className="hidden sm:inline">TecPro Impresión 3D</span>
            </a>
            <a href="https://www.instagram.com/tecpro_impresion3d/" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandInstagram size={18} />
              <span className="hidden sm:inline">tecpro_impresion3d</span>
            </a>
            <a href="https://www.tiktok.com/@tecpro_impresion3d" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandTiktok size={18} />
              <span className="hidden sm:inline">tecpro_impresion3d</span>
            </a>
            <a href="https://www.youtube.com/@tecpro203" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandYoutube size={18} />
              <span className="hidden sm:inline">Tec Pro</span>
            </a>
          </div>
      </div>

      <div className="p-4 mb-4 mx-6">
        <MapComponent 
          center={defaultCenter}
          zoom={15}
          markers={markers}
        />
      </div>
    </div>
  );
}