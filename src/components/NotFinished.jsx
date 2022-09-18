import React from 'react'

const NotFinished = () => {
    return (
        <div id='NotFinished' className="not-finished container" style={{width: '80%', margin: 'auto'}}>
            <div>
                The website isn't finished yet .
                <a href="https://github.com/ZaydImr/Personal" target="_blank" rel="noopener noreferrer">Check the repository .</a>
            </div>
            <div style={{ marginBottom: '2rem', marginTop: "1rem" }}>
                <a href="https://drive.google.com/file/d/1mx__wFU1W4s878aCpo3ORNL2OFAHCg3r/view?usp=sharing" target="_blank" rel="noopener noreferrer">or you can check my resume (CV) here</a>
            </div>
        </div>
    )
}

export default NotFinished