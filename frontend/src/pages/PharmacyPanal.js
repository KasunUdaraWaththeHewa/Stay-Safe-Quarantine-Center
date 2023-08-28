import React from 'react';
import NavBar from '../components/NavBar';
import '../css file/PharmacyPanal.css'

import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';


function PharmacyPanal() {
    const { user } = useAuthContext();
    const history = useHistory();
  
    const isAdmin = user && user.role === 'admin';

    if (!isAdmin) {
        history.push('/unauthorized');
        return null;
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