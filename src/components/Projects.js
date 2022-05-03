import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import rest from '../assets/restcountries.jpg'
import ecommerce from '../assets/Ecommerce.jpg'
import rockps from '../assets/RockPaperScissors.jpg'
import advicegapp from '../assets/AdviceGApp.jpg'
import bookmark from '../assets/Bookmark.jpg'

const Projects = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='p-4 Projects'>
      <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <h3 className='text-capitalize prj'>projects</h3>
      </div>
      <section
        className='sec-one mt-4'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='800'
      >
        <div className='image-one'>
          <img src={rest} alt='Rest Countries API' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name'>
            REST Countries API with color theme switcher
          </h4>
          <p className='mt-4 div-p'>
            This project integrates with the REST Countries API to pull country
            data. It enables users to see all countries from the API on the
            homepage, search for a country using an input field, filter
            countries by region, click on a country to see more detailed
            information on a separate page, click through to the border
            countries on the detail page and toggle the color scheme between
            light and dark mode. It was built with ReactJs and Bootstrap.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://restcountriesappapi.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img src={rest} alt='Rest Countries API' />
        </div>
      </section>
      <section
        className='sec-one mt-5 mt-md-4'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={ecommerce} alt='Ecommerce single page' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name'>E-commerce product page</h4>
          <p className='mt-4 div-p'>
            This project enables users to view the optimal layout for the site
            depending on their device's screen size, see hover states for all
            interactive elements on the page, open a lightbox gallery by
            clicking on the large product image, switch the large product image
            by clicking on the small thumbnail images, add items to the cart,
            view the cart and remove items from it. It was built with ReactJs and Bootstrap.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://e-commerceproductapp.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img src={ecommerce} alt='Ecommerce single page' />
        </div>
      </section>
      <section
        className='sec-one mt-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={rockps} alt='Rock Paper Scissors' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name'>Rock, Paper, Scissors game</h4>
          <p className='mt-4 div-p'>
            Remember the Rock Paper Scissors game we played with our hands as
            children? This is an implementation of that game. This makes it more
            fun to play. It enables players to view the optimal layout for the
            game depending on their device's screen size, play Rock, Paper,
            Scissors against the computer. It was built with ReactJs.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://paperrockscissors.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img src={rockps} alt='Rock Paper Scissors' />
        </div>
      </section>
      <section
        className='sec-one mt-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={advicegapp} alt='Advice generator app' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name'>Advice generator app</h4>
          <p className='mt-4 div-p'>
            This project integrates with the Advice Slip API to pull advice
            data. It enables users to see hover states for all interactive
            elements on the page and generate a new piece of advice by clicking
            the dice icon. It was built with ReactJs.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://anadvice-generator-app.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img src={advicegapp} alt='Advice generator app' />
        </div>
      </section>
      <section
        className='sec-one mt-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={bookmark} alt='Bookmark landing page' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name'>Bookmark landing page</h4>
          <p className='mt-4 div-p'>
            This project is a landing page that enables users to view the
            optimal layout for the site depending on their device's screen size. It was built with HTML, CSS and Bootstrap.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://bookmark-frontendmentor-challenge-solution.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img src={bookmark} alt='Bookmark landing page' />
        </div>
      </section>
    </div>
  )
}

export default Projects
