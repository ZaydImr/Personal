import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { FaAngular, FaReact, FaNodeJs, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa'
import '../assets/css/about.css'
import { db } from '../firebase/config'
import { Icon } from '../models/icon'
import { Skill } from '../models/skill'
import Headline from './Headline'

const About = () => {

      const [skills, setSkills] = useState<Skill[]>([]);

      const descriptionJob: string = "Fullstack .NET Core 🤯 / Angular 🤩 developer, experienced with SQL and NoSQL databases.";
      const descriptionPersonal: string = "I have a keen interest in web development with focus on quality code, best practices, optimizing algorithms, discovering new technologies. I love to write clean, readable code and solve problems.";
      const icons: Icon[] = [
            { icon: FaAngular, name: 'FaAngular' },
            { icon: FaReact, name: 'FaReact' },
            { icon: FaNodeJs, name: 'FaNodeJs' },
            { icon: FaJava, name: 'FaJava' },
            { icon: FaGitAlt, name: 'FaGitAlt' },
            { icon: FaDatabase, name: 'FaDatabase' }
      ];

      useEffect(() => {
            getDocs(collection(db, 'skills')).then(res => setSkills(res.docs.map(item => item.data()) as Skill[]))
      }, []);

      return (
            <div id='About' className="about container">
                  <div className="info">
                        <div className='hidden'>
                              <h3>About</h3>
                              <Headline title="Me" />
                              <div className="me">
                                    <p>{descriptionJob}</p>
                                    <p>{descriptionPersonal}</p>
                              </div>
                        </div>
                        <div className='hidden'>
                              <Headline title="Top Skills" />
                              <div className="skills">
                                    {
                                          //a.percentage < b.percentage
                                          skills.sort((a, b) => a.index > b.index ? 1 : -1).map((skill, index) => {
                                                const Icon = icons.find(icon => icon.name === skill.icon)?.icon || null;
                                                return (
                                                      <div key={index} className="about-skills" >
                                                            <div className="tag" style={{ backgroundColor: skill.color, color: 'white' }}>
                                                                  {Icon && <Icon />} {skill.title}
                                                            </div>
                                                            {/* <div className="skill-item">
                                                                  <div className='skill-header'>
                                                                        <h5>{Icon && <Icon color={skill.color} />} {skill.title}</h5>
                                                                        <p>{skill.percentage}%</p>
                                                                  </div>
                                                                  <div className='skill-bar'>
                                                                        <div className='progress-line' style={{ width: (skill.percentage + '%'), backgroundColor: skill.color }}></div>
                                                                  </div>
                                                            </div> */}
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
