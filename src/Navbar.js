import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import {FaGithub, FaLinkedin} from 'react-icons/fa'

import './Navbar.css'; // Your CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
    
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link  activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav_text_props" onClick={toggleMenu}>About</Link></li>
          <li><Link  activeClass="active"
                    to="Experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav_text_props" onClick={toggleMenu}>Experiences</Link></li>
          <li><Link  activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav_text_props" onClick={toggleMenu}>Projects</Link></li>
                    <div className='social-icons'>
          <li>
            <a href="https://www.linkedin.com/in/hari-preetham-934789201/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <FaLinkedin/>
            </a>
          </li>
          <li>
            <a href="https://github.com/GODCREATOR333" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <FaGithub />
            </a>
          </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
