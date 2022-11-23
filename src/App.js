import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <>
      <Navbar />    
      <Header />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
   
  );
}

export default App;
