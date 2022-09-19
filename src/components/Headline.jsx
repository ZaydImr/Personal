import React from 'react'

const Headline = ({title}) => {
    return (
        <>
            {title && <h4>{title}</h4>}
            <ul className="line">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}

export default Headline