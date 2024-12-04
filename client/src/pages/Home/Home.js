import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import "./home.css"
import Typewriter from "typewriter-effect"
import Resume from '../../assets/docs/CV_Yash Sachdev.pdf'
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import Fade from "react-reveal/Fade"
const Home = () => {
  const[theme,setTheme]=useTheme();
  const hadleTheme=()=>{
    setTheme((prevState)=>(prevState==='light' ? 'dark':'light'));
  }
  return (
    <>
       <div id='home' className="container-fluid home-container">
        <div className="theme-btn" onClick={hadleTheme}>
        {theme === "light" ? (
            <FaMoon size={30} />
          ) : (
            <BsSun size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
          <h2>Hi👋 I'm a </h2>
          <h1>
          <Typewriter
        options={{
        strings: ['FullStack Developer!', 'Mern Stack Developer!','Software Developer!'],
        autoStart: true,
        loop: true,
        }}
        />
          </h1>
          </Fade>
          <Fade bottom>
          <div className='home-buttons'>
            <a href="https://api.whatsapp.com/send?phone=6351840158" rel='noreferrer' target='_blank' className='btn btn-hire'>Hire Me</a>
            <a className='btn btn-cv' href={Resume} download="Cv_Yash Sachdev.pdf">My Resume</a>
          </div>
          </Fade>
        </div>
        </div> 
    </>
  )
}

export default Home