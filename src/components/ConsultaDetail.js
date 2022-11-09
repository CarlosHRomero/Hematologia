import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {ConsultaForm} from './ConsultaForm'
import { Row, Col } from 'react-bootstrap';
import {Arbol} from "./Arbol";
import {Toolbar} from "./Toolbar";
import {Error} from './Error';
function ConsultaDetail(){
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        leerPaciente(params.consId, setPaciente, setCargando, setError);
    }, []
    );
    if(error){
        return(
          <div>
            <Error error={error} />
          </div>
        )
      }
    if (paciente) {
        return (
            <Row>
            <Col md={3}>
                <Arbol hcNuming={paciente.hcnumIng}></Arbol>
            </Col>
            <Col>
                <Toolbar modo='detail' linkedit={'/consultas/edit/'+params.consId}
                linkpaciente={'/paciente/'+paciente.hcnumIng}
                 />
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <h5 className='text-left m-2'></h5>
                <fieldset disabled="disabled">
                <ConsultaForm consId={params.consId} modo = 'detail'></ConsultaForm>
                </fieldset>
            </Col>
            </Row>
        )
    }
}


async function leerPaciente(consId, setPaciente, setCargando, setError) {
    console.log(consId);
    try{
    const datac = await FetchData("consultas/" + consId, true);

    console.log(datac);
    console.log(datac.hcnumIng);
    const datap = await FetchData("pacientes/PacientePorhcNumIng/" + datac.hcnumIng, true);
    setPaciente(datap);
    setCargando(false);
    }
    catch(e){
        setError(e);
    }
    

}



export { ConsultaDetail }
