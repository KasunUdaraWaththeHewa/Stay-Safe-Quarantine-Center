import React from 'react';
import NavBar from '../components/NavBar';
import '../css file/PharmacyPanal.css'

import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


function PharmacyPanal() {
    return (
        <div>
            <div><NavBar /></div>
            <div className="panalBody">
            <button>Add medicin</button>
            <button>Delete medicin</button>
            <button>Update medicin</button>
            <button>Viwe medicin</button>
            <hr />
            <div>
                
            </div>
                

            </div>


        </div>
    );
}
export default PharmacyPanal;