import React from "react";
import { useState, useEffect, useContext  } from 'react';
import {TreeView, TreeItem} from '@mui/lab';
import {FetchData} from '../FetchData/FetchData';
//import {leerConsultas} from '../FetchData/LeerDatos';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMoreIcon';

import { ExpandMore, ChevronRight, ConstructionOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Arbol = ({ hcNuming }) => {
    const [consultas, setConsultas] = useState([]);
    const [diagnosticos, setDiagnosticos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        leerConsultas(hcNuming, setConsultas, setCargando);    
        leerDiagnostico(hcNuming, setDiagnosticos, setCargando);
          },[]
      );
    console.log(diagnosticos);
    if(consultas && diagnosticos)
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
                        onClick= {() => {
                            //alert('/consultas/details/'+ consulta.consId)
                            navigate('/consultas/details/'+ consulta.consId)
                            //navigate('/login/')
                        }}
                        sx={{color: 'blue', paddingTop: 0.6}}
                        />
                        
                    ))}

                </TreeItem>

                <TreeItem nodeId={'2'} label="Diagnostico" sx={{color: 'navy', paddingTop: 0.5}} 
                 onClick= {() => {
                    console.log(diagnosticos)}}
                >
                <TreeItem nodeId={'0'}
                label= 'Nuevo diagnostico'
                sx={{color: 'maroon', paddingTop: 0.6}}
                onClick= {() => {
                    navigate('/diagnostico/create/'+ hcNuming)
                }}

                 />
                {
                diagnosticos.map((diagnostico) => 
                    (
                        <TreeItem nodeId={diagnostico.diagId.toString() }
                        key={diagnostico.diagId.toString() }
                        label={diagnostico.diagFecha ? diagnostico.diagFecha.toString(): null}
                        sx={{color: 'blue', paddingTop: 0.6}}
                        onClick= {() => {
                            navigate('/diagnostico/details/'+ diagnostico.diagId)
                        }}
                        />
                    ))}
                
                </TreeItem>
            </TreeView>
        </div>
    )
}


async function leerConsultas(hcNuming, setConsutas, setCargando) {
    //console.log(hcNuming);
    let data = await FetchData("Consultas/ConsultasPorHcnuming/" + hcNuming);
    
    
    if(data.length > 4)
        data=data.slice(0,4);
    console.log(data);
    setConsutas(data);
    setCargando(false);
  }

  async function leerDiagnostico(hcNuming, setDiagnosticos, setCargando) {
    //console.log(hcNuming);
    setCargando(true);
    const data = await FetchData("Diagnostico/DiagnosticoPorHcnuming/" + hcNuming);
    
    //console.log('diagnostico',data);
    setDiagnosticos(data );
    setCargando(false);
  }



export { Arbol }