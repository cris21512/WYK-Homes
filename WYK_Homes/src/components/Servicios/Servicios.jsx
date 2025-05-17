import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import check from '../../assets/icons/check.svg'
import hammer from '../../assets/icons/hammer.svg'
import gavel from '../../assets/icons/truck.svg'
import time_cheak from '../../assets/icons/calendar.svg'
import group from '../../assets/icons/group.svg'
import price from '../../assets/icons/price.svg'
import './Servicios.css'

const Servicios = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className='Services-style' id='services'>
            <header>
                <h1 className='Title-services' data-aos="fade-up">¿Why Choose Us?</h1>
            </header>
            <section className='Cards-container'>
                <div data-aos="fade-right">
                    <div className='Card-ser'>
                        <div className='Content-card'>
                            <img src={hammer} alt="hammer" className='Image-card' />
                            <h1 className='Title-card'>
                                Professional Framing
                            </h1>
                            <p className='Text-card'>Specialists in residencial wood framing structures.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className='Card-ser'>
                        <div className='Content-card'>
                            <img src={check} alt="Check" className='Image-card' />
                            <h1 className='Title-card'>High Quality Materials</h1>
                            <p className='Text-card'>We use only treated and certified wood for long lasting results.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div className='Card-ser'>
                        <div className='Content-card'>
                            <img src={gavel} alt="gavel" className='Image-card' />
                            <h1 className='Title-card'>
                                Code Compliance Guaranteed
                            </h1>
                            <p className='Text-card'>
                                We strictly follow U.S. building codes and standards.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className='Card-ser'>
                        <div className='Content-card'>
                            <img src={time_cheak} alt="time-check" className='Image-card' />
                            <h1 className='Title-card'>
                                On Time Project Delivery
                            </h1>
                            <p className='Text-card'>We are committed to delivering projects on schedule.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className='Card-ser'>
                        <div className='Content-card'>
                            <img src={group} alt="Group" className='Image-card'/>
                            <h1 className='Title-card'>Support for General Contractors</h1>
                            <p className='Text-card'>We work closely with contractors to ensure smooth workflows.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div className='Card-ser'>
                        <div className='Content-card'>
                            <img src={price} alt="Price" className='Image-card'/>
                            <h1 className='Title-card'>
                                Custom Estimates
                            </h1>
                            <p className='Text-card'>
                                Clear, personalized quotes tailored to your project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Servicios;
