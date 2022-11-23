import React, { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div >
        <FaAngleDoubleUp onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} className="btn-position"/>
    </div>
  )
}

export default ScrollToTop
