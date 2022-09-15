import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FetchData } from '../FetchData/FetchData';

function ConsultaForm() {
    const [listaDroga, setlistaDroga] = useState();
    const [listaModalidadMed, setlistaModalidadMed] = useState();
    
    useEffect(() => {
        leerListaDroga(setlistaDroga)
        leerModalidadMed(setlistaModalidadMed)
    }, []
    );
    if (listaDroga && listaModalidadMed) {
        var drogaList = listaDroga.length > 0
            && listaDroga.map((item, i) => {
                return (
                    <option key={i} value={item.datoDato}>{item.datoDesc}</option>
                )
            }, this);
        var modalidadMedList = listaModalidadMed.length > 0
            && listaModalidadMed.map((item, i) => {
                return (
                    <option key={i} value={item.datoDato}>{item.datoDesc}</option>
                )
            }, this);
        return (

            <Form>
                <Row className="mt-2">
                    <Col md={4}>

                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="inputGroup-sizing-sm">Fecha consulta</InputGroup.Text>
                            <Form.Control
                                type="Date"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Hasta</InputGroup.Text>
                            <Form.Control
                                type="Date"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">%</InputGroup.Text>
                            <Form.Control
                                type="number"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">INR</InputGroup.Text>
                            <Form.Control
                                type="number"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">KPTT</InputGroup.Text>
                            <Form.Control
                                type="number"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Droga</InputGroup.Text>
                            <Form.Select aria-label="Default select example">
                                {drogaList}
                            </Form.Select>
                        </InputGroup>
                    </Col>
                    <Col md={8} mt-2>
                        <Row>
                            <Col>
                                <InputGroup className="mt-2">
                                    <Form.Check
                                        type='checkbox'
                                        id={`default-checkbox`}
                                        label='Enviar e-mail'
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm">Modalidad de Medición</InputGroup.Text>
                                    <Form.Select aria-label="Default select example">
                                        {modalidadMedList}
                                    </Form.Select>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className='text-left align-items-center'>
                            <Col md={6}>
                                <span className='label'>Estudios, Prácticas y Procedimientos</span>
                            </Col>
                            <Col>
                            <Form.Control
                                type="Date"
                            />
                            </Col>
                            <Col>
                            <Form.Select aria-label="Default select example">
                                {drogaList}
                            </Form.Select>
                            </Col>
                        </Row>
                        <Row className='mt-3 '>
                            <Col className='m-1'>
                            <Form.Control as='textarea'
                            style={{height: '10rem'}}
                             >
                            </Form.Control>

                            </Col>
                        </Row>
                    </Col>


                </Row>
            </Form>
        )
    }
}

async function leerListaDroga(setlistaDroga) {
    const data = await FetchData('ListaDesplegable/ConsultaDroga');

    console.log(data);
    setlistaDroga(data);

}

async function leerModalidadMed(setlistaModalidadMed) {
    const data = await FetchData('ListaDesplegable/modalidadMed');
    console.log(data);
    setlistaModalidadMed(data);

}

export { ConsultaForm }