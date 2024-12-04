import React from 'react'
import "./About.css"
import img2 from "../../assets/img/Yashpic.jpeg"
import Jump from 'react-reveal/Jump'
const About = () => {
  return (
    <>
    <Jump>
    <div className="about" id='about'>
        <div className="row">
            <div className="col-md-5 col-xl-5 col-lg-5 col-xs-12 about-img">
                <img src={img2} alt="profile_pic" />
            </div>
            <div className="col-md-7 col-xl-7 col-lg-7 col-xs-12 about-content">
                <h1>About me</h1>
                <p>Hi, I'm Yash! I'm a Computer Engineering student with a strong passion for front-end development and the MERN stack. Currently, I'm honing my skills in JavaScript, ReactJS, Express.js, and Node.js, and have completed several projects that showcase my abilities in these areas. I enjoy creating seamless, user-focused interfaces with HTML, CSS, and JavaScript, while also developing robust back-end functionality.

<br/>I'm also interning at BrainSquare Technologies, gaining practical experience in a professional setting, which has been instrumental in refining my problem-solving skills and deepening my understanding of real-world applications.

<br/><br/>Thanks for visiting my portfolio—feel free to explore my projects and reach out!</p>
            </div>
        </div>
    </div>
    </Jump>
    </>
  )
}

export default About