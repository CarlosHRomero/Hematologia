import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {FacriesgoForm} from './FacriesgoForm';
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
import {Toolbar} from "./Toolbar";

function FacriesgoEdit(){
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        leerPaciente(params.facId, setPaciente, setCargando);
    }, []
    );
    if (paciente) {
        return (
            <Row>
            <Col md={3}>
                <Arbol hcNuming={paciente.hcnumIng}></Arbol>
            </Col>
            <Col>

                <Toolbar modo='detail' linkedit={'/Facriesgo/edit/'+params.facId}
                linkpaciente={'/paciente/'+paciente.hcnumIng}
                 />
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <h5 className='text-left m-2'></h5>
                <FacriesgoForm facId={params.facId} modo = 'edit'></FacriesgoForm>
            </Col>
            </Row>
        )
    }
}


async function leerPaciente(facId, setPaciente, setCargando) {
    console.log(facId);
    const datac = await FetchData("Facriesgo/" + facId);
    console.log(datac);
    console.log(datac.hcnumIng);
    const datap = await FetchData("pacientes/PacientePorhcNumIng/" + datac.hcnumIng);
    
    setPaciente(datap);
    setCargando(false);
}



export { FacriesgoEdit }
