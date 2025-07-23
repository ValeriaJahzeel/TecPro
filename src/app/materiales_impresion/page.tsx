"use client"

import MaterialesCards from "@/components/cards/dictionary";

const MaterialesImpresion = () => {
    return (
        <main id="materiales" className="bg-white p-4 ">
            <h1 className="text-3xl md:text-4xl font-bold text-azul-oscuro mb-6 relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-azul-medio after:mt-2 pb-3">
                Materiales de Impresión
                </h1>

            <MaterialesCards/>
            
        </main>
    )
 }

 export default MaterialesImpresion;