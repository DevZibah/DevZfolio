import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import rest from '../assets/restcountries.jpg'
import ecommerce from '../assets/Ecommerce.jpg'
import aidryse from '../assets/aidryse.png'
import rockps from '../assets/RockPaperScissors.jpg'
import TicTacToe from '../assets/TicTacToe.png'
import recycler from '../assets/recycler.png'
import tita from '../assets/tita.png'
import joblist from '../assets/joblist.jpg'
import passwordgenapp from '../assets/passwordgenapp.png'
import bscroommate from '../assets/bscroommate.png'

const Projects = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='p-4 Projects prj-one'>
      <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <h3 className='text-capitalize prj text-center'>projects</h3>
      </div>
      <section
        className='sec-one mt-5 mt-md-4 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={ecommerce} alt='Ecommerce single page' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>E-commerce product page</h4>
          <p className='mt-4 div-p'>
            This project enables users to view the optimal layout for the site
            depending on their device's screen size, see hover states for all
            interactive elements on the page, open a lightbox gallery by
            clicking on the large product image, switch the large product image
            by clicking on the small thumbnail images, add items to the cart,
            view the cart and remove items from it. It was built with ReactJs
            and Bootstrap.
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
        className='sec-one mt-5 mt-md-4 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one mt-5'>
          <img src={aidryse} alt='aidryse' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>Aidryse</h4>
          <p className='mt-4 div-p'>
            Aidryse is a web-based open source platform for accessing audio
            information on Gender Based Violence. In collaboration with South
            Saharan Social Development Organization (SSDO), we focused our work
            on a section of their many projects - Gender-based Violence.
            Understanding that GBV has become a prevalent social ill, we decided
            to create a platform that educates and shares stories of
            Gender-based violence in audio format.The technologies used in this
            project are: ReactJs, Bootstrap, Figma, EmailJs, Cloudinary, and
            MailTo.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://aidryse.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img className='imagee-onee' src={aidryse} alt='aidryse' />
        </div>
      </section>
      <section
        className='sec-one mt-5 mt-md-4 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={recycler} alt='recycler' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>Recycler</h4>
          <p className='mt-4 div-p'>
            Recycler is a web application built to help achieve Sustainable
            Development Goals 12 & 13, enabling people to recycle their
            recycleable wastes. We act as a middleman between companies that
            make use of or recycle these wastes and individuals and businesses
            with wastes to recycle. Using our website, users can can sign up and
            locate recycling partners closest to their location through Google
            Maps. Our agents can then pick up these recyclable waste at
            different collection centres and deliver to the factory.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a href='http://recycler.dev/' className='text-capitalize linkk'>
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img className='imagee-onee' src={recycler} alt='recycler' />
        </div>
      </section>
      <section
        className='sec-one mt-5 mt-md-4 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={tita} alt='tita' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>TITA</h4>
          <p className='mt-4 div-p'>
            TITA is a decentralised micro-lending platform that was developed to
            help startups, investors, and individuals interested in getting a
            soft loan using Blockchain Technology. TITA platform will enable
            entrepreneurs and startups in building their business success with
            just a minute of interest. TITA Micro-lending plsatform is a
            secured, transparent, transparent, inclusive, tokenized platform
            built on highly effective and industry standards Blockchain
            Technology. The platform uses this Blockchain Technology to connect
            borrowers and lenders together with the purpose to ease fears of the
            lender as well as the borrowers.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://github.com/DevZibah/Tita.git'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img className='imagee-onee' src={tita} alt='tita' />
        </div>
      </section>

      <section
        className='sec-one mt-4 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='800'
      >
        <div className='image-one'>
          <img src={rest} alt='Rest Countries API' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>
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
        className='sec-one mt-5 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={rockps} alt='Rock Paper Scissors' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>
            Rock, Paper, Scissors game
          </h4>
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
        className='sec-one mt-5 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={TicTacToe} alt='TicTacToe' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>Tic Tac Toe game</h4>
          <p className='mt-4 div-p'>
            Remember the tic tac toe game, also known as X and O, that we used
            to play on paper as kids? This is a recreation of the game. This
            makes it more enjoyable to play. It allows players to select either
            X or O and play against each other or the computer. TypeScript was
            used to create it.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://tic-tac-toegamme.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img className='imagee-onee' src={TicTacToe} alt='TicTacToe' />
        </div>
      </section>

      <section
        className='sec-one mt-5 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={bscroommate} alt='a roommate recommendation system' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-capitalize text-center'>
            a roommate recommendation system
          </h4>
          <p className='mt-4 div-p'>
            Users can sign up for this project, search for roommates, see
            recommended roommates, and view all users who have registered on
            this application. This app suggests roommates to users based on the
            information they entered when signing up for the app. ReactJs and
            Django were used to create this project.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://bscroommate.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img
            className='imagee-onee'
            src={bscroommate}
            alt='a roommate recommendation system'
          />
        </div>
      </section>

      <section
        className='sec-one mt-5 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={joblist} alt='Job listings with filtering' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>
            Job listings with filtering
          </h4>
          <p className='mt-4 div-p'>
            This project filters job listings based on the categories selected.
            This project was created using React.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://joblistings-frontend-mentor-challenge.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img src={joblist} alt='Job listings with filtering' />
        </div>
      </section>
      <section
        className='sec-one mt-5 mt-lg-5'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='image-one'>
          <img src={passwordgenapp} alt='Password Generator App' />
        </div>
        <div className='mt-5'>
          <h4 className='project-name text-center'>Password Generator App</h4>
          <p className='mt-4 div-p'>
            This projects generates a password based on the selected inclusion
            options, Copies the generated password to the computer's clipboard,
            sees a strength rating for their generated password, and views the
            optimal layout for the interface depending on their device's screen
            size. This project was created using React and tailwindCSS.
          </p>
          <div className='mt-4 buttn butn p-3'>
            <a
              href='https://passwordgeneratorwebapp.netlify.app/'
              className='text-capitalize linkk'
            >
              see this project
            </a>
          </div>
        </div>
        <div className='imagee'>
          <img
            className='imagee-onee'
            src={passwordgenapp}
            alt='Password Generator App'
          />
        </div>
      </section>
    </div>
  )
}

export default Projects
