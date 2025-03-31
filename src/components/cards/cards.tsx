import React from 'react';

interface Feature {
  title: string;
  description: string;
}

interface MaterialCardProps {
  title: string;
  subtitle: string;
  features: Feature[];
  image: string;
}

export const Cards = ({ title, subtitle, features, image }: MaterialCardProps) => {
  return (
    <div
      className="group relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 shadow-lg h-72"
    >
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover transition-opacity duration-300"
        style={{ 
          backgroundImage: `url(${image})`,
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Default state - title and subtitle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
        <h2 className="text-2xl font-bold text-center mb-2 text-white">{title}</h2>
        <p className="text-sm text-center text-gray-300">{subtitle}</p>
      </div>

      {/* Hover state - show detailed information */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center z-20">
        <h2 className="text-xl font-bold text-center mb-4 text-white">{title}</h2>
        
        <ul className="space-y-3 text-sm text-white">
          {features.map((feature, i) => (
            <li key={i} className="text-left">
              <span className="font-semibold text-yellow-300">{feature.title}</span>{" "}
              {feature.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};