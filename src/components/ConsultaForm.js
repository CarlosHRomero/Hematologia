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
import { RotatingLines } from 'react-loader-spinner'

function ConsultaForm({ hcnuming, modo, consId }) {
    //console.log(hcnuming)
    const navigate = useNavigate();
    const [cargando, setCargando] = useState(false);
    const [listaDroga, setlistaDroga] = useState();
    const [listaModalidadMed, setlistaModalidadMed] = useState();
    const [listaPedidos, setlistaPedidos] = useState();
    const [listaDosis, setlistaDosis] = useState();
    const [dosis, setDosis] = useState({
        dosisLunes: 1,
        dosisMiercoles: 1,
        dosisJueves: 1,
        dosisViernes: 1,
        dosisSabado: 1,
        dosisDomingo: 1,
        dosisMartes: 1
    });
    //    console.log(dosis)
    const [laboratorio, setLaboratorio] = useState({ porc: '' });
    const [consulta, setConsulta] = useState(null);
    const [errors, seterrors] = useState(
        {
            consModalidadMed: false,
            consInr: false
        }
    );

    const equiv = {
        dosisLunes: 'consOralDLun',
        dosisMiercoles: 'consOralDMie',
        dosisJueves: 'consOralDJuen',
        dosisViernes: 'consOralDVie',
        dosisSabado: 'consOralDSab',
        dosisDomingo: 'consOralDDom',
        dosisMartes: 'consOralDMar'
    };


    useEffect(() => {
        leerListaDroga(setlistaDroga);
        leerModalidadMed(setlistaModalidadMed);
        leerPedidos(setlistaPedidos);
        inicializarConsulta(modo, hcnuming, setConsulta, setlistaDosis, consId, setCargando);
    }, [consId]
    );
    const validaModMed = () => {
        if (consulta.consModalidadMed == null || consulta.consModalidadMed < 2) {
            seterrors({ ...errors, 'consModalidadMed': true });
            return false;
        }
        else {
            seterrors({ ...errors, 'consModalidadMed': false });
            return true;
        }

    }

    const validaInr = () => {
        //if (!parseInt(consulta.consInr * 100) || parseInt(consulta.consInr * 100) > 10000) {
        if (parseInt(consulta.consInr * 100) > 10000) {
            seterrors({ ...errors, 'consInr': true });
            return false;
        }
        else {
            seterrors({ ...errors, 'consInr': false });
            return true;
        }
    }
    const validaPorc = () => {
        if (parseInt(consulta.consPorc) > 2000) {
            seterrors({ ...errors, 'consPorc': true });
            return false;
        }
        else {
            seterrors({ ...errors, 'consPorc': false });
            return true;
        }
    }

    const validaKptt = () => {
        if ( parseInt(consulta.consKppt) > 2000) {
            seterrors({ ...errors, 'consKppt': true });
            return false;
        }
        else {
            seterrors({ ...errors, 'consKppt': false });
            return true;
        }
    }

    const validar = () => {
        var res = true;
        if (!validaModMed())
            res = false;

        if (!validaInr())
            res = false;

        if (!validaPorc())
            res = false;
        if (!validaKptt())
            res = false;

        for (let prop in errors) {
            console.log(prop, errors[prop])
            if (errors[prop])
                res = false
        }
        //res= true;
        return res;
    }

    const resetDosis = () => {
        //alert('reset')
        setDosis({
            dosisLunes: 1,
            dosisMiercoles: 1,
            dosisJueves: 1,
            dosisViernes: 1,
            dosisSabado: 1,
            dosisDomingo: 1,
            dosisMartes: 1
        })
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);

        setDosis({ ...dosis, [e.target.name]: parseInt(e.target.value) });
        const prop = equiv[e.target.name];
        console.log(prop);
        leerDosis(filtro(consulta.consOralDroga), e.target.value,
            setConsulta, prop, consulta)
        /*        
                */

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
    if (listaDroga && listaModalidadMed && listaPedidos && consulta) {
        return (

            <div>
                {/*                 <NavigationPrompt when={true}>
                    {({ onConfirm, onCancel }) => (
                        alert('Esta seeguro')
                    )}
                </NavigationPrompt>; */}
                <Form >
                    <Tabs>
                        <div label='Consulta'>
                            <div className='formCons'>
                                <Row className="m-2">
                                    <Col md={4} className='mt-2'>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Text
                                                id="inputGroup-sizing-sm">Fecha consulta</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={consulta.consConsultaF}
                                                onChange={e =>
                                                    setConsulta({ ...consulta, ['consConsultaF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Fecha Hasta</InputGroup.Text>
                                            <Form.Control
                                                type="Date"
                                                value={consulta.consHastaF}
                                                name="consHastaF"
                                                onChange={e =>
                                                    setConsulta({ ...consulta, ['consHastaF']: e.target.value })
                                                }
                                            />
                                        </InputGroup>
                                        <div className="mb-3">
                                            <InputGroup>
                                                <InputGroup.Text
                                                >%</InputGroup.Text>
                                                <Form.Control
                                                    type="number"
                                                    value={consulta.consPorc}
                                                    onChange={e => {
                                                        //setConsulta({ ...consulta, ['consPorc']: e.target.value * 1 })
                                                        setConsulta({ ...consulta, ['consPorc']: e.target.value ? e.target.value * 1 : null })
                                                    }}
                                                    onBlur={validaPorc}
                                                />
                                            </InputGroup>
                                            {errors.consPorc ?
                                                <span aria-live="assertive" className='error'>
                                                    Valor inválido
                                                </span> : null
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <InputGroup >
                                                <InputGroup.Text id="inputGroup-sizing-sm">INR</InputGroup.Text>
                                                <Form.Control
                                                    value={consulta.consInr}
                                                    type="number"
                                                    onChange={e => {
                                                        setConsulta({ ...consulta, ['consInr']: e.target.value ? e.target.value * 1 : null })
                                                    }}
                                                    onBlur={validaInr}
                                                />
                                            </InputGroup>
                                            {errors.consInr ?
                                                <span aria-live="assertive" className='error'>
                                                    Inr inválida
                                                </span> : null
                                            }

                                        </div>
                                        <div className="mb-3">
                                            <InputGroup >
                                                <InputGroup.Text id="inputGroup-sizing-sm">KPTT</InputGroup.Text>
                                                <Form.Control
                                                    type="number"
                                                    value={consulta.consKptt}
                                                    onChange={e => {
                                                        setConsulta({ ...consulta, ['consKptt']: e.target.value ? e.target.value * 1 : null })
                                                    }}
                                                    onBlur={validaKptt}
                                                />
                                            </InputGroup>
                                            {errors.consKppt ?
                                                <span aria-live="assertive" className='error'>
                                                    Valor inválido
                                                </span> : null
                                            }
                                        </div>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Droga</InputGroup.Text>
                                            <Form.Select aria-label="Default select example"
                                                value={consulta.consOralDroga}
                                                onChange={e => {
                                                    setConsulta({ ...consulta, 'consOralDroga': e.target.value })
                                                    leerListaDosis(filtro(e.target.value), setlistaDosis);
                                                    resetDosis();
                                                }
                                                }>
                                                {listaDroga}

                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col md={8} className='mt-2'>
                                        <Row>
                                            <Col md={4}>
                                                <InputGroup className="mt-2">
                                                    <Form.Check
                                                        type='checkbox'
                                                        label='Enviar e-mail'
                                                        checked={consulta.consEnvMail}
                                                        onChange={e => {
                                                            console.log('e.target.checked', e.target.checked)
                                                            setConsulta({ ...consulta, ['consEnvMail']: e.target.checked })
                                                            console.log('consEnvMail', consulta)
                                                        }}

                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col className="mb-3">
                                                <InputGroup >
                                                    <InputGroup.Text id="inputGroup-sizing-sm">Modalidad de Medición</InputGroup.Text>
                                                    <Form.Select aria-label="Default select example"
                                                        value={consulta.consModalidadMed}
                                                        onChange={e => {
                                                            setConsulta({ ...consulta, 'consModalidadMed': e.target.value })
                                                            console.log(consulta.consModalidadMed);
                                                        }}
                                                        onBlur={validaModMed}
                                                    >
                                                        {listaModalidadMed}
                                                    </Form.Select>
                                                </InputGroup>
                                                {errors.consModalidadMed ?
                                                    <span aria-live="assertive" className='error'>
                                                        Debe seleccionar una modalidad de medición
                                                    </span> : null
                                                }

                                            </Col>
                                        </Row>
                                        <Row className='text-left align-items-center'>
                                            <Col md={6}>
                                                <span className='label'>Estudios, Prácticas y Procedimientos</span>
                                            </Col>
                                            <Col>
                                                <Form.Control
                                                    type="Date"
                                                    value={consulta.consHastaF}
                                                    onChange={e => {
                                                        setConsulta({ ...consulta, ['consHastaF']: e.target.value })
                                                    }}
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Select aria-label="Default select example"
                                                    value={undefined}
                                                    onChange={async e => {
                                                        const data = await FetchData("ListaDesplegable/estudios/" + e.target.value);
                                                        setConsulta({ ...consulta, ['consEst']: data.datoObs })
                                                        console.log(consulta.consEst);
                                                    }}>
                                                    {listaPedidos}
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                        <Row className='mt-3 '>
                                            <Col className='m-1'>
                                                <Form.Control as='textarea'
                                                    style={{ height: '9rem' }}
                                                    value={consulta.consEst}
                                                    onChange={e => {
                                                        setConsulta({ ...consulta, ['consEst']: e.target.value })
                                                    }}
                                                >
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                        <div className="text-right mt-3">
                                            <Button variant="primary" onClick={() => {
                                                if (hcnuming)
                                                    leerLaboratorio(hcnuming, consulta.consConsultaF, consulta, setConsulta);
                                                else {
                                                    leerLaboratorio(consulta.hcnumIng, consulta.consConsultaF, consulta, setConsulta);
                                                    validar();
                                                }
                                            }}>Laboratorio</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span className='label'>Lunes</span>
                                    </Col>

                                    <Col>
                                        <span className='label'>Martes</span>
                                    </Col>
                                    <Col>
                                        <span className='label'>Miercoles</span>
                                    </Col>
                                    <Col>
                                        <span className='label'>Jueves</span>
                                    </Col>
                                    <Col>
                                        <span className='label'>Viernes</span>
                                    </Col>
                                    <Col>
                                        <span className='label'>Sabado</span>
                                    </Col>
                                    <Col>
                                        <span className='label'>Domingo</span>
                                    </Col>


                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Select aria-label="Default select example"
                                            name='dosisLunes'
                                            value={dosis.dosisLunes}
                                            onChange={handleChange}
                                        >
                                            {listaDosis}
                                        </Form.Select>
                                    </Col>

                                    <Col>
                                        <Form.Select aria-label="Default select example"
                                            name='dosisMartes'
                                            value={dosis.dosisMartes}
                                            onChange={handleChange}
                                        >
                                            {listaDosis}
                                        </Form.Select>

                                    </Col>
                                    <Col>
                                        <Form.Select aria-label="Default select example"
                                            name='dosisMiercoles'
                                            value={dosis.dosisMiercoles}
                                            onChange={handleChange}
                                        >
                                            {listaDosis}
                                        </Form.Select>

                                    </Col>
                                    <Col>
                                        <Form.Select aria-label="Default select example"
                                            name='dosisJueves'
                                            value={dosis.dosisJueves}
                                            onChange={handleChange}
                                        >
                                            {listaDosis}
                                        </Form.Select>

                                    </Col>

                                    <Col>
                                        <Form.Select aria-label="Default select example"
                                            name='dosisViernes'
                                            value={dosis.dosisViernes}
                                            onChange={handleChange}
                                        >
                                            {listaDosis}
                                        </Form.Select>

                                    </Col>
                                    <Col>
                                        <Form.Select aria-label="Default select example"
                                            name='dosisSabado'
                                            value={dosis.dosisSabado}
                                            onChange={handleChange}
                                        >
                                            {listaDosis}
                                        </Form.Select>

                                    </Col>
                                    <Col>
                                        <Form.Select aria-label="Default select example"
                                            name='dosisDomingo'
                                            value={dosis.dosisDomingo}
                                            onChange={handleChange}
                                        >
                                            {listaDosis}
                                        </Form.Select>

                                    </Col>


                                </Row>
                                <Row>
                                    <Col>
                                        <span className='form-control yellow mt-1'>{consulta.consOralDLun}</span>
                                    </Col>

                                    <Col>
                                        <span className='form-control yellow mt-1'>{consulta.consOralDMar}</span>
                                    </Col>
                                    <Col>
                                        <span className='form-control yellow mt-1'>{consulta.consOralDMie}</span>
                                    </Col>
                                    <Col>
                                        <span className='form-control yellow mt-1'>{consulta.consOralDJue}</span>
                                    </Col>
                                    <Col>
                                        <span className='form-control yellow mt-1'>{consulta.consOralDVie}</span>
                                    </Col>
                                    <Col>
                                        <span className='form-control yellow mt-1'>{consulta.consOralDSab}</span>
                                    </Col>
                                    <Col>
                                        <span className='form-control yellow mt-1'>{consulta.consOralDDom}</span>
                                    </Col>


                                </Row>
                            </div>
                        </div>
                        <div label='Obs'>
                            <Form.Control as='textarea'
                                style={{ height: '25rem' }}
                                value={consulta.consObs}
                                onChange={e => {
                                    setConsulta({ ...consulta, ['consObs']: e.target.value })
                                }}
                            ></Form.Control>
                        </div>
                        <div label='Receta'>
                            <Form.Control as='textarea'
                                style={{ height: '25rem' }}
                                value={consulta.consReceta}
                                onChange={e => {
                                    setConsulta({ ...consulta, ['consReceta']: e.target.value })
                                }}
                            ></Form.Control>
                        </div>
                    </Tabs>
                </Form>
                <div className='text-left mt-3'>
                    <Button
                        onClick={async () => {
                            if (validar(consulta)) {
                                const consId = await guardarConsulta(modo, consulta);
                                if (consId)
                                    navigate('/consultas/details/' + consId)
                            }

                        }}
                    >Guardar</Button>
                </div>
            </div >
        )


    }
}

async function guardarConsulta(modo, consulta) {

    consulta.consInr = parseInt(consulta.consInr * 100);
    if (!consulta.consInr) {
        alert('Inr no válido')
    }
    try {
        if (modo === "create") {
            delete consulta.consId;
            const nuevaConsulta = await PostData('consultas/create', consulta);
            if (nuevaConsulta) {
                return nuevaConsulta.consId;
            }
            else {
                return false
            }

        }
        if (modo === "edit") {
            console.log(consulta);
            const res = await PutData('consultas/' + consulta.consId, consulta);
            if (res) {
                return consulta.consId;
            }
        }

    }
    catch (e) {
        alert(e);
    }
}

async function inicializarConsulta(modo, hcnuming, setConsulta, setlistaDosis, consId,
    setCargando) {
    console.log(modo)
    var consulta;
    if (modo === "create") {
        setCargando(true);
        consulta = await ultimaConsulta(hcnuming);
        setCargando(false);
        const today = new Date(Date.now());
        const hasta = new Date(Date.now());
        hasta.setDate(today.getDate() + 28);
        consulta.consConsultaF = today.toISOString().substring(0, 10);
        consulta.consHastaF = hasta.toISOString().substring(0, 10);
        consulta.ConsEstF = hasta.toISOString().substring(0, 10);
        consulta.consInr = consulta.consInr / 100;
        console.log(hasta);
        leerListaDosis(filtro(consulta.consOralDroga), setlistaDosis);
    }
    console.log(modo);
    if (modo === 'detail' || modo === 'edit') {
        setCargando(true);
        consulta = await FetchData("consultas/" + consId);
        setCargando(false);
        consulta.consConsultaF = (consulta.consConsultaF ? consulta.consConsultaF.substring(0, 10) : null);
        consulta.consHastaF = (consulta.consHastaF ? consulta.consHastaF.substring(0, 10) : null);
        consulta.ConsEstF = (consulta.ConsEstF ? consulta.ConsEstF.substring(0, 10) : null);
        consulta.consInr = consulta.consInr / 100;
    }
    if (modo === 'edit') {
        leerListaDosis(filtro(consulta.consOralDroga), setlistaDosis);
        console.log(consulta);
    }

    setConsulta(consulta);

}

async function ultimaConsulta(hcNuming) {
    //console.log(hcNuming);
    const data = await FetchData("consultas/ultimaConsulta/" + hcNuming);

    //console.log(data);
    return (data);

    //setCargando(false);
}


async function leerLaboratorio(hcnuming, fecha, consulta, setConsulta) {
    try {
        const data = await FetchData('Laboratorio/labPorHcnumIng/' + hcnuming + '/' + fecha, true);
        console.log(data);
        //consulta.consPorc = 30;
        setConsulta({
            ...consulta,
            ['consPorc']: data.porc,
            ['consKptt']: data.kptt,
            ['consInr']: data.inr
        }
        );
    }
    catch (e) {
        alert('No hay datos de lab para el paciente el dia ' + fecha)
    }


}

async function leerDosis(droga, valor, setConsulta, prop, consulta) {
    const data = await FetchData('ListaDesplegable/valorDosis/' + droga + '/' + valor);
    setConsulta({
        ...consulta,
        [prop]: data.datoDescR
    });
    console.log(consulta);
    return data;
}

async function leerListaDosis(droga, setlistaDosis) {
    const data = await FetchData('ListaDesplegable/Dosis/' + droga);
    console.log(data);
    var dosisList = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDesc}</option>
            )
        }, this);
    setlistaDosis(dosisList);

}

function filtro(val) {
    const arr = {
        2: 'Oral_Sintrom_1', 3: 'Oral_Sintrom_4',
        4: 'Oral_Warfarina_1', 5: 'Oral_Warfarina_2',
        6: 'Oral_Warfarina_5', 7: 'Oral_Azecar_1', 8: 'Oral_Azecar_4'
    };
    return arr[val];

}



async function leerListaDroga(setlistaDroga) {
    const data = await FetchData('ListaDesplegable/ConsultaDroga');
    var drogaList = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDescR}</option>
            )
        }, this);
    setlistaDroga(drogaList);

}

async function leerModalidadMed(setlistaModalidadMed) {
    const data = await FetchData('ListaDesplegable/modalidadMed');
    //console.log(data);
    var modalidadMedList = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDesc}</option>
            )
        }, this);
    setlistaModalidadMed(modalidadMedList);

}

async function leerPedidos(setlistaModalidadMed) {
    const data = await FetchData('ListaDesplegable/Pedidos');
    //console.log(data);
    var modalidadMedList = data.length > 0
        && data.map((item, i) => {
            return (
                <option key={i} value={item.datoDato}>{item.datoDescR}</option>
            )
        }, this);
    setlistaModalidadMed(modalidadMedList);

}



export { ConsultaForm }