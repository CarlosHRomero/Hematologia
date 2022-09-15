import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/site.css'

const Pacientes = ({ listaPacientes }) => {

  /*console.log(listaPacientes);
  console.log(typeof (listaPacientes));*/

  /*
  listaPacientes.map((paciente) => (
    paciente.
  ));*/
  if (listaPacientes.length > 0) {
    return (
      <div className="text-left">
        <table className="table  table-striped table-sm table-bordered" aria-labelledby="tabelLabel">
        <colgroup>
            <col style={{width:"10%"}} />
            <col style={{width:"35%"}} />
            <col style={{width:"15%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"15%"}} />
            <col style={{width:"15%"}} />
          </colgroup>
          <thead>
            <tr>
              <th className="text-center">H.C.</th>
              <th>Apellido y Nombre</th>
              <th className="text-center">Ultima Consulta</th>
              <th className="text-center">Sexo</th>
              <th className="text-center">Fecha de Nac.</th>
              <th className="text-center">Num. Doc. Identidad</th>
            </tr>
          </thead>
          <tbody>
            {listaPacientes.map((paciente) => (
              <tr key={paciente.hcnumIng}>
                <td> {paciente.hcnumero} </td>
                <td className="text-left">{paciente.hcapeSol + ', ' + paciente.hcnombre}</td>
                <td className="text-center">
                  <Link to={'/paciente/'+paciente.hcnumIng}>
                    {(new Date(paciente.consConsultaF)).toLocaleDateString()}
                  </Link>
                </td>
                <td className="text-center">{paciente.hcsexo}</td>
                <td className="text-center">{(new Date(paciente.hcfechaNacim)).toLocaleDateString()}</td>
                <td className="text-center">{paciente.hcnumDocumento}</td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    );
  }
};



export { Pacientes }