import React from "react";
import "../App.css";
import Image from "../profile.jpg";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section name="about">
    <div  className="container">
     <h2 className="about-h3 about-me">About Me</h2>
     
    <div className="container1"> 
      <div>
        

        <div className="wow fadeInUp">
            <div className="member">
            <img className="profile" src={Image} alt="Image" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4><a href="#" style={{color: "#fff"}} target="_blank">Chrispin Jossam</a></h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href=""><i><FaTwitter /></i></a>
                    <a href=""><i><FaFacebookF /></i></a>
                    <a href=""><i><FaInstagram /></i></a>
                    <a href=""><i><FaGooglePlusG /></i></a>
                    <a href=""><i><FaLinkedinIn /></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="test">
      <div className="description">
        <p>
            HELLO, My name is Chrispin Jossam.  A third year student at the University of Malawi.
            I'm a Full-Stack web developer.
            I create responsive websites that are user friendly.
            I also develop android apps.  
        </p>

      </div>

      <div className="expertise-other">
          <div className="expertis">
          <h4 className="about-h3-1">Expertise</h4>
        <ul className="list-div">
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
          </div>
        <div className="othe">
        <h4 className="about-h3-1">Frameworks</h4>
        <ul className="list-div">
          <li>Springboot</li>
          <li>React Js</li>
          <li>Node.js</li>
        </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default AboutMe
