import React from 'react'
import MyLove from '../DSC_0002.png'
import Navbar from './Navbar';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Home = () => {
      return (
            <div className="home">
                  <Navbar />
                  <div className='social'>
                              <a target='_blank' href='https://www.linkedin.com/in/zaydimr/'><FaLinkedin/></a>
                              <a target='_blank' href='https://github.com/ZaydImr'><FaGithub/></a>
                              <a target='_blank' href='https://www.instagram.com/zayd.imr/'><FaInstagram/></a>
                              <a target='_blank' href='https://www.facebook.com/Zayd.imr/'><FaFacebook/></a>
                  </div>
                  <div className="container">
                        <div className="home-content">
                              <div className="content">
                                    <h4>Hello I'm</h4>
                                    <h2>Zayd EL IMRANI</h2>
                                    <span>Software development technician</span><br/>
                                    <a href="/#About">
                                          <input type="button" value="About me"/>
                                    </a>
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
