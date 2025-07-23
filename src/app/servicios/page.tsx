"use client"
import Carousel from "@/components/carousel/caroussel";

const NuestrosServicios = () => {
    return (
        <main id="servicios" className="bg-white  p-4">
            
            <h1 className="text-3xl md:text-4xl font-bold text-azul-oscuro mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-azul-medio after:mt-2 pb-3"
            >Nuestros servicios
            </h1>

            <div className="text-justify text-gris pt-4 text-lg">
                En <b>TECPRO IMPRESIÓN 3D </b>   te ofrecemos soluciones integrales en impresión 3D para hacer realidad tus ideas y proyectos.
            </div>     

        <Carousel/>

        </main>
    )
 }
 
 export default NuestrosServicios;