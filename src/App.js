import React, { Component }  from "react";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AppProvider } from "./context/AppContext";
//import {Home} from './components/Home';
import {Login} from './components/login';
import { ListadoPacientes } from "./components/ListadoPacientes";
import {PacientePage} from "./components/Paciente";
import {ConsultaCreate} from "./components/ConsultaCreate.js"
import { ConsultaDetail} from "./components/ConsultaDetail";
import { ConsultaEdit} from "./components/ConsultaEdit";

import { Home } from "./components/home";


import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";

function App() {
  const [user, setUser] = useState(0);
  //const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  return (
    <div className="App">
      <AppProvider >
        <Layout>
          <BrowserRouter basename="/hematologia">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/pacientes" element={<ListadoPacientes />} />
            <Route path="/paciente/:hcnumIng" element={<PacientePage />} />
            <Route path="/consultas/create/:hcnumIng" element={<ConsultaCreate />} />
            <Route path="/consultas/details/:consId" element={<ConsultaDetail />} />
            <Route path="/consultas/edit/:consId" element={<ConsultaEdit />} />
          </Routes>
          </BrowserRouter>
        </Layout>
      </AppProvider>

    </div>
  );
}

export default App;
