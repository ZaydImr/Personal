import React from 'react'
import { FaAngular, FaReact, FaNodeJs } from 'react-icons/fa'
import '../assets/about.css'

const About = () => {

      const descriptionJob = "I am using .NET / Spring-boot for the backend , I have experience in various JavaScript frameworks and libraries ( ReactJs / Angular / Vue / ... ) and I have experience with SQL and NoSQL databases .";
      const descriptionPersonal = "I'm passionate about optimizing algorithms, discovering new technologies. I love to write clean, readable code while implementing coding best practices . I adore solve problems.";

      const skills = [
            { title: 'Angular', icon: FaAngular, percentage: 85, color: '#B52E31' },
            { title: 'React', icon: FaReact, percentage: 70 },
            { title: 'NodeJs', icon: FaNodeJs, percentage: 85, color: '#68a063' },
      ]

      return (
            <div id='About' className="about">
                  <div className="container">
                        <div className="info">
                              <h5>About</h5>
                              <h3>Me</h3>
                              <ul className="line">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                              </ul>
                              <div className="me">
                                    <p>
                                          I am Fullstack developer at
                                          <a href="https://www.nttdata.com/global/en/" target="_blank" rel="noopener noreferrer">NTT-DATA</a>
                                          also a student of Software Engineer in
                                          <a href="https://enstetouan.ma/" target="_blank" rel="noopener noreferrer">ENS Tetouan</a>
                                    </p>
                                    <p>{descriptionJob}</p>
                                    <p>{descriptionPersonal}</p>
                              </div>
                              <h3>Skills</h3>
                              <ul className="line">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                              </ul>
                              <div className="skills">
                                    {
                                          skills.map((skill, index) => {
                                                const Icon = skill.icon;
                                                return (
                                                      <div className="about-skills" >
                                                            <div className="skill-item">
                                                                  <div className='skill-header'>
                                                                        <h6>{skill.icon && <Icon color={skill.color} />} {skill.title}</h6>
                                                                        <p>{skill.percentage}%</p>
                                                                  </div>
                                                                  <div className='skill-bar'>
                                                                        <div className='progress-line' style={{ width: (skill.percentage + '%'), backgroundColor: skill.color }}></div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                )
                                          })
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default About
