"use client"

export const NuestrosServicios = () => {
    return (
        <div>
            <h1>Nuestros servicios</h1>

            En TECPRO IMPRESIÓN 3D, te ofrecemos soluciones integrales en impresión 3D para hacer realidad tus ideas y proyectos.

            {/* Aqui empieza lo del carroussel */}
                {/* Primer elemento */}
            <img src="img_escaneo3D.png" alt="" />
            <div>
                <h3>Escaneo 3D</h3>
            Digitalización de objetos: Capturamos la forma y dimensiones de objetos físicos con alta precisión, convirtiéndolos en modelos digitales 3D listos para su impresión o modificación.

Ingeniería inversa: Recreamos modelos 3D a partir de piezas existentes, permitiéndote analizar, modificar o replicar objetos sin necesidad de planos originales.

Control de calidad: Utilizamos el escaneo 3D para comparar piezas impresas con sus modelos digitales, asegurando la precisión dimensional y la calidad de fabricación.
            </div>
            
            {/* Segundo elemento */}

            <img src="img_impresion3D.png" alt="" />
            <div>
                <h3>Impresión 3D</h3>
            Prototipado rápido: Convierte tus diseños en prototipos tangibles de forma rápida y eficiente

Producción bajo demanda: Fabricamos piezas personalizadas y series cortas según tus especificaciones

Materiales de alta calidad: Trabajamos con una amplia gama de materiales de impresión 3D
 </div>

            {/* Tercer elemento */}

            <img src="img_disenio3D.png" alt="" />
            <div>
                <h3>Diseño 3D</h3>
            Modelado 3D personalizado: Nuestro equipo de diseñadores expertos te ayudará a crear modelos 3D únicos y optimizados para la impresión 3D

Optimización de diseños: Adaptamos tus modelos 3D para garantizar la mejor calidad de impresión, minimizando el uso de material y maximizando la resistencia de las piezas

Diseño para fabricación aditiva: Diseñamos piezas específicamente para la impresión 3D, aprovechando las ventajas de esta tecnología
 </div>
            
        </div>
    )
}