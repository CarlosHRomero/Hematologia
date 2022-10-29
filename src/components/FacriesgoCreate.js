import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {FacriesgoForm} from './FacriesgoForm'
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
import {Toolbar} from "./Toolbar";

function FacriesgoCreate(){
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
                <FacriesgoForm hcnuming={params.hcnumIng} modo = 'create'></FacriesgoForm>
            </Col>
            </Row>
        )
    }
}

async function leerPaciente(hcnuming, setPaciente, setCargando) {

    const datap = await FetchData("pacientes/PacientePorhcNumIng/" + hcnuming);
    setPaciente(datap);
    setCargando(false);
}


export{FacriesgoCreate}