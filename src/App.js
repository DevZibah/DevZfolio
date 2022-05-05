import { useState, useEffect, Fragment } from 'react'
import Typical from 'react-typical'
import './style/All.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Role from './components/Role'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className='App'>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className='first-div'>
            <Navbar />
            <Intro />
          </div>
          <div className='mt-5'>
            <About />
            <Projects />
            <Role />
            <Contact />
            <Copyright />
          </div>
        </div>
      )}
      {/* <Typical
        steps={['Hello world!!!', 1500]}
        loop={Infinity}
        wrapper='p'
      /> */}
    </div>
  )
}

export default App
