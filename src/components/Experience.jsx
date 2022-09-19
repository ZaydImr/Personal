import React, { useEffect, useState } from 'react'
import '../assets/css/experience.css';
import Headline from './Headline';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config';

const Experience = () => {

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        // add experience
        // experiences.forEach(experience=>{
        //     console.log(experience);
        //     addDoc(collection(db, 'experiences'), experience);
        // })

        getDocs(collection(db, 'experiences'))
            .then(res => {
                setExperiences(res.docs.map(item => item.data()));
            })

    }, []);

    return (
        <div id='Experience' className='container'>
            <div className="info">
                <h3>Experience</h3>
                <Headline />
                <div className="experiences">
                    {
                        experiences.sort((a, b) => a.index > b.index ? 1 : -1).map(experience =>
                            <div key={experience.index} className="experience-pro">
                                <h4>{experience.title} |
                                    {
                                        experience.companyUrl ?
                                            <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className='company'> {experience.company} |</a> :
                                            <span className='company'> {experience.company} |</span>
                                    }
                                    <span className='date'> {experience.dateBegin} - {experience.dateEnd || 'Present'}</span>
                                </h4>
                                <div>{experience.description && experience.description.map((desc, index) => <p key={index} style={{paddingLeft:15}}>{desc}</p>)}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience