import React from 'react';
import './Backbutton.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import img from './media/backbutton.png'

function BackButton(){
    const navigate = useNavigate(); // Initialize navigate

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (  
        <div className="divBackButton" onClick={handleBackClick}>
            <div className="roundButton">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default BackButton;
