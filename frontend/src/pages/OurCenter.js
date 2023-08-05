import React from 'react';
import '../css file/OurCenter.css';
import NavBar from '../components/NavBar';
import img_p from '../img/accomodation.jpeg';
import img_p1 from '../img/medicare.jpg';
import img_p2 from '../img/meals.jpg';
import img_p3 from '../img/amenties.jpg';
import img_p4 from '../img/entertainment.jpeg';
import img_p5 from '../img/safetymeasures.jpg';
import img_p6 from '../img/barchart-1.png';
import Footer from '../components/Footer';
import ourcenter from '../img/ourcenter.png';

export default function OurCenter(){
    return ( 
        <div>
            <div className="navBarContainor" ><NavBar /></div> 
            <div className="imgSectionOurCenter">
                <img src={ourcenter} alt="" className="imageOurCenter" />
                <h1 className="txtOurCenterAboveImage">Our Center</h1>
            </div>
            <div className="OurCenter">
                <div className="description-1">
                    <div className="accomodation">
                        <div className="OCcard">
                            <img src={img_p} alt="accomadation"></img>
                            <h2>Accommodation</h2>
                            <p>Stay in comfortable and well-equipped rooms during your quarantine period.</p>
                        </div>
                    </div>

                    <div className="MedicalCare">
                        <div className="OCcard">
                            <img src={img_p1} alt="medicare"></img>
                            <h2>Medical Care</h2>
                            <p>Our team of healthcare professionals provides essential medical care and monitoring.</p>
                        </div>
                    </div>

                    <div className="NutriousMeal">
                        <div className="OCcard">
                            <img src={img_p2} alt="meals"></img>
                            <h2>Nutritious Meals</h2>
                            <p>We offer balanced and nutritious meals, taking into consideration your dietary requirements.</p>
                        </div>
                    </div>
                </div>

                <div className="description-2">
                    <div className="BasicAmenties">
                        <div className="OCcard">
                            <img src={img_p3} alt="amenties "></img>
                            <h2>Basic Amenities</h2>
                            <p>Enjoy clean bedding, towels, toiletries, and laundry facilities for a comfortable stay.</p>
                        </div>
                    </div>

                    <div className="ComuandEnter">
                        <div className="OCcard">
                            <img src={img_p4} alt="entertainment "></img>
                            <h2>Communication and Entertainment</h2>
                            <p>Stay connected with your loved ones and access entertainment facilities during your stay.</p>
                        </div>
                    </div>

                    <div className="Safemeatures">
                        <div className="OCcard">
                            <img src={img_p5} alt="safety measure"></img>
                            <h2>Safety Measures</h2>
                            <p>We prioritize your safety with strict infection control measures and safety protocols.</p>
                        </div>
                    </div>
                </div>

                <div className="barchartcontainer">
                    <img src={img_p6} alt="stats "></img>
                    <p className="stats">Our Center Stats</p>
                </div>
            </div>
            <Footer/>
        </div>
    
     );
}
 
