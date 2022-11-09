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

function FacriesgoForm({ hcnuming, modo, facId }) {
    const [facRiesgo, setFacRiesgo] = useState(null);
    const [opciones, setOpciones] = useState({
        'Arteriot': false,
        'Embolia': false,
        'Hipert': false,
        'InsufCar': false,
        'TamAi': false,
        'MIPReumat': false,        
        'Infarto': false,
        'Tiroidea':false,
        'Hormonal':false,
        'Idiopatico':false,
        'Venosa':false,
        'Reposo':false,
        'ACV':false,
        'Familiar':false,
        'Coagul':false,
        'Plaquetomia':false,
        'Acido':false,
        'Alcoholismo':false,
        'Renal':false,
        'TVP':false,
        'CardIsquem':false,
        'Obesidad':false,
        'Hemorr':false,
        });
    const [listaFacRiesgo, setlistaFacRiesgo] = useState(null);
    const [listaNivel2, setlistaNivel2] = useState(null);
    const [listaDiabetes, setlistaDiabetes] = useState(null);
    const [listaPostOpe, setlistaPostOpe] = useState(null);
    const [listaTrombofilia, setlistaTrombofilia] = useState(null);
    useEffect(() => {
        inicializarFacRiesgo(modo, hcnuming, setFacRiesgo, facId, setlistaFacRiesgo, setlistaNivel2);
        leerListaDiabetes(setlistaDiabetes);
        leerListaPostOpe(setlistaPostOpe);
        leerListaTrombofilia(setlistaTrombofilia);

    }, [facId, modo, hcnuming]);

    const navigate = useNavigate();

    if (facRiesgo) {
        if (facRiesgo.diagCodigo) {
            if (facRiesgo.diagCodigo.length >= 5) {
                var diagNivel1 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={facRiesgo.diagCodigo.substring(0, 5)}
                        onChange={e => {
                            alert('paso');
                            const val = e.target.value + '-01'
                            setFacRiesgo({ ...facRiesgo, ['diagCodigo']: val })
                            leerFactRiesgoNivel2( val, setlistaNivel2);
                        }
                        }>
                        {listaFacRiesgo}

                    </Form.Select>
                </InputGroup>
            }
            if (facRiesgo.diagCodigo.length >= 8) {
                var diagNivel2 = <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example"
                        value={facRiesgo.diagCodigo.substring(0, 8)}
                        onChange={e => {
                            const val =  e.target.value + '-01'
                            setFacRiesgo({ ...facRiesgo, ['diagCodigo']: val})
                        }
                        }>
                        {listaNivel2}

                    </Form.Select>
                </InputGroup>
            }

        }
    }
    if (facRiesgo) {
        return (

            <div className='text-left' >
                <h5>Factores de Riesgo</h5>
                <Form>
                    <div className='formCons'>
                        <Row className="m-2">
                            <Col md={7} className='mt-2'>
                                <Row>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Proceso</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={facRiesgo.diagFecha}
                                                onChange={e =>
                                                    setFacRiesgo({ ...facRiesgo, ['diagFecha']: e.target.value })
                                                }
                                            />

                                        </InputGroup>
                                    </Col>
                                    <Col>
                                    </Col>

                                </Row>
                                {diagNivel1}
                                {diagNivel2}

                                <div className='text-left mb-2'>

                                    <Form.Label>Observaciones</Form.Label>
                                    <Form.Control as='textarea'
                                        style={{ height: '15rem' }}
                                        value={facRiesgo.diagDatoM}
                                        onChange={e => {
                                            setFacRiesgo({ ...facRiesgo, ['diagDatoM']: e.target.value })
                                        }}
                                    ></Form.Control>
                                </div>
                            </Col>
                            <Col md={5} className='mt-2'>
                                <Row>
                                    <Col>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Arteriot. Perif.'
                                                checked={opciones.Arteriot}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Arteriot']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label=' Embolia Prev.'
                                                checked={opciones.Embolia}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Embolia']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Hipert. Arterial'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Hipert']: e.target.checked })

                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label=' Insuf.Cardiaca'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['InsufCar']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label=' Tamaño del AI'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['TamAi']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Est. MI Reumat.'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['MIPReumat']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Infarto Prev.'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Infarto']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Enf. Tiroidea'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Tiroidea']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Trat. Hormonal'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Hormonal']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Cancer'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Cancer']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check                                                type='checkbox'
                                                label='Idiopatico'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Idiopatico']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Insuf. Venosa'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Venosa']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>

                                    </Col>
                                    <Col>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Reposo'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Reposo']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='ACV (Reposo)'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['ACV']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Ant. Familiar'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Familiar']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Coagul. Prev.'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Coagul']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Plaquetomia'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Plaquetomia']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Sindrome Acido'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Acido']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Alcoholismo'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Alcoholismo']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Insuf. Renal'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Renal']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='TVP - TEP Prev.'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['TVP']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Card. Isquem.'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['CardIsquem']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Obesidad'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Obesidad']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>
                                        <InputGroup className="mt-2">
                                            <Form.Check
                                                type='checkbox'
                                                label='Hemorr. Previa'
                                                checked={opciones.consEnvMail}
                                                onChange={e => {
                                                    setOpciones({ ...opciones, ['Hemorr']: e.target.checked })
                                                }}

                                            />
                                        </InputGroup>


                                    </Col>
                                </Row>
                                <Form.Group>
                                    <Form.Label>Diabetes</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                        value={opciones.Diabetes}
                                        onChange={e => {
                                            const val = e.target.value 
                                            setOpciones({ ...opciones, ['Diabetes']: val })
                                        }
                                        }>
                                        {listaDiabetes}

                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Post Operat.</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                        value={opciones.PostOperat}
                                        onChange={e => {
                                            const val = e.target.value
                                            setOpciones({ ...opciones, ['PostOperat']: val })
                                        }
                                        }>
                                        {listaPostOpe}

                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Trombofilia</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                        value={opciones.Trombofilia}
                                        onChange={e => {
                                            const val = e.target.value 
                                            setOpciones({ ...opciones, ['Trombofilia']: val })
                                        }
                                        }>
                                        {listaTrombofilia}

                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className='text-left m-3'>

                            <Button
                                onClick={async () => {
                                    if (validar(facRiesgo)) {
                                        const facId = await guardarFacRiesgo(modo, facRiesgo, opciones);
                                        navigate('/facRiesgo/details/' + facId)
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

function validar(facRiesgo) {
    return true;
}
const codigos={
    'Arteriot': '02-29',
    'Embolia': '02-02',
    'Hipert': '02-03',
    'InsufCar': '02-05',
    'TamAi': '02-06',
    'MIPReumat': '02-07',
    'Infarto': '02-08',
    'Tiroidea':'02-09',
    'Hormonal':'02-10',
    'Cancer':'02-11',
    'Idiopatico':'02-12',
    'Venosa':'02-28',
    'Reposo':'02-13',
    'ACV':'02-15',
    'Familiar':'02-18',
    'Coagul':'02-19',
    'Plaquetomia':'02-20',
    'Acido':'02-21',
    'Alcoholismo':'02-22',
    'Renal':'02-23',
    'TVP':'02-25',
    'CardIsquem':'02-26',
    'Obesidad':'02-27',
    'Hemorr':'02-30',
    'Diabetes':'02-04-01'
}
    

async function guardarFacRiesgo(modo, facRiesgo, opciones) {

    try {

        delete facRiesgo.facId;
        if (modo == "create") {
            let nuevofacRiesgo 
            for(const opcion in opciones){
                if(opciones[opcion]){
                    if(opcion === 'Diabetes' ||opcion === 'PostOperat' ||opcion === 'Trombofilia')
                        facRiesgo.diagCodigo= opciones[opcion];
                    else
                        facRiesgo.diagCodigo= codigos[opcion];
                    nuevofacRiesgo = await PostData('facRiesgo/', facRiesgo);
                }
            }
            if(nuevofacRiesgo)
                return nuevofacRiesgo.facId;
        }
        if (modo == "edit") {
            console.log(facRiesgo);
            const res = await PutData('facRiesgo/' + facRiesgo.facId, facRiesgo);
            if (res) {
                return facRiesgo.facId;
            }
        }

    }
    catch (e) {
        alert(e);
    }
}
async function leerListaFacRiesgo(codigo, setlistaFacRiesgo) {
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
    setlistaFacRiesgo(lista);
}

async function leerFactRiesgoNivel2(codigo, setlistaNivel2) {
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
    
async function leerListaDiabetes(setlistaDiabetes) {

    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/02-04-' );
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
        setlistaDiabetes(lista);
}

async function leerListaPostOpe(setlistaPostOpe) {

    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/02-14-' );
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
        setlistaPostOpe(lista);
}

async function leerListaTrombofilia(setlistaTrombofilia) {

    //console.log(codigo);
    const data = await FetchData('ListaDesplegable/DiagCodigo/02-16-' );
    //console.log(data);
    var lista = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.codCodigo}>{item.codDesc}</option>
            )
        }, this);
        setlistaTrombofilia(lista);
}

async function inicializarFacRiesgo(modo, hcnuming, setFacRiesgo, facId, 
    setlistaFacRiesgo, setlistaNivel2) {

    var facRiesgo;
    if (modo == "create") {
        const today = new Date(Date.now());
        facRiesgo = {
            "diagFecha": today.toISOString().substring(0, 10),
            "diagCodigo": "02-01",
            "hcnumIng": hcnuming
        }
    }
    console.log(modo);
    if (modo == 'detail' || modo == 'edit') {
        facRiesgo = await FetchData("facRiesgo/" + facId);
        console.log(facRiesgo);
        facRiesgo.diagFecha = facRiesgo.diagFecha ?
            facRiesgo.diagFecha.substring(0, 10) : null;

    }
    leerListaFacRiesgo(facRiesgo.diagCodigo, setlistaFacRiesgo);
    leerFactRiesgoNivel2(facRiesgo.diagCodigo, setlistaNivel2);
    setFacRiesgo(facRiesgo)
}

export { FacriesgoForm }