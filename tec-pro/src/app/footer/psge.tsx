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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-azul-oscuro text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative h-12 w-36">
                <Image 
                  src="/logo.svg" 
                  alt="TecPro Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4 text-center md:text-left">
              Soluciones innovadoras en impresión 3D para transformar tus ideas en realidades tangibles.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <IconBrandFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <IconBrandInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <IconBrandTiktok size={24} />
              </a>
              <a href="https://wa.me/2462514265" className="text-gray-300 hover:text-whatsapp transition-colors">
                <IconBrandWhatsapp size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Enlaces rápidos</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#quienes-somos" className="text-gray-300 hover:text-white transition-colors">
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Nuestros servicios
                </Link>
              </li>
              <li>
                <Link href="#materiales" className="text-gray-300 hover:text-white transition-colors">
                  Materiales
                </Link>
              </li>
              <li>
                <Link href="#cotizaciones" className="text-gray-300 hover:text-white transition-colors">
                  Cotizaciones
                </Link>
              </li>
              <li>
                <Link href="#tienda" className="text-gray-300 hover:text-white transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Contacto</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <IconMapPin size={20} className="text-gray-300" />
                <span className="text-gray-300">CDMX, México</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <IconPhone size={20} className="text-gray-300" />
                <a href="tel:+522462514265" className="text-gray-300 hover:text-white transition-colors">
                  246 251 4265
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <IconMail size={20} className="text-gray-300" />
                <a href="mailto:tecprocdmx@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  tecprocdmx@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <IconBrandWhatsapp size={20} className="text-gray-300" />
                <a href="https://wa.me/2462514265" className="text-gray-300 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} TecPro Impresión 3D. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;