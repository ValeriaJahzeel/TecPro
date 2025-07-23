"use client"
import React from 'react';
import MapComponent from '../../components/mapa/mapa';
import ContactoCards from "@/components/contacto/dictionary";
import { IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
   } from '@tabler/icons-react';

const Contacto = () => {
  const defaultCenter = {
  
    lat: 19.478901658349493,
    lng: -99.10593465239316  
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

      <div className="flex flex-col items-center justify-center w-full gap-4 mb-6 mx-6">
        <a href="https://www.facebook.com/tecpro.impresion3d?locale=es_LA" 
           className="flex items-center gap-2 hover:text-azul transition-colors rounded-lg hover:bg-gray-100">
          <IconBrandFacebook size={32} className="text-azul-oscuro" />
          <span className="text-azul-oscuro text-lg">TecPro Impresión 3D</span>
        </a>

        <div className="flex items-center justify-center gap-4 text-sm">
          <a href="https://www.instagram.com/tecpro_impresion3d/" 
             className="flex items-center gap-2 hover:text-azul transition-colors p-2 rounded-lg hover:bg-gray-100">
            <IconBrandInstagram size={24} className="text-azul-oscuro" />
            <span className="hidden">tecpro_impresion3d</span>
          </a>
          <a href="https://www.tiktok.com/@tecpro_impresion3d" 
             className="flex items-center gap-2 hover:text-azul transition-colors p-2 rounded-lg hover:bg-gray-100">
            <IconBrandTiktok size={24} className="text-azul-oscuro" />
            <span className="hidden">tecpro_impresion3d</span>
          </a>
          <a href="https://www.youtube.com/@tecpro203" 
             className="flex items-center gap-2 hover:text-azul transition-colors p-2 rounded-lg hover:bg-gray-100">
            <IconBrandYoutube size={24} className="text-azul-oscuro" />
            <span className="hidden">Tec Pro</span>
          </a>
        </div>
      </div>

      <div className="mb-4 ">
        <MapComponent 
          center={defaultCenter}
          zoom={15}
          markers={markers}
        />
      </div>
    </div>
  );
}

export default Contacto;