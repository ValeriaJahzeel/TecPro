import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../buttons/button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Feature {
  title: string;
  description: string;
}

interface Slide {
  title: string;
  features: Feature[];
  image: string;
}

const ServiceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides: Slide[] = [
    {
      title: "Diseño 3D",
      features: [
        {
          title: "Modelado 3D personalizado:",
          description: "Nuestro equipo de diseñadores expertos te ayudará a crear modelos 3D únicos y optimizados para la impresión 3D"
        },
        {
          title: "Diseño para fabricación aditiva:",
          description: "Diseñamos piezas específicamente para la impresión 3D, aprovechando las ventajas de esta tecnología"
        }
      ],
      image: "img_disenio3D.png" 
    },
    {
      title: "Impresión 3D",
      features: [
        {
          title: "Prototipado rápido:",
          description: "Convierte tus diseños en prototipos tangibles de forma rápida y eficiente"
        },
        {
          title: "Producción bajo demanda:",
          description: "Fabricamos piezas personalizadas y series cortas según tus especificaciones"
        },
        {
          title: "Materiales de alta calidad:",
          description: "Trabajamos con una amplia gama de materiales de impresión 3D"
        }
      ],
      image: "img_impresion3D.png"
    },
    {
      title: "Escaneo 3D",
      features: [
        {
          title: "Digitalización de objetos:",
          description: "Capturamos la forma y dimensiones de objetos físicos con alta precisión"
        },
        {
          title: "Ingeniería inversa:",
          description: "Recreamos modelos 3D a partir de piezas existentes"
        }
      ],
      image: "img_escaneo3D.jpg" 
    }
  ];

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, slides.length]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-16 px-4">
      
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative w-full h-96 md:h-[500px]">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
                index === currentSlide 
                  ? "opacity-100 translate-x-0" 
                  : index < currentSlide 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              }`}
            >
              {/* Card Layout */}
              <div className="flex flex-col md:flex-row items-center h-full bg-gradient-to-br from-blue-700 to-blue-800">
                {/* Left side - Image */}
                <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                  <img 
                    src={slide.image || "/api/placeholder/400/320"} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Right side - Content */}
                <div className="w-full md:w-1/2 p-8">
                  <h2 className="text-3xl font-bold text-center mb-8 text-white">{slide.title}</h2>
                  <ul className="space-y-6">
                    {slide.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-white">
                        {/* Blue dot bullet */}
                        <div className="min-w-4 mt-1.5">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        </div>
                        {/* Feature text */}
                        <div>
                          <span className="font-bold text-yellow-300">{feature.title}</span>{" "}
                          {feature.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-0 text-white rounded-full p-3 hover:bg-opacity-10 focus:outline-none transition-all"
          aria-label="Previous slide"
        >
          <FiChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-0 text-white rounded-full p-3 hover:bg-opacity-10 focus:outline-none transition-all"
          aria-label="Next slide"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center space-x-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-blue-600 w-6" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;