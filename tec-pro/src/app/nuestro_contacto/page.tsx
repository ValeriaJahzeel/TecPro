"use client"
import React from 'react';
import MapComponent from '../../components/mapa/mapa';
import ContactoCards from "@/components/contacto/dictionary";
import { IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
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
    <div className="container mx-auto px-4 py-8 bg-white text-gris p-12">
      <h1 className="text-3xl font-bold pb-8">Nuestro contacto</h1>

      <ContactoCards/>
            
            <div className="flex items-center justify-center w-full gap-4">
                <IconBrandTiktok/>TecPro
                <IconBrandFacebook/>TecPro
                <IconBrandInstagram/>TecPro
            </div>

      <div className="p-8 mb-8">
        <MapComponent 
          center={defaultCenter}
          zoom={15}
          markers={markers}
        />
      </div>
    </div>
  );
}