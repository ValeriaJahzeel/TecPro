"use client";
import {Btn_cotizacion} from "@/components/btn_cotizacion/page";
import {Btn_whatsapp} from "@/components/btn_whatsapp/page";

export const Principal = () => {

    return (
        <div className="bg-gradient-to-b from-azul from-80% to-[#848C88] to 30%... flex justify-center grid grid-cols-2 p-12 text-black">
            
            {/* Bueno, aun hay que probar con las imágenes, maybe deberia hacer un programa que vectorize imagenes */}
            <img src="descarga.png" alt="impresora 3D" /> 

            <div className="pr-8 pt-25">
                <h1 className="text-3xl font-bold ">Servicio de impresión 3D a tu alcance</h1>

                <div className="text-justify pt-4 text-lg">
                    Imprime con nosotros tus prototipos artísticos e industriales, maquetas arquitectónicas, 
                    refacciones plásticas automotrices, también contamos con servicio de diseño orgánico y paramétrico.
                </div>

                <div className="grid grid-cols-2 gap-4 pt-8">
                    <Btn_cotizacion/>
                    <Btn_whatsapp/>
                </div>
                
            </div>      
            
           
            
        </div>
    )
}

