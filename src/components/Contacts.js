import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
   
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                "service_a852ekf",
                "template_1q83wbi",
                refForm.current,
                "7fFFVQ8CL-aC1H43i"
            )
            .then(
                ()=>{
                    alert("Message Successfully Sent!")
                    // window.location.reload(true)
                    e.target.reset()
                },
                ()=>{
                    alert("Failed to Send Message, Please try again.")
                }
            )
    }

  return (
    <section name="contact" className="section-bg">
    <div classsName="cotainer">
      <h2 className="about-h3">Contact Me</h2>
      <div className="container">
        <div className="paragraph">
        <p>
            I am interested in freelence opportunities - 
            especially ambitious or large projects. 
            However, if you have other requests or questions, 
            don't hastate to contact me using the below form.
        </p>
        </div>
        <div className="form-map">
        <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input type="text" name="user_name" placeholder="Enter Name" required />
                    </li>
                    <li className="half">
                        <input type="email" name="user_email" placeholder="Enter your email" required />
                    </li>
                    <li>
                        <input type="text" name="subject" placeholder="Subject" required />
                    </li>
                    <li>
                        <textarea placeholder="Type your message" name="message"></textarea>
                    </li>
                    <li>
                        <input type="submit" value="SEND" className="flat-button" />
                    </li>
                </ul>
            </form>
        </div>
        <div className="map-div">

                <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d12362.046184788138!2d35.32140351825894!3d-15.384044889965466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d-15.391254499999999!2d35.335597799999995!4m5!1s0x18d9058aca8e047d%3A0xfa58bd232648ec4e!2sJ8FF%2B6J5%20Chikanda%2C%20chikanda%2C%20Zomba!3m2!1d-15.3769881!2d35.3240836!5e1!3m2!1sen!2smw!4v1669201942587!5m2!1sen!2smw"
                                 position="absolute"
                                 width="100%"
                                 height="100%"
                                frameborder="0" 
                                allowfullscreen
                                title="Where I live">         
                </iframe>
            
        </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Contacts
