import { useState, useEffect, useCallback, SetStateAction } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
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
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12">
      {/* Main container */}
      <div className="relative pb-4">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`transition-all duration-500 ${
              index === currentSlide 
                ? "opacity-100 relative" 
                : "opacity-0 absolute top-0 left-0 right-0"
            }`}
          >
            {/* Card Layout */}
            <div className="flex flex-col md:flex-row items-center gap-8 px-4">
              {/* Left side - Image */}
              <div className="w-full md:w-1/2 ">
                <img 
                  src={slide.image || "/api/placeholder/400/320"} 
                  alt={slide.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              
              {/* Right side - Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-center mb-8">{slide.title}</h2>
                <ul className="space-y-6">
                  {slide.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {/* Blue dot bullet */}
                      <div className="min-w-4 mt-1.5">
                        <div className="w-3 h-3 bg-azul rounded-full"></div>
                      </div>
                      {/* Feature text */}
                      <div>
                        <span className="font-semibold">{feature.title}</span>{" "}
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

      {/* Navigation dots - Reduced space above */}
      <div className="flex justify-center space-x-3 mt-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-blue-600" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;