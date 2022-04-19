import React from 'react'

const Headline = ({title}) => {
    return (
        <>
            {title && <h3>{title}</h3>}
            <ul className="line">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}

export default Headline