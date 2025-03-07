"use client"
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-500 text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex items-center gap-4">
          <AiOutlineMail />
          <span>tecprogmail.com</span>
          <BsWhatsapp />
          <span>+52 xxx xxx xxxx</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1"><FaTiktok /> Tecpro</a>
          <a href="#" className="flex items-center gap-1"><FaFacebook /> Tecpro</a>
          <a href="#" className="flex items-center gap-1"><FaInstagram /> Tecpro</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-blue-500">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Tecpro</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white text-lg">
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
