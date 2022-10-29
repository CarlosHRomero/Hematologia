import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {ComplicacionesForm} from './ComplicacionesForm';
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
import {Toolbar} from "./Toolbar";

function ComplicacionesDetail(){
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        leerPaciente(params.compId, setPaciente, setCargando);
    }, []
    );
    if (paciente) {
        return (
            <Row>
            <Col md={3}>
                <Arbol hcNuming={paciente.hcnumIng}></Arbol>
            </Col>
            <Col>
            <fieldset disabled="disabled">
                <Toolbar modo='detail' linkedit={'/Complicaciones/edit/'+params.compId}
                linkpaciente={'/paciente/'+paciente.hcnumIng}
                 />
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <h5 className='text-left m-2'></h5>
                <ComplicacionesForm compId={params.compId} modo = 'detail'></ComplicacionesForm>
                </fieldset>
            </Col>
            </Row>
        )
    }
}


async function leerPaciente(compId, setPaciente, setCargando) {
    console.log(compId);
    const datac = await FetchData("Complicaciones/" + compId);
    console.log(datac);
    console.log(datac.hcnumIng);
    const datap = await FetchData("pacientes/PacientePorhcNumIng/" + datac.hcnumIng);
    
    setPaciente(datap);
    setCargando(false);
}



export { ComplicacionesDetail }