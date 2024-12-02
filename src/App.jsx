import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Link } from "react-router-dom"
// import { NavBar, Home, Works, Project, About_us, Resid, Login_page, Contactus } from "./components/navbar/NavBar"
import { NavBar } from './components/navbar/NavBar';
import { Carousel } from "./components/carousel/Carousel"
import { Showcase } from "./components/Showcase/ShowCase"
// import { Pricing } from "./components/pricing/pricing"
import Work_head from "./components/work/work_head/work_head"
import Work_content from "./components/work/work_content/work_content"
import About from "./components/about/about"
import Service from "./components/about/services/services"
import Projects from "./components/projects/projects"
import Residential from "./components/work/residential/residential"
import Login from "./components/Login/Login"
import Contact from "./components/contact/Contact"
import { Footer } from "./components/footer/Footer"
import styles from './App.module.css'
import { ThemeProvider, ThemeContext } from '../public/js/ThemeContext';
import { Register } from './components/Register/Register';



function App() {
  const [isSun, setIsSun] = useState(false);

  const toggleTheme = () => {
    setIsSun((prevState) => !prevState);
  };

  return (
    <div>
      <ThemeProvider>
        <Router>
          <NavBar isSun={isSun} toggleTheme={toggleTheme} />
            <Routes>
              <Route exact path="/" element={<Home isSun={isSun} />} />
              <Route exact path="/work" element={<Works isSun={isSun} />} />
              <Route exact path="/projects" element={<Project isSun={isSun} />} />
              <Route exact path="/about-us" element={<About_us isSun={isSun} />} />
              <Route exact path="/work/residential-houses" element={<Resid isSun={isSun} />} />
              <Route exact path="/login" element={<Login_page isSun={isSun} />} />
              <Route exact path="/contact-us" element={<Contactus isSun={isSun} />} />
              <Route exact path="/sign-up" element={<SignUp isSun={isSun} />} />
            </Routes>
        </Router>
      </ThemeProvider>
      
    </div>
  );
}
// function App() {
//   const { showCarousel } = useParams();
//   return (<div className={styles.App}>
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/work" element={<Works />} />
//         <Route path="/projects" element={<Project />} />
//         <Route path="/about-us" element={<About_us />} />
//         <Route path="/work/residential-houses" element={<Resid />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   </div>
//   );
// }

function Home({ isSun }) {
  // const [isSun, setIsSun] = useState(false);
  return (
    <div>
      <Carousel isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

function Contactus({ isSun }) {
  return (
    <div>
      <Contact isSun={isSun} />
      <Footer />
    </div>
  )
}
function Works({ isSun }) {
  return (
    <div>
      <Work_head />
      <Work_content isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

function Resid({ isSun }) {
  return (
    <div>
      <Residential isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

function About_us({ isSun }) {
  return (
    <div>
      <About isSun={isSun} />
      <Service isSun={isSun} />
      <Showcase />      
      <Footer />
    </div>
  )
}

function Login_page({ isSun }) {
  return(
    <div>
      <Login isSun={isSun} />
    </div>
  )
}

function SignUp({ isSun }) {
  return(
    <div>
      <Register isSun={isSun} />
    </div>
  )
}

function Project({ isSun }) {
  return (
    <div>
      <Projects isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App
