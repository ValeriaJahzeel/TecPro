"use client";
import Image from "next/image";
import Link from "next/link";
import { BtnCotizar } from "@/components/buttons/cotizar_btn";
import { BtnWhatsapp } from "@/components/buttons/whatsapp_btn";

export const Principal = () => {
  return (
    <section id="principal" className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative w-full max-w-lg h-64 md:h-96">
              <Image
                src="/impresora-3d.png"
                alt="Impresora 3D TecPro"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gris mb-6">
              Servicio de impresión 3D a tu alcance
            </h1>

            <p className="text-gris text-lg mb-8">
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