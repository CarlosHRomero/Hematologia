import React from "react";
import { useState, useEffect, useContext  } from 'react';

import { Cabecera } from "./cabecera";
import { Pacientes } from "./Pacientes";
import { BuscarPaciente} from "./BuscarPaciente";
import {FetchData} from '../FetchData/FetchData';
import {PostData} from '../FetchData/PostData';
import { AppContext } from "../context/AppContext";

const ListadoPacientes = () => {
  const [listaPacientes, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [filtro, setFiltro]= useState({
    apeNom:'',
    hcnum:null,
    ultCons:null
  });
  useEffect(() => {
    //alert('hola');
    leerPacientes(setLista, setCargando);    
      },[]
  );
  function _filtrarPacientes(){    
    filtrarPacientes(setLista, setCargando, filtro)
  }
  const f=()=>alert('xxxxxxxxxxxs')
  return (
    <div>
      <Cabecera funcionBuscar={_filtrarPacientes} />
      <BuscarPaciente  filtro={filtro}  setFiltro={setFiltro}/>
      <Pacientes listaPacientes = {listaPacientes}/>
    </div>
  );
};

async function filtrarPacientes(setLista, setCargando, filtro) {
  
  var data;
  
  if(!filtro.apeNom && !filtro.hcnum && !filtro.ultCons){
    data = await FetchData("pacientes/ListadoPacientes");
  }
  else
  {
    filtro.ultCons=filtro.ultCons==''?null:filtro.ultCons
    filtro.hcnum=filtro.hcnum==''?null:filtro.hcnum
    console.log('filtro', filtro);

    data = await PostData("pacientes/FiltrarPacientes",filtro);
  }
  //console.log  (data);

  //const lista=data.map(x=> new Date(x.consConsultaF));

  setLista(data );
  setCargando(false);
}


async function leerPacientes(setLista, setCargando) {
  
  const data = await FetchData("pacientes/ListadoPacientes");

  //console.log  (data);

  //const lista=data.map(x=> new Date(x.consConsultaF));

  setLista(data );
  setCargando(false);
}

export { ListadoPacientes };