import React from 'react'
import './AboutPage.css'
import fotico from '../../assets/Image_1.jpg'

const AboutPage = () => {
    return (
        <div className='AboutPage-style'>
            <div className='first-part'>
                <h1 className='title-style'>About WYK Homes</h1>
            </div>
            <div className='second-part'>
                <section className='Cont'>
                    <div className='left-style'>
                    <h5 className='ti-style'>About WYK Homes</h5>
                    <h3 className='sub-style'>We Build More Than Houses, We Build Dreams</h3>
                    <p className='mensaje-style'>With craftsmanship, innovation, and a deep understanding of your needs, we create more than just structures  we build homes that reflect your lifestyle.
                    From modern designs to timeless architecture, every project is thoughtfully crafted with quality materials, expert hands, and attention to detail. Your vision is our blueprint.</p>
                    </div>
                    <section>
                        <img src={fotico} alt="que?" className='foto-left' />
                    </section>
                </section>
            </div>
        </div>
    )
}

export default AboutPage;