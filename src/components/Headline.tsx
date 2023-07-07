import React from 'react'
import { FaRegGem } from 'react-icons/fa'

const Headline = (props: { title?: string }) => {
    return (
        <>
            {props.title &&
                <h4 style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {props.title==='Top Skills' && <FaRegGem />} {props.title}
                </h4>}
            <ul className="line">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}

export default Headline