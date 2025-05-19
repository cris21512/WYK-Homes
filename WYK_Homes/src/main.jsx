import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import ReactLenis from 'lenis/react'
import 'lenis/dist/lenis.css'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        duration: 0.7,
        easing: t => 1 - Math.pow(1 - t, 3),
        smoothTouch: true
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>,
)
