import Header from "./header/page";
import {Principal}  from "./principal/page";
import { QuienesSomos } from "./quienes_somos/page";
import {NuestrosServicios} from "./servicios/page";

export default function Home() {
  return (
    <div>
      <Header/>

      <Principal/>

      <QuienesSomos/>

      <NuestrosServicios/>
    </div>
   
  );
}
