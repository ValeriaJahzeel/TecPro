"use client";
import Image from "next/image";
import { BtnCotizar } from "@/components/buttons/cotizar_btn";
import { BtnWhatsapp } from "@/components/buttons/whatsapp_btn";

const Principal = () => {
  return (
    <section id="principal" className="bg-white py-8 md:py-12 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl h-64 sm:h-80 md:h-[36rem] flex items-center justify-center">
              <Image
                src="/descarga.png"
                alt="Impresora 3D TecPro"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gris mb-2 sm:mb-4">
              Servicio de 
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-verde-medio mb-2 sm:mb-4">
              impresión 3D 
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gris mb-4 sm:mb-6">
              a tu alcance
            </h1>

            <p className="text-gris text-base sm:text-lg mb-6 sm:mb-8">
              Imprime con nosotros tus prototipos artísticos e industriales, maquetas arquitectónicas, 
              refacciones plásticas automotrices. También contamos con servicio de diseño orgánico y paramétrico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BtnCotizar />
              <BtnWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Principal;