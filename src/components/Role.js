import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Role = () => {
   useEffect(() => {
     Aos.init()
   }, [])
  return (
    <div
      className='mt-5 p-4'
      data-aos='zoom-in-up'
      data-aos-offset='200'
      data-aos-easing='ease-in-sine'
      data-aos-duration='600'
    >
      <section>
        <div>
          <h4 className='text-capitalize prj'>The need for me</h4>
        </div>
        <div>
          <div className='mt-4 texts'>
            <h5 className='text-capitalize'>design</h5>
            <p className='role-p'>
              To translate ideas into pixel-perfect designs, I use CSS
              frameworks such as bootstrap and material ui. I'm familiar with
              Figma, which is a fantastic tool for creating stunning websites. I
              also use the technologies mentioned above to create highly
              responsive websites.
            </p>
          </div>
          <div className='mt-4 texts'>
            <h5 className='text-capitalize'>development</h5>
            <p className='role-p'>
              I use React, which is a JavaScript library for creating user
              interfaces. I use react because it makes it simple to create
              interactive user interfaces. Design simple views for each state in
              your application, and React will efficiently update and render
              only the right components when your data changes. With react, an
              app is typically built as a single page application, which means
              that the application code (HTML, CSS, JavaScript) is only loaded
              once.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Role
