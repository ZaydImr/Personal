import React from 'react'

const ExperiencePro = () => {

    const experiences = [
        { title: 'Fullstack developer', company: 'NTT DATA', dateBegin: '2021/11', description: 'Creation of website with an application mobile and desktop using ReactJs / Electron / Java / Firebase .' },
        { title: 'Fullstack developer', company: 'UpWork', dateBegin: '2021/02', description: 'Creation of website with an application mobile and desktop using ReactJs / Electron / Java / Firebase .' },
        { title: 'Fullstack developer', company: 'Moka3ab SARL', dateBegin: '2021/05', description: 'Creation of website with an application mobile and desktop using ReactJs / Electron / Java / Firebase .' }
    ];

    return (
        <div className="experiences">
            {
                experiences.map(experience =>
                    <div className="experience">
                        <h4>{experience.title} - {experience.company} <label>{experience.dateBegin}</label></h4>

                        <p>{experience.description}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ExperiencePro