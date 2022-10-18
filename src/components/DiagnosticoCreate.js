import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {DiagnosticoForm} from './DiagnosticoForm'
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
import {Toolbar} from "./Toolbar";

function DiagnosticoCreate(){
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        leerPaciente(params.hcnumIng, setPaciente, setCargando);
    }, []
    );
    if (paciente) {
        return (
            <Row>
            <Col md={3}>
                <Arbol hcNuming={params.hcnumIng}></Arbol>
            </Col>
            <Col>
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <h5 className='text-left m-2'></h5>
                <DiagnosticoForm hcnuming={params.hcnumIng} modo = 'create'></DiagnosticoForm>
            </Col>
            </Row>
        )
    }
}

async function leerPaciente(hcNuming, setPaciente, setCargando) {
    //console.log(hcNuming);
    const data = await FetchData("pacientes/PacientePorhcNumIng/" + hcNuming);

    //console.log(data);
    setPaciente(data);
    setCargando(false);
}

export {DiagnosticoCreate}
