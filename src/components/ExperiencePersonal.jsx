import React from 'react'

const ExperiencePro = () => {

    const projects = [
        { title: 'Fullstack developer', company: 'NTT DATA', dateBegin: '2021/11', description: 'Creation of website with an application mobile and desktop using ReactJs / Electron / Java / Firebase .' },
        { title: 'Fullstack developer', company: 'UpWork', dateBegin: '2021/02', description: 'Creation of website with an application mobile and desktop using ReactJs / Electron / Java / Firebase .' },
        { title: 'Fullstack developer', company: 'Moka3ab SARL', dateBegin: '2021/05', description: 'Creation of website with an application mobile and desktop using ReactJs / Electron / Java / Firebase .' }
    ];

    return (
        <div className="projects">
            {
                projects.map(project =>
                    <div className="project">
                        <h4>{project.title}</h4>

                        <p>{project.description}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ExperiencePro