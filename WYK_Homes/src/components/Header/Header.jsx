import React, { useEffect } from 'react'
import BlurText from '../../Efects/TextAnimations/BlurText/BlurText';
import FadeContent from '../../Efects/Animations/FadeContent/FadeContent'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Navbar/Navbar';

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
    <section className='Header-style'>
        <Navbar/>
        <div className='Blur-Header'/>
        <BlurText
        text="WYK Homes"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="WYK"
        />
        <BlurText
        text="Your new home starts here: smart design, solid construction, and personalized care."
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="Text-house"
        />
    </section>
    )
}

export default Header;