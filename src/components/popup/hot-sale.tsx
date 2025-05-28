import React, { useState, useEffect } from 'react';
import { IconX } from '@tabler/icons-react';
import Image from 'next/image';

const PopupHotSale = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de 1 segundo de que cargue la página
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre la promoción Hot Sale. ¿Podrían darme más información?");
    window.open(`https://wa.me/2462514265?text=${message}`, '_blank');
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        onClick={closePopup}
      >
        {/* Popup principal */}
        <div 
          className="relative bg-transparent rounded-2xl max-w-lg w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón cerrar */}
          <button
            onClick={closePopup}
            className="absolute -top-2 -right-2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Cerrar popup"
          >
            <IconX size={20} className="text-gray-600" />
          </button>

          {/* Imagen del Hot Sale */}
          <div className="relative w-full cursor-pointer" onClick={handleWhatsAppClick}>
            <Image
              src="/hot-sale.svg"
              alt="Hot Sale TecPro - Descuentos hasta 50% OFF"
              width={600}
              height={800}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>

          {/* Mensaje pequeño debajo */}
          <p className="text-white text-center text-sm mt-3 opacity-80">
            Haz clic en la imagen para contactarnos por WhatsApp
          </p>
        </div>
      </div>
    </>
  );
};

export default PopupHotSale;