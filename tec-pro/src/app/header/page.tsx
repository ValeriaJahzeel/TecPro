"use client";
import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandYoutube,
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
      <div className="bg-gradient-to-br from-blue-700 to-blue-800 text-white py-2 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:tecprocdmx@gmail.com" className="flex items-center gap-2 hover:text-azul transition-colors">
              <IconMail size={18} />
              <span>tecprocdmx@gmail.com</span>
            </a>
            <a href="https://wa.me/2462514265/?text=¡Hola! Quiero más información de sus servicios por favor." className="flex items-center gap-2 hover:text-whatsapp transition-colors">
              <IconBrandWhatsapp size={18} />
              <span>246 251 4265</span>
            </a>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="https://www.facebook.com/tecpro.impresion3d?locale=es_LA" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandFacebook size={18} />
              <span className="hidden sm:inline">TecPro Impresión 3D</span>
            </a>
            <a href="https://www.instagram.com/tecpro_impresion3d/" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandInstagram size={18} />
              <span className="hidden sm:inline">tecpro_impresion3d</span>
            </a>
            <a href="https://www.tiktok.com/@tecpro_impresion3d" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandTiktok size={18} />
              <span className="hidden sm:inline">tecpro_impresion3d</span>
            </a>
            <a href="https://www.youtube.com/@tecpro203" className="flex items-center gap-1 hover:text-azul transition-colors">
              <IconBrandYoutube size={18} />
              <span className="hidden sm:inline">Tec Pro</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white text-black">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="relative h-24 w-64 ml-8">
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
          <ul className="hidden md:flex space-x-4 lg:space-x-8 text-black mr-8">
            <li><Link href="#quienes-somos" className="hover:text-azul transition-colors py-2 block">¿Quiénes somos?</Link></li>
            <li><Link href="#servicios" className="hover:text-azul transition-colors py-2 block">Nuestros servicios</Link></li>
            <li><Link href="#materiales" className="hover:text-azul transition-colors py-2 block">Materiales</Link></li>
            <li><Link href="/formulario" className="hover:text-azul transition-colors py-2 block">Cotizaciones</Link></li>
            <li><Link href="#tienda" className="hover:text-azul transition-colors py-2 block">Tienda</Link></li>
            <li><Link href="#contacto" className="hover:text-azul transition-colors py-2 block">Contáctanos</Link></li>
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
            <ul className="bg-white text-black flex flex-col py-4">
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