import React from "react";
import { ImExit } from "react-icons/im";
import { GoHome } from "react-icons/go";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import { authManager } from '../authetication/authenticationManager';
import { useNavigate } from 'react-router-dom';
import {Usuario} from '../context/Usuario';
const ToolbarPac = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-2">
            <Row className="cabecera justify-content-md-end">
                <Col>{Usuario.getName()}</Col>
                <Col md={1}>
                    <Link to={'/'}>
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
                            onClick={() => {
                                authManager.logout()
                                //alert('');
                                navigate('/login/')
                            }
                            }
                        >
                            <ImExit />
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export {ToolbarPac}