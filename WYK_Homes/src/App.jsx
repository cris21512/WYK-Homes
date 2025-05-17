import { useEffect, useRef } from 'react'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Works from './components/Works/Works'
import Servicios from './components/Servicios/Servicios'
import Feed from './components/Feed/Feed'


function App() {
  return (
    <div>
      <Header />
      <About />
      <Works />
      <Servicios />
      <Feed />
    </div>
  )
}

export default App
