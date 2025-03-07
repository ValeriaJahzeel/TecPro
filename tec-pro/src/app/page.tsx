import Header from "./header/page";
import {Principal}  from "./principal/page";
import { QuienesSomos } from "./quienes_somos/page";
import {NuestrosServicios} from "./servicios/page";
import { ListoParaEmpezar } from "./listo_para_empezar/page";
import { MaterialesImpresion } from "./materiales_impresion/page";

export default function Home() {
  return (
    <div>
      <Header/>

      <Principal/>

      <QuienesSomos/>

      <NuestrosServicios/>

      <ListoParaEmpezar/>

      <MaterialesImpresion/>
    </div>
   
  );
}
