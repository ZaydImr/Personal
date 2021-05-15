import React from 'react'
import logo from '../logo.png'

const Navbar = () => {
      return (
            <nav>
                  <div className="navbar">
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/zaydimr/' className="logo">
                              <img src={logo} alt='Zayd EL IMRANI'/>
                        </a>
                        <ul>
                              <li><a href='/#'>Home</a></li>
                              <li><a href='/#About'>About</a></li>
                              <li><a href='/#Projects'>Projects</a></li>
                              <li><a href='/#Experience'>Experience</a></li>
                        </ul>
                  </div>
                  
            </nav>
      )
}

export default Navbar
