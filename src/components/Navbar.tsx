import React, { useEffect, useState } from 'react'
import logo from '../assets/img/logo.webp'
import { FaBars } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'
import '../assets/css/navbar.css'

const Navbar = () => {

      const [top, setTop] = useState(true);

      useEffect(() => {
            let event:any;
            window.removeEventListener('scroll', event);
            event = window.addEventListener('scroll', () => {
                  if (window.scrollY <= 1) {
                        setTop(true);
                  }
                  else
                        setTop(false);
            })
            window.removeEventListener('scroll', event);
      }, [])

      return (
            <nav>
                  <div className={top ? 'navbar' : 'navbar navbar-fixed'}>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/zaydimr/' className="logo">
                              <img src={logo} alt='Zayd EL IMRANI' />
                        </a>
                        <ul>
                              <li><Link to='' smooth='true' href='#' onClick={() => scroll.scrollToTop()} className='nav-link'>Home</Link></li>
                              <li><Link to='About' smooth='true' href='#' className='nav-link'>About</Link></li>
                              <li><Link to='Experience' href='#' smooth='true' className='nav-link'>Experience</Link></li>
                              <li><Link to='Certifications' href='#' smooth='true' className='nav-link'>Certifications</Link></li>
                              <li><Link to='Contact' href='#' smooth='true' className='nav-link'>Contact</Link></li>
                        </ul>
                        <button type="button"><FaBars /></button>
                  </div>

            </nav>
      )
}

export default Navbar
