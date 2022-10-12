import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {ConsultaForm} from './ConsultaForm'
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
import {Toolbar} from "./Toolbar";

function ConsultaEdit(){
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        leerPaciente(params.consId, setPaciente, setCargando);
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
                linkdetail={'/consultas/details/'+params.consId}
                linkpaciente={'/paciente/'+paciente.hcnumIng}
                />
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <h5 className='text-left m-2'></h5>
                <ConsultaForm consId={params.consId} modo = 'edit'></ConsultaForm>
            </Col>
            </Row>
        )
    }
}


async function leerPaciente(consId, setPaciente, setCargando) {
    console.log(consId);
    const datac = await FetchData("consultas/" + consId);
    console.log(datac);
    console.log(datac.hcnumIng);
    const datap = await FetchData("pacientes/PacientePorhcNumIng/" + datac.hcnumIng);
    
    setPaciente(datap);
    setCargando(false);
}



export { ConsultaEdit }