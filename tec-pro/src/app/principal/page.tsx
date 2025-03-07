"use client";
import {Btn_cotizacion} from "@/components/btn_cotizacion/page";
import {Btn_whatsapp} from "@/components/btn_whatsapp/page";

export const Principal = () => {

    return (
        <div className="bg-blue-500">
            <h1>Servicio de impresión 3D a tu alcance</h1>

            {/* Bueno, aun hay que probar con las imágenes, maybe deberia hacer un programa que vectorize imagenes */}
            <img src="descarga.png" alt="impresora 3D" />       
            Imprime con nosotros tus prototipos artísticos e industriales, maquetas arquitectónicas, 
            refacciones plásticas automotrices, también contamos con servicio de diseño orgánico y paramétrico.
            
            <Btn_cotizacion/>
            <Btn_whatsapp/>
            
        </div>
    )
}

