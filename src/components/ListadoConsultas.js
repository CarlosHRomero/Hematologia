
import React from "react";
import { useState, useEffect, useContext } from 'react';
import { leerConsultas } from "../FetchData/LeerDatos";
import { Link } from 'react-router-dom';

const ListadoConsultas = ({ hcNuming }) => {
    const [consultas, setConsultas] = useState([]);
    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        leerConsultas(hcNuming, setConsultas, setCargando);
    }, []
    );
    return <div className="text-left mt-2">
        <div className="text-left">
            <table className="table  table-striped table-sm table-bordered" aria-labelledby="tabelLabel">
                <colgroup>
                    <col style={{ width: "8%" }} />
                    <col style={{ width: "7%" }} />
                    <col style={{ width: "6%" }} />
                    <col style={{ width: "58%" }} />
                    <col style={{ width: "7%" }} />
                    <col style={{ width: "7%" }} />
                    <col style={{ width: "7%" }} />
                </colgroup>
                <thead>
                    <tr>
                        <th className="text-center">Fecha</th>
                        <th className="text-center">%</th>
                        <th className="text-center">INR</th>
                        <th >Tratamiento</th>
                        <th className="text-center">Comp</th>
                        <th className="text-center">Hep</th>
                        <th className="text-center">Ant</th>
                    </tr>
                </thead>
                <tbody>
                    {consultas.map((consulta) => (
                        <tr key={consulta.consId}>
                            <td>{(new Date(consulta.consConsultaF)).toLocaleDateString()}</td>
                            <td className="text-center">{consulta.consPorc}</td>
                            <td></td>
                            <td>
                            <Link to={'/consultas/'+consulta.consId}>
                                {consulta.consTratamiento}
                                </Link>
                            </td>
                            <td>{consulta.consComplic}</td>
                            <td>{consulta.consTratHeparina}</td>
                            <td>{consulta.consTratAntiag}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    </div>
}

export { ListadoConsultas }