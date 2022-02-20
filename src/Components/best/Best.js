import React from 'react'


import img2 from '../../../src/assests/img2.jpeg'
import img3 from '../../../src/assests/img3.jpeg'
import kit from '../../../src/assests/kit.jpeg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={img2} alt='' />
                <img src={img3} alt='' />
                <img src={kit} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best