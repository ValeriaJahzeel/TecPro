"use client"

export const QuienesSomos = () => {
    return (
        // Bueno aun falta modificar esto para que se vea como en el dissño jsjs
        <div className="bg-white flex justify-center grid grid-cols-2 p-12 text-black">
            
            <div className="pr-8 pt-25">

                <h1 className="text-3xl font-bold ">¿Quienes somos?</h1>

                <div className="text-justify pt-4 text-lg">
                    Somos una empresa líder en impresión 3D dedicada a brindar soluciones innovadoras y personalizadas para todos nuestros clientes. Nos especializamos en 
                    impresión 3D, diseño 3D y escaneo 3D, combinando tecnología de vanguardia con un enfoque creativo para transformar ideas en realidades tangibles.
                    
                    <br />  
                    <br />
                    Nuestra misión es ofrecer un servicio de alta calidad, adaptado a las necesidades de cada proyecto, ya sea para empresas, profesionales o particulares. 
                    Confía en nosotros para llevar tus ideas al siguiente nivel con precisión, eficiencia y creatividad.
                </div>
            </div>

            <img className="" src="img_quienesSomos.png" alt="" />
        </div>
    )
}