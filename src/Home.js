import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './Home.css'

function Home(){
    return(
        <div>
            <div className="navBarContainor"><NavBar /></div>
            <div className="divHome">
                <div className="divHomeSectionOne">
                    <div className="divHomeSectionOneLeft">
                        <div className="imgsContainor">
                            <div className="insideContainor">
                               
                            </div>
                        </div>
                        
                    </div>
                    <div className="divHomeSectionOneRight">
                        <div className="divHomeSectionOneRightTopic">
                            <h1>Stay Safe</h1>
                        </div>
                        <div className="divHomeSectionRightPara">
                            <p>Embracing wellness, ensuring safety</p>
                        </div>
                        <div className="divNavigationButtonArea">
                            <div className="Button"><img src="https://vectorified.com/images/home-icon-white-2.png" alt="" /></div>
                            <div className="Button"><img src="https://nationalpid.com/wp-content/uploads/2018/07/about-us-icon-white.png" alt="" /></div>
                            <div className="Button"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/package-icon-18-256.png" alt="" /></div>
                            <div className="Button"><img src="https://www.seekpng.com/png/full/137-1373765_phone-icon-white-contact-us-icon-transparent-white.png" alt="" /></div>
                            <div className="Button"><img src="https://www.drinkcraft.net/wp-content/uploads/2021/02/login-icon-white.png" alt="" /></div>
                        </div>
                        <div className="divHomeSectionRightPara">
                            <p>Experience safety and wellness at our Quarantine Center. With a focus on your well-being, we provide a secure environment for your quarantine period. Rest easy knowing that our dedicated team is here to support your journey to optimal health.</p>
                         </div>   
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
        
        
    );
}
export default Home;