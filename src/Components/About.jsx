import React from 'react'

const About = () => {
      return (
            <div id="About" className="About">
                  <h5>About</h5>
                  <div className="Profil">
                        <h3>Profil</h3>
                        <ul className="line">
                              <li></li>
                              <li></li>
                              <li></li>
                        </ul>
                        <p>Full-stack web developer. I work front-end with ReactJS and back-end with .NET
                              Core. I am passionate about optimizing algorithms, discovering new technologies.
                              I enjoy writing clean, readable code while implementing coding best practices.</p>
                  </div>
                  <div className="info">
                        <h3>Skills</h3>
                        <ul className="line">
                              <li></li>
                              <li></li>
                              <li></li>
                        </ul>
                  </div>
                  <div className="flex">
                        <div className="container">
                              <div className="about-skills">
                                    <div className="skill-item">
                                          <div className='skill-header'>
                                                <h6>React</h6>
                                                <p>85%</p>
                                          </div>
                                          <div className='skill-bar'>
                                                <div className='progress-line' style={{ width:  85+'%' }}></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="container">
                              <div className="about-skills">
                                    <div className="skill-item">
                                          <div className='skill-header'>
                                                <h6>React</h6>
                                                <p>85%</p>
                                          </div>
                                          <div className='skill-bar'>
                                                <div className='progress-line' style={{ width: 85+'%' }}></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default About
