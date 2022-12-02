import React from 'react'

const Headline = (props: { title?: string }) => {
    return (
        <>
            {props.title && <h4>{props.title}</h4>}
            <ul className="line">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}

export default Headline