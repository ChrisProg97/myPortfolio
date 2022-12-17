import React from "react";
import { LightBox } from 'react-lightbox-pack';
import "react-lightbox-pack/dist/index.css";
import data from './data.json';
// import LightB from "./LightB";

const Projects = () => {
  	// State
	const [toggle, setToggle] =  React.useState(false);
	const [sIndex, setSIndex] =  React.useState(0);

	// Handler
	const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};
  
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
        <div>
			
			{data.map((item, index) => (
			<div >
				<img className="initial-view"
					key={item.id}
					src={item.image}
					alt={item.title}
					onClick={() => {
					lightBoxHandler(true, index);
					}}
				/>
			</div>
			))}
			
			
			<LightBox
				state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
			/>
		</div>
        </div>


      </div>
    </div>
    </section>
  )
}

export default Projects
