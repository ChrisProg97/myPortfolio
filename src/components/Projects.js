import React from "react";
import LightB from "./LightB";

const Projects = () => {
  
  return (
    <section name="projects">
    <div className="main-div">
      <h2 className="about-h3">Projects</h2>

      <h3 className="about-h3-u">Accommodation Booking Website</h3>
      <div className="paragraph">
        <p>
            This is the accommodation booking system. 
            The system shall be used to book off-campus accommodation.
            The system is under development, and will be up and running soon.
        </p>
      </div>

      <div className="container2">

        <div className="pictures">
          <LightB />
        </div>


      </div>
    </div>
    </section>
  )
}

export default Projects
