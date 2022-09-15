import React, { Component } from 'react';
import { DatosPaciente } from './DatosPaciente';
import { useState, useEffect, useContext } from 'react';
import { FetchData } from '../FetchData/FetchData';
import { useParams } from "react-router-dom";
import {ConsultaForm} from './ConsultaForm'

function ConsultaCreate() {
    const params = useParams();
    const [paciente, setPaciente] = useState();
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        //alert('hola');
        leerPaciente(params.hcnumIng, setPaciente, setCargando);
    }, []
    );
    if (paciente) {
        return (
            <div>
                <DatosPaciente paciente={paciente}></DatosPaciente>
                <ConsultaForm></ConsultaForm>
            </div>
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

export { ConsultaCreate }