import React from 'react';
import { IconType } from 'react-icons';

interface ContactCardProps {
  title: string;
  subtitle: string;
  color: string;
  Icon: IconType | any; // Allow both react-icons and tabler-icons
}

export const ContactCard = ({ title, subtitle, color, Icon }: ContactCardProps) => {
  return (
    <div className="group relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 shadow-xl h-64">
      {/* Fondo con color personalizado */}
      <div className={`absolute inset-0 ${color} transition-all duration-300`} />
      
      {/* Estado normal - Muestra el título y subtítulo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
        <Icon size={60} className="text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-xl font-bold text-center mb-3 text-white">{title}</h2>
        <p className="text-sm text-center text-white">{subtitle}</p>
      </div>
    </div>
  );
};