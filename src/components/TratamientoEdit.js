import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {TratamientoForm} from './TratamientoForm';
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
import {Toolbar} from "./Toolbar";

function TratamientoEdit(){
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        leerPaciente(params.tratId, setPaciente, setCargando);
    }, []
    );
    if (paciente) {
        return (
            <Row>
            <Col md={3}>
                <Arbol hcNuming={paciente.hcnumIng}></Arbol>
            </Col>
            <Col>
                <Toolbar modo='detail' linkedit={'/Tratamiento/edit/'+params.tratId}
                linkpaciente={'/paciente/'+paciente.hcnumIng}
                 />
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <h5 className='text-left m-2'></h5>
                <TratamientoForm tratId={params.tratId} modo = 'detail'></TratamientoForm>
            </Col>
            </Row>
        )
    }
}


async function leerPaciente(tratId, setPaciente, setCargando) {
    console.log(tratId);
    const datac = await FetchData("Tratamiento/" + tratId);
    console.log(datac);
    console.log(datac.hcnumIng);
    const datap = await FetchData("pacientes/PacientePorhcNumIng/" + datac.hcnumIng);
    
    setPaciente(datap);
    setCargando(false);
}

export {TratamientoEdit}