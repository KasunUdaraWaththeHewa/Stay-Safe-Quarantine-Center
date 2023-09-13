import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../css file/PharmacyPanal.css'


import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


function PharmacyPanal() {
    const [popupAdd, setpop1] = useState(false);
    const [popupViwe, setpop2] = useState(false);
    const [popupUpdate, setpop3] = useState(false);
    const [popupDel, setpop4] = useState(false);
    const add = () => {
        setpop1(!popupAdd);
    };
    const viwe = () => {
        setpop2(!popupViwe);
    };
    const update = () => {
        setpop3(!popupUpdate);
    }
    const del = () => {
        setpop4(!popupDel);
    }
    return (
        <div>
            <NavBar> </NavBar>
            <div className="panalBody">
                <div className="funcBtn">
                    <button className='Btn' onClick={add}>Add</button>
                    <button className='Btn' onClick={viwe}>Viwe</button>
                    <button className='Btn' onClick={update}>Update</button>
                    <button className='Btn' onClick={del}>Delete</button>


                </div>
                {popupAdd ?
                    <div className="popup">
                        <br />

                        <button onClick={add} className='closePopup'> Close</button>
                        <br />
                        <br />
                        <div className="content">
                            <form className='formEdit'>
                                <label>
                                    Name:
                                    <input type="text" name="name" />
                                </label>
                                <br />
                                <label>
                                    ID:
                                    <input type="text" name="id" />
                                </label>
                                <br />
                                <label>
                                    Date:
                                    <input type="date" name="date" />
                                </label>
                                <br />
                                <label>
                                    Quntity:
                                    <input type="text" name="quntity" />

                                </label>
                                <br />
                                <br />
                                <div className="lastBtn">
                                    <input type="submit" value="Submit" className="submit" />
                                    <input type="reset" className="submit" />
                                </div>
                            </form>
                        </div>
                    </div> : ""}
                {popupViwe ?
                    <div className="popup">
                        <br />

                        <button onClick={viwe} className='closePopup'> Close</button>
                        <br />
                        <br />
                        <div className="content">
                            <form className='formEdit'>
                                <label>
                                    Search by ID:
                                    <input type="search" name="name" />
                                </label>
                                <br />
                                <br />
                                <div >
                                    <table class="table">
                                        <thead>
                                            <tr>

                                                <th scope="col">Name</th>
                                                <th scope="col">ID</th>
                                                <th scope="col">Quntity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div className="lastBtn">
                                    <input type="submit" value="Submit" className="submit" />
                                    <input type="reset" className="submit" />
                                </div>
                            </form>
                        </div>
                    </div> : ""}
                {popupUpdate ?
                    <div className="popup">
                        <br />

                        <button onClick={update} className='closePopup'> Close</button>
                        <br />
                        <br />
                        <div className="content">
                            <form className='formEdit'>
                                <label>
                                    Name:
                                    <input type="text" name="name" />
                                </label>
                                <br />
                                <label>
                                    ID:
                                    <input type="text" name="id" />
                                </label>
                                <br />
                                <label>
                                    Date:
                                    <input type="date" name="date" />
                                </label>
                                <br />
                                <label>
                                    Quntity:
                                    <input type="text" name="quntity" />

                                </label>
                                <br />
                                <br />
                                <div className="lastBtn">
                                    <input type="submit" value="Submit" className="submit" />
                                    <input type="reset" className="submit" />
                                </div>
                            </form>
                        </div>
                    </div> : ""}
                {popupDel ?
                    <div className="popup">
                        <br />

                        <button onClick={del} className='closePopup'> Close</button>
                        <br />
                        <br />
                        <div className="content">
                            <form className='formEdit'>
                                <label>
                                    Name:
                                    <input type="text" name="name" />
                                </label>
                                <br />
                                <label>
                                    ID:
                                    <input type="text" name="id" />
                                </label>
                                <br />
                                <label>
                                    Date:
                                    <input type="date" name="date" />
                                </label>
                                <br />
                                <label>
                                    Quntity:
                                    <input type="text" name="quntity" />

                                </label>
                                <br />
                                <br />
                                <div className="lastBtn">
                                    <input type="submit" value="Submit" className="submit" />
                                    <input type="reset" className="submit" />
                                </div>
                            </form>
                        </div>
                    </div> : ""}


            </div>

        </div>
    );
}
export default PharmacyPanal;