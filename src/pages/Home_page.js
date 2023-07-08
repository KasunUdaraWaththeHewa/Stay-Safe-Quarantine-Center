import React from 'react'
import Name_logo from '../img/name_logo.png'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../css file/Home_page.css'

export default function Home_page() {
  return (
    <div>
        <NavBar/>

        <div className="home_background">
            <div className="name_logo">
                <img src={Name_logo}  alt="name logo"></img>
            </div>
            <div className="intro">
                <p id='intro'><strong>Welcome</strong> to our Quarantine Center<br/>a secure haven dedicated to safeguarding public health during contagious disease outbreaks. Our center provides a controlled environment, expert medical care, and essential support services for individuals requiring isolation. We prioritize your health and well-being, ensuring a comfortable stay while actively preventing the spread of infectious diseases.</p>
            </div>
        </div>
        <div className="package">
            <h1>PACKAGES</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aliquid ratione earum nisi, reiciendis placeat harum quos iure cupiditate fugiat illum laudantium. Vel, neque quos impedit atque numquam natus doloremque.</p>
        </div>

        <Footer/>
    </div>
  )
}
