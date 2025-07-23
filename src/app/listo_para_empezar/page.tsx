"use client";
import { BtnCotizar } from "@/components/buttons/cotizar_btn";
import { BtnWhatsapp } from "@/components/buttons/whatsapp_btn";

const ListoParaEmpezar = () => {
  return (
    <section id="listo-para-empezar" className="bg-azul-oscuro text-white py-16 px-4 md:px-12">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          ¿Listo para empezar?
        </h2>

        <p className="text-lg mb-12">
          Si tienes alguna pregunta o deseas solicitar un presupuesto, no dudes en contactarnos.
          <br />
          <br />
          ¡Estaremos encantados de ayudarte!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <BtnCotizar />
          <BtnWhatsapp />
        </div>
      </div>
    </section>
  );
};

export default ListoParaEmpezar;