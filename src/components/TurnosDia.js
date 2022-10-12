import React from "react";
import { useState, useEffect, useContext  } from 'react';
import { Link } from 'react-router-dom';
import { Cabecera } from "./cabecera";
import {FetchData} from '../FetchData/FetchData';

const TurnosDia = () => {
    const [turnos, setTurnos] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        //alert('hola');
        leerTurnos(setTurnos, setCargando);    
          },[])
          

    function _filtrarturnos(){    
        console.log("hoal");
      }
    return(
        <div>
            <Cabecera funcionBuscar={_filtrarturnos} />

        <table className="table  table-striped table-sm table-bordered" aria-labelledby="tabelLabel">
        <colgroup>
            <col style={{width:"10%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"35%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"15%"}} />
          </colgroup>
          <thead>
            <tr>
              <th className="text-center">N. Ord.</th>
              <th className="text-center">Hora</th>
              <th className="text-center">N. Doc.</th>
              <th className="text-center">Ultima Consulta</th>
              <th>Apellido y Nombre</th>
              <th className="text-center">Fecha de Nac.</th>
              <th className="text-center">N. Ord</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno) => (
              <tr key={turno.nroOrd}>
                <td> {turno.nroOrd} </td>
                <td className="text-center">{
                  turno.fecOrd.substring(11,16)}</td>
                <td className="text-center">{turno.docPac}</td>
                <td className="text-center">
                  <Link to={'/turno/'+turno.hcnumIng}>
                    {(new Date(turno.consConsultaF)).toLocaleDateString()}
                  </Link>
                </td>               
                <td className="text-left">{turno.apYn}</td>
                <td className="text-center">{(new Date(turno.fnaPac)).toLocaleDateString()}</td>
                <td className="text-center">{turno.numCarnet}</td>
               
              </tr>
            ))}

          </tbody>
        </table>

        </div>
        
    )
}

async function leerTurnos(setTurnos, setCargando){
    setCargando(true);
    const data = await FetchData("turnos/");
    console.log  ('turnos', data);
    setTurnos(data );
    setCargando(false);
}

export {TurnosDia}