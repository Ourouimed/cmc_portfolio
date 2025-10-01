import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
export default function App (){
  return <>
  <Header/>
  <div className="container">
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
  </div>
  <Footer/>
  
  </>
}