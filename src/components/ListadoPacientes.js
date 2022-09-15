import React from "react";
import { useState, useEffect, useContext  } from 'react';

import { Cabecera } from "./cabecera";
import { Pacientes } from "./Pacientes";
import { BuscarPaciente} from "./BuscarPaciente";
import {FetchData} from '../FetchData/FetchData';
import { AppContext } from "../context/AppContext";

const ListadoPacientes = () => {
  const [listaPacientes, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    //alert('hola');
    leerPacientes(setLista, setCargando);    
      },[]
  );
  
  return (
    <div>
      <Cabecera />
      <BuscarPaciente />
      <Pacientes listaPacientes = {listaPacientes}/>
    </div>
  );
};

async function leerPacientes(setLista, setCargando) {

  const data = await FetchData("pacientes/ListadoPacientes");

  console.log  (data);

  //const lista=data.map(x=> new Date(x.consConsultaF));

  setLista(data );
  setCargando(false);
}

export { ListadoPacientes };