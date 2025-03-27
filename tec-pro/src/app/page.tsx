import Header from "./header/page";
import Principal from "./principal/page";
import QuienesSomos from "./quienes_somos/page";
import { NuestrosServicios } from "./servicios/page";
import { MaterialesImpresion } from "./materiales_impresion/page";
import ListoParaEmpezar from "./listo_para_empezar/page";
import Contacto from "./nuestro_contacto/page";
import { Formulario } from "./formulario";
import Footer from "./footer/psge";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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