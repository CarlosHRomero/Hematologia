import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';
import { Form, Row, Col, FormGroup } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FetchData } from '../FetchData/FetchData';
import { PostData } from '../FetchData/PostData';
import { PutData } from '../FetchData/PutData';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//import NavigationPrompt from "react-router-navigation-prompt";
import { Tabs } from './Tabs';

function TratamientoForm({ hcnuming, modo, tratId }) {
    console.log(tratId);
    const navigate = useNavigate();
    const [tratamiento, setTratamiento] = useState(null);
    const [listaTipoTratamiento, setlistaTipoTratamiento] = useState(null);
    const [listaTipoRotacion, setlistaTipoRotacion] = useState(null);
    const [listaNosi, setlistaNosi] = useState(null);
    const [listaTipoHeparina, setlistaTipoHeparina] = useState(null);
    const [listaHoras, setlistaHoras] = useState(null);
    const [listaHBPM, setlistaHBPM] = useState(null);

    useEffect(() => {
        inicializarTratamiento(modo, hcnuming, setTratamiento, tratId);
        leerListaTipoTratamiento(setlistaTipoTratamiento)
        leerListaNosi(setlistaNosi);
        leerListaTipoRotacion(setlistaTipoRotacion);
        leerListaTipoHeparina(setlistaTipoHeparina);
        leerListaHoras(setlistaHoras);
        leerlistaHBPM(setlistaHBPM);
    }, [tratId, modo, hcnuming]);
    if (tratamiento && listaTipoTratamiento && listaNosi && listaTipoRotacion) {
        console.log(listaTipoTratamiento)
        return (
            <div>
                <Form>
                    <Tabs>
                        <div label='Tratamiento Base' >
                            <div className='formCons'>
                                <div >
                                    <Row >
                                        <Col md={6} className='m-3'>
                                            <Row >
                                                <Col>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="inputGroup-sizing-sm">Fecha Inicio</InputGroup.Text>
                                                        <Form.Control
                                                            type="Date"
                                                            value={tratamiento.tratFd}
                                                            onChange={e =>
                                                                setTratamiento({ ...tratamiento, ['tratFd']: e.target.value })
                                                            }
                                                        />

                                                    </InputGroup>

                                                </Col>
                                                <Col>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="inputGroup-sizing-sm">Fecha Hasta</InputGroup.Text>
                                                        <Form.Control
                                                            type="Date"
                                                            value={tratamiento.tratFh}
                                                            onChange={e =>
                                                                setTratamiento({ ...tratamiento, ['tratFh']: e.target.value })
                                                            }
                                                        />

                                                    </InputGroup>
                                                </Col>
                                            </Row>

                                            <InputGroup className="mb-3">
                                                <InputGroup.Text
                                                    id="inputGroup-sizing-sm">Tipo Tratamiento:</InputGroup.Text>
                                                <Form.Select aria-label="Default select example"
                                                    value={tratamiento.tratTipo}
                                                    onChange={e => {
                                                        const val = e.target.value
                                                        setTratamiento({ ...tratamiento, ['tratTipo']: val })
                                                    }
                                                    }>
                                                    {listaTipoTratamiento}

                                                </Form.Select>
                                            </InputGroup>
                                            {
                                                tratamiento.tratTipo == 3 ?
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text
                                                            id="inputGroup-sizing-sm">Tipo Rotación:</InputGroup.Text>
                                                        <Form.Select aria-label="Default select example"
                                                            value={tratamiento.tratTipo}
                                                            onChange={e => {
                                                                const val = e.target.value
                                                                setTratamiento({ ...tratamiento, ['tratTipo']: val })
                                                            }
                                                            }>
                                                            {listaTipoRotacion}

                                                        </Form.Select>
                                                    </InputGroup>
                                                    : null
                                            }
                                        </Col>
                                        <Col md={{ span: 4, offset: 1 }}>
                                            <div className='m-3'>
                                                <h6>Anticoagulantes</h6>
                                                <Row>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text
                                                            id="inputGroup-sizing-sm">Heparina</InputGroup.Text>
                                                        <Form.Select aria-label="Default select example"
                                                            value={tratamiento.tratHeparina}
                                                            onChange={e => {
                                                                const val = e.target.value
                                                                setTratamiento({ ...tratamiento, ['tratHeparina']: val })
                                                            }
                                                            }>
                                                            {listaNosi}
                                                        </Form.Select>
                                                    </InputGroup>

                                                </Row>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text
                                                        id="inputGroup-sizing-sm">Antiagregantes:</InputGroup.Text>
                                                    <Form.Select aria-label="Default select example"
                                                        value={tratamiento.tratAntiag}
                                                        onChange={e => {
                                                            const val = e.target.value
                                                            setTratamiento({ ...tratamiento, ['tratAntiag']: val })
                                                        }
                                                        }>
                                                        {listaNosi}

                                                    </Form.Select>
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text
                                                        id="inputGroup-sizing-sm">Tromboliticos</InputGroup.Text>
                                                    <Form.Select aria-label="Default select example"
                                                        value={tratamiento.tratTrombol}
                                                        onChange={e => {
                                                            const val = e.target.value
                                                            setTratamiento({ ...tratamiento, ['tratTrombol']: val })
                                                        }
                                                        }>
                                                        {listaNosi}

                                                    </Form.Select>
                                                </InputGroup>
                                                <InputGroup>
                                                    <InputGroup.Text
                                                        id="inputGroup-sizing-sm">Antitrombinicos:</InputGroup.Text>
                                                    <Form.Select aria-label="Default select example"
                                                        value={tratamiento.tratAntitrom}
                                                        onChange={e => {
                                                            const val = e.target.value
                                                            setTratamiento({ ...tratamiento, ['tratAntitrom']: val })
                                                        }
                                                        }>
                                                        {listaNosi}

                                                    </Form.Select>
                                                </InputGroup>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div label='Heparina'>
                            <div className='formCons'>


                                <Row  >
                                    <Col md={4} className='m-3'>
                                        <InputGroup>
                                            <InputGroup.Text
                                                id="inputGroup-sizing-sm">Tipo:</InputGroup.Text>
                                            <Form.Select aria-label="Default select example"
                                                value={tratamiento.tratHeparinaTipo}
                                                onChange={e => {
                                                    const val = e.target.value
                                                    setTratamiento({ ...tratamiento, ['tratHeparinaTipo']: val })
                                                }
                                                }>
                                                {listaTipoHeparina}

                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col className='m-3'>
                                        <Row>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text
                                                        id="inputGroup-sizing-sm">Droga:</InputGroup.Text>
                                                    <Form.Select aria-label="Default select example"
                                                        value={tratamiento.tratHepHbpm}
                                                        onChange={e => {
                                                            const val = e.target.value
                                                            setTratamiento({ ...tratamiento, ['tratHepHbpm']: val })
                                                        }
                                                        }>
                                                        {listaHBPM}

                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text
                                                        id="inputGroup-sizing-sm"> Dosis / Hs:</InputGroup.Text>
                                                    <Form.Control
                                                        type="number"
                                                        value={tratamiento.tratHepDosis}
                                                        onChange={e => {
                                                            setTratamiento({ ...tratamiento, ['tratHepDosis']: e.target.value * 1 })
                                                        }}
                                                    />
                                                    <InputGroup.Text>unid.</InputGroup.Text>
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text
                                                        id="inputGroup-sizing-sm">cada:</InputGroup.Text>
                                                    <Form.Select aria-label="Default select example"
                                                        value={tratamiento.tratHepTiempo}
                                                        onChange={e => {
                                                            const val = e.target.value
                                                            setTratamiento({ ...tratamiento, ['tratHepTiempo']: val })
                                                        }
                                                        }>
                                                        {listaHoras}

                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                    </Tabs >
                    <div className='text-left m-3'>

                        <Button
                            onClick={async () => {
                                if (validar(tratamiento)) {
                                    const tratId = await guardarTratamiento(modo, tratamiento);
                                    navigate('/tratamiento/details/' + tratId)
                                }

                            }}
                        >Guardar</Button>
                    </div>
                </Form >
            </div >
        );
    }
}
function validar(complicaciones) {
    return true;
}
async function guardarTratamiento(modo, tratamiento, opciones) {
    try {
        if (modo === "create") {
            delete tratamiento.tratId;
            const nuevotratamiento = await PostData('tratamiento/', tratamiento);
            alert(nuevotratamiento);
            if (nuevotratamiento) {
                return nuevotratamiento.tratId;
            }
        }
        if (modo === "edit") {
            console.log(tratamiento);
            const res = await PutData('tratamiento/' + tratamiento.tratId, tratamiento);
            if (res) {
                return tratamiento.tratId;
            }
        }

    }
    catch (e) {
        alert(e);
    }
}

