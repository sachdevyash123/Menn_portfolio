import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link} from 'react-scroll';
import { FcHome,FcAbout,FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector,  FcBusinessContact } from "react-icons/fc";
import './MobileNav.css'
const MobileNav = () => {
    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(!open)
    };
    const handleMenuClick=()=>{
        setOpen(false)
    };
  return (
    <>
    <div className="mobile-nav">
        <div className="mobile-nav-header">
            {open ? (<AiOutlineMenuFold className='mobile-nav-icon' size={30} onClick={handleOpen}/>):(<GiHamburgerMenu className='mobile-nav-icon' size={30} onClick={handleOpen}/>)}
            <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        <div className="mobile-nav-menu">
            {open &&(
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link"><Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcHome/>Home</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcAbout/>About</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcReadingEbook/>Education</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcBiotech/>Tech Stack</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcVideoProjector/>Projects</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='workexp' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcPortraitMode/>Work Experience</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcBusinessContact/>Contact</Link></div>
            </div>
        </div>
            )}
        </div>
    </div>
    </>
  )
}

export default MobileNav