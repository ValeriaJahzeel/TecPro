"use client"
import { useState } from "react";
import { IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconMail
 } from '@tabler/icons-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white text-black text-sm flex justify-between items-center px-15 pt-4">
        <div className="flex items-center gap-4">
          <IconMail/>tecprocdmx@gmail.com
          <IconBrandWhatsapp/>246 251 4265 
        </div>
        <div className="flex items-center gap-4 ">
          <IconBrandFacebook/>TecPro
          <IconBrandInstagram/>TecPro 
          <IconBrandTiktok/>TecPro 

        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white ">
        <div className="container pr-15 flex justify-between items-center">
          {/* Logo */}
          <img className="h-45" src="logo.svg" alt="logo de la empresa" />
          {/* <div className="text-white text-2xl font-bold">Tecpro</div> */}

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-16 text-white text-md">
            <li><a href="#">¿Quiénes somos?</a></li>
            <li><a href="#">Nuestros servicios</a></li>
            <li><a href="#">Materiales</a></li>
            <li><a href="#">Cotizaciones</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-blue-500 text-white text-lg flex flex-col items-center py-4 space-y-4">
            <li><a href="#">¿Quiénes somos?</a></li>
            <li><a href="#">Nuestros servicios</a></li>
            <li><a href="#">Materiales</a></li>
            <li><a href="#">Cotizaciones</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
