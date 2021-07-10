import React from 'react'
import logo from '../logo.png'
import {FaBars} from 'react-icons/fa'
import { Link,animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
      return (
            <nav>
                  <div className="navbar">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/zaydimr/' className="logo">
                              <img src={logo} alt='Zayd EL IMRANI'/>
                        </a>
                        <ul>
                              <li><a onClick={()=>scroll.scrollToTop()}>Home</a></li>
                              <li><Link to='About' smooth='true'>About</Link></li>
                              <li><Link to='Experience' smooth='true'>Experience</Link></li>
                              <li><Link to='Projects' smooth='true'>Projects</Link></li>
                        </ul>
                        <button type="button"><FaBars/></button>
                  </div>
                  
            </nav>
      )
}

export default Navbar
