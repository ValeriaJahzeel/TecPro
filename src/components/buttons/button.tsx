import React, { ReactNode } from 'react';

interface ButtonProps {
  icon?: ReactNode;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'cotizacion';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const Button = ({ 
  icon, 
  children, 
  variant = 'primary',
  className = '',
  onClick,
  fullWidth = false
}: ButtonProps) => {
  // Base styles
  const baseStyles = "flex items-center justify-center text-center rounded-full transition-all duration-300 py-3 px-6";
  
  // Variant-specific styles
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    whatsapp: "bg-green-500 text-white hover:bg-green-600",
    cotizacion: "bg-yellow-500 text-black hover:bg-yellow-600"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};