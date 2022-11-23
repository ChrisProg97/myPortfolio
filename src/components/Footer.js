import React from "react";
import { FaCopyright, FaEnvelope, FaFacebook, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialIcons">
        <FaEnvelope />
        <nbsp /> chrispinjossam@gmail.com
      </div>
      <div className="socialIcons">
        <FaPhoneAlt />
        +265888234426
      </div>
        <div className="copyright">
          copyright <FaCopyright /> 2022</div>
      <div className="socialIcons">
        <a href="http://free.facebook.com/?_rdc=1&_rdc"  ><FaFacebook /></a>
        <a href=""><FaWhatsapp /></a>
        <a href=""><FaTwitter /></a>
      </div>
    </div>
  )
}

export default Footer
