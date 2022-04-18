import React from 'react'
import MyLove from '../DSC_0002.png'
import Navbar from './Navbar';
import '../assets/home.css'
import { FaFacebook, FaHackerrank, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { Link } from 'react-scroll'

const Home = () => {
      return (
            <div className="home">
                  <Navbar />
                  <div className='social'>
                        <a className='social-link' target='_blank' href='https://www.linkedin.com/in/zaydimr/' rel="noreferrer"><FaLinkedin /><span className="tooltiptext">LinkedIn</span></a>
                        <a className='social-link' target='_blank' href='https://www.hackerrank.com/Zaydimr' rel="noreferrer"><FaHackerrank /><span className="tooltiptext">HackerRank</span></a>
                        <a className='social-link' target='_blank' href='https://github.com/ZaydImr' rel="noreferrer"><FaGithub /><span className="tooltiptext">Github</span></a>
                        <a className='social-link' target='_blank' href='https://www.instagram.com/zayd.imr/' rel="noreferrer"><FaInstagram /><span className="tooltiptext">Instagram</span></a>
                        <a className='social-link' target='_blank' href='https://www.facebook.com/Zayd.imr/' rel="noreferrer"><FaFacebook /><span className="tooltiptext">Facebook</span></a>
                  </div>
                  <div className="container">
                        <div className="home-content">
                              <div className="content">
                                    <h4>Hello I'm</h4>
                                    <h2>Zayd EL IMRANI</h2>
                                    <h1 className='span_content'>Fullstack developer - Software Engineer student</h1><br />
                                    <Link to='About' smooth='true'><input type="button" value="About me" /></Link>
                              </div>
                        </div>
                        <div className="home-image">
                              <img src={MyLove} alt='Personal img' />
                        </div>
                  </div>
                  <div className="back"></div>
            </div>
      )
}

export default Home
