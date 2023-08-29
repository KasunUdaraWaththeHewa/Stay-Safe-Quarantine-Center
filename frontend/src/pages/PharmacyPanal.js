import NavBar from '../components/NavBar';
import '../css file/PharmacyPanal.css'

import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PharmacyPanal() {
    const { user } = useContext(AuthContext);
  if (!user || !((user.role === 'pharmacy'))) {
    return <Redirect to="/unauthorized" />;
  }
    return (
        <div>
            <div><NavBar /></div>
            <div className="panalBody">
                <button>Add medicine</button>
                <button>Delete medicin</button>
                <button>Update medicin</button>
                <button>Viwe medicin</button>
                <hr />
                <div>
                    <form className="popup">
                        <h1>Adding</h1>
                        <label htmlFor="name">ID:</label>
                        <input type="text" name="name" /><br />
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" /><br />
                        <label htmlFor="name">Quntity:</label>
                        <input type="text" name="name" /><br />

                        

                        <label htmlFor="country">Type:</label>
                        <select name="country" id="country">                            
                            <option value="nepal">Tablet</option>
                            <option value="usa">Liuid</option>
                            <option value="australia">item</option>
                        </select><br /><br />

                        <input type="submit" value="Submit" />
                    </form>
                </div>


            </div>


        </div>
    );
}
export default PharmacyPanal;