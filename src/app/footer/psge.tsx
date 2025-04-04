"use client";
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandTiktok, 
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

// 3. Improved Footer Component (src/app/footer/psge.tsx)

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-700 to-blue-800 text-white pt-8 sm:pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
              <div className="relative h-10 sm:h-12 w-28 sm:w-36">
                <Image 
                  src="/logo.svg" 
                  alt="TecPro Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-sm text-white mb-4 text-center md:text-left px-4 sm:px-0">
              Soluciones innovadoras en impresión 3D para transformar tus ideas en realidades tangibles.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/tecpro.impresion3d?locale=es_LA" className="text-white hover:text-yellow-300 transition-colors">
                <IconBrandFacebook size={24} />

              </a>
              <a href="https://www.instagram.com/tecpro_impresion3d/" className="text-white hover:text-yellow-300 transition-colors">
                <IconBrandInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@tecpro_impresion3d" className="text-white hover:text-yellow-300 transition-colors">
                <IconBrandTiktok size={20} />
              </a>
              <a href="https://wa.me/2462514265" className="text-white hover:text-whatsapp transition-colors">
                <IconBrandWhatsapp size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left text-yellow-300">Enlaces rápidos</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#quienes-somos" className="text-white hover:text-yellow-300 transition-colors">
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-white hover:text-yellow-300 transition-colors">
                  Nuestros servicios
                </Link>
              </li>
              <li>
                <Link href="#materiales" className="text-white hover:text-yellow-300 transition-colors">
                  Materiales
                </Link>
              </li>
              <li>
                <Link href="#cotizaciones" className="text-white hover:text-yellow-300 transition-colors">
                  Cotizaciones
                </Link>
              </li>
              <li>
                <Link href="#tienda" className="text-white hover:text-yellow-300 transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-white hover:text-yellow-300 transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left text-yellow-300">Contacto</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex items-start justify-center md:justify-start gap-2">
                <IconMapPin size={20} className="text-white flex-shrink-0 mt-1" />
                <span className="text-white text-sm">Gaviotas 21, Granjas Modernas, Gustavo A. Madero, 07460 Ciudad de México, CDMX</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <IconPhone size={18} className="text-white flex-shrink-0" />
                <a href="tel:+522462514265" className="text-white hover:text-yellow-300 transition-colors text-sm">
                  246 251 4265
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <IconMail size={18} className="text-white flex-shrink-0" />
                <a href="mailto:tecprocdmx@gmail.com" className="text-white hover:text-yellow-300 transition-colors text-sm">
                  tecprocdmx@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <IconBrandWhatsapp size={18} className="text-white flex-shrink-0" />
                <a href="https://wa.me/2462514265" className="text-white hover:text-whatsapp transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-xs sm:text-sm text-gray-200">
          <p>© {currentYear} TecPro Impresión 3D. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;