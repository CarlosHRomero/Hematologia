import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {DiagnosticoForm} from './DiagnosticoForm'
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
import {Toolbar} from "./Toolbar";

function DiagnosticoEdit(){
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        leerPaciente(params.diagId, setPaciente, setCargando);
    }, []
    );
    if (paciente) {
        return (
            <Row>
            <Col md={3}>
                <Arbol hcNuming={paciente.hcnumIng}></Arbol>
            </Col>
            <Col>
                <Toolbar modo='edit'  
                linkdetail={'/Diagnostico/details/'+params.diagId}
                linkpaciente={'/paciente/'+paciente.hcnumIng}
                />
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <h5 className='text-left m-2'></h5>
                <DiagnosticoForm diagId={params.diagId} modo = 'edit'></DiagnosticoForm>
            </Col>
            </Row>
        )
    }
}


async function leerPaciente(diagId, setPaciente, setCargando) {
    console.log(diagId);
    const datac = await FetchData("Diagnostico/" + diagId);
    console.log(datac);
    console.log(datac.hcnumIng);
    const datap = await FetchData("pacientes/PacientePorhcNumIng/" + datac.hcnumIng);
    
    setPaciente(datap);
    setCargando(false);
}



export { DiagnosticoEdit }