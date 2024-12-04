import React from 'react'
import "./Menus.css";
import { Link} from 'react-scroll';
import img1 from "../../assets/img/Yash_profile_image.jpeg";
import { FcHome,FcAbout,FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector,  FcBusinessContact } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade"
const Menus = ({toggle}) => {
  return (
    <>
    {
        toggle ? (
        <>
        <Zoom>
        <div className="navbar-profile-pic">
            <img src={img1} width={30} height={30} alt='profile-pic'/>
        </div>
        </Zoom>
        <Fade left>
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link"><Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome/>Home</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='about' spy={true} smooth={true} offset={-100} duration={100}><FcAbout/>About</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='education' spy={true} smooth={true} offset={-100} duration={100}><FcReadingEbook/>Education</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}><FcBiotech/>Tech Stack</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='project' spy={true} smooth={true} offset={-100} duration={100}><FcVideoProjector/>Projects</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='workexp' spy={true} smooth={true} offset={-100} duration={100}><FcPortraitMode/>Work Experience</Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}><FcBusinessContact/>Contact</Link></div>
            </div>
        </div>
        </Fade>
        </>
        ):(
        <>
         <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link"><Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome/></Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='about' spy={true} smooth={true} offset={-100} duration={100}><FcAbout/></Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='education' spy={true} smooth={true} offset={-100} duration={100}><FcReadingEbook/></Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}><FcBiotech/></Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='project' spy={true} smooth={true} offset={-100} duration={100}><FcVideoProjector/></Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='workexp' spy={true} smooth={true} offset={-100} duration={100}><FcPortraitMode/></Link></div>
            </div>
            <div className="nav-item">
                <div className="nav-link"><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}><FcBusinessContact/></Link></div>
            </div>
        </div>
        </>

        )
    }
    </> 
  )
}

export default Menus