import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useSpring, animated } from 'react-spring'

const Navbar = () => {
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <div className='mt-2'>
      <nav className='navbar navbar-expand-lg'>
        {/* <animated.div style={props} className='text-uppercase'>
          Chisom
        </animated.div> */}
        <div className='mt-1'>
          <h5 className='text-uppercase'>chisom</h5>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars iccon'></i>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link linnk' to='/'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link linnk' to='/'>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
