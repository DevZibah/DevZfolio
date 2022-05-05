import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div
      className='mt-2'
      data-aos='fade-up'
      data-aos-offset='200'
      data-aos-easing='ease-in-sine'
      data-aos-duration='600'
    >
      <nav className='navbar navbar-expand-lg'>
        <div className='mt-1'>
          <h5 className='text-uppercase'>chisom</h5>
        </div>
        <div className='navv'>
          <Link
            className='linnk'
            to='About'
            smooth={true}
            duration='2000'
          >
            About Me
          </Link>
          <Link
            className='linnk p-4'
            to='Projects'
            smooth={true}
            duration='2000'
          >
            Projects
          </Link>

          <Link className='linnk' to='Contact' smooth={true} duration='2000'>
            Contact Me
          </Link>
        </div>
        <button
          className='navbar-toggler buttonn'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars iccon'></i>
        </button>
        <div className='collapse navbar-collapse nav-nth' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link linnk'
                to='About'
                smooth={true}
                duration='2000'
              >
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link linnk'
                to='Projects'
                smooth={true}
                duration='2000'
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link linnk'
                to='Contact'
                smooth={true}
                duration='2000'
              >
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
