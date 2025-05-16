import { useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'


function App() {
  return (
    <div>
      <Header />
      <About />
    </div>
  )
}

export default App
