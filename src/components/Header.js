import React from "react";
import "../App.css";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Header = () => {
  return (
    <div name="home" className="header-wraper">
      <div className="main-info">
        <h1>Hey,<br /> I'm Chris, <br />App and Web developer</h1>
        <Typed 
            className="typed-text"
            strings={["App Development", "Web Development", "Facebook Ads"]}
            typeSpeed={40}
            backSpeed={50}
            loop
        />
        <Link to="contact" className="btn-main-offer">Contact Me</Link>
      </div>
    </div>
  )
}

export default Header
