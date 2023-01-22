import React from 'react'
import { FaGithub } from 'react-icons/fa'

const NotFinished = () => {
    return (
        <div id='NotFinished' className="not-finished container hidden" style={{width: '80%', margin: 'auto', marginTop:30}}>
            <div>
                To see my projects you can check my Github account : 
                <a href="https://github.com/ZaydImr" target="_blank" rel="noopener noreferrer" className='social-link' style={{position: 'relative', padding: 0, paddingLeft: '1rem'}}><FaGithub /><span className="tooltiptext">Github</span></a>
            </div>
            <div style={{ marginBottom: '2rem', marginTop: "2rem" }}>
                <a href="https://drive.google.com/file/d/1jDnyDgvCBZ0tOsr6daTnxx4F_yR_7SAa/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check my resume (CV) here</a>
            </div>
        </div>
    )
}

export default NotFinished