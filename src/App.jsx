import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-center relative z-0 bg-primary">
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
