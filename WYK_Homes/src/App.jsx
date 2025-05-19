import { useEffect, useRef } from 'react'
import './App.css'
import ClickSpark from './Efects/Animations/ClickSpark/ClickSpark'
import Header from './components/Header/Header'
import About from './components/About/About'
import Works from './components/Works/Works'
import Servicios from './components/Servicios/Servicios'
import Feed from './components/Feed/Feed'
import Count from './components/Count/Count'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div>
      <Header />
      <About />
      <Works />
      <Servicios />
      <Feed />
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {<Count />}
      </ClickSpark>
      <Contact />
    </div>
  )
}

export default App
