import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image_1 from '../../assets/Image_1.jpg'
import Image_2 from '../../assets/Image_2.jpg'

function Button () {
    return(
        <button>
            <p className='more-about'> More About Us</p>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="4"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                >
                </path>
            </svg>
        </button>
    )
}

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <section className='About-style'>
            <div className='Center'>
                <section className='Left-style'>
                    <h6 className='Big-cloud' data-aos="fade-up">About Big Cloud</h6>
                    <p data-aos="fade-up">We deliver high quality construction with attention to every detail. Backed by experience and guaranteed results... Because your home deserves the best.
                    </p>
                    <img src={Image_2} alt="Logo-one" className='foto-left' data-aos="fade-up"/>
                </section>
                <section className='Right-style'>
                    <img src={Image_1} alt="house-one" className='foto-right' data-aos="fade-down"/>
                    <p data-aos="fade-down">
                        Our dedicated team of skilled professionals combines years of experience with a passion for excellence. They deliver flawless results on time and within budget, your vision in expert hands.
                    </p>
                    <div data-aos="fade-down"><Button/></div>
                </section>
            </div>
        </section>
    )
}

export default About;
