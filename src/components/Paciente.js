import React from "react";
import { useState, useEffect, useContext  } from 'react';
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Arbol} from "./Arbol";
import {ListadoConsultas} from './ListadoConsultas';
import {DatosPaciente} from './DatosPaciente';
import {FetchData} from '../FetchData/FetchData';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const PacientePage = () => {
    let params = useParams();
    const [paciente, setPaciente] = useState();

    
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        //alert('hola');
        leerPaciente(params.hcnumIng, setPaciente, setCargando);
          },[]
      );
    if(!!paciente)
    {
    return (
        <Row>
            <Col md={3}>
                <Arbol hcNuming={params.hcnumIng}></Arbol>
            </Col>
            <Col>
            <div className="text-right mt-2">
                <Link to={'/consultas/create/' + params.hcnumIng}>
                <Button  variant="primary" >Copiar última consulta</Button>
                </Link>
                
            </div>
                
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <ListadoConsultas hcNuming={params.hcnumIng}></ListadoConsultas>
            </Col>
            
        </Row>
        
    )
    }
}

async function leerPaciente(hcNuming, setPaciente, setCargando) {
    console.log(hcNuming);
    const data = await FetchData("pacientes/PacientePorhcNumIng/" + hcNuming);
    
    console.log(data);
    setPaciente(data);
    setCargando(false);
  }

export { PacientePage }