async function inicializarTratamiento(modo, hcnuming, setTratamiento, tratId) {

    var tratamiento;
    if (modo === "create") {
        const today = new Date(Date.now());
        tratamiento = {
            "tratFd": today.toISOString().substring(0, 10),
            "diagCodigo": "01-01-",
            "hcnumIng": hcnuming
        }
    }
    console.log(tratId);
    if (modo === 'detail' || modo === 'edit') {
        tratamiento = await FetchData("tratamiento/" + tratId);
        console.log(tratamiento);
        tratamiento.tratFd = tratamiento.tratFd ?
            tratamiento.tratFd.substring(0, 10) : null;

    }
    setTratamiento(tratamiento)
}

async function leerListaTipoTratamiento(setlistaTipoTratamiento) {
    const data = await FetchData('ListaDesplegable/TipoTratamiento');
    console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDescR}</option>
            )
        }, this);
    setlistaTipoTratamiento(lista);
}

async function leerListaNosi(setlistaNosi) {
    const data = await FetchData('ListaDesplegable/Nosi');
    console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDescR}</option>
            )
        }, this);
    setlistaNosi(lista);
}
async function leerListaTipoRotacion(setlistaTipoRotacion) {
    const data = await FetchData('ListaDesplegable/TipoRotacion');
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDescR}</option>
            )
        }, this);
    setlistaTipoRotacion(lista);
}

async function leerListaTipoHeparina(setlistaTipoHeparina) {
    const data = await FetchData('ListaDesplegable/TipoHeparina');
    console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDescR}</option>
            )
        }, this);
    setlistaTipoHeparina(lista);
}
async function leerListaHoras(setlistaHoras) {
    const data = await FetchData('ListaDesplegable/listaHoras');
    console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDescR}</option>
            )
        }, this);
    setlistaHoras(lista);
}
async function leerlistaHBPM(setlistaHBPM) {
    const data = await FetchData('ListaDesplegable/listaHBPM');
    console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDescR}</option>
            )
        }, this);
    setlistaHBPM(lista);
}


export { TratamientoForm }