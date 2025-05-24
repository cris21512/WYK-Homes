import React, { useEffect, useState } from 'react'
import './App.css'
import ClickSpark from './Efects/Animations/ClickSpark/ClickSpark'
import Header from './components/Header/Header'
import About from './components/About/About'
import Works from './components/Works/Works'
import Servicios from './components/Servicios/Servicios'
import Feed from './components/Feed/Feed'
import Count from './components/Count/Count'
import Contact from './components/Contact/Contact'
import AboutPage from './Pages/AboutPage/AboutPage'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event('pushstate')
  window.dispatchEvent(navigationEvent)
}

function App_one() {
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

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('pushstate', onLocationChange)

    return() => {
      window.removeEventListener('puhstate', onLocationChange)
    }
  }, [])

  return(
    <main>
      {currentPath === '/' && <App_one />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App;
