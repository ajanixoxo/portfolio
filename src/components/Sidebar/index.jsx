

import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import a_logo from '/assets/img/a_logo.png'
import logob from '/assets/img/logob.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Sidebar = () => {
   return (
      <>
        <div className='nav-bar navbar'>
         {/* <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
         </div>
   <div></div>         */}
    <Link className='logo' to='/'>

            <div>
            <div className='logo-img'></div>
            <div className='logo-text'><img src={logob} alt='log' /></div>
            </div>
         

         </Link>
         <nav>
            <NavLink exact="true" activeclassname="active" to="/">
               <FontAwesomeIcon icon={faHome} color='#fff' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about" className='about_link'>
               <FontAwesomeIcon icon={faUser} color='#fff' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/project" className='project_link'>
               <FontAwesomeIcon icon={faProjectDiagram} color='#fff' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className='contact_link'>
               <FontAwesomeIcon icon={faEnvelope} color='#fff' />
            </NavLink>

         </nav>
   <ul>
      <li>
         <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ayomide-joel-8590b9251/'>
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
         </a>
      </li>
      <li>
         <a target="_blank" rel="noreferrer" href='https://github.com/ajanixoxo'>
            <FontAwesomeIcon icon={faGithub} color="#fff" />
         </a>
      </li>
      <li>
         <a target="_blank" rel="noreferrer" href='https://wa.link/r2kpcb'>
            <FontAwesomeIcon icon={faWhatsapp} color="#fff" />
         </a>
      </li>
      <li>
         <a target="_blank" rel="noreferrer" href='https://twitter.com/Dexcoded01'>
            <FontAwesomeIcon icon={faTwitter} color="#fff" />
         </a>
      </li>
   </ul>
      </div>
      <div className="mobile">
      <nav>
      <div className="navbar">
        <div className="container3 nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
    
          <div className="menu-items">
            <li> <NavLink exact="true" activeclassname="active" to="/">
               <FontAwesomeIcon icon={faHome} color='black' />
            </NavLink></li>
            <li>
           <NavLink exact="true" activeclassname="active" to="/about" className='about_link'>
               <FontAwesomeIcon icon={faUser} color='black' />
            </NavLink>
            </li>
            <li>
             <NavLink exact="true" activeclassname="active" to="/project" className='project_link'>
               <FontAwesomeIcon icon={faProjectDiagram} color='black' />
            </NavLink></li>
            <li> <NavLink exact="true" activeclassname="active" to="/contact" className='contact_link'>
               <FontAwesomeIcon icon={faEnvelope} color='black' />
            </NavLink>
</li>

<li> <NavLink exact="true" activeclassname="active" to="https://www.linkedin.com/in/ayomide-joel-8590b9251/">
               <FontAwesomeIcon icon={faLinkedin} color='black' />
            </NavLink></li>
            <li>
           <NavLink exact="true" activeclassname="active" to="https://www.linkedin.com/in/ayomide-joel-8590b9251/" className='about_link'>
               <FontAwesomeIcon icon={faGithub} color='black' />
            </NavLink>
            </li>
            <li>
             <NavLink exact="true" activeclassname="active" to="https://wa.link/r2kpcb" className='project_link'>
               <FontAwesomeIcon icon={faWhatsapp} color='black' />
            </NavLink></li>
            <li> <NavLink exact="true" activeclassname="active" to="https://twitter.com/Dexcoded01" className='contact_link'>
               <FontAwesomeIcon icon={faTwitter} color='black' />
            </NavLink>
            </li>


      
   
          </div>
        </div>
      </div>
    </nav>
      </div>

  
      </>
    
   )
}



export default Sidebar