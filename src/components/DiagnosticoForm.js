import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FetchData } from '../FetchData/FetchData';
import { PostData } from '../FetchData/PostData';
import { PutData } from '../FetchData/PutData';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//import NavigationPrompt from "react-router-navigation-prompt";
import { Tabs } from './Tabs';


function DiagnosticoForm({ hcnuming, modo, diagId }) {
    //console.log(modo)
    const [diagnostico, setDiagnostico] = useState(null);
    const [listaNivel1, setlistaNivel1] = useState(null);
    const [listaNivel2, setlistaNivel2] = useState(null);
    const [listaNivel3, setlistaNivel3] = useState(null);
    const [listaNivel4, setlistaNivel4] = useState(null);
    const [listaNivel5, setlistaNivel5] = useState(null);
    const [listaNivel6, setlistaNivel6] = useState(null);
    const [listaDiagPrinc, setlistaDiagPrinc] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        inicializarDiagnostico(modo, hcnuming, setDiagnostico, diagId,
            setlistaNivel1, setlistaNivel2, setlistaNivel3, setlistaNivel4, setlistaNivel5, setlistaNivel6
            );
        console.log('xxxxx', diagnostico);
        leerDiagPrinciapal(setlistaDiagPrinc);       
       
    }, [diagId, modo, hcnuming]);
    useEffect(() => {
        

    }, [diagId, diagnostico]);

    if (diagnostico) {
        if (diagnostico.diagCodigo) {
            if (diagnostico.diagCodigo.length >= 5) {
                var diagNivel1 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={diagnostico.diagCodigo.substring(0, 5)}
                        onChange={e => {
                            alert('paso');
                            const val =  e.target.value + '-01'
                            setDiagnostico({ ...diagnostico, ['diagCodigo']: val})
                            leerdiagnosticoNivel2( val, setlistaNivel2);
                        }
                        }>
                        {listaNivel1}

                    </Form.Select>
                </InputGroup>
            }


            if (diagnostico.diagCodigo.length >= 8) {
                var diagNivel2 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={diagnostico.diagCodigo.substring(0, 8)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setDiagnostico({ ...diagnostico, ['diagCodigo']: val})
                            leerdiagnosticoNivel3( val, setlistaNivel3);
                        }
                        }>
                        {listaNivel2}

                    </Form.Select>
                </InputGroup>
            }
            if (diagnostico.diagCodigo.length >= 11) {
                //console.log(diagnostico.diagCodigo.substring(0, 11));
                var diagNivel3 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={diagnostico.diagCodigo.substring(0, 11)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setDiagnostico({ ...diagnostico, ['diagCodigo']: val})
                            leerdiagnosticoNivel4( val, setlistaNivel4);

                        }
                        }>
                        {listaNivel3}

                    </Form.Select>
                </InputGroup>
            }
            if (diagnostico.diagCodigo.length >= 14) {
                //console.log(diagnostico.diagCodigo.substring(0, 14));
                var diagNivel4 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={diagnostico.diagCodigo.substring(0, 14)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setDiagnostico({ ...diagnostico, ['diagCodigo']: val})
                            leerdiagnosticoNivel5( val, setlistaNivel5);

                        }
                        }>
                        {listaNivel4}

                    </Form.Select>
                </InputGroup>
            }
            if (diagnostico.diagCodigo.length >= 17) {
                //console.log(diagnostico.diagCodigo.substring(0, 17));
                var diagNivel5 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={diagnostico.diagCodigo.substring(0, 17)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setDiagnostico({ ...diagnostico, ['diagCodigo']: val})
                            leerdiagnosticoNivel6( val, setlistaNivel6);

                        }
                        }>
                        {listaNivel5}

                    </Form.Select>
                </InputGroup>
            }
            if (diagnostico.diagCodigo.length >= 20) {
                //console.log(diagnostico.diagCodigo.substring(0, 20));
                var diagNivel6 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={diagnostico.diagCodigo.substring(0, 20)}
                        onChange={e => {
                            setDiagnostico({ ...diagnostico, ['diagCodigo']: e.target.value })
                        }
                        }>
                        {listaNivel6}

                    </Form.Select>
                </InputGroup>
            }
        }
        //console.log(diagnostico);
        return (

            <div className='text-left' >
                <h5>Diagn??stico</h5>
                <Form>
                    <div className='formCons'>
                        <Row className="m-2">
                            <Col md={8} className='mt-2'>
                                <Row>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Proceso</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={diagnostico.diagFecha}
                                                onChange={e =>
                                                    setDiagnostico({ ...diagnostico, ['diagFecha']: e.target.value })                                                    
                                                }
                                            />

                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <Form.Select aria-label="Default select example"
                                            value={diagnostico.diagPrincN}
                                            onChange={e => {
                                                setDiagnostico({ ...diagnostico, ['diagPrincN']: e.target.value })
                                            }
                                            }>
                                            {listaDiagPrinc}

                                        </Form.Select>
                                    </Col>

                                </Row>
                                {diagNivel1}
                                {diagNivel2}
                                {diagNivel3}
                                {diagNivel4}
                                {diagNivel5}
                                {diagNivel6}
                                <div className='text-left mb-2'>

                                    <Form.Label>Observaciones</Form.Label>
                                    <Form.Control as='textarea'
                                        style={{ height: '15rem' }}
                                        value={diagnostico.diagDatoM}
                                        onChange={e => {
                                            setDiagnostico({ ...diagnostico, ['diagDatoM']: e.target.value })
                                        }}
                                    ></Form.Control>
                                </div>
                            </Col>
                            <Col md={4} className='mt-2'>
                                {diagnostico.diagCodigo.substring(0, 5) === "01-15" ?
                                    <div>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Implante</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={diagnostico.diagFvcImplanteF}
                                                onChange={e =>
                                                    setDiagnostico({ ...diagnostico, ['diagFvcImplanteF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Extraccion</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={diagnostico.diagFvcExtraccionF}
                                                onChange={e =>
                                                    setDiagnostico({ ...diagnostico, ['diagFvcExtraccionF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Reposici??n</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={diagnostico.diagFvcReposicionF}
                                                onChange={e =>
                                                    setDiagnostico({ ...diagnostico, ['diagFvcReposicionF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Definitivo</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={diagnostico.diagFvcDefinitivoF}
                                                onChange={e =>
                                                    setDiagnostico({ ...diagnostico, ['diagFvcDefinitivoF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>
                                    </div>
                                    : null
                                }
                            </Col>
                        </Row>
                        <div className='text-left m-3'>

                            <Button
                                onClick={async () => {
                                    if (validar(diagnostico)) {
                                        const diagId = await guardarDiagnostico(modo, diagnostico);
                                        navigate('/diagnostico/details/' + diagId)
                                    }

                                }}
                            >Guardar</Button>
                        </div>
                    </div>
                </Form >
            </div >
        );
    }
}

function validar(diagnostico) {
    return true;
}

async function guardarDiagnostico(modo, diagnostico) {
    try {
        if (modo === "create") {
            delete diagnostico.diagId;            
            const nuevodiagnostico = await PostData('diagnostico/', diagnostico);
            alert(nuevodiagnostico);
            if (nuevodiagnostico) {
                return nuevodiagnostico.diagId;
            }
        }
        if (modo === "edit") {
            console.log(diagnostico);
            const res = await PutData('diagnostico/' + diagnostico.diagId, diagnostico);
            if (res) {
                return diagnostico.diagId;
            }
        }

    }
    catch (e) {
        alert(e);
    }
}

async function leerDiagPrinciapal(setlistaDiagPrinc) {
    const data = await FetchData('ListaDesplegable/DiagPrincipal');
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDesc}</option>
            )
        }, this);
    setlistaDiagPrinc(lista);
}
async function leerdiagnosticoNivel1(codigo, setlistaNivel1) {
    if (codigo.length >= 3)
        codigo = codigo.substring(0, 3);
    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
    setlistaNivel1(lista);

}

async function leerdiagnosticoNivel2(codigo, setlistaNivel2) {
    if (codigo.length >= 6)
        codigo = codigo.substring(0, 6);
    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    //console.log('lista nivel 2', data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
    setlistaNivel2(lista);

}

async function leerdiagnosticoNivel3(codigo, setlistaNivel3) {
    if (codigo.length >= 9)
        codigo = codigo.substring(0, 9);
    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
    setlistaNivel3(lista);

}
async function leerdiagnosticoNivel4(codigo, setlistaNivel4) {
    if (codigo.length >= 12)
        codigo = codigo.substring(0, 12);
    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
    setlistaNivel4(lista);
}

async function leerdiagnosticoNivel5(codigo, setlistaNivel5) {
    if (codigo.length >= 15)
        codigo = codigo.substring(0, 15);
    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
    setlistaNivel5(lista);
}
async function leerdiagnosticoNivel6(codigo, setlistaNivel6) {
    if (codigo.length >= 18)
        codigo = codigo.substring(0, 18);
    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
    setlistaNivel6(lista);
}



async function inicializarDiagnostico(modo, hcnuming, setDiagnostico, diagId,
    setlistaNivel1, setlistaNivel2, setlistaNivel3, setlistaNivel4,setlistaNivel5,setlistaNivel6) {

    var diagnostico;
    if (modo === "create") {
        diagnostico = {
            "diagCodigo": "01-01-",
            "hcnumIng": hcnuming
        }
        leerdiagnosticoNivel1(diagnostico.diagCodigo, setlistaNivel1);
    }
    console.log(modo);
    if (modo == 'detail' || modo == 'edit') {
        diagnostico = await FetchData("diagnostico/" + diagId);
        diagnostico.diagFecha = diagnostico.diagFecha ?
            diagnostico.diagFecha.substring(0, 10) : null;
        diagnostico.diagFvcExtraccionF = diagnostico.diagFvcExtraccionF ?
            diagnostico.diagFvcExtraccionF.substring(0, 10) : null;
        diagnostico.diagFvcImplanteF = diagnostico.diagFvcImplanteF ?
            diagnostico.diagFvcImplanteF.substring(0, 10) : null;
        diagnostico.diagFvcReposicionF = diagnostico.diagFvcReposicionF ?
            diagnostico.diagFvcReposicionF.substring(0, 10) : null;
        diagnostico.diagFvcDefinitivoF = diagnostico.diagFvcDefinitivoF ?
            diagnostico.diagFvcDefinitivoF.substring(0, 10) : null;
        console.log(diagnostico)
        if (diagnostico) {
            //alert(diagnostico.diagCodigo);
            if (diagnostico.diagCodigo) {
                leerdiagnosticoNivel1(diagnostico.diagCodigo, setlistaNivel1);
                leerdiagnosticoNivel2(diagnostico.diagCodigo, setlistaNivel2);
                leerdiagnosticoNivel3(diagnostico.diagCodigo, setlistaNivel3);
                leerdiagnosticoNivel4(diagnostico.diagCodigo, setlistaNivel4);
                leerdiagnosticoNivel5(diagnostico.diagCodigo, setlistaNivel5);
                leerdiagnosticoNivel6(diagnostico.diagCodigo, setlistaNivel6);
                
            }
        }
    }
    // if (modo == 'edit') {
    //     diagnostico = await FetchData("diagnostico/" + diagId);
    //     diagnostico.diagFecha = diagnostico.diagFecha ?
    //         diagnostico.diagFecha.substring(0, 10) : null;
    //     diagnostico.diagFvcExtraccionF = diagnostico.diagFvcExtraccionF ?
    //         diagnostico.diagFvcExtraccionF.substring(0, 10) : null;
    //     diagnostico.diagFvcImplanteF = diagnostico.diagFvcImplanteF ?
    //         diagnostico.diagFvcImplanteF.substring(0, 10) : null;
    //     diagnostico.diagFvcReposicionF = diagnostico.diagFvcReposicionF ?
    //         diagnostico.diagFvcReposicionF.substring(0, 10) : null;
    //     diagnostico.diagFvcDefinitivoF = diagnostico.diagFvcDefinitivoF ?
    //         diagnostico.diagFvcDefinitivoF.substring(0, 10) : null;
    // }

    setDiagnostico(diagnostico);

}

export { DiagnosticoForm }