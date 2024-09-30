import React, {useState, useEffect} from 'react';
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import a_logo from '/assets/img/a_logo.png'
import logob from '/assets/img/logob.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const onButtonClick = () => {
      const pdfUrl = "cv.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "document.pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };
   const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
   return (
      <>
         <div className='nav-bar navbar bg-[#0bb6b3f9] absolute hidden md:flex  z-10 flex-row left-1/2 transform -translate-x-1/2 gap-14  px-4 py-4 !backdrop-blur-xl w-max' >
            <nav className=" flex flex-row gap-14">
               <NavLink exact="true" activeclassname="active" to="/">
                  <FontAwesomeIcon icon={faHome} color='rgb(3, 3, 33)' />
               </NavLink>
               <NavLink exact="true" activeclassname="active" to="/about" className='about_link'>
                  <FontAwesomeIcon icon={faUser} color='rgb(3, 3, 33)' />
               </NavLink>
               <NavLink exact="true" activeclassname="active" to="/project" className='project_link'>
                  <FontAwesomeIcon icon={faProjectDiagram} color='rgb(3, 3, 33)' />
               </NavLink>
               <NavLink exact="true" activeclassname="active" to="/contact" className='contact_link'>
                  <FontAwesomeIcon icon={faEnvelope} color='rgb(3, 3, 33)' />
               </NavLink>

            </nav>
            <div className="border-2 bg-white px-2 border-transparent " >
               <button className='resume-btn' > <a href='https://flowcv.com/resume/o614k8s695' className="text-xl text-[#134848f9] font-semibold">Resume</a></button>
            </div>
            <ul className="social-links flex flex-row gap-14">
               <li>
                  <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ayomide-joel-8590b9251/'>
                     <FontAwesomeIcon icon={faLinkedin} color="rgb(3, 3, 33)" />
                  </a>
               </li>
               <li>
                  <a target="_blank" rel="noreferrer" href='https://github.com/ajanixoxo'>
                     <FontAwesomeIcon icon={faGithub} color="rgb(3, 3, 33)" />
                  </a>
               </li>
               <li>
                  <a target="_blank" rel="noreferrer" href='wa.link/4r99jw'>
                     <FontAwesomeIcon icon={faWhatsapp} color="rgb(3, 3, 33)" />
                  </a>
               </li>
               <li>
                  <a target="_blank" rel="noreferrer" href='https://twitter.com/Dexcoded01'>
                     <FontAwesomeIcon icon={faTwitter} color="rgb(3, 3, 33)" />
                  </a>
               </li>
            </ul>
         </div>
         {/* <div className="container-fluid">
               <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
            </div> */}
       <div className="mobile md:hidden absolute right-2 z-50">
      <nav>
        <div className="navbar">
          <div className="container3 nav-container mt-4 relative">
            {/* Hamburger Menu */}
            <div onClick={toggleMenu} className="hamburger-lines cursor-pointer flex flex-col">
              <div className={`line bg-white w-7 rounded h-[3px] my-[3px] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></div>
              <div className={`line bg-white w-7 rounded h-[3px] my-[3px] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`line bg-white w-7 rounded h-[3px] my-[3px] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></div>
            </div>

            {/* Menu Items */}
            <ul
              className={`menu-items absolute right-0 top-full bg-white text-black p-4 flex flex-col items-end space-y-4 transition-transform duration-300 ${
                isOpen ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
              }`}
            >
              <li>
                <NavLink exact="true" activeClassName="active" to="/">
                  <FontAwesomeIcon icon={faHome} />
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" activeClassName="active" to="/about">
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" activeClassName="active" to="/project">
                  <FontAwesomeIcon icon={faProjectDiagram} />
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" activeClassName="active" to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" activeClassName="active" to="https://www.linkedin.com/in/ayomide-joel-8590b9251/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" activeClassName="active" to="https://github.com/your-github-profile">
                  <FontAwesomeIcon icon={faGithub} />
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" activeClassName="active" to="wa.link/4r99jw">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" activeClassName="active" to="https://twitter.com/Dexcoded01">
                  <FontAwesomeIcon icon={faTwitter} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

      </>

   )
}



export default Sidebar