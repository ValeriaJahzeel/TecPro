import Header from "../header/page";
import Footer from "../footer/psge";
import Image from "next/image";
import { BtnCotizar } from "@/components/buttons/cotizar_btn";


const Tienda = () => {
    return (
           <main className="min-h-screen bg-white">
            <Header />
                  <div className="bg-white text-gris p-4 ">

  <h1 className="text-3xl font-bold text-center">
    Lo sentimos, aún seguimos trabajando en nuestra tienda 

  </h1>
  
<div className="pt-6 pb-6 justify-center text-center">
  <p className="mb-4">Mientras tanto, puedes acceder a nuestro catálogo de Mercado Libre haciendo clic en la imagen</p>
  
  <a 
    href="https://listado.mercadolibre.com.mx/_CustId_173383713_NoIndex_True?item_id=MLM1893158885&category_id=MLM187846&seller_id=173383713&client=recoview-selleritems&recos_listing=true" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block transition-transform duration-300 hover:scale-105"
  >
    <Image 
      src="/mercado-libre.png"  
      alt="Catálogo en Mercado Libre - Haz clic para ver" 
      width={1000} 
      height={800} 
      className="rounded-lg shadow-md"
    />

    <p className="mt-4 mb-4">O puedes solicitar una cotización mediante nuestro formulario</p>

    <BtnCotizar />
  </a>
  
</div>
  
             {/* <Image src="/pagina-no-disponible.png" alt="Pagina no disponible" width={1000} height={800} /> */}
            
          </div>

    <Footer />
    </main>
       
    )
 }
 
 export default Tienda;