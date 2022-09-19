import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { FaAngular, FaReact, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa'
import '../assets/css/about.css'
import { db } from '../firebase/config'
import Headline from './Headline'

const About = () => {

      const [skills, setSkills] = useState([]);

      const descriptionJob = "I am using .NET / Spring-boot for the backend , I have experience in various JavaScript frameworks and libraries ( ReactJs / Angular / Vue / ... ) and I have experience with SQL and NoSQL databases .";
      const descriptionPersonal = "I'm passionate about optimizing algorithms, discovering new technologies. I love to write clean, readable code while implementing coding best practices . I adore solve problems.";
      const icons = [
            { icon: FaAngular, name: 'FaAngular' },
            { icon: FaReact, name: 'FaReact' },
            { icon: FaNodeJs, name: 'FaNodeJs' },
            { icon: FaJava, name: 'FaJava' },
            { icon: FaGitAlt, name: 'FaGitAlt' }
      ];

      useEffect(() => {
            // setSkills([
            //       { title: 'Angular', icon: 'FaAngular', percentage: 85, color: '#B52E31' },
            //       { title: 'React', icon: 'FaReact', percentage: 70 },
            //       { title: 'NodeJs', icon: 'FaNodeJs', percentage: 85, color: '#68a063' },
            //       { title: 'Spring boot', icon: 'FaJava', percentage: 78, color: 'red' },
            //       { title: '.NET CORE API', percentage: 78, color: 'blue' },
            // ]);

            // await setDoc(doc(db,'skills', 'one'),{ title: 'NodeJs', icon: 'FaNodeJs', percentage: 85, color: '#68a063' });

            // skills.forEach( element => {
            //       addDoc(collection(db, 'skills'), element);
            // });

            getDocs(collection(db, 'skills')).then(res => {
                  setSkills(res.docs.map(item => item.data()));
            })
      }, []);



      return (
            <div id='About' className="about container">
                  <div className="info">
                        <h3>About</h3>
                        <Headline title="Me"/>
                        <div className="me">
                              <p>
                                    I am Fullstack developer at
                                    <a href="https://www.nttdata.com/global/en/" target="_blank" rel="noopener noreferrer">NTT-DATA</a>
                                    also a student of Software Engineer in
                                    <a href="https://enstetouan.ma/" target="_blank" rel="noopener noreferrer">ENS Tetouan</a>
                                    .
                              </p>
                              <p>{descriptionJob}</p>
                              <p>{descriptionPersonal}</p>
                        </div>
                        <Headline title="Skills"/>
                        <div className="skills">
                              {
                                    skills.sort((a, b) => a.percentage < b.percentage ? 1 : -1).map((skill, index) => {
                                          const Icon = icons.find(icon => icon.name === skill.icon)?.icon || null;
                                          return (
                                                <div key={index} className="about-skills" >
                                                      <div className="skill-item">
                                                            <div className='skill-header'>
                                                                  <h5>{Icon && <Icon color={skill.color} />} {skill.title}</h5>
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
      )
}

export default About
