import React, { useState } from "react";
import "./assets/sass/main.scss";

/* images */
import banner from "./assets/images/react-dev.webp";
import avatar from "./assets/images/Luca-profile-image.jpg";
import Navbar from "./Components/navbar/Navbar";
import About from "./Components/about/About";

import ThingIcanDo from "./Components/thingsIcanDo/ThingIcanDo";
import Accomplishment from "./Components/accomplishment/Accomplishment";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {

  const [ openMenu, setOpenMenu ] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
    const body = document.querySelector("body")
    
    openMenu ? body.classList.add("header-visible") : body.classList.remove("header-visible")
  }
  
  return (
    <div className="App">
      <Navbar avatar={avatar} handleOpenMenu={handleOpenMenu}/>
      <div id="wrapper">
        <div id="main">
          
          <About banner={banner}/>
          
          <ThingIcanDo />
          
          <Accomplishment />
          
          <Contact />
        </div>
        <Footer />
      </div>

      <div id="titleBar">
        <a href="#header" className="toggle" onClick={handleOpenMenu}></a>
        <span className="title">
          <a href="#">LucaRM Portfolio</a>
        </span>
      </div>
    </div>
  );
}

export default App;
