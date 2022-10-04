import React from "react";
import { useState, useEffect, useContext  } from 'react';
import {TreeView, TreeItem} from '@mui/lab';
import {FetchData} from '../FetchData/FetchData';
//import {leerConsultas} from '../FetchData/LeerDatos';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMoreIcon';

import { ExpandMore, ChevronRight } from '@mui/icons-material';

const Arbol = ({ hcNuming }) => {
    const [consultas, setConsultas] = useState([]);
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        leerConsultas(hcNuming, setConsultas, setCargando);    
          },[]
      );
    return (
        <div className="text-left mt-4" >
            <TreeView
             aria-label="file system navigator"
             defaultCollapseIcon={<ExpandMore />}
             defaultExpandIcon={<ChevronRight />}
             sx={{ height: 480, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                <TreeItem nodeId="1" label="Consultas"                 
                    sx={{color: 'navy', paddingTop: 0.6}} 
                    >
                    {consultas.map((consulta) => (
                        <TreeItem key={consulta.consId.toString()} nodeId={consulta.consId.toString()} 
                        label={'{'+(new Date(consulta.consConsultaF)).toLocaleDateString()+'}'}
                        onClick= {() => {alert('hola')}}
                        sx={{color: 'blue', paddingTop: 0.6}}
                        />
                        
                    ))}

                </TreeItem>

                <TreeItem nodeId="2" label="Calendar" sx={{color: 'maroon', paddingTop: 0.5}} />
                
                   
            </TreeView>
        </div>
    )
}


async function leerConsultas(hcNuming, setConsutas, setCargando) {
    //console.log(hcNuming);
    const data = await FetchData("Consultas/ConsultasPorHcnuming/" + hcNuming);
    
    console.log(data);
    setConsutas(data );
    setCargando(false);
  }




export { Arbol }