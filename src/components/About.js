import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { IoLogoHtml5 } from 'react-icons/io'
import { IoLogoCss3 } from 'react-icons/io'
import { DiBootstrap } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMaterialui } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'
import twentythird from '../assets/twentythird.jpg'
const About = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='p-4 About mt-n4'>
      <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <h3 className='text-capitalize prj'>about me</h3>
      </div>
      <section className='mt-4 sec-two'>
        <div
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='600'
          className='aboutimg'
        >
          <img src={twentythird} alt='' />
        </div>
        <div
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='600'
        >
          <p className='mt-4 div-p'>
            Chukwuma Chisom is my name. I'm a huge fan of all things
            technological. I'm astounded by technological solutions. I'm an
            enthusiastic front-end web developer. I create pixel-perfect
            designs, ensure that I am meeting my clients' needs and develop
            highly responsive websites. I enjoy watching vlogs when I'm not
            coding as well as reading about a country's history.
          </p>
        </div>
        <div
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='600'
          className='aboutimg-one'
        >
          <img src={twentythird} alt='' />
        </div>
      </section>
      <section>
        <div className='text-capitalize prj mt-md-5'>
          <h3>tech stack</h3>
        </div>
        <section className='griid mt-3 justify-content-between'>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='600'
          >
            <IoLogoHtml5 />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='500'
          >
            <IoLogoCss3 />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='400'
          >
            <DiBootstrap />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='300'
          >
            <SiJavascript />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='200'
          >
            <RiReactjsLine />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='200'
          >
            <FaPython />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='200'
          >
            <SiDjango />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='100'
          >
            <SiMaterialui />
          </div>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='100'
          >
            <SiTailwindcss />
          </div>
        </section>
      </section>
    </div>
  )
}

export default About
