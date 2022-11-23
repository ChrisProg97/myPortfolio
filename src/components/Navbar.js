import React, { useState } from "react";
import "../App.css";
import { Link } from "react-scroll";
import logo from "../logo.png";
import { FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
  <Link className="navbar-brand" to="home"><img className="logo" src={logo} alt="LOGO" />
  <span style={{color: "white"}}><i>ChrisProg</i></span></Link>
  <button onClick={handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {click ? <FaTimes style={{color: "white"}}/> : <FaBars style={{color: "white"}}/> }
  </button>

  <div className={click ? "collapse navbar-collapse show" : "collapse navbar-collapse"}  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto" style={{marginLeft: "auto"}}>
      <li className="nav-item">
        <Link className="nav-link" to="home" onClick={closeMobileMenu} 
          activeClass="active" spy={true} smooth={true} duration={500}>Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="about" onClick={closeMobileMenu} 
        activeClass="active" spy={true} smooth={true} duration={500}>About Me</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="services" onClick={closeMobileMenu} 
        activeClass="active" spy={true} smooth={true} duration={500}>Services</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="projects" onClick={closeMobileMenu} 
        activeClass="active" spy={true} smooth={true} duration={500}>Projects</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="contact" onClick={closeMobileMenu} 
        activeClass="active" spy={true} smooth={true} duration={500}>Contact Me</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar
