import React, { useEffect, useState } from 'react'
import Headline from './Headline'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config';

const Certifications = () => {

    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'certifications'))
            .then(res => {
                setCertifications(res.docs.map(item => item.data()));
            });
    }, []);


    return (
        <div id='Certifications' className="about container">
            <div className="info">
                <h3>Certifications</h3>
                <Headline />
                <div className="skills" style={{marginTop:20}}>
                    {
                        certifications.sort((a, b) => a.index < b.index ? 1 : -1).map((certificate, index) => {
                            return (
                                <div key={index} className="about-skills" >
                                    <a href={certificate.link} target='_blank' rel="noreferrer" className="certificate-item">
                                        <img src={certificate.imgUrl} alt="" loading="lazy" className='certificate-img' />
                                        <div>
                                            <h5>{certificate.title}</h5>
                                            <p>issued {certificate.issued}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Certifications