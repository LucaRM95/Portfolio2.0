import React, { useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

const Navbar = ({ avatar, handleOpenMenu }) => {
  
  const [isActive, setIsActive] = useState({
    "one": true,
    "two": false,
    "three": false,
    "four": false
  })

  const handleActive = ({ target }) => {
    handleOpenMenu();

    switch(target.id){
      case "one":
        setIsActive({
          "one": true,
          "two": false,
          "three": false,
          "four": false
        })
        break;
      case "two":
        setIsActive({
          "one": false,
          "two": true,
          "three": false,
          "four": false
        })
        break;
      case "three":
        setIsActive({
          "one": false,
          "two": false,
          "three": true,
          "four": false
        })
        break;
      case "four":
        setIsActive({
          "one": false,
          "two": false,
          "three": false,
          "four": true
        })
        break;
    }
  };
  
  //const scrollPosition = useScrollPosition();

  return (
    <section id="header">
      <header>
        <span className="image avatar">
          <img src={avatar} alt="" />
        </span>
        <h1 id="logo">
          <a href="#">Luca Rojas Massey</a>
        </h1>
        <p>
          Desarrollador Front-end Jr
          <br />
          programando todo lo que imagino.
        </p>
      </header>
      <nav id="nav">
        <ul>
          <li onClick={handleActive}>
            <a id="one" href="#about" className={`${isActive.one ? "active" : ""}`}>
              About
            </a>
          </li>
          <li onClick={handleActive}>
            <a id="two" href="#things" className={`${isActive.two ? "active" : ""}`}>
              Things I Can Do
            </a>
          </li>
          <li onClick={handleActive}>
            <a id="three" href="#accomplishments" className={`${isActive.three ? "active" : ""}`}>
              A Few Accomplishments
            </a>
          </li>
          <li onClick={handleActive}>
            <a id="four" href="#contact" className={`${isActive.four ? "active" : ""}`}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <footer>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Navbar;
