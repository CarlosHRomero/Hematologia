import React from "react";
import { useState, useEffect, useContext  } from 'react';

import {Form, Row, Col } from 'react-bootstrap';
import {FetchData} from '../FetchData/FetchData';

const DatosPaciente = ({paciente}) => {

    const [InrPromedio, setInrPromedio] = useState();
    const [InrVarianza, setInrVarianza] = useState();
    const [TTR, setTTR] = useState();
    const [diagnostico, setDiagnostico] = useState('');
    const [complicaciones, setComplicaciones] = useState(' ');
    useEffect(() => {
        leerInrPromedio(paciente.hcnumIng, setInrPromedio);
        leerInrVarianza(paciente.hcnumIng, setInrVarianza);    
        leerTTR(paciente.hcnumIng, setTTR);
        leerDiagnostico(paciente.hcnumIng, setDiagnostico);
        leerComplicaciones(paciente.hcnumIng, setComplicaciones);
        
          },[]
      );
    if(!!paciente)
    {
        //console.log(TTR);
    return <div className="text-left mt-2">
        <h5>DatosPaciente</h5>        
        <div className="grupo">

        <Row >
            <Col  md={4}>
                <Form.Group className="mb-1">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <div className="form-control" >{paciente.hcapeSol.trim()+ ', ' +paciente.hcnombre} </div>
                </Form.Group>
            </Col>
            <Col  md={2}>
                <Form.Group className="mb-1">
                    <Form.Label>HC</Form.Label>
                    <div className="form-control" >{paciente.hcnumero} </div>
                </Form.Group>
            </Col>
            <Col  md={3}>
                <Form.Group className="mb-1">
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
            <Col md={9}>
            <Form.Group className="mb-2">
                    <Form.Label>Diagnóstico</Form.Label>
                    <div className="form-control" >{diagnostico.substring(0,110)} </div>
                    </Form.Group>       
            </Col>
            <Col md={2}>
                    <Form.Label>INR Promedio</Form.Label>
                    <div className="form-control" >{InrPromedio} </div>
            </Col>
            <Col md={1}>
                    <Form.Label>INR Var.</Form.Label>
                    <div className="form-control" >{InrVarianza} </div>
            </Col>
        </Row>
        <Row>
            <Col md={9}>
                    <Form.Label>Complicaciones</Form.Label>
                    <div className="form-control" >{complicaciones.substring(0,110)} </div>
            </Col>
            <Col md={1}>
                    <Form.Label>TTR Bajo</Form.Label>
                    <div className="form-control" >{TTR ? TTR.tBa : "0"} </div>
            </Col>
            <Col md={1}>
                    <Form.Label>TTR Ok</Form.Label>
                    <div className="form-control" >{TTR ? TTR.tOk: "0"} </div>
            </Col>
            <Col md={1}>
                    <Form.Label>TTR Alto</Form.Label>
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

async function leerDiagnostico(hcNuming, setDiagnostico) {
    //console.log(hcNuming);
    const data = await FetchData("Diagnostico/DiagnosticoPrincipal/" + hcNuming);
    
    console.log('diagnostico', data);
    setDiagnostico(data);

  }

  async function leerComplicaciones(hcNuming, setComplicaciones) {
    //console.log(hcNuming);
    let data = await FetchData("Complicaciones/DescripcionComplicaciones/" + hcNuming);
    if(data=='')
        data='x ';
    
    console.log('complicaciones', data);
    setComplicaciones(data);

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