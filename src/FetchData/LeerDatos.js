import {FetchData} from './FetchData';

async function leerConsultas(hcNuming, setConsutas, setCargando) {
    console.log(hcNuming);
    const data = await FetchData("Consultas/ConsultasPorHcnuming/" + hcNuming);
    
    console.log(data);
    setConsutas(data );
    setCargando(false);
  }


  export {leerConsultas}