import React from 'react'

import './Featured.css'

import ba from '../../src/assests/ba.jpeg'
import bad from '../../src/assests/bad.jpeg'
import bad2 from '../../src/assests/bad2.jpeg'
import ga from '../../src/assests/ga.jpeg'
import img6 from '../../src/assests/img6.jpeg'

import img from '../../src/assests/img.jpeg'
import swim from '../../src/assests/swim.jpeg'
import daining from '../../src/assests/daining.jpeg'
import rest from '../../src/assests/rest.jpeg'
import img7 from '../../src/assests/img7.jpeg'
import kit from '../../src/assests/kit.jpeg'
import din from '../../src/assests/din.jpeg'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={swim} alt='' />
                <img src={daining} alt='' />
                <img src={din} alt='' />
                <img src={ba} alt='' />
                <img src={rest} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>2</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>garden:</p><p>1</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={img7} alt='' />
                <img className='order-3' src={img6} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={ga} alt='' />


                <img className='order-4' src={bad2} alt='' />
                <img className='order-5' src={bad} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>2</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>kitchen:</p>1<p></p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured