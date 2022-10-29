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


function ComplicacionesForm({ hcnuming, modo, compId }) {
    //console.log(modo)
    const [complicaciones, setComplicaciones] = useState(null);
    const [listaNivel1, setlistaNivel1] = useState(null);
    const [listaNivel2, setlistaNivel2] = useState(null);
    const [listaNivel3, setlistaNivel3] = useState(null);
    const [listaNivel4, setlistaNivel4] = useState(null);
    const [listaNivel5, setlistaNivel5] = useState(null);
    const [listaNivel6, setlistaNivel6] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        inicializarComplicaciones(modo, hcnuming, setComplicaciones, compId,
            setlistaNivel1, setlistaNivel2, setlistaNivel3, setlistaNivel4, setlistaNivel5, setlistaNivel6
            );
        console.log('xxxxx', complicaciones);
       
    }, [compId, modo, hcnuming]);
    useEffect(() => {
        

    }, [compId, complicaciones]);

    if (complicaciones) {
        if (complicaciones.diagCodigo) {
            if (complicaciones.diagCodigo.length >= 5) {
                var diagNivel1 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={complicaciones.diagCodigo.substring(0, 5)}
                        onChange={e => {
                            alert('paso');
                            const val =  e.target.value + '-01'
                            setComplicaciones({ ...complicaciones, ['diagCodigo']: val})
                            leercomplicacionesNivel2( val, setlistaNivel2);
                        }
                        }>
                        {listaNivel1}

                    </Form.Select>
                </InputGroup>
            }


            if (complicaciones.diagCodigo.length >= 8) {
                var diagNivel2 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={complicaciones.diagCodigo.substring(0, 8)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setComplicaciones({ ...complicaciones, ['diagCodigo']: val})
                            leercomplicacionesNivel3( val, setlistaNivel3);
                        }
                        }>
                        {listaNivel2}

                    </Form.Select>
                </InputGroup>
            }
            if (complicaciones.diagCodigo.length >= 11) {
                //console.log(complicaciones.diagCodigo.substring(0, 11));
                var diagNivel3 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={complicaciones.diagCodigo.substring(0, 11)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setComplicaciones({ ...complicaciones, ['diagCodigo']: val})
                            leercomplicacionesNivel4( val, setlistaNivel4);

                        }
                        }>
                        {listaNivel3}

                    </Form.Select>
                </InputGroup>
            }
            if (complicaciones.diagCodigo.length >= 14) {
                //console.log(complicaciones.diagCodigo.substring(0, 14));
                var diagNivel4 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={complicaciones.diagCodigo.substring(0, 14)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setComplicaciones({ ...complicaciones, ['diagCodigo']: val})
                            leercomplicacionesNivel5( val, setlistaNivel5);

                        }
                        }>
                        {listaNivel4}

                    </Form.Select>
                </InputGroup>
            }
            if (complicaciones.diagCodigo.length >= 17) {
                //console.log(complicaciones.diagCodigo.substring(0, 17));
                var diagNivel5 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={complicaciones.diagCodigo.substring(0, 17)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setComplicaciones({ ...complicaciones, ['diagCodigo']: val})
                            leercomplicacionesNivel6( val, setlistaNivel6);

                        }
                        }>
                        {listaNivel5}

                    </Form.Select>
                </InputGroup>
            }
            if (complicaciones.diagCodigo.length >= 20) {
                //console.log(complicaciones.diagCodigo.substring(0, 20));
                var diagNivel6 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={complicaciones.diagCodigo.substring(0, 20)}
                        onChange={e => {
                            setComplicaciones({ ...complicaciones, ['diagCodigo']: e.target.value })
                        }
                        }>
                        {listaNivel6}

                    </Form.Select>
                </InputGroup>
            }
        }
        //console.log(complicaciones);
        return (

            <div className='text-left' >
                <h5>Complicaciones</h5>
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
                                                value={complicaciones.diagFecha}
                                                onChange={e =>
                                                    setComplicaciones({ ...complicaciones, ['diagFecha']: e.target.value })                                                    
                                                }
                                            />

                                        </InputGroup>
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
                                        value={complicaciones.diagDatoM}
                                        onChange={e => {
                                            setComplicaciones({ ...complicaciones, ['diagDatoM']: e.target.value })
                                        }}
                                    ></Form.Control>
                                </div>
                            </Col>
                            <Col md={4} className='mt-2'>
                                {complicaciones.diagCodigo.substring(0, 5) === "01-15" ?
                                    <div>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Implante</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={complicaciones.diagFvcImplanteF}
                                                onChange={e =>
                                                    setComplicaciones({ ...complicaciones, ['diagFvcImplanteF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Extraccion</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={complicaciones.diagFvcExtraccionF}
                                                onChange={e =>
                                                    setComplicaciones({ ...complicaciones, ['diagFvcExtraccionF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Reposición</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={complicaciones.diagFvcReposicionF}
                                                onChange={e =>
                                                    setComplicaciones({ ...complicaciones, ['diagFvcReposicionF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Definitivo</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={complicaciones.diagFvcDefinitivoF}
                                                onChange={e =>
                                                    setComplicaciones({ ...complicaciones, ['diagFvcDefinitivoF']: e.target.value })
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
                                    if (validar(complicaciones)) {
                                        const compId = await guardarComplicaciones(modo, complicaciones);
                                        navigate('/complicaciones/details/' + compId)
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

function validar(complicaciones) {
    return true;
}

async function guardarComplicaciones(modo, complicaciones) {
    try {
        if (modo === "create") {
            delete complicaciones.compId;            
            const nuevocomplicaciones = await PostData('complicaciones/', complicaciones);
            alert(nuevocomplicaciones);
            if (nuevocomplicaciones) {
                return nuevocomplicaciones.compId;
            }
        }
        if (modo === "edit") {
            console.log(complicaciones);
            const res = await PutData('complicaciones/' + complicaciones.compId, complicaciones);
            if (res) {
                return complicaciones.compId;
            }
        }

    }
    catch (e) {
        alert(e);
    }
}

async function leercomplicacionesNivel1(codigo, setlistaNivel1) {
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

async function leercomplicacionesNivel2(codigo, setlistaNivel2) {
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

async function leercomplicacionesNivel3(codigo, setlistaNivel3) {
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
async function leercomplicacionesNivel4(codigo, setlistaNivel4) {
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

async function leercomplicacionesNivel5(codigo, setlistaNivel5) {
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
async function leercomplicacionesNivel6(codigo, setlistaNivel6) {
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



async function inicializarComplicaciones(modo, hcnuming, setComplicaciones, compId,
    setlistaNivel1, setlistaNivel2, setlistaNivel3, setlistaNivel4,setlistaNivel5,setlistaNivel6) {

    var complicaciones;
    if (modo === "create") {
        complicaciones = {
            "diagCodigo": "01-01-",
            "hcnumIng": hcnuming
        }
        leercomplicacionesNivel1(complicaciones.diagCodigo, setlistaNivel1);
    }
    console.log(modo);
    if (modo == 'detail' || modo == 'edit') {
        complicaciones = await FetchData("complicaciones/" + compId);
        complicaciones.diagFecha = complicaciones.diagFecha ?
            complicaciones.diagFecha.substring(0, 10) : null;
        complicaciones.diagFvcExtraccionF = complicaciones.diagFvcExtraccionF ?
            complicaciones.diagFvcExtraccionF.substring(0, 10) : null;
        complicaciones.diagFvcImplanteF = complicaciones.diagFvcImplanteF ?
            complicaciones.diagFvcImplanteF.substring(0, 10) : null;
        complicaciones.diagFvcReposicionF = complicaciones.diagFvcReposicionF ?
            complicaciones.diagFvcReposicionF.substring(0, 10) : null;
        complicaciones.diagFvcDefinitivoF = complicaciones.diagFvcDefinitivoF ?
            complicaciones.diagFvcDefinitivoF.substring(0, 10) : null;
        console.log(complicaciones)
        if (complicaciones) {
            //alert(complicaciones.diagCodigo);
            if (complicaciones.diagCodigo) {
                leercomplicacionesNivel1(complicaciones.diagCodigo, setlistaNivel1);
                leercomplicacionesNivel2(complicaciones.diagCodigo, setlistaNivel2);
                leercomplicacionesNivel3(complicaciones.diagCodigo, setlistaNivel3);
                leercomplicacionesNivel4(complicaciones.diagCodigo, setlistaNivel4);
                leercomplicacionesNivel5(complicaciones.diagCodigo, setlistaNivel5);
                leercomplicacionesNivel6(complicaciones.diagCodigo, setlistaNivel6);
                
            }
        }
    }
     setComplicaciones(complicaciones);
}

export { ComplicacionesForm }