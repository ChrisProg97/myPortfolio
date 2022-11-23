import React from "react";
import {  FaCode } from "react-icons/fa";
import {  FcAndroidOs } from "react-icons/fc";

const Services = () => {
  return (
    <section name="services" className="section-bg">
    <div className="main-div container">
    <h2 className="about-h3">Services</h2>
    <p className="paragraph">
      Take a look at the services I do provide to my clients
    </p>
    <div className="container2">
      <div className="card">
        <div className="icon-div">
          <FcAndroidOs className="icons"/>
        </div>
        <h3 className="about-h3-u">App Development</h3>
        <p>
          I develop android and iOS apps. I'm also UI designer.
          I also work best with already designed UI. 
          For android I use android studio and Java. 
          While for iOS I use android studio and swift.
        </p>
      </div>
      <div className="card">
        <div className="icon-div">
        <FaCode className="icons"/>
        </div>
        <h3 className="about-h3-u">Website Development</h3>
        <p>
          I develop websites using HTML5, CSS3, JavaScript. 
          I also develop web based apps using Reactjs. 
          For backend I've experience in Springboot. 
        </p>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Services
