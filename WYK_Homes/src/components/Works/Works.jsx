import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Works.css'
import FlowingMenu from '../../Efects/Components/FlowingMenu/FlowingMenu'
import item_1 from '../../assets/item_1.jpg'
import item_2 from '../../assets/item_2.jpg'
import item_3 from '../../assets/item_3.jpg'
import item_4 from '../../assets/item_4.jpg'
import item_5 from '../../assets/item_5.jpg'
import { a } from '@react-spring/web';

const demoItems = [
    { link: '#', text: 'Richland', image: item_1 },
    { link: '#', text: 'West Virginia', image: item_2 },
    { link: '#', text: 'Cambria', image: item_3},
    { link: '#', text: 'Richland', image: item_4 },
    { link: '#', text: 'Cambria', image: item_5},
];

function ViewAllWorks(){
    return(
        <a href="#Works">
            <button>
            <p className='more-about'>View All Works</p>
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
        </a>
    )
}


const Works = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once:true,
        });
    }, []);

    return (
        <div className='Works-style'>
            <section>
                <div className='Info-style'>
                    <section>
                        <h1 className='Title-style' data-aos="fade-up">Works</h1>
                        <p className='Sub-title' data-aos="fade-up">Some of our works</p>
                    </section>
                    <section>
                        <p className='txt' data-aos="fade-up">
                            A selection of our recent projects designed and built with the quality and dedication that define us.
                        </p>
                        <div data-aos="fade-up">
                            <ViewAllWorks />
                        </div>
                    </section>
                </div>
                <section className='images' data-aos="fade-up">
                    <div style={{ height: '600px', position: 'relative' }} data-aos="fade-down">
                        <FlowingMenu items={demoItems} />
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Works;