import React from "react";
import { AppContext } from "../context/AppContext";
import "../styles/cabecera.css";
import { FaSearch } from "react-icons/fa";
import { ImExit } from "react-icons/im";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Cabecera = () => {
  return (
    <AppContext.Consumer>
      {(user) => {
        return (
          <div>
            <Row className="cabecera">
              <Col>
                <h4>Pacientes Hematologia</h4>
              </Col>
              <Col  xs={2}>
              <div className="d-grid gap-2">
              <Button variant="outline-light"  size="sm">
                <ImExit   />
                </Button></div>
              </Col>
              <Col xs={2}>
              <div className="d-grid gap-2">
                <Button variant="outline-light"  size="sm">
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