"use client"
import {Btn_cotizacion} from "@/components/btn_cotizacion/page";
import {Btn_whatsapp} from "@/components/btn_whatsapp/page";


export const ListoParaEmpezar = () => {
    return (
        <main className="bg-white text-black p-12 text-center ">
            
            <h1 className="text-3xl font-bold pb-8">¿Listo para empezar?</h1>

            <div className=" pt-4 text-lg pb-8">
                Sit tienes alguna pregunta o deseas solicitar un presupuesto, no dudes en contactarnos.

                <br />

                ¡Estaremos encantados de ayudarte!
            </div>     

            <div className="flex justify-center gap-50 pt-8">
                    <Btn_cotizacion/>
                    <Btn_whatsapp/>
            </div>
            
        </main>
    )
 
 }