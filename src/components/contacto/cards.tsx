import React from 'react';
import { IconType } from 'react-icons';

interface ContactCardProps {
  title: string;
  subtitle: string;
  color: string;
  Icon: IconType; 
}

export const ContactCard = ({ title, subtitle, color, Icon }: ContactCardProps) => {
  return (
    <div className="group relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 shadow-xl h-48 xs:h-56 sm:h-64">
      {/* Background with color */}
      <div className={`absolute inset-0 ${color} transition-all duration-300`} />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10">
        <Icon size={40} className="text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 text-white">{title}</h2>
        <p className="text-xs sm:text-sm text-center text-white">{subtitle}</p>
      </div>
    </div>
  );
};