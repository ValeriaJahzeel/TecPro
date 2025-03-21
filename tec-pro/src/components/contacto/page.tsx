import React, { useState } from 'react';
import {
  IconMapPin,
  IconMail,
  IconPhone
} from '@tabler/icons-react';
import { iconButton } from '@material-tailwind/react';

export default function ContactoCards() {
  const directorio = [
    {
      title: "Ubicación",
      subtitle: "Gaviotas 21, Granjas Modernas, Gustavo A. Madero, 07460 Ciudad de México, CDMX",
      color: "bg-azul",
      icon: IconMapPin
    },
    {
      title: "Correo electrónico",
      subtitle: "tecprocdmx@gmail.com",
      color: "bg-verde",
      icon: IconMail
    },
    {
      title: "Teléfono",
      subtitle: "246 251 4265",
      color: "bg-naranja",
      icon: IconPhone
    }
  ];

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
  {directorio.map((card, id) => (
    <div
      key={id}
      className="group relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 shadow-lg"
      style={{ height: "280px" }} // Altura fija para todas las cards
    >
      {/* Fondo con color personalizado */}
      <div 
        className={`absolute inset-0 ${card.color} transition-opacity duration-300`}
      />
      
      {/* Capa semi-transparente para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-opacity-30" />
      
      {/* Estado normal - Muestra el título y subtítulo sobre el color */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
        
        <card.icon size={60} className="text-white mb-4" />
        
        <h2 className="text-xl font-bold text-center mb-2 text-white">{card.title}</h2>
        <p className="text-sm text-center text-white">{card.subtitle}</p>
      </div>
    </div>
  ))}

</div>
  );
}