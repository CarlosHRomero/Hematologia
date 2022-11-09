import React from "react";
import { useState, useEffect, useContext } from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import { FetchData } from '../FetchData/FetchData';
//import {leerConsultas} from '../FetchData/LeerDatos';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMoreIcon';

import { ExpandMore, ChevronRight, ConstructionOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Arbol = ({ hcNuming }) => {
    const [consultas, setConsultas] = useState([]);
    const [diagnosticos, setDiagnosticos] = useState([]);
    const [tratamiento, setTratamiento] = useState([]);
    const [facRiesgo, setFacRiesgo] = useState([]);
    const [complicaciones, setComplicaciones] = useState([]);
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        leerConsultas(hcNuming, setConsultas, setCargando);
        leerDiagnostico(hcNuming, setDiagnosticos, setCargando);
        leerFacRiesgo(hcNuming, setFacRiesgo, setCargando);
        leerTratamiento(hcNuming, setTratamiento, setCargando);
        leerComplicaciones(hcNuming, setComplicaciones, setCargando);
    }, []
    );

    if (consultas && diagnosticos && facRiesgo && tratamiento)
        return (
            <div className="text-left mt-4" >
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMore />}
                    defaultExpandIcon={<ChevronRight />}
                    sx={{ height: 480, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                    <TreeItem nodeId="Consultas" label="Consultas"
                        sx={{ color: 'navy', paddingTop: 0.6 }}
                    >
                        {consultas.map((consulta) => (
                            <TreeItem key={consulta.consId.toString()} nodeId={'C'+consulta.consId.toString()}
                                label={'{' + (new Date(consulta.consConsultaF)).toLocaleDateString() + '}'}
                                onClick={() => {
                                    //alert('/consultas/details/'+ consulta.consId)
                                    navigate('/consultas/details/' + consulta.consId)
                                    //navigate('/login/')
                                }}
                                sx={{ color: 'blue', paddingTop: 0.6 }}
                            />

                        ))}

                    </TreeItem>

                    <TreeItem nodeId={'Diagnostico'} label="Diagnostico" sx={{ color: 'navy', paddingTop: 0.5 }}
                        onClick={() => {
                            console.log(diagnosticos)
                        }}
                    >
                        <TreeItem nodeId={'20'}
                            label='Nuevo diagnostico'
                            sx={{ color: 'maroon', paddingTop: 0.6 }}
                            onClick={() => {
                                navigate('/diagnostico/create/' + hcNuming)
                            }}

                        />
                        {
                            diagnosticos.map((diagnostico) =>
                            (
                                <TreeItem nodeId={'D'+diagnostico.diagId.toString()}
                                    key={diagnostico.diagId.toString()}
                                    label={diagnostico.diagFecha ? diagnostico.diagFecha.toString() : null}
                                    sx={{ color: 'blue', paddingTop: 0.6 }}
                                    onClick={() => {
                                        navigate('/diagnostico/details/' + diagnostico.diagId)
                                    }}
                                />
                            ))}

                    </TreeItem>
                    <TreeItem nodeId="FR" label="Factores de Riesgo"
                        sx={{ color: 'navy', paddingTop: 0.6 }}
                    >
                        <TreeItem nodeId={'FR30'}
                            label='Alta  factor de Riesgo'
                            sx={{ color: 'maroon', paddingTop: 0.6 }}
                            onClick={() => {
                                navigate('/facRiesgo/create/' + hcNuming)
                            }}

                        />
                        {
                            facRiesgo.map((fac) =>
                            (
                                <TreeItem nodeId={fac.facId.toString()}
                                    key={'FR'+fac.facId.toString()}
                                    label={fac.diagFecha ? fac.diagFecha.toString() : null}
                                    sx={{ color: 'blue', paddingTop: 0.6 }}
                                    onClick={() => {
                                        navigate('/facRiesgo/details/' + fac.facId)
                                    }}
                                />
                            ))}
                    </TreeItem>
                    <TreeItem nodeId="Tratamiento" label="Tratamiento"
                        sx={{ color: 'navy', paddingTop: 0.6 }}>
                        <TreeItem nodeId="TRB" label="Tratamiento Base"
                            sx={{ color: 'navy', paddingTop: 0.6 }}
                        >
                            <TreeItem nodeId={'TRB-A'}
                                label='Alta  tratamiento'
                                sx={{ color: 'maroon', paddingTop: 0.6 }}
                                onClick={() => {
                                    navigate('/tratamiento/create/' + hcNuming)
                                }} />
                            {
                                tratamiento.map((trat) =>
                                (
                                    <TreeItem nodeId={'TR'+trat.tratId.toString()}
                                        key={trat.tratId.toString()}
                                        label={trat.tratFd ? trat.tratFd.toString() : null}
                                        sx={{ color: 'blue', paddingTop: 0.6 }}
                                        onClick={() => {
                                            navigate('/tratamiento/details/' + trat.tratId)
                                        }}
                                    />
                                ))}
                        </TreeItem>

                    </TreeItem>

                    <TreeItem nodeId="Complicaciones" label="Complicaciones o Eventos"
                        sx={{ color: 'navy', paddingTop: 0.6 }}>
                        <TreeItem nodeId={'50'}
                            label='Alta  complicaciones'
                            sx={{ color: 'maroon', paddingTop: 0.6 }}
                            onClick={() => {
                                navigate('/complicaciones/create/' + hcNuming)
                            }} />
                        {
                            complicaciones.map((comp) =>
                            (
                                <TreeItem nodeId={'COM'+comp.compId.toString()}
                                    key={comp.compId.toString()}
                                    label={comp.diagFecha ? comp.diagFecha.toString() : null}
                                    sx={{ color: 'blue', paddingTop: 0.6 }}
                                    onClick={() => {
                                        navigate('/complicaciones/details/' + comp.compId)
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


    if (data.length > 4)
        data = data.slice(0, 4);
    console.log(data);
    setConsutas(data);
    setCargando(false);
}

async function leerDiagnostico(hcNuming, setDiagnosticos, setCargando) {
    //console.log(hcNuming);
    setCargando(true);
    const data = await FetchData("Diagnostico/DiagnosticoPorHcnuming/" + hcNuming);

    //console.log('diagnostico',data);
    setDiagnosticos(data);
    setCargando(false);
}

async function leerFacRiesgo(hcNuming, setFacRiesgo, setCargando) {
    //console.log(hcNuming);
    setCargando(true);
    const data = await FetchData("FacRiesgo/FacRiesgoPorHcnuming/" + hcNuming);

    console.log('fac riesgo', data);
    setFacRiesgo(data);
    setCargando(false);
}

async function leerTratamiento(hcNuming, setTratamiento, setCargando) {
    //console.log(hcNuming);
    setCargando(true);
    const data = await FetchData("Tratamiento/TratamientoPorHcnuming/" + hcNuming);

    console.log('Tratamiento', data);
    setTratamiento(data);
    setCargando(false);
}

async function leerComplicaciones(hcNuming, setComplicaciones, setCargando) {
    //console.log(hcNuming);
    setCargando(true);
    const data = await FetchData("Complicaciones/ComplicacionesPorHcnuming/" + hcNuming);

    console.log('Complicaciones', data);
    setComplicaciones(data);
    setCargando(false);
}
export { Arbol }