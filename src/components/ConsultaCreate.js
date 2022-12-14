import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {ConsultaForm} from './ConsultaForm'
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
function ConsultaCreate() {
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    const [consulta, setConsulta] = useState();
    useEffect(() => {
        //alert('hola');
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
                <h5 className='text-left m-2'>Nueva consulta</h5>
                <ConsultaForm hcnuming={params.hcnumIng} modo = 'create'></ConsultaForm>
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



export { ConsultaCreate }