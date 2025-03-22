"use client";
import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconMail,
  IconMenu2,
  IconX
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-white text-gris py-3 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:tecprocdmx@gmail.com" className="flex items-center gap-2 hover:text-azul transition-colors">
              <IconMail size={18} />
              <span>tecprocdmx@gmail.com</span>
            </a>
            <a href="https://wa.me/2462514265" className="flex items-center gap-2 hover:text-whatsapp transition-colors">
              <IconBrandWhatsapp size={18} />
              <span>246 251 4265</span>
            </a>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandFacebook size={18} />
              <span className="hidden sm:inline">TecPro</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandInstagram size={18} />
              <span className="hidden sm:inline">TecPro</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandTiktok size={18} />
              <span className="hidden sm:inline">TecPro</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-azul-medio text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="relative h-14 w-36">
              <Image 
                src="/logo.svg" 
                alt="TecPro Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-10 text-white">
            <li><Link href="#quienes-somos" className="hover:text-amarillo-dorado transition-colors py-2 block">¿Quiénes somos?</Link></li>
            <li><Link href="#servicios" className="hover:text-amarillo-dorado transition-colors py-2 block">Nuestros servicios</Link></li>
            <li><Link href="#materiales" className="hover:text-amarillo-dorado transition-colors py-2 block">Materiales</Link></li>
            <li><Link href="#cotizaciones" className="hover:text-amarillo-dorado transition-colors py-2 block">Cotizaciones</Link></li>
            <li><Link href="#tienda" className="hover:text-amarillo-dorado transition-colors py-2 block">Tienda</Link></li>
            <li><Link href="#contacto" className="hover:text-amarillo-dorado transition-colors py-2 block">Contáctanos</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-fadeIn">
            <ul className="bg-azul-oscuro text-white flex flex-col py-4">
              <li><Link href="#quienes-somos" className="px-8 py-3 block hover:bg-azul-medio" onClick={toggleMenu}>¿Quiénes somos?</Link></li>
              <li><Link href="#servicios" className="px-8 py-3 block hover:bg-azul-medio" onClick={toggleMenu}>Nuestros servicios</Link></li>
              <li><Link href="#materiales" className="px-8 py-3 block hover:bg-azul-medio" onClick={toggleMenu}>Materiales</Link></li>
              <li><Link href="#cotizaciones" className="px-8 py-3 block hover:bg-azul-medio" onClick={toggleMenu}>Cotizaciones</Link></li>
              <li><Link href="#tienda" className="px-8 py-3 block hover:bg-azul-medio" onClick={toggleMenu}>Tienda</Link></li>
              <li><Link href="#contacto" className="px-8 py-3 block hover:bg-azul-medio" onClick={toggleMenu}>Contáctanos</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;