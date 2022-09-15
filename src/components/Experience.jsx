import React from 'react'
import '../assets/css/experience.css';
import ExperiencePro from './ExperiencePro';
import ExperiencePersonal from './ExperiencePersonal';
import Headline from './Headline';

const Experience = () => {

    return (
        <div id='Experience' className='container'>
            <div className="info">
                <h5>Experience</h5>
                <Headline title='Professional' />
                <ExperiencePro />
                <Headline title='Personal' />
                <ExperiencePersonal />
            </div>
        </div>
    )
}

export default Experience