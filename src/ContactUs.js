import NavBar from "./components/NavBar";
import React from 'react';
import './ContactUs.css';
import Footer from "./components/Footer";
import './components/Footer.css';

function ContactUs(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div> 
            <div className="imgContactUs">
                <h1 className="txtContactUsAboveImage">Contact Us</h1>
                <img src="https://www.webinventiv.com/images/services/hospital-management-system.png" alt="Contact Us Image" className="ContactUsImg" />    
            </div>           
            <div className="divH1ContactUs">
                <div className="contactUsContainer">
                        
                </div>
                <div className="mapSection">
                    <div className="leftMapSection">
                        <div className="map">
                            <img src="http://www.caingram.com/Sri_lanka/Colombo/Colombo_map.jpg" alt="" className="mapImg" />
                        </div>
                    </div>
                    <div className="rightMapSection">
                        <div className="contactDetails" >
                            <div className="contactItem" >
                                <h2 className="h2ContactNumber" >Phone Number</h2>
                                <h2 className="h2Detail" >011-1234567</h2>
                            </div>
                            <div className="contactItem">
                                <h2 className="h2Email">Email</h2>
                                <h2 className="h2Detail">Samantha123@gmail.com</h2>
                            </div>
                            <div className="contactItem">
                                <h2 className="h2Address" >Address</h2>
                                <p><b>College House
                                    94, Cumaratunga Munidasa Mw,
                                    Colombo 03,
                                    Sri Lanka</b></p>
                            </div>
                            <div className="socialSection">
                                <div className="socialIcon" id="facebookDiv" ><img className="facebookLogo" src="https://www.pngkey.com/png/full/767-7674910_black-and-white-facebook-logo-png.png" alt="Facebook" /></div>
                                <div className="socialIcon" id="twitterDiv" ><img className="TwitterLogo" src="https://clipartcraft.com/images/white-twitter-logo-icon-8.png" alt="Twwitter" /></div>
                                <div className="socialIcon" id="instaDiv" ><img className="InstagramLogo" src="https://600cranes.com.au/wp-content/uploads/2017/05/insta-white-768x767.png" alt="Instagram" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divSuggestions">
                <div className="suggestionsContainer" >
                        <form action="">
                            <legend className="legendSuggestions">
                                <h1 class="h1Suggestions" >Suggestions and Complains</h1>
                                <div className="textRow">
                                    <label className="label" htmlFor="sample">Name</label>
                                    <br />
                                    <input type="text" className="textField" id="textName" placeholder="Name" />
                                </div>
                                <div className="textRow">
                                    <label className="label"  htmlFor="sample">Nationality</label>
                                    <br />
                                    <input type="text" className="textField" id="textNationality" placeholder="Nationality"  />
                                </div>
                                <div className="textRow">
                                    <label className="label"  htmlFor="sample">Age</label>
                                    <br />
                                    <input type="text" className="textField" id="textAge" placeholder="Age"/>
                                </div>
                                <div className="textRow">
                                    <label className="label"  htmlFor="sample">Email</label>
                                    <br />
                                    <input type="text" className="textField" id="textEmail" placeholder="E-mail" />
                                </div>
                                <div className="textRow">
                                    <label className="label"  htmlFor="sample">Phone number</label>
                                    <br />
                                    <input type="text" className="textField"id="textPhoneNumber" placeholder="Phone number"/>
                                </div>
                                <div className="textRow">
                                    <label className="label"  htmlFor="sample">Your Message</label>
                                    <br />
                                    <input type="textArea" className="textField"id="textMessage" placeholder="Your Message"/>
                                </div>
                                <div>
                                    <button className="btnSubmit">Submit</button>
                                </div>
                            </legend>
                            
                        </form>
                </div>       
            </div>
            <div className="whitespace">
                
            </div>
            <div><Footer /></div>
            
        </div>
    );

}
export default ContactUs;