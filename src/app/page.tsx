"use client"
import Header from "./header/page";
import Principal from "./principal/page";
import QuienesSomos from "./quienes_somos/page";
import NuestrosServicios from "./servicios/page";
import MaterialesImpresion from "./materiales_impresion/page";
import ListoParaEmpezar from "./listo_para_empezar/page";
import Contacto from "./nuestro_contacto/page";
import Footer from "./footer/psge";
import {Btn_flotante} from "../components/buttons/flotante_whatsapp"
import PopupHotSale from "../components/popup/hot-sale"; // Ajusta la ruta según donde guardes el componente

export default function Home() {
  return (
    
    <main className="min-h-screen bg-white">
      <PopupHotSale />
      
      <Btn_flotante />

      <Header />
      
      <Principal />
      
      <QuienesSomos />
      
      <NuestrosServicios />
      
      <MaterialesImpresion />
      
      <ListoParaEmpezar />
      
      <Contacto />
      
      {/* <Formulario /> */}
      
      <Footer />
    </main>
  );
}