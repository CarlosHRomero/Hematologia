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
import { RotatingLines } from 'react-loader-spinner'
import {Error} from './Error';
const PacientePage = () => {

    let params = useParams();
    const [paciente, setPaciente] = useState();

    const [error, setError] = useState(false);
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        //alert('hola');
        leerPaciente(params.hcnumIng, setPaciente, setCargando,setError);
          },[]
      );
      if (cargando) {
        return (
          <div>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        )
      }
      if(error){
        return(
          <div>
            <Error message={error.message} />
          </div>
        )
      }
    if(!!paciente)
    {
    return (
        <Row>
            <Col md={2}>
                <Arbol hcNuming={params.hcnumIng}></Arbol>
            </Col>
            <Col md={10}>
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

async function leerPaciente(hcNuming, setPaciente, setCargando, setError) {
    //console.log(hcNuming);
    try
    {
        const data = await FetchData("pacientes/PacientePorhcNumIng/" + hcNuming, true);
        //console.log(data);
        setPaciente(data);
    }
    catch(e){
        setError(e);
    }
    setCargando(false);
  }

export { PacientePage }