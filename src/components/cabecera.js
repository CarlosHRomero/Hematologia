import React from "react";
import { AppContext } from "../context/AppContext";
import "../styles/cabecera.css";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { ImExit } from "react-icons/im";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import { authManager } from '../authetication/authenticationManager';
const Cabecera = ({ funcionBuscar }) => {
  const navigate = useNavigate();
  return (
    <AppContext.Consumer>
      {(user) => {
        return (
          <div>
            <Row className="cabecera">
              <Col>
                <h4>Pacientes Hematologia</h4>
              </Col>
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
                  </Button></div>
              </Col>
              <Col xs={1}>
                <div className="d-grid gap-2">
                  <Button variant="outline-light"
                    onClick={() => funcionBuscar()}
                    size="sm">
                    <FaSearch />
                  </Button></div>
              </Col>
            </Row>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export { Cabecera };