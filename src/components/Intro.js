import React from 'react'
import { Link } from 'react-scroll'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { SiFrontendmentor } from 'react-icons/si'

const Intro = () => {
  return (
    <div className='intro p-3 mt-4'>
      <h2>Hi, I'm Chisom, Front-end Web Developer</h2>
      <p className='mt-3'>
        A front-end developer specializing in the design, development, and
        launch of customized, highly responsive websites.
      </p>
      <div className='mt-4 buttn p-3'>
        <Link to='Projects' smooth={true} duration={2000} className='text-capitalize linkk'>
          see my work
        </Link>
      </div>
      <div className='icons mt-4 mb-3'>
        <a
          href='https://www.linkedin.com/in/chisom-chukwuma-b2a048197/'
          className='linnk1 p-2'
        >
          <BsLinkedin />
        </a>
        <a href='https://twitter.com/soh_mmee' className='linnk1 p-2'>
          <BsTwitter />
        </a>
        <a href='https://github.com/DevZibah' className='linnk1 p-2'>
          <BsGithub />
        </a>
        <a
          href='https://www.frontendmentor.io/profile/DevZibah'
          className='linnk1 p-2'
        >
          <SiFrontendmentor />
        </a>
      </div>
    </div>
  )
}

export default Intro
