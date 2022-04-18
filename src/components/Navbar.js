import React, { useEffect, useState } from 'react'
import logo from '../logo.png'
import {FaBars} from 'react-icons/fa'
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
                              <li><a href='/#'>Home</a></li>
                              <li><a href='/#About'>About</a></li>
                              <li><a href='/#Projects'>Projects</a></li>
                              <li><a href='/#Experience'>Experience</a></li>
                        </ul>
                        <button type="button"><FaBars/></button>
                  </div>
                  
            </nav>
      )
}

export default Navbar
