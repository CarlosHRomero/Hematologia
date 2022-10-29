import React from "react";
import { useState, useEffect, useContext } from 'react';

import { Cabecera } from "./cabecera";
import { Pacientes } from "./Pacientes";
import { BuscarPaciente } from "./BuscarPaciente";
import { FetchData } from '../FetchData/FetchData';
import { PostData } from '../FetchData/PostData';
import { AppContext } from "../context/AppContext";
import { RotatingLines } from 'react-loader-spinner'
import {Error} from './Error';
//import "../react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ListadoPacientes = () => {
  const [listaPacientes, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);
  const [filtro, setFiltro] = useState({
    apeNom: '',
    hcnum: null,
    ultCons: null,
    fechaNac: null,
    docIdentidad: null
  });
  useEffect(() => {
    //alert('hola');
    leerPacientes(setLista, setCargando, setError);
  }, []
  );
  function _filtrarPacientes() {
    filtrarPacientes(setLista, setCargando, filtro)
  }
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
  else
    return (
      <div>
        <Cabecera funcionBuscar={_filtrarPacientes} />
        <BuscarPaciente filtro={filtro} setFiltro={setFiltro} />
        <Pacientes listaPacientes={listaPacientes} />
      </div>
    );
};

async function filtrarPacientes(setLista, setCargando, filtro) {
  setCargando(true);
  var data;
  const flag = !filtro.apeNom && !filtro.hcnum && !filtro.ultCons && !filtro.docIdentidad && !filtro.fechaNac;
  console.log(!filtro.hcnum);
  console.log(flag);
  if (flag) {
    data = await FetchData("pacientes/ListadoPacientes");
  }
  else {
    filtro.ultCons = filtro.ultCons == '' ? null : filtro.ultCons
    filtro.hcnum = filtro.hcnum == '' ? null : filtro.hcnum
    filtro.docIdentidad = filtro.docIdentidad == '' ? null : filtro.docIdentidad
    filtro.fechaNac = filtro.fechaNac == '' ? null : filtro.fechaNac
    console.log('filtro', filtro);

    data = await PostData("pacientes/FiltrarPacientes", filtro);
  }
  

  //const lista=data.map(x=> new Date(x.consConsultaF));

  setLista(data);
  setCargando(false);
}


async function leerPacientes(setLista, setCargando, setError) {
  setCargando(true);
  try{
    const data = await FetchData("pacientes/ListadoPacientes", true);
    setLista(data);
  }
  catch(e){
    console.log(e);
    setError(e);
  }
    
  setCargando(false);
}

export { ListadoPacientes };