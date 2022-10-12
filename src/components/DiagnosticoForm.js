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
    const navigate = useNavigate();
    useEffect(() => {
        inicializarDiagnostico(modo, hcnuming, setDiagnostico, diagId);

    }, []);
    useEffect(() => {
        console.log('xxxxx', diagnostico);
        if (diagnostico)
            if (diagnostico.diagCodigo) {
                leerdiagnosticoNivel1(diagnostico.diagCodigo, setlistaNivel1);
                leerdiagnosticoNivel2(diagnostico.diagCodigo, setlistaNivel2);
                leerdiagnosticoNivel3(diagnostico.diagCodigo, setlistaNivel3);
                leerdiagnosticoNivel4(diagnostico.diagCodigo, setlistaNivel4);
                leerdiagnosticoNivel5(diagnostico.diagCodigo, setlistaNivel5);
                leerdiagnosticoNivel6(diagnostico.diagCodigo, setlistaNivel6);
            }
    }, [diagnostico]);

    if (diagnostico) {
        console.log(diagnostico.diagCodigo.substring(0, 5));
        if (diagnostico.diagCodigo.length >= 5) {
            var diagNivel1 = <InputGroup className="mb-3">
                <Form.Select aria-label="Default select example"
                    value={diagnostico.diagCodigo.substring(0, 5)}
                    onChange={e => {
                        console.log('hola');
                    }
                    }>
                    {listaNivel1}

                </Form.Select>
            </InputGroup>
        }
        if (diagnostico.diagCodigo.length >= 8) {
            console.log(diagnostico.diagCodigo.substring(0, 8));
            var diagNivel2 = <InputGroup className="mb-3">
                <Form.Select aria-label="Default select example"
                    value={diagnostico.diagCodigo.substring(0, 8)}
                    onChange={e => {
                        console.log('hola');
                    }
                    }>
                    {listaNivel2}

                </Form.Select>
            </InputGroup>
        }
        if (diagnostico.diagCodigo.length >= 11) {
            console.log(diagnostico.diagCodigo.substring(0, 11));
            var diagNivel3 = <InputGroup className="mb-3">
                <Form.Select aria-label="Default select example"
                    value={diagnostico.diagCodigo.substring(0, 11)}
                    onChange={e => {
                        console.log('hola');
                    }
                    }>
                    {listaNivel3}

                </Form.Select>
            </InputGroup>
        }
        if (diagnostico.diagCodigo.length >= 14) {
            console.log(diagnostico.diagCodigo.substring(0, 14));
            var diagNivel4 = <InputGroup className="mb-3">
                <Form.Select aria-label="Default select example"
                    value={diagnostico.diagCodigo.substring(0, 14)}
                    onChange={e => {
                        console.log('hola');
                    }
                    }>
                    {listaNivel4}

                </Form.Select>
            </InputGroup>
        }
        if (diagnostico.diagCodigo.length >= 17) {
            console.log(diagnostico.diagCodigo.substring(0, 17));
            var diagNivel5 = <InputGroup className="mb-3">
                <Form.Select aria-label="Default select example"
                    value={diagnostico.diagCodigo.substring(0, 17)}
                    onChange={e => {
                        console.log('hola');
                    }
                    }>
                    {listaNivel5}

                </Form.Select>
            </InputGroup>
        }
        if (diagnostico.diagCodigo.length >= 20) {
            console.log(diagnostico.diagCodigo.substring(0, 20));
            var diagNivel6 = <InputGroup className="mb-3">
                <Form.Select aria-label="Default select example"
                    value={diagnostico.diagCodigo.substring(0, 20)}
                    onChange={e => {
                        console.log('hola');
                    }
                    }>
                    {listaNivel6}

                </Form.Select>
            </InputGroup>
        }

        return (

            <div>
                <Form>
                    <div className='formCons'>
                        <Row className="m-2">
                            <Col md={8} className='mt-2'>
                                {diagNivel1}
                                {diagNivel2}
                                {diagNivel3}
                                {diagNivel4}
                                {diagNivel5}
                                {diagNivel6}
                            </Col>
                            <Col md={4} className='mt-2'>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div >
        );
    }
}

async function leerdiagnosticoNivel1(codigo, setlistaNivel1) {
    if (codigo.length >= 3)
        codigo = codigo.substring(0, 3);
    console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    console.log(data);
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
    console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    console.log('lista nivel 2',data);
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
    console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    console.log(data);
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
    console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    console.log(data);
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
    console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    console.log(data);
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
    console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/' + codigo);
    console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
        setlistaNivel6(lista);
}



async function inicializarDiagnostico(modo, hcnuming, setDiagnostico, diagId) {
    console.log(diagId)
    var diagnostico;
    if (modo == "create") {

    }
    console.log(modo);
    if (modo == 'detail') {
        diagnostico = await FetchData("diagnostico/" + diagId);
        console.log(diagnostico)
        /*        consulta.consDiagnosticoF = (consulta.consDiagnosticoF ? consulta.consDiagnosticoF.substring(0, 10) : null);
                consulta.consHastaF = (consulta.consHastaF ? consulta.consHastaF.substring(0, 10) : null);
                consulta.ConsEstF = (consulta.ConsEstF ? consulta.ConsEstF.substring(0, 10) : null);*/
    }
    if (modo == 'edit') {
    }

    setDiagnostico(diagnostico);

}

export { DiagnosticoForm }