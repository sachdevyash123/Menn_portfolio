import React from 'react'
import "./Projects.css"
import img1 from "../../assets/img/project1.png"
import img2 from "../../assets/img/project2.jpg"
import img3 from "../../assets/img/project3.jpg"
import Spin from "react-reveal/Spin"
const Projects = () => {
  return (
    <>
    <div className="container projects" id='project'>
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top Recent Projects</h2>
        <hr/>
        <p className='pb-3 text-center'>👉 Here are my top 3 recent projects using MERN stack with live links and source gode</p>
        <div className="row" id='ads'>
        <Spin>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span  className='card-notify-badge'>Full stack</span>
                        <img src={img1} alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>React</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className='text-uppercase'>Student Management System</h5>
                        </div>
                        <a href="https://github.com/sachdevyash123/student-management-frontend" className='ad-btn'>Source code</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span  className='card-notify-badge'>Full stack</span>
                        <img src={img2} alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>React</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className='text-uppercase'>Online Shopping Website</h5>
                        </div>
                        <a href="https://github.com/sachdevyash123/Mern_Ecommerce_Website" className='ad-btn'>Source Code</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span  className='card-notify-badge'>Full stack</span>
                        <img src={img3} alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>React</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className='text-uppercase'>Matrimonial Website</h5>
                        </div>
                        <a href="https://github.com/sachdevyash123/Matrimonial_website" className='ad-btn'>Source Code</a>
                    </div>
                </div>
            </div>
        </Spin>
        </div>
    </div>
    </>
  )
}

export default Projects