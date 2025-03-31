import React from 'react';
import {
  IconMapPin,
  IconMail,
  IconPhone
} from '@tabler/icons-react';
import { ContactCard } from './cards';

export default function ContactoCards() {
  const contactInfo = [
    {
      title: "Ubicación",
      subtitle: "Gaviotas 21, Granjas Modernas, Gustavo A. Madero, 07460 Ciudad de México, CDMX",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      icon: IconMapPin
    },
    {
      title: "Correo electrónico",
      subtitle: "tecprocdmx@gmail.com",
      color: "bg-gradient-to-br from-green-600 to-green-800",
      icon: IconMail
    },
    {
      title: "Teléfono",
      subtitle: "246 251 4265",
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
      icon: IconPhone
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {contactInfo.map((card, id) => (
          <ContactCard
            key={id}
            title={card.title}
            subtitle={card.subtitle}
            color={card.color}
            Icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}
