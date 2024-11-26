import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar,TechStack, Project, JustForFun, Education, StarsCanvas,Experience } from './components';
const App = () =>{
    return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About/>
          <Education/>
          <Experience/>
          <TechStack/>
          <Project/>
          <JustForFun/>
          
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
//add<Experience/>
export default App
