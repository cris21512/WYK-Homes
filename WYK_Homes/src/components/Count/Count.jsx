import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Count.css'
import CountUp from '../../Efects/TextAnimations/CountUp/CountUp'
import GradientText from '../../Efects/TextAnimations/GradientText/GradientText'
import Threads from '../../Efects/Backgrounds/Threads/Threads'

const Count = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
    }, []);

    return (
        <section className='Count-style' id='Count'>
            <div style={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden' }}>
                <Threads
                    amplitude={2.1}
                    distance={0.2}
                    enableMouseInteraction={false}
                />
            </div>
            <section className='counter-style' data-aos="fade-up">
                <div className='column-style'>
                    <h2>Built Works:</h2>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className='gradient-style'
                    >
                        <span style={{ fontSize: '6rem', color: 'inherit' }}>+</span>
                        <CountUp
                            from={10}
                            to={150}
                            separator=","
                            direction="up"
                            duration={1.5}
                            className="number-style"
                            delay={0.1}
                        />
                    </GradientText>
                </div>
                <div className='column-style'>
                    <h2> House Types:</h2>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className='gradient-style'
                    >
                        <CountUp
                            from={0}
                            to={5}
                            separator=","
                            direction="up"
                            duration={2}
                            className="number-style"
                            delay={0.3}
                        />
                    </GradientText>
                </div>
                <div className='column-style'>
                    <h2>Prices Starting At :</h2>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className='gradient-style'
                    >
                        <span style={{ fontSize: '6rem', color: 'inherit' }}>$</span>
                        <CountUp
                            from={0}
                            to={1}
                            separator=","
                            direction="up"
                            duration={3}
                            className="number-style"
                            delay={0.6}
                        />
                        <span style={{ fontSize: '6rem', color: 'inherit' }}>K</span>
                        <span style={{ fontSize: '6rem', color: 'inherit' }}>-</span>
                        <CountUp
                            from={0}
                            to={5}
                            separator=","
                            direction="up"
                            duration={3}
                            className="number-style"
                            delay={0.3}
                        />
                        <span style={{ fontSize: '6rem', color: 'inherit' }}>K</span>
                    </GradientText>
                </div>
            </section>
        </section>
    )
}

export default Count;