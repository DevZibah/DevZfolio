import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { SiFrontendmentor, SiHashnode } from 'react-icons/si'

const Intro = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div
      className='intro p-3 mt-4'
      data-aos='fade-up'
      data-aos-offset='200'
      data-aos-easing='ease-in-sine'
      data-aos-duration='600'
    >
      <h2>Hi, I'm Chisom, Front-end Web Developer and Technical Writer</h2>
      <p className='mt-3'>
        A front-end developer specializing in the design, development, and
        launch of customized, highly responsive websites.
      </p>
      <div className='mt-4 buttn p-3'>
        <Link
          to='Projects'
          smooth={true}
          duration={2000}
          className='text-capitalize linkk'
        >
          see my work
        </Link>
      </div>
      <div className='icons mt-4 mb-3'>
        <a href='https://github.com/DevZibah' className='linnk1 p-2'>
          <BsGithub />
        </a>
        <a
          href='https://www.frontendmentor.io/profile/DevZibah'
          className='linnk1 p-2'
        >
          <SiFrontendmentor />
        </a>
        <a href='https://devzibah.hashnode.dev/' className='linnk1 p-2'>
          <SiHashnode />
        </a>
        <a
          href='https://www.linkedin.com/in/chisom-chukwuma-b2a048197/'
          className='linnk1 p-2'
        >
          <BsLinkedin />
        </a>
        <a href='https://twitter.com/soh_mmee' className='linnk1 p-2'>
          <BsTwitter />
        </a>
      </div>
    </div>
  )
}

export default Intro
