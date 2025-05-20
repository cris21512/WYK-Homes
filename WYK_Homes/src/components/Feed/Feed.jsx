import React, { useEffect } from 'react'
import person from '../../assets/person.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Feed.css'

const Feed = () => {
    useEffect(() => {
        AOS.init({ 
        duration: 1000,
        once:true,
        });
    }, []);

    return (
        <section className='Feed-style'>
            <img src={person} alt="Person" data-aos="fade-up" className='ima-style'/>
            <p className='texto-feed-style' data-aos="fade-up" >“ From the moment I visited their offices to the day I stepped into my new home, WYK Homes exceeded all my expectations. They communicated clearly, met every deadline, and delivered exactly what I asked for. The result is a beautiful, high quality home tailored to me without surprises or hidden costs. I fully recommend WYK Homes for their professionalism and commitment to customer satisfaction. ”
            </p>
        <span className='Name-style' data-aos="fade-up">Jhonson Mckenni homeowner in Morgantown West Virginia </span>
        </section>
    )
}

export default Feed;