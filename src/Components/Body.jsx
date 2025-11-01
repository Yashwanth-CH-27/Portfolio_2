
import About from "./About"
import Contact from "./Contact"
import Experience from "./Experience"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Projects from "./Projects"
import Skills from "./Skills"


const Body = () => {
  return (
    <div className="">
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        
        <Footer/>
    </div>
     
  )
}

export default Body