import React from "react";
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';


const Menu = () => {
    return (
        <div>
            <div  class="mt-4 p-5 light-gray rounded">
                <h1>HEMATOLOGIA</h1>

            </div>

            <Row md={3} className="justify-content-md-center mt-2">
                <Col >
                    <Row className='m-5'>
                        <Link to={'/pacientes/'}>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" >Listado de Pacientes</Button>
                            </div>
                        </Link>
                    </Row>
                    <Row className='m-5'>
                        <Link to={'/turnosdia/'}>

                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" >Pacientes del día</Button>
                            </div>
                        </Link>
                    </Row>
                </Col>
            </Row >
        </div>
    );
}

export { Menu }