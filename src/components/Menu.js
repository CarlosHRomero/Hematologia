import React from "react";
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const Menu = () => {
    return (

        <Row md={3} className="justify-content-md-center mt-2">
            <Col >
                <Row className='m-3'>
                    <Link to={'/pacientes/'}>
                        <div className="d-grid gap-2">
                            <Button variant="primary" >Pacientes Hemtologia</Button>
                        </div>
                    </Link>
                </Row>
                <Row  className='m-3'>
                    <Link to={'/turnosdia/'}>

                        <div className="d-grid gap-2">
                            <Button variant="primary" >Pacientes del día</Button>
                        </div>
                    </Link>
                </Row>
            </Col>
        </Row >

    );
}

export { Menu }