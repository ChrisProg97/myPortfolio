import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        {/* <Particles 
        params={{
          particles:{
            number:{
              value: 30,
              density:{
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type: "circle",
              stroke:{
                width: 6,
                color: "#f9ab00",
              }
            }
          }
        }}
      /> */}
      <Navbar />    
      {/* <Routes>
        <Route path="/" index element={<Header />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes> */}
    <Header />
    <AboutMe />
    <Services />
    <Projects />
    <Contact />
    <ScrollToTop />
    <Footer />
    </Router>
   
  );
}

export default App;
