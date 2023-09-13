import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../css file/PharmacyPanal.css'


import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


function PharmacyPanal() {
    const [popupAdd, stepop1] = useState(false);
    const [popupViwe, stepop2] = useState(false);
    const [popupUpdate, stepop3] = useState(false);
    const [popupDel, stepop4] = useState(false);
    const add = () => {
        stepop1(!popupAdd);
    };
    const viwe = () => {
        stepop2(!popupViwe);
    };
    const update = () => {
        stepop3(!popupUpdate);
    }
    const del = () => {
        stepop4(!popupDel);
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
                                    Search:
                                    <input type="search" name="name" />
                                </label>
                                <br />
                                <div >
                                    <table className='tbl'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Id</th>
                                            <th>Quntity</th>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td>Id</td>
                                            <td>Quntity</td>
                                        </tr>
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