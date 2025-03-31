"use client";
import Image from "next/image";

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="bg-white py-16 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-azul-oscuro mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-azul-medio after:mt-2 pb-3">
              ¿Quiénes somos?
            </h2>

            <div className="text-gris text-lg space-y-4">
              <p>
                Somos una empresa líder en impresión 3D dedicada a brindar soluciones innovadoras y personalizadas para todos nuestros clientes. Nos especializamos en 
                impresión 3D, diseño 3D y escaneo 3D, combinando tecnología de vanguardia con un enfoque creativo para transformar ideas en realidades tangibles.
              </p>
              
              <p>
                Nuestra misión es ofrecer un servicio de alta calidad, adaptado a las necesidades de cada proyecto, ya sea para empresas, profesionales o particulares. 
                Confía en nosotros para llevar tus ideas al siguiente nivel con precisión, eficiencia y creatividad.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/img_quienesSomos.png"
                alt="Quiénes somos TecPro"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;