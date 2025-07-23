"use client";
import { useState } from "react";
import { useEffect } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
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
  
  function limpiarURL(url:string){
    if(url.includes('intent://') || url.includes("fb://'")){
      return 'https://www.facebook.com/tecpro.impresion3d';
    }

     if (url.includes('facebook.com')) {
    const baseUrl = url.split('?')[0];
    return baseUrl;
  }
  
  return url;
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <header className="w-full shadow-sm">
      <div className="bg-azul-medio text-white py-4 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 sm:gap-6 text-lg ">
             <a href={limpiarURL("https://www.facebook.com/tecpro.impresion3d")} className="flex items-center hover:text-verde-dorado gap-1 sm:gap-2 transition-colors">
              <IconBrandFacebook size={28} className="flex-shrink-0" />
              <span >TecPro Impresión 3D</span> 
            </a>
         
            {/* <a href="https://wa.me/2462514265/?text=¡Hola! Quiero más información de sus servicios por favor." className="flex items-center hover:text-whatsapp gap-1 sm:gap-2 transition-colors">
              <IconBrandWhatsapp size={24} className="flex-shrink-0" />
              <span>246 251 4265</span>
            </a> */}
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm mt-2 sm:mt-0">
              <a href="mailto:tecprocdmx@gmail.com" className="flex items-center gap-1 sm:gap-2 hover:text-yellow-300 transition-colors">
              <IconMail size={16} className="flex-shrink-0" />
              <span className="hidden xs:inline">tecprocdmx@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/tecpro_impresion3d/" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <IconBrandInstagram size={16} className="flex-shrink-0" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@tecpro_impresion3d" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <IconBrandTiktok size={16} className="flex-shrink-0" />
              <span className="hidden sm:inline">TikTok</span>
            </a>
            <a href="https://www.youtube.com/@tecpro203" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <IconBrandYoutube size={16} className="flex-shrink-0" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Menu de hamburguesa*/}
      <nav className="bg-fondo text-black relative">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-2 flex justify-between items-center">
          <Link href="/">
            <div className="relative h-16 sm:h-20 md:h-24 w-32 sm:w-48 md:w-64 ml-0 sm:ml-4 md:ml-8">
              <Image 
                src="/logo.svg" 
                alt="TecPro Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Menu de escritorio */}
          <ul className="hidden md:flex space-x-2 lg:space-x-6 xl:space-x-8 text-black mr-0 sm:mr-4 md:mr-8 text-sm lg:text-base">
            <li><Link href="#quienes-somos" className="hover:text-azul-medio transition-colors py-2 px-1 lg:px-2 block">¿Quiénes somos?</Link></li>
            <li><Link href="#servicios" className="hover:text-azul-medio transition-colors py-2 px-1 lg:px-2 block">Servicios</Link></li>
            <li><Link href="#materiales" className="hover:text-azul-medio transition-colors py-2 px-1 lg:px-2 block">Materiales</Link></li>
            <li><Link href="/formulario" className="hover:text-azul-medio transition-colors py-2 px-1 lg:px-2 block">Cotizaciones</Link></li>
            <li><Link href="#tienda" className="hover:text-azul-medio transition-colors py-2 px-1 lg:px-2 block">Tienda</Link></li>
            <li><Link href="#contacto" className="hover:text-azul-medio transition-colors py-2 px-1 lg:px-2 block">Contacto</Link></li>
          </ul>

          {/* Menu movil */}
          <button
            className="md:hidden focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <IconX size={10} className="text-white"/> : <IconMenu2 size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu - Improved with smooth transitions and better positioning */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        ></div>
        
        <div 
          className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white transform transition-transform duration-300 ease-in-out z-10 shadow-xl overflow-y-auto ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 border-b border-gray-200">
            <button
              className="p-2 float-right focus:outline-none"
              onClick={toggleMenu}
              aria-label="Cerrar menú"
            >
              
            </button>
            <div className="clear-both"></div>
          </div>
          <ul className="flex flex-col py-4">
            <li><Link href="#quienes-somos" className="px-6 py-3 block hover:bg-blue-50 hover:text-azul-medio" onClick={toggleMenu}>¿Quiénes somos?</Link></li>
            <li><Link href="#servicios" className="px-6 py-3 block hover:bg-blue-50 hover:text-azul-medio" onClick={toggleMenu}>Nuestros servicios</Link></li>
            <li><Link href="#materiales" className="px-6 py-3 block hover:bg-blue-50 hover:text-azul-medio" onClick={toggleMenu}>Materiales</Link></li>
            <li><Link href="/formulario" className="px-6 py-3 block hover:bg-blue-50 hover:text-azul-medio" onClick={toggleMenu}>Cotizaciones</Link></li>
            <li><Link href="#tienda" className="px-6 py-3 block hover:bg-blue-50 hover:text-azul-medio" onClick={toggleMenu}>Tienda</Link></li>
            <li><Link href="#contacto" className="px-6 py-3 block hover:bg-blue-50 hover:text-azul-medio" onClick={toggleMenu}>Contáctanos</Link></li>
          </ul>
          
          {/* Social media icons for mobile menu */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-around">
              <a href={limpiarURL("https://www.facebook.com/tecpro.impresion3d?locale=es_LA")} aria-label="Facebook" className="text-azul-medio">
                <IconBrandFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/tecpro_impresion3d/" aria-label="Instagram" className="text-azul-medio">
                <IconBrandInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@tecpro_impresion3d" aria-label="TikTok" className="text-azul-medio">
                <IconBrandTiktok size={24} />
              </a>
              <a href="https://www.youtube.com/@tecpro203" aria-label="YouTube" className="text-azul-medio">
                <IconBrandYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Header;