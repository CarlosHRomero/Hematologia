import React from "react";
import { AppContext } from "../context/AppContext";
import "../styles/cabecera.css";
import { FaSearch } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { GoHome } from "react-icons/go";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import { authManager } from '../authetication/authenticationManager';
import { useNavigate } from 'react-router-dom';
const Toolbar = (linkedit) => {
    const navigate = useNavigate();
    return (
        <AppContext.Consumer>
            {(user) => {
                return (
                    <div>
                        <Row className="cabecera justify-content-md-end">
                            <Col md={1}>
                                <Link to={'/pacientes/'}>
                                    <div className="d-grid gap-2">
                                        <Button variant="outline-light" size="sm">
                                            <GoHome />
                                        </Button>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={1}>
                                    <div className="d-grid gap-2">
                                        <Button variant="outline-light" size="sm" 
                                        onClick = {()=>{
                                            authManager.logout()
                                            alert('');
                                            navigate('/login/')}
                                        }
                                        >
                                            <ImExit />
                                        </Button>
                                    </div>
                            </Col>
                            {/*                             <Col xs={1}>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-light" size="sm">
                                        <FaSearch />
                                    </Button></div>
                            </Col> */}
                            <Col xs={1}>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-light" size="sm">
                                        Ver
                                    </Button>
                                </div>
                            </Col>
                            <Col xs={1}>
                                <Link to={linkedit.linkedit}>
                                    <div className="d-grid gap-2">
                                        <Button variant="outline-light" size="sm">
                                            Editar
                                        </Button>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={1}>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-light" size="sm">
                                        Borrar
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                );
            }}
        </AppContext.Consumer >
    );
};

export { Toolbar };