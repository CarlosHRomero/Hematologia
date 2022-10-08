import React from "react";
import { useState, useEffect, useContext  } from 'react';

import {Form, Row, Col } from 'react-bootstrap';
import {FetchData} from '../FetchData/FetchData';

const DatosPaciente = ({paciente}) => {

    const [InrPromedio, setInrPromedio] = useState();
    const [InrVarianza, setInrVarianza] = useState();
    const [TTR, setTTR] = useState();
    useEffect(() => {
        leerInrPromedio(paciente.hcnumIng, setInrPromedio);
        leerInrVarianza(paciente.hcnumIng, setInrVarianza);    
        leerTTR(paciente.hcnumIng, setTTR);
          },[]
      );
    if(!!paciente)
    {
        //console.log(TTR);
    return <div className="text-left mt-2">
        <h5>DatosPaciente</h5>        
        <div className="grupo">

        <Row >
            <Col  md={5}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <div className="form-control" >{paciente.hcapeSol.trim()+ ', ' +paciente.hcnombre} </div>
                </Form.Group>
            </Col>
            <Col  md={2}>
                <Form.Group className="mb-3">
                    <Form.Label>HC</Form.Label>
                    <div className="form-control" >{paciente.hcnumero} </div>
                </Form.Group>
            </Col>
            <Col  md={2}>
                <Form.Group className="mb-3">
                    <Form.Label>Obra Social</Form.Label>
                    <div className="form-control" >
                        {paciente.obraSocial}
                     </div>
                </Form.Group>
            </Col>
            <Col md={2}>
                    <Form.Label>Fecha Nac.</Form.Label>
                    <div className="form-control" >{(new Date(paciente.hcfechaNacim)).toLocaleDateString()  } </div>
            </Col>
            <Col md={1}>
                    <Form.Label>Edad</Form.Label>
                    <div className="form-control" >{CalcularEdad(new Date(paciente.hcfechaNacim))} </div>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                    <Form.Label>Diagnóstico</Form.Label>
                    <div className="form-control" >x </div>
            </Col>
            <Col md={3}>
                    <Form.Label>INR Promedio</Form.Label>
                    <div className="form-control" >{InrPromedio} </div>
            </Col>
            <Col md={3}>
                    <Form.Label>INR Var.</Form.Label>
                    <div className="form-control" >{InrVarianza} </div>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                    <Form.Label>Complicaciones</Form.Label>
                    <div className="form-control" >{"Complic"} </div>
            </Col>
            <Col md={2}>
                    <Form.Label>Diagnóstico</Form.Label>
                    <div className="form-control" >{TTR ? TTR.tBa : "0"} </div>
            </Col>
            <Col md={2}>
                    <Form.Label>INR Promedio</Form.Label>
                    <div className="form-control" >{TTR ? TTR.tOk: "0"} </div>
            </Col>
            <Col md={2}>
                    <Form.Label>INR Var.</Form.Label>
                    <div className="form-control" >{TTR ?TTR.tAl: "0"} </div>
            </Col>

        </Row>
</div>
    </div>
    }
}

function CalcularEdad(fnac){
    const ms = (new Date()) -fnac;
    return Math.floor( ms/(1000*3600*24*365));
}


async function leerInrPromedio(hcNuming, setInrPromedio) {
    //console.log(hcNuming);
    const data = await FetchData("pacientes/InrPromedio/" + hcNuming);
    
    //console.log(data);
    setInrPromedio(data);

  }

  async function leerInrVarianza(hcNuming, setInrVarianza) {
    //console.log(hcNuming);
    const data = await FetchData("pacientes/InrVarianza/" + hcNuming);
    
    //console.log(data);
    setInrVarianza(data);

  }

  async function leerTTR(hcNuming, setTTR) {
    //console.log(hcNuming);
    const data = await FetchData("pacientes/TTR/" + hcNuming);
    
    //console.log(data);
    setTTR(data);

  }
  

export { DatosPaciente }