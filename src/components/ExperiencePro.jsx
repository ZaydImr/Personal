import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config';


const ExperiencePro = () => {

    const [experiences, setExperiences] = useState([]);

    useEffect(()=>{

        // experiences.forEach(experience=>{
        //     console.log(experience);
        //     addDoc(collection(db, 'experiences'), experience);
        // })

        getDocs(collection(db,'experiences'))
            .then(res=>{
                setExperiences(res.docs.map(item => item.data()));
            })
        
    },[]);

    

    return (
        <div className="experiences">
            {
                experiences.sort((a, b) => a.index > b.index ? 1 : -1).map(experience =>
                    <div key={experience.index} className="experience-pro">
                        <h4>{experience.title}</h4>
                        <p>
                            {
                                experience.companyUrl ?
                                    <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className='company'>{experience.company} </a> :
                                    <span className='company'>{experience.company} </span>
                            }
                            <span className='date'> | {experience.dateBegin} - {experience.dateEnd || 'Present'}</span>
                        </p>
                        <p>{experience.description}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ExperiencePro