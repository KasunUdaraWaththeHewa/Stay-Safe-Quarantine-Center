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
                            <img className="imgCorona1"src="https://www.cnjg.org/sites/default/files/coronavirus_0.png" alt="" />
                            <img className="imgCorona2"src="https://themefire.pro/wp-content/uploads/2020/03/05.png" alt="" />
                            <img className="imgCorona3"src="https://assets.website-files.com/5e6f7f204b406c40b9835de9/5e6f84a4b3abb050aee67242_virus_rot.png" alt="" />
                            <img className="imgCorona4"src="https://themefire.pro/wp-content/uploads/2020/03/05.png" alt="" />
                            <img className="imgCorona5"src="https://www.cnjg.org/sites/default/files/coronavirus_0.png" alt="" />
                            <img className="imgCorona6"src="https://assets.website-files.com/5e6f7f204b406c40b9835de9/5e6f84a4b3abb050aee67242_virus_rot.png" alt="" />
                            <img className="imgCorona1"src="https://www.cnjg.org/sites/default/files/coronavirus_0.png" alt="" />
                            <img className="imgCorona2"src="https://themefire.pro/wp-content/uploads/2020/03/05.png" alt="" />
                            <img className="imgCorona3"src="https://assets.website-files.com/5e6f7f204b406c40b9835de9/5e6f84a4b3abb050aee67242_virus_rot.png" alt="" />
                            <img className="imgCorona4"src="https://themefire.pro/wp-content/uploads/2020/03/05.png" alt="" />
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
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
        
        
    );
}
export default Home;