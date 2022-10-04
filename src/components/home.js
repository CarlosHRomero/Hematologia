import React, { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FetchData} from '../FetchData/FetchData';

const Home = () => {
    return(
        <div>
            <Link to={'/pacientes/'}>PAcientes</Link>
            <Button
            onClick={async ()=>{
                alert('hola');
                let data = await FetchData("pacientes/InrPromedio/");}
            }
            >

            </Button>
        </div>
        

    )}

    export {Home}