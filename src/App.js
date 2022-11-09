import React, { Component }  from "react";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AppProvider } from "./context/AppContext";
//import {Home} from './components/Home';
import {Login} from './components/login';
import { ListadoPacientes } from "./components/ListadoPacientes";
import {PacientePage} from "./components/PacientePage";
import {ConsultaCreate} from "./components/ConsultaCreate.js"
import { ConsultaDetail} from "./components/ConsultaDetail";
import { ConsultaEdit} from "./components/ConsultaEdit";
import {TurnosDia} from "./components/TurnosDia.js"
import { Menu } from "./components/Menu";
import logo from './logo.svg';
import './App.css';
import { DiagnosticoDetail} from "./components/DiagnosticoDetail";
import { DiagnosticoEdit} from "./components/DiagnosticoEdit";
import { DiagnosticoCreate} from "./components/DiagnosticoCreate";

import { FacriesgoCreate} from "./components/FacriesgoCreate";
import { FacriesgoDetail} from "./components/FacriesgoDetail";
import { FacriesgoEdit} from "./components/FacriesgoEdit";

import { TratamientoDetail} from "./components/TratamientoDetail";
import { TratamientoEdit} from "./components/TratamientoEdit";
import { TratamientoCreate} from "./components/TratamientoCreate";

import { ComplicacionesDetail} from "./components/ComplicacionesDetail";
import {ComplicacionesCreate} from "./components/ComplicacionesCreate";

function App() {
  const [user, setUser] = useState(0);
  //const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  return (
    <div className="App">
      <AppProvider >
        <Layout>
          <BrowserRouter basename="/hematologia">
          <Routes>
            <Route exact path="/" element={<Menu />}></Route>
            {/* <Route path="/error" element={<Error />} /> */}
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/pacientes" element={<ListadoPacientes />} />
            <Route path="/paciente/:hcnumIng" element={<PacientePage />} />
            <Route path="/consultas/create/:hcnumIng" element={<ConsultaCreate />} />
            <Route path="/consultas/details/:consId" element={<ConsultaDetail />} />
            <Route path="/consultas/edit/:consId" element={<ConsultaEdit />} />
            <Route path="/turnosdia" element={<TurnosDia />} />
            <Route path="/diagnostico/create/:hcnumIng" element={<DiagnosticoCreate />} />
            <Route path="/diagnostico/details/:diagId" element={<DiagnosticoDetail />} />
            <Route path="/diagnostico/edit/:diagId" element={<DiagnosticoEdit />} />
            <Route path="/diagnostico/edit/:diagId" element={<DiagnosticoEdit />} />
            <Route path="/facriesgo/create/:hcnumIng" element={<FacriesgoCreate />} />
            <Route path="/facriesgo/details/:facId" element={<FacriesgoDetail/> } />
            <Route path="/facriesgo/edit/:facId" element={<FacriesgoEdit/> } />

            <Route path="/tratamiento/details/:tratId" element={<TratamientoDetail/> } />
            <Route path="/tratamiento/edit/:tratId" element={<TratamientoEdit/> } />
            <Route path="/tratamiento/create/:hcnumIng" element={<TratamientoCreate />} />
            <Route path="/complicaciones/details/:compId" element={<ComplicacionesDetail/> } />
            <Route path="/complicaciones/create/:hcnumIng" element={<ComplicacionesCreate/> } />
          </Routes>
          </BrowserRouter>
        </Layout>
      </AppProvider>

    </div>
  );
}

export default App;
