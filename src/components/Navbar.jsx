import React, { useEffect, useState } from 'react'
import logo from '../logo.png'
import {FaBars} from 'react-icons/fa'
import { Link,animateScroll as scroll } from 'react-scroll'
import '../assets/navbar.css'

const Navbar = () => {

      const [top,setTop] = useState(true);

      useEffect(()=>{
            let event ;
            window.removeEventListener('scroll',event);
            event = window.addEventListener('scroll',()=>{
                    if(window.scrollY<=1){
                          setTop(true);
                        }
                    else
                          setTop(false);
              })
              window.removeEventListener('scroll',event);
        },[])

      return (
            <nav>
                  <div className={top ? 'navbar' : 'navbar navbar-fixed'}>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/zaydimr/' className="logo">
                              <img src={logo} alt='Zayd EL IMRANI'/>
                        </a>
                        <ul>
                              <li><a href='#' onClick={()=>scroll.scrollToTop()} className='nav-link'>Home</a></li>
                              <li><Link to='About' smooth='true' className='nav-link'>About</Link></li>
                              <li><Link to='Experience' smooth='true' className='nav-link'>Experience</Link></li>
                              <li><Link to='Projects' smooth='true' className='nav-link'>Projects</Link></li>
                              <li><Link to='Contact' smooth='true' className='nav-link'>Contact</Link></li>
                        </ul>
                        <button type="button"><FaBars/></button>
                  </div>
                  
            </nav>
      )
}

export default Navbar
